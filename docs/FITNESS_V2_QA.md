# EWS Fitness V2 — implementación y QA

La rama `fitness-v2` parte de `d2eea63efcabd467399e3002932986cb07ae7a90`. Diseño: [Figma EWS Fitness V2](https://www.figma.com/design/IOvtwOR1mNOcc4LzBZFZ1k), frames finales 10:56 (1440), 29:56 (1920) y 10:126 (390). Especificación responsive 31:30, menú 11:127, planes abiertos 12:360 y wordmark EWS 28:27.

## Preview local

Con Node 22.13 o superior:

```sh
git switch fitness-v2
npm ci
npm run dev
```

Para revisar el build que usaría un hosting estático: `npm run build && npm run preview`.

## Implementación

Una landing responsive en React/Vite/Tailwind. Tipografía Inter, Barlow Condensed e IBM Plex Mono en WOFF2 locales con sus licencias OFL. Contenedor centrado con un máximo de 1440 px. Hero con imagen WebP original priorizada; fotos de contenido con lazy loading y dimensiones nativas. El espacio selecciona la foto original correspondiente al ancho. Menú móvil modal con Escape y gestión de foco; planes secundarios expandibles en Mobile y visibles en Desktop. El CTA comercial abre un aviso local de demo. En el pie se reemplazó el teléfono ficticio por «Sin reservas reales» y se conservó la mención conceptual. No hay reservas, contrataciones ni enlaces a cuentas ficticias.

## Comparación y validación

Chromium, viewport efectivo en píxeles CSS, fuentes listas e imágenes decodificadas; comparación de las capturas con los tres frames finales. Mediciones (px):

| Viewport | Contenedor | Inicio de Método | Foto del Hero |
| --- | ---: | ---: | --- |
| 1280 × 720 | 1184 | 790 | 600 × 540 |
| 1440 × 900 | 1296 | 830 | 672 × 585, x696 / y110 |
| 1920 × 1080 | 1440 | 914 | 728 × 620, x952 / y122 |
| 390 × 844 | 342 | 888 | 390 × 267 |

El H1/H2 desktop mide 100/62 px a 1280 y 113/71 px a 1440 y anchos superiores. A 390, El espacio usa 342 × 306 y 342 × 164, en el mismo eje y con gap de 12 px. Los inicios de sección coinciden con el frame de 390 y el de 1920; en 1440 se observa hasta 1 px de diferencia por redondeo. El contenedor y la escala de texto permanecen limitados a 2560 px.

Se probó con teclado el enlace de salto, el foco inicial y su retorno, Escape, el bloqueo de scroll del menú, el cambio a escritorio con el menú abierto y los acordeones. También se comprobaron anchors, navegación activa al recorrer la página, hover de CTA, aviso local y el modo de movimiento reducido.

Se revisaron 360 × 800, 390 × 844, 430 × 932, 768 × 1024, 1024 × 768, 1280 × 720, 1440 × 900, 1920 × 1080 y 2560 × 1440: no se observó overflow horizontal, imágenes fallidas ni errores de aplicación en consola. El bundle de producción reportó aproximadamente 66.5 kB JS y 9.2 kB CSS comprimidos con gzip. No se midió Lighthouse ni se realizó una certificación de accesibilidad.

## Pendiente de Dirección

QA visual final en su navegador. El inventario de Figma (31:87) registra marca anterior dentro de los píxeles de estas fotos: `space-completo.webp`, `space-mobile.webp`, `coach-principal.webp`, `coach1.webp`, `coach2.webp`, `cta-final.webp` y `entrenamiento-fuerza.webp`. Se conservaron intactas; una eventual corrección fotográfica requiere aprobación. La rama `main`, la demo publicada y el portfolio de Eze Web Studio quedan fuera de la entrega.
