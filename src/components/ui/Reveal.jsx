import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', variant = 'up' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || !('IntersectionObserver' in window)
  })

  useEffect(() => {
    const element = ref.current
    if (!element || isVisible) return undefined

    document.documentElement.classList.add('motion-ready')

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setIsVisible(true)
      observer.unobserve(entry.target)
    }, { threshold: 0.16 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <Tag
      ref={ref}
      className={['reveal', `reveal--${variant}`, 'reveal--ready', isVisible ? 'reveal--visible' : '', className].filter(Boolean).join(' ')}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
