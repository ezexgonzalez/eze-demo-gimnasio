import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '../../data/siteConfig'
import { EzeWordmark } from '../brand/EzeWordmark'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { ArrowRightIcon, MenuIcon } from '../ui/icons'

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const menuRef = useRef(null)
  const { links, cta } = siteConfig.navigation
  const hasNavigation = links.length > 0 || Boolean(cta)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)

    if (!isOpen) {
      return () => document.body.classList.remove('menu-open')
    }

    const menuControls = Array.from(
      menuRef.current?.querySelectorAll(focusableSelector) ?? [],
    )
    const focusableControls = [menuButtonRef.current, ...menuControls].filter(
      Boolean,
    )

    menuControls[0]?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || focusableControls.length === 0) return

      const firstControl = focusableControls[0]
      const lastControl = focusableControls.at(-1)

      if (event.shiftKey && document.activeElement === firstControl) {
        event.preventDefault()
        lastControl.focus()
      } else if (!event.shiftKey && document.activeElement === lastControl) {
        event.preventDefault()
        firstControl.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-[var(--theme-text)]">
      <Container
        as="nav"
        aria-label="Navegación principal"
        className="grid h-16 max-w-[90rem] grid-cols-[1fr_auto] items-center px-4 sm:px-6 lg:h-[5.25rem] lg:grid-cols-[1fr_auto_1fr] lg:px-12"
      >
        <a
          aria-label={`${siteConfig.businessName}, inicio`}
          className="text-xl focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)] lg:text-2xl"
          href="#inicio"
          onClick={closeMenu}
        >
          <EzeWordmark />
        </a>

        {hasNavigation ? (
          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                className="text-[0.68rem] font-bold tracking-[0.11em] text-[var(--theme-secondary)] transition-colors hover:text-[var(--theme-text)] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)]"
                href={link.href}
                key={`${link.href}-${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        {cta ? (
          <div className="hidden items-center justify-self-end lg:flex">
            <span aria-hidden="true" className="mr-3 flex h-12 items-center gap-1.5">
              <span className="h-7 w-0.5 bg-[var(--theme-accent)]" />
              <span className="h-12 w-0.5 bg-[var(--theme-accent)]" />
            </span>
            <Button
              className="h-12 gap-2.5 px-5 text-[0.68rem] tracking-[0.1em]"
              external={cta.external}
              href={cta.href}
            >
              <span>{cta.label}</span>
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>
        ) : null}

        {hasNavigation ? (
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="flex size-11 items-center justify-center justify-self-end rounded-[var(--theme-radius)] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)] lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            ref={menuButtonRef}
            type="button"
          >
            <MenuIcon className="size-6" open={isOpen} />
          </button>
        ) : null}
      </Container>

      {hasNavigation ? (
        <div
          className={[
            'absolute inset-x-0 top-full border-t border-[var(--theme-border)] bg-[var(--theme-background)] lg:hidden',
            isOpen ? 'block' : 'hidden',
          ].join(' ')}
          id="mobile-navigation"
          ref={menuRef}
        >
          <Container className="flex min-h-[calc(100svh-4rem)] flex-col items-start gap-5 py-8">
            {links.map((link) => (
              <a
                className="min-h-11 py-2 text-lg font-bold tracking-[0.08em] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)]"
                href={link.href}
                key={`${link.href}-${link.label}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            {cta ? (
              <Button
                className="mt-2 gap-2.5"
                external={cta.external}
                href={cta.href}
                onClick={closeMenu}
              >
                <span>{cta.label}</span>
                <ArrowRightIcon className="size-4" />
              </Button>
            ) : null}
          </Container>
        </div>
      ) : null}
    </header>
  )
}
