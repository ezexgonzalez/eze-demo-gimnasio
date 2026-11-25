import { useId, useState } from 'react'
import { demoContent } from '../../data/demoContent'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'
import { Container } from '../ui/Container'
import { EditorialHeading } from '../ui/EditorialHeading'
import { SessionButton } from '../ui/SessionButton'

function PlanCard({ plan, onSession }) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const featured = plan.recommended
  const { plans } = demoContent
  const details = <ul id={id + '-details'}>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
  return (
    <article data-editorial className={featured ? 'plan-card plan-featured' : 'plan-card'} aria-labelledby={id}>
      <div className="plan-heading">
        <div>
          {featured && <p className="plan-recommended">RECOMENDADO</p>}
          <h3 id={id}>{plan.name}</h3>
          <p>{plan.frequency}</p>
        </div>
        <p className="plan-price"><strong>{plan.price}</strong><span>/mes</span></p>
      </div>
      <p className="plan-summary">{plan.description}</p>
      {!featured && <button className="plan-toggle" type="button" aria-expanded={open} aria-controls={id + '-details'}
        onClick={() => setOpen(value => !value)}>{plans.detailsLabel}<img src={open ? minus : plus} alt="" /></button>}
      <div className="plan-details" data-open={Boolean(featured || open)}>
        {featured ? details : (
          <div className="plan-collapse">
            <div className="plan-collapse-inner">{details}</div>
          </div>
        )}
        <SessionButton label={featured ? plans.cta.label : plans.alternateCta} variant={featured ? 'primary' : 'ghost'} onSession={event => onSession(event.currentTarget)} />
      </div>
    </article>
  )
}

export function PlansSection({ onSession }) {
  const { plans } = demoContent
  return (
    <section id="planes" className="editorial plans" aria-labelledby="plans-title" tabIndex={-1}>
      <Container>
        <EditorialHeading id="plans-title" content={plans} />
        <div className="plans-grid">
          {[plans.featured, ...plans.options].map(plan => <PlanCard key={plan.name} plan={plan} onSession={onSession} />)}
        </div>
      </Container>
    </section>
  )
}
