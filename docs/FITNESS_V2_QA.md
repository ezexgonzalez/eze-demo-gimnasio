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

## Motion & Interaction Pass 01

Base: `d0d467b5a07712c3caf5e2efc8ec7ad7cc8df987`. Se mantienen las composiciones de Figma, los recortes y los destinos. No se agregaron dependencias.

| Sección | Movimiento |
| --- | --- |
| Hero | Tres líneas con máscara y desfases de 80 ms, apertura horizontal de la foto (920 ms) y secuencia de antetítulo, descripción, CTA y beneficios. La entrada completa dura 970 ms. |
| Método | Cuatro pasos con recorrido de 14 px y reglas que se dibujan. En escritorio la secuencia usa 85 ms de desfase; en móvil cada paso entra por separado. |
| Entrenamiento | Máscara fotográfica con zoom interno de 1.03, seguida por la ficha. Las fotos tienen desfase en escritorio y entrada individual más breve en móvil. |
| El espacio | Apertura horizontal de la foto principal y máscara más suave en la secundaria; las dos conservan la alineación y el gap de 12 px a 390. |
| Coaches | Máscara suave en la foto principal y aparición corta en las fichas; los retratos secundarios no usan zoom. |
| Planes | Entrada breve y regla coral del Plan 3X. En móvil los planes secundarios interpolan la altura, mantienen el foco en el disparador y dejan su CTA disponible. |
| Cierre y pie | Máscara de la fotografía y del título; descripción y CTA acompañan. El pie permanece estático. |

El menú móvil conserva su diálogo nativo y suma un fundido y una secuencia de enlaces. El indicador activo de escritorio entra y sale por transición; el aviso de demo se abre con una transición breve y conserva Escape y retorno de foco. Un solo observador atiende las entradas al scroll y deja de observar cada elemento cuando pasa. No requiere ocultar contenido por adelantado; con movimiento reducido se muestra directamente el estado final.

En Chromium, las capturas en reposo de 390, 1440 y 1920 coincidieron píxel por píxel con la versión anterior, ya contrastada con los frames finales de Figma. A 360, 390, 430, 768, 1024, 1280, 1440, 1920 y 2560 se conservaron las medidas registradas y no hubo overflow horizontal ni errores de recursos o consola. `npm run check` y `git diff --check` pasaron. Build: 67.00 kB JS y 10.43 kB CSS gzip, frente a 66.54 y 9.23 kB del baseline. El acordeón se comprobó durante la transición, con teclado y CTA disponible; el menú y el aviso conservaron Escape y retorno de foco. No se midió FPS ni LCP. La valoración estética del movimiento en el dispositivo de Dirección queda pendiente.
