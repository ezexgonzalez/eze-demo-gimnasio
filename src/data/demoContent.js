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
  training: {
    eyebrow: 'ENTRENAMIENTO',
    title: 'ENTRENAMIENTO PARA TODAS TUS VERSIONES.',
    description:
      'Fuerza, funcionalidad y acondicionamiento combinados para que superes tus límites y te conviertas en tu mejor versión.',
    action: 'CONOCÉ MÁS SOBRE NUESTRO ENTRENAMIENTO',
    items: [
      {
        title: 'FUERZA',
        description: 'Construí base, potencia y rendimiento.',
        image: '/src/assets/images/entrenamiento-fuerza.png',
        imageAlt: 'Atleta realizando un levantamiento de fuerza con barra',
      },
      {
        title: 'FUNCIONAL',
        description: 'Movimientos reales para un cuerpo más fuerte y capaz.',
        image: '/src/assets/images/entrenamiento-funcional.png',
        imageAlt: 'Atleta realizando un ejercicio funcional con kettlebell',
      },
      {
        title: 'ACONDICIONAMIENTO',
        description: 'Mejorá tu resistencia, energía y rendimiento general.',
        image: '/src/assets/images/entrenamiento-acondicionamiento.png',
        imageAlt: 'Atleta empujando un trineo de acondicionamiento',
      },
    ],
  },
  space: {
    eyebrow: 'EL ESPACIO',
    title: 'UN LUGAR PENSADO PARA RENDIR MEJOR.',
    description:
      'Diseñamos cada rincón para que entrenes con libertad, concentración y comodidad. Luz natural, espacios amplios y equipamiento de primer nivel.',
    mainImage: '/src/assets/images/space-completo.jpeg',
    mobileImage: '/src/assets/images/space-mobile.png',
    detailImage: '/src/assets/images/space-imagen-vertical.png',
    mainImageAlt: 'Vista amplia del espacio de entrenamiento EZE Studio',
    detailImageAlt: 'Área de pesas y equipamiento del gimnasio',
  },
  coaches: {
    eyebrow: 'COACHES',
    title: 'Entrenás con personas que están con vos.',
    description:
      'Te acompañamos con atención real, criterio y experiencia para que avances seguro, consistente y sin perder el foco.',
    featured: {
      name: 'LUCAS RODRÍGUEZ',
      role: 'HEAD COACH',
      description: 'Especialista en fuerza y rendimiento deportivo.',
      image: '/src/assets/images/coach-principal.png',
      imageAlt: 'Lucas Rodríguez acompañando a una atleta en su entrenamiento',
    },
    supporting: [
      {
        name: 'MICAELA GÓMEZ',
        role: 'COACH',
        description: 'Especialista en entrenamiento funcional y acondicionamiento.',
        image: '/src/assets/images/coach2.png',
        imageAlt: 'Micaela Gómez, coach de entrenamiento funcional',
      },
      {
        name: 'SANTIAGO PERALTA',
        role: 'COACH',
        description: 'Especialista en hipertrofia y movimiento consciente.',
        image: '/src/assets/images/coach1.png',
        imageAlt: 'Santiago Peralta, coach de hipertrofia',
      },
    ],
  }
}
