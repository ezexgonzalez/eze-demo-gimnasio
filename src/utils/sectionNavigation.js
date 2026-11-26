// Keep real anchor hrefs for modified clicks, copying links and native fallbacks.
export function navigateToSection(event, beforeScroll) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
      event.shiftKey || event.altKey) return

  const href = event.currentTarget.getAttribute('href')
  if (!href?.startsWith('#')) return
  const target = document.getElementById(href.slice(1))
  if (!target) return

  event.preventDefault()
  beforeScroll?.()
  if (window.location.hash) {
    const { pathname, search } = window.location
    window.history.replaceState(window.history.state, '', pathname + search)
  }

  target.focus({ preventScroll: true })
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
  if (target.id === 'inicio') window.scrollTo({ top: 0, behavior })
  else target.scrollIntoView({ block: 'start', behavior })
}
