import { createWhatsAppUrl } from '../utils/contactUrls'

const whatsappNumber = '541112345678'

export const siteConfig = {
  businessName: 'EZE Studio',
  navigation: {
    links: [
      { label: 'ENTRENAMIENTO', href: '#entrenamiento' },
      { label: 'MÉTODO', href: '#metodo' },
      { label: 'COACHES', href: '#coaches' },
      { label: 'EL ESPACIO', href: '#espacio' },
      { label: 'PLANES', href: '#planes' },
    ],
    cta: {
      label: 'AGENDA TU SESIÓN',
      href: createWhatsAppUrl(whatsappNumber),
      external: true,
    },
  },
  contact: {
    whatsapp: {
      display: '+54 11 1234 5678',
      number: whatsappNumber,
      href: createWhatsAppUrl(whatsappNumber),
    },
    instagram: '@ezestudio',
    location: 'Quilmes, Buenos Aires, Argentina',
  },
  theme: {
    mode: 'dark',
    background: '#080A0B',
    surface: '#0D1012',
    elevated: '#121619',
    text: '#F5F5F2',
    secondary: '#C2C5C7',
    muted: '#858B90',
    accent: '#FF573D',
    accentText: '#F5F5F2',
    border: 'rgba(255,255,255,0.12)',
    radius: '0.875rem',
  },
}
