import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { EditorialHeading } from '../ui/EditorialHeading'

export function MethodSection() {
  const { method } = demoContent
  return (
    <section id="metodo" className="editorial method" aria-labelledby="method-title" tabIndex={-1}>
      <Container>
        <EditorialHeading id="method-title" content={method} />
        <ol className="method-steps">
          {method.steps.map(step => <li key={step.number} data-editorial>
            <span className="method-number" aria-hidden="true">{step.number}</span>
            <div><h3>{step.title}</h3><p>{step.description}</p></div>
          </li>)}
        </ol>
      </Container>
    </section>
  )
}
