import fuerzaImage from '../../assets/images/entrenamiento-fuerza.webp'
import funcionalImage from '../../assets/images/entrenamiento-funcional.webp'
import acondicionamientoImage from '../../assets/images/entrenamiento-acondicionamiento.webp'
import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'

const trainingImages = [fuerzaImage, funcionalImage, acondicionamientoImage]

function EditorialCue({ label }) {
  return (
    <div className="inline-flex w-fit items-center gap-3 text-[0.6875rem] font-bold tracking-[0.09em] text-[var(--theme-muted)] lg:text-xs">
      <span aria-hidden="true" className="h-px w-7 shrink-0 bg-[var(--theme-accent)]" />
      <span className="max-w-[15rem] leading-[1.35]">{label}</span>
    </div>
  )
}

function TrainingPanel({ item, image, className = '' }) {
  return (
    <article className={['relative min-h-0 overflow-hidden bg-[var(--theme-background)]', className].filter(Boolean).join(' ')}>
      <img
        alt={item.imageAlt}
        className="absolute inset-0 size-full object-cover"
        decoding="async"
        loading="lazy"
        src={image}
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
    <section id="entrenamiento" className="bg-[var(--theme-background)] py-16 sm:py-20 lg:flex lg:min-h-screen lg:py-0">
      <Container className="max-w-[90rem] px-4 sm:px-6 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:px-12">
        <div className="lg:w-full">
          <div className="px-1 pb-9 pt-8 sm:px-2 sm:pb-11 sm:pt-10 lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-x-16 lg:px-0 lg:pb-8 lg:pt-0">
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
                <EditorialCue label={training.action} />
              </div>
            </div>
          </div>

          <div className="grid overflow-hidden lg:grid-cols-[1.25fr_0.86fr_0.94fr] lg:h-[min(54vh,38rem)]">
            {training.items.map((item, index) => (
              <TrainingPanel
                className={[
                  index === 0
                    ? 'min-h-[25rem] lg:min-h-0 lg:border-r lg:border-[var(--theme-border)]'
                    : 'min-h-[20rem] border-t border-[var(--theme-border)] lg:min-h-0 lg:border-t-0',
                  index === 1 ? 'lg:border-r lg:border-[var(--theme-border)]' : '',
                ].filter(Boolean).join(' ')}
                image={trainingImages[index]}
                item={item}
                key={item.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
