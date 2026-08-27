import heroImage from '../../assets/images/hero.png'
import { demoContent } from '../../data/demoContent'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { ArrowDownRightIcon, ArrowRightIcon, CheckIcon } from '../ui/icons'

export function HeroSection() {
  const { hero } = demoContent

  return (
    <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-[var(--theme-background)]" id="inicio">
      <img
        alt="Atleta entrenando fuerza con barra en EZE Studio"
        className="absolute inset-0 -z-30 size-full object-cover object-[61%_center] lg:object-center"
        fetchPriority="high"
        loading="eager"
        src={heroImage}
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(8,10,11,0.42)_0%,rgba(8,10,11,0.1)_28%,rgba(8,10,11,0.58)_65%,#080A0B_100%)] lg:bg-[linear-gradient(90deg,#080A0B_0%,rgba(8,10,11,0.88)_25%,rgba(8,10,11,0.3)_57%,rgba(8,10,11,0.08)_76%)]" />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(180deg,rgba(8,10,11,0.34)_0%,rgba(8,10,11,0)_30%,rgba(8,10,11,0.08)_62%,#080A0B_100%)] lg:block" />

      <Container className="flex min-h-[100svh] flex-col justify-end pb-7 pt-28 lg:justify-between lg:pb-9 lg:pt-44">
        <div className="max-w-[36rem] lg:max-w-[43rem]">
          <Eyebrow className="mb-4 lg:mb-5">{hero.eyebrow}</Eyebrow>
          <h1 className="text-[clamp(3rem,14vw,4.15rem)] font-black uppercase leading-[0.86] tracking-[-0.065em] text-[var(--theme-text)] lg:text-[5.75rem]">
            {hero.title.map((line) => <span className="block" key={line}>{line}</span>)}
          </h1>
          <p className="mt-5 max-w-[33rem] text-sm leading-6 text-[var(--theme-secondary)] lg:mt-6 lg:text-base lg:leading-7">
            {hero.description}
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-3 lg:mt-8 lg:flex-row lg:items-center">
            <Button className="gap-3 px-6 text-xs tracking-[0.1em]" external={hero.primaryCta.external} href={hero.primaryCta.href}>
              <span>{hero.primaryCta.label}</span>
              <ArrowRightIcon className="size-4" />
            </Button>
            <Button className="gap-3 border-[var(--theme-border)] bg-transparent px-6 text-xs tracking-[0.1em]" href={hero.secondaryCta.href} variant="ghost">
              <span>{hero.secondaryCta.label}</span>
              <ArrowDownRightIcon className="size-4 text-[var(--theme-accent)]" />
            </Button>
          </div>
        </div>

        <div className="mt-8 flex items-end justify-between lg:mt-12">
          <ul className="grid gap-2.5 text-[0.63rem] font-bold tracking-[0.1em] text-[var(--theme-secondary)] lg:flex lg:gap-10 lg:text-[0.68rem]">
            {hero.benefits.map((benefit) => (
              <li className="flex items-center gap-2" key={benefit}>
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--theme-accent)] text-[var(--theme-accent-text)]">
                  <CheckIcon className="size-3" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div aria-hidden="true" className="hidden items-center gap-3 text-xs font-bold tracking-[0.16em] text-[var(--theme-text)] lg:flex">
            <span>01</span><span className="h-px w-12 bg-[var(--theme-border)]" /><span className="text-[var(--theme-muted)]">04</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
