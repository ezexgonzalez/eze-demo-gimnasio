import spaceDesktop from '../../assets/images/space-completo.webp'
import spaceMobile from '../../assets/images/space-mobile.webp'
import spaceDetail from '../../assets/images/space-imagen-vertical.webp'
import { demoContent } from '../../data/demoContent'
import { Container } from '../ui/Container'
import { EditorialHeading } from '../ui/EditorialHeading'

export function SpaceSection() {
  const { space } = demoContent
  return (
    <section id="espacio" className="editorial space" aria-labelledby="space-title" tabIndex={-1}>
      <Container>
        <EditorialHeading id="space-title" content={space} />
        <div className="space-gallery">
          <picture data-editorial>
            <source media="(max-width: 1023px)" srcSet={spaceMobile} width="1122" height="1402" />
            <img className="space-main photo" src={spaceDesktop} alt={space.mainImageAlt} width="2528" height="1686" loading="lazy" decoding="async" />
          </picture>
          <div className="space-detail" data-editorial>
            <img className="photo" src={spaceDetail} alt={space.detailImageAlt} width="1086" height="1448" loading="lazy" decoding="async" />
          </div>
        </div>
      </Container>
    </section>
  )
}
