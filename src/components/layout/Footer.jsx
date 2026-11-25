import { EwsWordmark } from '../brand/EwsWordmark'
import { Container } from '../ui/Container'
import { siteConfig } from '../../data/siteConfig'

export function Footer() {
  const { businessName, demo, navigation } = siteConfig
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" aria-label="EWS, inicio"><EwsWordmark /></a>
            <p>Fuerza con método.<br />Entrenamiento con propósito.</p>
          </div>
          <nav className="footer-navigation" aria-label="Navegación del pie de página">
            <p className="footer-label">NAVEGACIÓN</p>
            <ul>{navigation.links.map(({ label, href }) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
          </nav>
          <div className="footer-contact">
            <p className="footer-label">CONTACTO</p>
            <dl><div><dt>WhatsApp</dt><dd>{demo.contact.whatsapp}</dd></div>
              <div><dt>Instagram</dt><dd>{demo.contact.instagram}</dd></div></dl>
            <p>{demo.contact.location}</p>
          </div>
        </div>
        <div className="footer-bottom"><p>© 2026 {businessName}</p><p>{demo.note}</p></div>
      </Container>
    </footer>
  )
}
