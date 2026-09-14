import spaceMainImage from '../../assets/images/space-completo.webp'
import spaceMobileImage from '../../assets/images/space-mobile.webp'
import spaceDetailImage from '../../assets/images/space-imagen-vertical.webp'
import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

export function SpaceSection() {
  const { space } = demoContent

  return (
    <section id="espacio" className="bg-[var(--theme-background)] py-16 sm:py-20 lg:py-20">
      <Container className="max-w-[90rem] px-4 sm:px-6 lg:px-12">
        <div>
          <Reveal className="lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-x-16 lg:pb-8">
            <div>
              <Eyebrow>{space.eyebrow}</Eyebrow>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2.25rem,6.2vw,4.5rem)] font-black uppercase leading-[0.91] tracking-[-0.045em] text-[var(--theme-text)]">
                {space.title}
              </h2>
              <span aria-hidden="true" className="mt-5 block h-0.5 w-10 bg-[var(--theme-accent)] lg:hidden" />
            </div>
            <div className="mt-7 border-l border-[var(--theme-accent)] pl-6 lg:mt-0 lg:pl-10">
              <p className="max-w-[25rem] text-[0.875rem] leading-[1.65] text-[var(--theme-secondary)] lg:text-base">
                {space.description}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-8 overflow-hidden lg:mt-0 lg:grid lg:h-[min(57vh,40rem)] lg:grid-cols-[1.9fr_0.8fr] lg:gap-4" variant="scale">
            <div className="min-h-[28rem] overflow-hidden lg:min-h-0">
              <picture>
                <source media="(max-width: 1023px)" srcSet={spaceMobileImage} />
                <img
                  alt={space.mainImageAlt}
                  className="size-full object-cover"
                  decoding="async"
                  loading="lazy"
                  src={spaceMainImage}
                />
              </picture>
            </div>
            <div className="relative mt-4 hidden min-h-0 overflow-hidden lg:mt-0 lg:block">
              <img
                alt={space.detailImageAlt}
                className="size-full object-cover"
                decoding="async"
                loading="lazy"
                src={spaceDetailImage}
              />
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-0.5 w-20 bg-[var(--theme-accent)]" />
            </div>
          </Reveal>

          <Reveal className="mt-4 min-h-[15rem] overflow-hidden lg:hidden" delay={100} variant="scale">
            <img
              alt={space.detailImageAlt}
              className="size-full object-cover"
              decoding="async"
              loading="lazy"
              src={spaceDetailImage}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
