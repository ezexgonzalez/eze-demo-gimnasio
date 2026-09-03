import { siteConfig } from './siteConfig'

export const demoContent = {
  hero: {
    eyebrow: 'FUERZA CON MÉTODO',
    title: ['ENTRENÁ', 'MEJOR.', 'ENTRENÁ ACÁ.'],
    description:
      'Entrenamiento de fuerza y funcional con método, acompañamiento y un espacio pensado para que des tu mejor versión todos los días.',
    primaryCta: siteConfig.navigation.cta,
    secondaryCta: { label: 'CONOCÉ EL ESPACIO', href: '#espacio' },
    benefits: [
      'COACHES CERTIFICADOS',
      'GRUPOS REDUCIDOS',
      'ENFOQUE EN RESULTADOS REALES',
    ],
  },
  method: {
    eyebrow: 'NUESTRO MÉTODO',
    title: ['No es suerte.', 'Es método.'],
    description:
      'Cada entrenamiento tiene un propósito. Combinamos ciencia, experiencia y seguimiento para que avances de forma segura, constante y medible.',
    action: 'CONOCÉ CÓMO TRABAJAMOS',
    steps: [
      {
        number: '01',
        title: 'EVALUAMOS',
        description:
          'Te conocemos a fondo. Evaluamos tu punto de partida, objetivos y tu estilo de vida.',
      },
      {
        number: '02',
        title: 'DISEÑAMOS',
        description:
          'Creamos un plan personalizado con estructura, progresión y objetivos claros.',
      },
      {
        number: '03',
        title: 'ENTRENAMOS',
        description:
          'Sesiones guiadas, con técnica, intensidad y acompañamiento profesional.',
      },
      {
        number: '04',
        title: 'SEGUIMOS',
        description:
          'Medimos tu progreso, ajustamos el plan y seguimos elevando tu rendimiento.',
      },
    ],
  },
}
