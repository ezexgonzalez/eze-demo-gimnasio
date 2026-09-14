import { demoContent } from '../../data/demoContent'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { ArrowRightIcon } from '../ui/icons'

function FeatureList({ items, compact = false }) {
  return (
    <ul className={compact ? 'mt-4 space-y-2.5' : 'mt-7 space-y-4 border-t border-[var(--theme-border)] pt-5'}>
      {items.map((item) => (
        <li className="flex items-start gap-3 text-[0.8125rem] leading-[1.45] text-[var(--theme-secondary)]" key={item}>
          <span aria-hidden="true" className="mt-2 h-px w-5 shrink-0 bg-[var(--theme-accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PlanHeading({ plan, compact = false }) {
  return (
    <>
      <div className={compact ? 'flex items-start justify-between gap-4' : ''}>
        <div>
          {plan.recommended ? (
            <span className="mb-5 inline-flex rounded-[var(--theme-radius)] bg-[var(--theme-accent)] px-3 py-1.5 text-[0.625rem] font-bold tracking-[0.045em] text-[var(--theme-accent-text)]">
              RECOMENDADO
            </span>
          ) : null}
          <h3 className={compact ? 'text-xl font-bold uppercase leading-none tracking-[-0.025em] text-[var(--theme-text)]' : 'text-[1.75rem] font-bold uppercase leading-none tracking-[-0.03em] text-[var(--theme-text)]'}>
            {plan.name}
          </h3>
          <p className="mt-3 text-[0.8125rem] font-semibold text-[var(--theme-accent)]">{plan.frequency}</p>
        </div>
        {compact ? <Price plan={plan} /> : null}
      </div>
      {compact ? null : <Price plan={plan} />}
    </>
  )
}

function Price({ plan }) {
  return (
    <p className="mt-5 whitespace-nowrap text-[1.9rem] font-bold leading-none tracking-[-0.03em] text-[var(--theme-text)]">
      {plan.price}
      <span className="ml-1 text-sm font-normal tracking-normal text-[var(--theme-secondary)]">/mes</span>
    </p>
  )
}

function StandardPlan({ plan }) {
  return (
    <article className="border border-[var(--theme-border)] p-7 lg:p-9">
      <PlanHeading plan={plan} />
      <span aria-hidden="true" className="mt-4 block h-0.5 w-6 bg-[var(--theme-accent)]" />
      <p className="mt-5 max-w-[18rem] text-sm leading-6 text-[var(--theme-secondary)]">{plan.description}</p>
      <FeatureList items={plan.features} />
      <a className="mt-6 inline-flex items-center gap-3 text-xs font-bold tracking-[0.08em] text-[var(--theme-text)] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)]" href="#contacto">
        VER MÁS <ArrowRightIcon className="size-5 text-[var(--theme-accent)]" />
      </a>
    </article>
  )
}

function CompactPlan({ plan }) {
  return (
    <article className="border border-[var(--theme-border)] px-6 py-5">
      <PlanHeading compact plan={plan} />
      <p className="mt-5 max-w-[16rem] text-[0.8125rem] leading-[1.55] text-[var(--theme-secondary)]">{plan.description}</p>
      <a className="mt-5 inline-flex items-center gap-3 text-xs font-bold tracking-[0.08em] text-[var(--theme-text)] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)]" href="#contacto">
        VER MÁS <ArrowRightIcon className="size-5 text-[var(--theme-accent)]" />
      </a>
    </article>
  )
}

export function PlansSection() {
  const { plans } = demoContent

  return (
    <section id="planes" className="bg-[var(--theme-background)] py-16 sm:py-20 lg:flex lg:min-h-screen lg:py-0">
      <Container className="max-w-[90rem] px-4 sm:px-6 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:px-12">
        <div className="lg:w-full">
          <div className="lg:grid lg:grid-cols-[0.96fr_1.04fr] lg:items-end lg:gap-x-20 lg:pb-10">
            <div>
              <Eyebrow>{plans.eyebrow}</Eyebrow>
              <h2 className="mt-4 max-w-[12ch] text-[2.25rem] font-black leading-[0.94] tracking-[-0.04em] text-[var(--theme-text)] lg:text-[clamp(2.5rem,4.1vw,4rem)]">
                {plans.title}
              </h2>
            </div>
            <div className="mt-6 border-l border-[var(--theme-accent)] pl-6 lg:mt-0 lg:pl-10">
              <p className="max-w-[25rem] text-[0.875rem] leading-[1.65] text-[var(--theme-secondary)] lg:text-base">
                {plans.description}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:mt-0 lg:grid-cols-[1.08fr_1fr]">
            <article className="border border-[var(--theme-accent)] p-7 sm:p-8 lg:min-h-[43rem] lg:p-9">
              <PlanHeading plan={plans.featured} />
              <span aria-hidden="true" className="mt-6 block h-0.5 w-8 bg-[var(--theme-accent)]" />
              <p className="mt-6 max-w-[22rem] text-base leading-7 text-[var(--theme-secondary)]">{plans.featured.description}</p>
              <FeatureList items={plans.featured.features} />
              <Button className="micro-primary-cta mt-8 h-14 w-full gap-4 text-xs tracking-[0.08em]" href={plans.cta.href}>
                {plans.cta.label}<ArrowRightIcon className="micro-cta-arrow size-5" />
              </Button>
            </article>

            <div className="space-y-4">
              <div className="hidden lg:block"><StandardPlan plan={plans.options[0]} /></div>
              <div className="hidden lg:block"><StandardPlan plan={plans.options[1]} /></div>
              <div className="space-y-3 lg:hidden">
                {plans.options.map((plan) => <CompactPlan key={plan.name} plan={plan} />)}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
