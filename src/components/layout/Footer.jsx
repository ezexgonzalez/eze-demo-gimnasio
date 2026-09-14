import { EzeWordmark } from '../brand/EzeWordmark'
import { Container } from '../ui/Container'
import { siteConfig } from '../../data/siteConfig'


function ContactItem({ children, href, external = false }) {
  const content = (
    <span className="flex gap-4">
      <span aria-hidden="true" className="mt-2 h-0.5 w-5 shrink-0 bg-[var(--theme-accent)]" />
      <span>{children}</span>
    </span>
  )

  return href ? (
    <a
      className="transition-colors hover:text-[var(--theme-text)] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)]"
      href={href}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {content}
    </a>
  ) : (
    content
  )
}

export function Footer() {
  const { businessName, contact, navigation } = siteConfig

  return (
    <footer className="border-t border-[var(--theme-border)] bg-[var(--theme-elevated)] px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <Container className="max-w-[90rem] px-0">
        <div className="lg:grid lg:grid-cols-[1.08fr_0.95fr_1fr]">
          <div>
            <a
              aria-label={`${businessName}, inicio`}
              className="inline-flex text-[2rem] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)]"
              href="#inicio"
            >
              <EzeWordmark />
            </a>
            <p className="mt-7 max-w-[15rem] text-base leading-[1.8] text-[var(--theme-secondary)]">
              Fuerza con método.
              <br />
              Entrenamiento con propósito.
            </p>
          </div>

          <nav
            aria-label="Navegación del pie de página"
            className="mt-8 border-t border-[var(--theme-border)] pt-8 sm:grid sm:grid-cols-2 sm:gap-x-8 lg:mt-0 lg:block lg:border-l lg:border-t-0 lg:px-16 lg:pt-2"
          >
            {navigation.links.map((link) => (
              <a
                className="block py-2.5 text-[0.95rem] text-[var(--theme-text)] transition-colors hover:text-[var(--theme-accent)] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)] lg:py-3"
                href={link.href}
                key={link.href}
              >
                {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
              </a>
            ))}
          </nav>

          <div className="mt-8 border-t border-[var(--theme-border)] pt-8 text-[var(--theme-secondary)] lg:mt-0 lg:border-l lg:border-t-0 lg:px-12 lg:pt-2">
            <div className="space-y-7">
              <ContactItem external href={contact.whatsapp.href}>
                <span className="block text-[var(--theme-text)]">WhatsApp</span>
                <span className="mt-1 block">{contact.whatsapp.display}</span>
              </ContactItem>
              <ContactItem external href="https://instagram.com/ezestudio">
                <span className="block text-[var(--theme-text)]">Instagram</span>
                <span className="mt-1 block">{contact.instagram}</span>
              </ContactItem>
              <ContactItem>
                <span className="block text-[var(--theme-text)]">{contact.location}</span>
              </ContactItem>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--theme-border)] pt-7 sm:flex sm:items-center sm:justify-between lg:mt-16">
          <p className="text-sm text-[var(--theme-muted)]">© 2026 {businessName}</p>
          <div className="mt-5 flex items-center gap-5 text-sm text-[var(--theme-text)] sm:mt-0">
            <span>Privacidad</span>
            <span aria-hidden="true" className="h-7 w-px bg-[var(--theme-border)]" />
            <span>Términos y condiciones</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
