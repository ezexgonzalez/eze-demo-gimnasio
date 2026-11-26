import { useEffect, useRef, useState } from 'react'
import { navigateToSection } from '../../utils/sectionNavigation'
import { siteConfig } from '../../data/siteConfig'
import { EwsWordmark } from '../brand/EwsWordmark'
import { Container } from '../ui/Container'
import { SessionButton } from '../ui/SessionButton'
import menuIcon from '../../assets/icons/menu.svg'
import closeIcon from '../../assets/icons/close.svg'
import arrowIcon from '../../assets/icons/arrow-coral.svg'
import headerArrow from '../../assets/icons/arrow-small.svg'

export function Navbar({ onSession }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const dialog = useRef(null)
  const menuButton = useRef(null)
  const closeButton = useRef(null)
  const brand = useRef(null)
  const { links, cta } = siteConfig.navigation

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = links.map(({ href }) => document.getElementById(href.slice(1))).filter(Boolean)
    let observer
    function observeReadingLine() {
      observer?.disconnect()
      // IntersectionObserver resolves percentage margins against width, even vertically.
      const top = Math.round(window.innerHeight * .28)
      const bottom = window.innerHeight - top - 1
      observer = new IntersectionObserver(entries => {
        const current = entries.find(entry => entry.isIntersecting)
        if (current) setActive('#' + current.target.id)
        else setActive(previous => entries.some(entry => '#' + entry.target.id === previous) ? '' : previous)
      }, { rootMargin: `-${top}px 0px -${bottom}px 0px` })
      sections.forEach(section => observer.observe(section))
    }
    observeReadingLine()
    window.addEventListener('resize', observeReadingLine)
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', observeReadingLine)
    }
  }, [links])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeAtDesktop = () => {
      if (desktop.matches && dialog.current?.open) {
        dialog.current.close()
        brand.current?.focus()
      }
    }
    desktop.addEventListener('change', closeAtDesktop)
    return () => desktop.removeEventListener('change', closeAtDesktop)
  }, [])

  function showMenu() {
    dialog.current.showModal()
    closeButton.current.focus()
    setOpen(true)
  }

  function goToSection(event) {
    navigateToSection(event, () => dialog.current.close())
  }

  return (
    <header className="site-header">
      <Container className="header-inner">
        <a href="#inicio" ref={brand} onClick={event => navigateToSection(event)} aria-label="EWS, inicio"><EwsWordmark /></a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(({ label, href }) => <a key={href} href={href} aria-current={active === href ? 'location' : undefined} onClick={event => navigateToSection(event)}>{label}</a>)}
        </nav>
        <SessionButton variant="secondary" className="header-session" label={cta.label} arrow={headerArrow} onSession={event => onSession(event.currentTarget)} />
        <button type="button" className="menu-control" ref={menuButton} aria-label="Abrir menú" aria-haspopup="dialog"
          aria-controls="mobile-navigation" aria-expanded={open} onClick={showMenu}><img src={menuIcon} alt="" /></button>
      </Container>
      <dialog className="mobile-menu" id="mobile-navigation" ref={dialog} aria-label="Menú principal" onClose={() => setOpen(false)}>
        <Container className="mobile-menu-header">
          <a href="#inicio" onClick={goToSection} aria-label="EWS, inicio"><EwsWordmark /></a>
          <button type="button" className="menu-control" ref={closeButton} aria-label="Cerrar menú" onClick={() => dialog.current.close()}><img src={closeIcon} alt="" /></button>
        </Container>
        <Container as="nav" className="mobile-menu-content" aria-label="Navegación móvil">
          {links.map(({ label, href }) => <a key={href} href={href} aria-current={active === href ? 'location' : undefined}
            onClick={goToSection}>{label}<img src={arrowIcon} alt="" /></a>)}
          <SessionButton label={cta.label} onSession={() => { dialog.current.close(); onSession(menuButton.current) }} />
        </Container>
      </dialog>
    </header>
  )
}
