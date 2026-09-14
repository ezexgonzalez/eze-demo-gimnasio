import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'

function CoachMeta({ coach, featured = false }) {
  return (
    <div className={featured ? 'absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10' : 'min-w-0 py-5'}>
      <span aria-hidden="true" className="mb-4 block h-0.5 w-7 bg-[var(--theme-accent)]" />
      <h3 className="text-[1.25rem] font-bold uppercase leading-none tracking-[-0.025em] text-[var(--theme-text)] lg:text-xl">
        {coach.name}
      </h3>
      <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.09em] text-[var(--theme-accent)]">
        {coach.role}
      </p>
      <p className="mt-3 max-w-[15rem] text-[0.8125rem] leading-[1.55] text-[var(--theme-secondary)] lg:text-sm">
        {coach.description}
      </p>
    </div>
  )
}

function SupportingCoach({ coach }) {
  return (
    <article className="grid min-h-[10rem] grid-cols-[42%_1fr] border-t border-[var(--theme-border)]">
      <img alt={coach.imageAlt} className="size-full object-cover" src={coach.image} />
      <CoachMeta coach={coach} />
    </article>
  )
}

export function CoachesSection() {
  const { coaches } = demoContent

  return (
    <section id="coaches" className="bg-[var(--theme-background)] py-16 sm:py-20 lg:flex lg:min-h-screen lg:py-0">
      <Container className="max-w-[90rem] px-4 sm:px-6 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:px-12">
        <div className="lg:w-full">
          <div className="lg:hidden">
            <Eyebrow>{coaches.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-[12ch] text-[2.15rem] font-black leading-[0.94] tracking-[-0.04em] text-[var(--theme-text)]">
              {coaches.title}
            </h2>
            <span aria-hidden="true" className="mt-5 block h-0.5 w-10 bg-[var(--theme-accent)]" />
            <p className="mt-5 max-w-[23rem] text-[0.875rem] leading-[1.65] text-[var(--theme-secondary)]">
              {coaches.description}
            </p>
          </div>

          <div className="mt-8 overflow-hidden lg:mt-0 lg:grid lg:h-[min(76vh,52rem)] lg:grid-cols-[1.35fr_0.97fr]">
            <article className="relative min-h-[31rem] overflow-hidden bg-[var(--theme-background)] lg:min-h-0 lg:border-r lg:border-[var(--theme-border)]">
              <img alt={coaches.featured.imageAlt} className="absolute inset-0 size-full object-cover" src={coaches.featured.image} />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,11,0.02)_35%,rgba(8,10,11,0.92)_100%)]" />
              <CoachMeta coach={coaches.featured} featured />
            </article>

            <div className="lg:grid lg:grid-rows-[1.03fr_0.55fr_0.55fr]">
              <div className="hidden border-b border-[var(--theme-border)] px-10 py-9 lg:block">
                <Eyebrow>{coaches.eyebrow}</Eyebrow>
                <h2 className="mt-5 max-w-[11ch] text-[clamp(2rem,3.7vw,3.55rem)] font-black leading-[0.94] tracking-[-0.04em] text-[var(--theme-text)]">
                  {coaches.title}
                </h2>
                <span aria-hidden="true" className="mt-6 block h-0.5 w-10 bg-[var(--theme-accent)]" />
                <p className="mt-6 max-w-[24rem] text-sm leading-6 text-[var(--theme-secondary)]">
                  {coaches.description}
                </p>
              </div>
              {coaches.supporting.map((coach) => <SupportingCoach coach={coach} key={coach.name} />)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
