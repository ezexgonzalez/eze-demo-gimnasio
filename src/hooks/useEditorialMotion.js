import { useEffect } from 'react'

export function useEditorialMotion(mainRef) {
  useEffect(() => {
    const main = mainRef.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hero = main.querySelector('.hero')
    const pending = new Set(main.querySelectorAll('[data-editorial]'))
    let observer

    function enableMotion() {
      observer?.disconnect()
      if (preference.matches) {
        hero.classList.remove('is-entering')
        main.querySelectorAll('.is-revealing').forEach(element => element.classList.remove('is-revealing'))
        return
      }

      if (!('IntersectionObserver' in window)) return
      observer = new IntersectionObserver((entries, currentObserver) => {
        if (currentObserver !== observer || preference.matches) return
        for (const entry of entries) {
          const target = entry.target
          const top = entry.boundingClientRect.top
          const bottom = entry.rootBounds?.bottom ?? window.innerHeight
          if (!entry.isIntersecting && top >= bottom) continue

          pending.delete(target)
          currentObserver.unobserve(target)
          // A restored scroll position or jump into a section shouldn't hide visible content.
          if (entry.isIntersecting && top > bottom * .44 && !target.matches(':focus-within')) {
            target.classList.add('is-revealing')
          }
        }
      }, { rootMargin: '0px 0px -24px 0px' })

      pending.forEach(target => observer.observe(target))
    }

    const navigation = performance.getEntriesByType('navigation')[0]
    const startsAtHero = !window.location.hash && window.scrollY < 40 && navigation?.type !== 'back_forward'
    if (!preference.matches && startsAtHero) hero.classList.add('is-entering')

    enableMotion()
    preference.addEventListener('change', enableMotion)
    return () => {
      preference.removeEventListener('change', enableMotion)
      observer?.disconnect()
      hero.classList.remove('is-entering')
    }
  }, [mainRef])
}
