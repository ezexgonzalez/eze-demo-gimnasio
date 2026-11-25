import fuerza from '../../assets/images/entrenamiento-fuerza.webp'
import funcional from '../../assets/images/entrenamiento-funcional.webp'
import acondicionamiento from '../../assets/images/entrenamiento-acondicionamiento.webp'
import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { EditorialHeading } from '../ui/EditorialHeading'

const photos = [[fuerza, 1536, 1024], [funcional, 1086, 1448], [acondicionamiento, 1122, 1402]]

export function TrainingSection() {
  const { training } = demoContent
  return (
    <section id="entrenamiento" className="editorial training" aria-labelledby="training-title" tabIndex={-1}>
      <Container>
        <EditorialHeading id="training-title" content={training} />
        <ol className="training-grid">
          {training.items.map((item, index) => {
            const [src, width, height] = photos[index]
            return <li key={item.title}>
              <img className="training-photo photo" src={src} alt={item.imageAlt} width={width} height={height} loading="lazy" decoding="async" />
              <div className="training-caption">
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </div>
            </li>
          })}
        </ol>
      </Container>
    </section>
  )
}
