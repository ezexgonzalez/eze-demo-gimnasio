import { siteConfig } from '../../data/siteConfig'

export function EwsWordmark() {
  return <span className="wordmark">{siteConfig.businessName}</span>
}
