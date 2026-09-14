import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { ArrowRightIcon } from '../ui/icons'

function EditorialAction({ label }) {
  return (
    <a
      className="training-editorial-action inline-flex w-fit items-center gap-3 text-[0.6875rem] font-bold tracking-[0.09em] text-[var(--theme-accent)] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)] lg:text-xs"
      href="#contacto"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--theme-accent)]">
        <ArrowRightIcon className="size-4" />
      </span>
      <span className="max-w-[15rem] leading-[1.35]">{label}</span>
    </a>
  )
}

function TrainingPanel({ item, className = '' }) {
  return (
    <article className={['relative min-h-0 overflow-hidden bg-[var(--theme-background)]', className].filter(Boolean).join(' ')}>
      <img
        alt={item.imageAlt}
        className="absolute inset-0 size-full object-cover"
        src={item.image}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,11,0.02)_22%,rgba(8,10,11,0.20)_50%,rgba(8,10,11,0.94)_100%)]"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
        <span aria-hidden="true" className="mb-4 block h-0.5 w-6 bg-[var(--theme-accent)]" />
        <h3 className="text-[1.125rem] font-black uppercase leading-none tracking-[-0.025em] text-[var(--theme-text)] lg:text-xl">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[15rem] text-[0.8125rem] leading-[1.55] text-[var(--theme-secondary)] lg:text-sm">
          {item.description}
        </p>
      </div>
    </article>
  )
}

export function TrainingSection() {
  const { training } = demoContent

  return (
    <section id="entrenamiento" className="bg-[var(--theme-background)] py-16 sm:py-20 lg:py-28">
      <Container className="max-w-[90rem] px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[78rem]">
          <div className="border-x border-t border-[var(--theme-border)] px-5 pb-9 pt-8 sm:px-8 sm:pb-11 sm:pt-10 lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-x-16 lg:px-12 lg:pb-9 lg:pt-12">
            <div>
              <Eyebrow>{training.eyebrow}</Eyebrow>
              <h2 className="mt-4 max-w-[10ch] text-[clamp(2.3rem,8vw,5rem)] font-black uppercase leading-[0.89] tracking-[-0.045em] text-[var(--theme-text)] lg:max-w-[10.5ch]">
                {training.title}
              </h2>
            </div>
            <div className="mt-7 border-l border-[var(--theme-border)] pl-6 lg:mt-0 lg:mb-1 lg:pl-14">
              <p className="max-w-[23rem] text-[0.875rem] leading-[1.62] text-[var(--theme-secondary)] lg:text-base">
                {training.description}
              </p>
              <div className="mt-7 lg:mt-14">
                <EditorialAction label={training.action} />
              </div>
            </div>
          </div>

          <div className="grid overflow-hidden border border-[var(--theme-border)] border-t-0 lg:grid-cols-[1.25fr_0.86fr_0.94fr] lg:h-[38rem]">
            <TrainingPanel className="min-h-[25rem] lg:min-h-0 lg:border-r lg:border-[var(--theme-border)]" item={training.items[0]} />
            <TrainingPanel className="min-h-[20rem] border-t border-[var(--theme-border)] lg:min-h-0 lg:border-r lg:border-t-0 lg:border-[var(--theme-border)]" item={training.items[1]} />
            <TrainingPanel className="min-h-[20rem] border-t border-[var(--theme-border)] lg:min-h-0 lg:border-t-0" item={training.items[2]} />
          </div>
        </div>
      </Container>
    </section>
  )
}
