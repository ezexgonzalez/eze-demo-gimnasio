import heroImage from '../../assets/images/hero.webp'
import { demoContent } from '../../data/demoContent'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import {
  ArrowRightIcon,
  CoachIcon,
  GroupIcon,
  TargetIcon,
} from '../ui/icons'

const benefitIcons = [CoachIcon, GroupIcon, TargetIcon]

export function HeroSection() {
  const { hero } = demoContent

  return (
    <section
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-[var(--theme-background)] lg:block lg:h-[100svh] lg:min-h-[760px]"
      id="inicio"
    >
      <img
        alt="Atleta entrenando fuerza con barra en EZE Studio"
        className="hero-enter-photo absolute inset-0 -z-30 size-full object-cover object-[60%_center] lg:object-[50%_0%]"
        fetchPriority="high"
        loading="eager"
        src={heroImage}
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(8,10,11,.94)_0%,rgba(8,10,11,.82)_38%,rgba(8,10,11,.58)_72%,rgba(8,10,11,.18)_100%)] lg:bg-[linear-gradient(90deg,rgba(8,10,11,.96)_0%,rgba(8,10,11,.88)_25%,rgba(8,10,11,.50)_48%,rgba(8,10,11,.08)_68%,rgba(8,10,11,0)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,10,11,.38)_0%,rgba(8,10,11,.04)_34%,rgba(8,10,11,.18)_62%,rgba(8,10,11,.92)_100%)] lg:bg-[linear-gradient(180deg,rgba(8,10,11,0)_0%,rgba(8,10,11,0)_65%,rgba(8,10,11,.42)_82%,rgba(8,10,11,.90)_100%)]" />

      <Container className="relative z-10 flex max-w-[90rem] flex-1 flex-col px-4 pb-6 pt-[7.75rem] sm:px-6 lg:static lg:z-auto lg:h-full lg:px-12 lg:pb-14 lg:pt-[10.75rem]">
        <div className="max-w-[36rem] lg:max-w-[42rem]">
          <Eyebrow className="hero-enter-eyebrow mb-3 lg:mb-[1.0625rem]">
            {hero.eyebrow}
          </Eyebrow>
          <h1 className="hero-enter-title max-w-[21rem] text-[clamp(2.6rem,10.7vw,4.5rem)] font-black uppercase leading-[0.88] tracking-[-0.035em] text-[var(--theme-text)] lg:max-w-none lg:text-[clamp(4.75rem,5.55vw,5.125rem)] lg:leading-[0.90]">
            {hero.title.map((line) => (
              <span className="block lg:whitespace-nowrap" key={line}>
                {line}
              </span>
            ))}
          </h1>
          <span
            aria-hidden="true"
            className="hero-enter-copy mb-[1.3125rem] mt-[0.9375rem] block h-0.5 w-10 bg-[var(--theme-accent)] lg:mb-[1.0625rem] lg:mt-[1.0625rem] lg:w-12"
          />
          <p className="hero-enter-copy max-w-[20rem] text-[0.825rem] leading-[1.55] text-[var(--theme-secondary)] lg:max-w-[22rem] lg:text-base">
            {hero.description}
          </p>

          <div className="hero-enter-actions mt-[1.6875rem] flex flex-col items-start gap-[1.0625rem] lg:mt-7 lg:flex-row lg:items-center lg:gap-7">
            <Button
              className="micro-primary-cta h-12 w-[12.75rem] gap-3 px-5 text-[0.68rem] tracking-[0.1em] lg:h-14 lg:w-[14.75rem] lg:text-xs"
              external={hero.primaryCta.external}
              href={hero.primaryCta.href}
            >
              <span>{hero.primaryCta.label}</span>
              <ArrowRightIcon className="micro-cta-arrow size-4" />
            </Button>
            <a
              className="hero-secondary-action inline-flex min-h-8 items-center gap-2.5 text-[0.68rem] font-semibold tracking-[0.1em] text-[var(--theme-text)] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)] lg:text-xs"
              href={hero.secondaryCta.href}
            >
              <ArrowRightIcon className="hero-secondary-icon size-5 shrink-0 text-[var(--theme-accent)]" />
              <span>{hero.secondaryCta.label}</span>
            </a>
          </div>
        </div>

        <div className="hero-enter-benefits mt-auto border-t border-[var(--theme-border)] pb-4 pt-5 lg:border-0 lg:pb-0 lg:pt-0">
          <ul className="grid grid-cols-3 lg:hidden">
            {hero.benefits.map((benefit, index) => {
              const BenefitIcon = benefitIcons[index]

              return (
                <li
                  className="relative flex min-w-0 flex-col items-center px-1 text-center"
                  key={benefit}
                >
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-14 w-px bg-[var(--theme-accent)] opacity-30"
                    />
                  ) : null}
                  <BenefitIcon className="size-6 text-[var(--theme-accent)]" />
                  <span className="mt-2 max-w-[6.5rem] text-[0.56rem] font-bold leading-[1.35] tracking-[0.055em] text-[var(--theme-secondary)]">
                    {benefit}
                  </span>
                </li>
              )
            })}
          </ul>

          <ul className="hidden w-full max-w-[38rem] grid-cols-3 gap-x-10 lg:grid">
            {hero.benefits.map((benefit) => (
              <li className="flex min-w-0 items-center gap-3" key={benefit}>
                <span
                  aria-hidden="true"
                  className="h-9 w-0.5 shrink-0 bg-[var(--theme-accent)]"
                />
                <span className="max-w-[11rem] text-[0.68rem] font-bold leading-[1.45] tracking-[0.1em] text-[var(--theme-secondary)]">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

    </section>
  )
}
