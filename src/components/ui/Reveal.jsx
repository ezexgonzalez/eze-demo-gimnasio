import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', variant = 'up' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    document.documentElement.classList.add('motion-ready')
    setIsReady(true)

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setIsVisible(true)
      observer.unobserve(entry.target)
    }, { threshold: 0.16 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={['reveal', `reveal--${variant}`, isReady ? 'reveal--ready' : '', isVisible ? 'reveal--visible' : '', className].filter(Boolean).join(' ')}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
