import featured from '../../assets/images/coach-principal.webp'
import micaela from '../../assets/images/coach2.webp'
import santiago from '../../assets/images/coach1.webp'
import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { EditorialHeading } from '../ui/EditorialHeading'

const supportingPhotos = [micaela, santiago]

function CoachProfile({ person, photo, className }) {
  return (
    <article className={className} data-editorial>
      <img className="coach-photo photo" src={photo} alt={person.imageAlt} width="1536" height="1024" loading="lazy" decoding="async" />
      <div className="coach-profile">
        <p className="coach-role">{person.role}</p>
        <h3>{person.name}</h3>
        <p>{person.description}</p>
      </div>
    </article>
  )
}

export function CoachesSection() {
  const { coaches } = demoContent
  return (
    <section id="coaches" className="editorial coaches" aria-labelledby="coaches-title" tabIndex={-1}>
      <Container>
        <EditorialHeading id="coaches-title" content={coaches} />
        <div className="coaches-grid">
          <CoachProfile person={coaches.featured} photo={featured} className="coach-featured" />
          <div className="coaches-supporting">
            {coaches.supporting.map((person, index) => <CoachProfile key={person.name} person={person} photo={supportingPhotos[index]} className="coach-supporting" />)}
          </div>
        </div>
      </Container>
    </section>
  )
}
