import heroImage from '../../assets/images/hero.webp'
import heroArrow from '../../assets/icons/arrow-hero.svg'
import arrowSmall from '../../assets/icons/arrow-small.svg'
import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { SessionButton } from '../ui/SessionButton'
import { Button } from '../ui/Button'

export function HeroSection({ onSession }) {
  const { hero } = demoContent
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <Container className="hero-layout">
        <div className="hero-copy">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 id="hero-title">
            {hero.title.map((line, index) => <span key={line}>{index === 1 ? <em>{line}</em> : line}{' '}</span>)}
          </h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <SessionButton label={hero.primaryCta.label} arrow={heroArrow} onSession={event => onSession(event.currentTarget)} />
            <Button variant="ghost" className="hero-secondary" href={hero.secondaryCta.href}>
              <span>{hero.secondaryCta.label}</span><img src={arrowSmall} alt="" />
            </Button>
          </div>
        </div>
        <img className="hero-photo photo" src={heroImage} width="1536" height="1024"
          alt="Atleta haciendo peso muerto con barra en el gimnasio" fetchPriority="high" />
        <ul className="hero-benefits">
          {hero.benefits.map((item, index) => {
            const breakAt = index === 2 ? ' RESULTADOS' : ' '
            const splitAt = item.indexOf(breakAt)
            return <li key={item}>{item.slice(0, splitAt)}<span className="benefit-wrap">{item.slice(splitAt)}</span></li>
          })}
        </ul>
      </Container>
    </section>
  )
}
