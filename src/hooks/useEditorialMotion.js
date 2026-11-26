import { useLayoutEffect } from 'react'

export function useEditorialMotion(mainRef) {
  useLayoutEffect(() => {
    const main = mainRef.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hero = main.querySelector('.hero')
    const header = document.querySelector('.site-header')
    const pending = new Set(main.querySelectorAll('[data-editorial]'))
    let observer

    function resolve(target, animate, currentObserver = observer) {
      pending.delete(target)
      currentObserver?.unobserve(target)
      if (animate) target.classList.replace('is-awaiting', 'is-revealing')
      else target.classList.remove('is-awaiting')
      if (!pending.size) currentObserver?.disconnect()
    }

    function observe() {
      observer?.disconnect()
      if (preference.matches) {
        hero.classList.remove('is-entering')
        main.querySelectorAll('.is-awaiting, .is-revealing').forEach(el => el.classList.remove('is-awaiting', 'is-revealing'))
        return
      }

      if (!('IntersectionObserver' in window) || !pending.size) return
      const viewport = document.documentElement.clientHeight
      const sticky = Math.min(Math.ceil(header?.getBoundingClientRect().height ?? 0), viewport - 1)
      const available = viewport - sticky
      const readingEnd = sticky + Math.round(available * .8)
      const targets = [...pending].map(target => {
        const height = target.getBoundingClientRect().height
        // For tall panels the visibility requirement is capped by usable viewport height.
        const pixels = Math.min(height * .2, available * .16)
        return [target, { pixels, ratio: height ? pixels / height : 0 }]
      })
      const activation = new Map(targets)
      observer = new IntersectionObserver((entries, currentObserver) => {
        if (currentObserver !== observer || preference.matches) return
        for (const entry of entries) {
          const target = entry.target
          if (!pending.has(target)) continue
          const { top, bottom } = entry.boundingClientRect
          if (bottom <= sticky || top < sticky + available * .19 || target.matches(':focus-within')) {
            // Jumped past it, landed directly on it, or already reading it.
            resolve(target, false, currentObserver)
          } else if (entry.isIntersecting && entry.intersectionRect.height + .5 >= activation.get(target).pixels) {
            resolve(target, true, currentObserver)
          }
        }
      }, {
        rootMargin: `-${sticky}px 0px -${viewport - readingEnd}px 0px`,
        threshold: [0, ...new Set(targets.map(([, gate]) => gate.ratio).filter(Boolean))],
      })

      for (const [target] of targets) {
        // Set the first frame only offscreen to avoid re-masking already visible content.
        if (target.getBoundingClientRect().top >= viewport) target.classList.add('is-awaiting')
        observer.observe(target)
      }
    }

    function showFocused(event) {
      const target = event.target.closest('[data-editorial]')
      if (pending.has(target)) resolve(target, false)
    }

    const navigation = performance.getEntriesByType('navigation')[0]
    if (navigation?.type === 'reload') window.scrollTo({ top: 0, behavior: 'instant' })
    const startsAtHero = !window.location.hash && window.scrollY < 40 && navigation?.type !== 'back_forward'
    if (window.location.hash && navigation?.type === 'navigate') {
      const target = [...main.querySelectorAll('[id]')].find(el => '#' + el.id === window.location.hash)
      target?.scrollIntoView({ block: 'start', behavior: 'instant' })
    }
    if (!preference.matches && startsAtHero) hero.classList.add('is-entering')

    observe()
    window.addEventListener('resize', observe)
    main.addEventListener('focusin', showFocused)
    preference.addEventListener('change', observe)
    return () => {
      window.removeEventListener('resize', observe)
      main.removeEventListener('focusin', showFocused)
      preference.removeEventListener('change', observe)
      observer?.disconnect()
      hero.classList.remove('is-entering')
      main.querySelectorAll('.is-awaiting, .is-revealing').forEach(el => el.classList.remove('is-awaiting', 'is-revealing'))
    }
  }, [mainRef])
}
