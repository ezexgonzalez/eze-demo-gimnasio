import ctaPhoto from '../../assets/images/cta-final.webp'
import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { HeadingLines } from '../ui/EditorialHeading'
import { SessionButton } from '../ui/SessionButton'

export function FinalCtaSection({ onSession }) {
  const { finalCta } = demoContent
  return (
    <section className="final-cta" aria-labelledby="final-title">
      <img className="final-photo photo" src={ctaPhoto} alt={finalCta.imageAlt} width="1672" height="941" loading="lazy" decoding="async" />
      <Container>
        <div className="final-copy">
          <Eyebrow>{finalCta.eyebrow}</Eyebrow>
          <h2 id="final-title" className="section-title"><HeadingLines lines={finalCta.title} /></h2>
          <p>{finalCta.description}</p>
          <SessionButton label={finalCta.cta.label} onSession={event => onSession(event.currentTarget)} />
        </div>
      </Container>
    </section>
  )
}
