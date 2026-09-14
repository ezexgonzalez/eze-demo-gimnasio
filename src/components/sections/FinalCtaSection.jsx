import { demoContent } from '../../data/demoContent'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { ArrowRightIcon } from '../ui/icons'

export function FinalCtaSection() {
  const { finalCta } = demoContent

  return (
    <section id="contacto" className="bg-[var(--theme-background)] py-16 sm:py-20 lg:flex lg:min-h-screen lg:py-0">
      <Container className="max-w-[90rem] px-4 sm:px-6 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:px-12">
        <div className="relative min-h-[43rem] overflow-hidden bg-[var(--theme-background)] lg:h-[min(68vh,44rem)] lg:min-h-0">
          <img
            alt={finalCta.imageAlt}
            className="absolute inset-0 size-full object-cover object-[58%_center] lg:object-[60%_center]"
            src={finalCta.image}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,11,0.02)_5%,rgba(8,10,11,0.08)_35%,rgba(8,10,11,0.96)_70%,#080A0B_100%)] lg:bg-[linear-gradient(90deg,#080A0B_0%,rgba(8,10,11,0.96)_27%,rgba(8,10,11,0.42)_51%,rgba(8,10,11,0.03)_74%)]"
          />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 lg:inset-y-0 left-0 flex max-w-[37rem] flex-col justify-center p-12">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--theme-accent)]">
              {finalCta.eyebrow}
            </p>
            <span aria-hidden="true" className="mt-5 block h-0.5 w-10 bg-[var(--theme-accent)]" />
            <h2 className="mt-8 max-w-[10ch] text-[2.2rem] font-normal leading-[1.05] tracking-[-0.04em] text-[var(--theme-text)] sm:text-[2.75rem] lg:text-[clamp(2.8rem,4.3vw,4.4rem)]">
              {finalCta.title}
            </h2>
            <p className="mt-6 max-w-[19rem] text-[0.9375rem] leading-[1.6] text-[var(--theme-secondary)] lg:text-lg">
              {finalCta.description}
            </p>
            <Button className="micro-primary-cta mt-9 h-14 w-full max-w-[21.5rem] gap-5 text-xs tracking-[0.11em] lg:h-16" href={finalCta.cta.href}>
              {finalCta.cta.label}
              <ArrowRightIcon className="micro-cta-arrow size-6" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
