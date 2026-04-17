# UI Kit Efiteca

## Propósito

Este documento define las reglas visuales y de composición que deben usarse como referencia permanente para cualquier cambio en la web de Efiteca.

La intención es que futuras iteraciones mantengan una misma lógica de:

- color
- tipografía
- jerarquía
- espaciado
- componentes
- tono visual
- comportamiento responsive

Cuando exista conflicto entre estilos legacy del repositorio y el sistema visual actual de Figma, la fuente de verdad para diseño debe ser este documento más los frames analizados en Figma.

## Fuente de verdad

### Figma analizado

Archivo base:

- `Efiteca`
- `https://www.figma.com/design/kmklL69xj0RoIPKMDJdJdG/Efiteca`

Nodos revisados:

- `66:398`
- `66:891`
- `527:4162` `Soluciones vivienda`
- `527:3803` `Simulador de hipoteca`
- `527:4734` `Sobre nosotros`
- `527:3602` `Contacto`
- `527:3563` `Blog`

Además se extrajeron variables visuales desde Figma para confirmar tokens reales de color y tipografía.

## Regla principal

Efiteca no debe verse como una web genérica de SaaS. La marca mezcla:

- claridad financiera
- cercanía humana
- contraste fuerte entre fondos limpios y bloques intensos
- CTAs muy visibles
- jerarquías tipográficas simples y contundentes

La experiencia visual debe sentirse:

- clara
- premium pero cercana
- moderna
- directa
- confiable

## Sistema de color

### Colores canónicos

Estos son los colores que deben usarse de forma consistente:

- `Morado base`: `#8949FF`
- `Azul violeta profundo`: `#4F3BF9`
- `Morado principal alterno`: `#AD5CFF`
- `Morado hover / highlight`: `#C993FF`
- `Morado claro / fondos suaves`: `#ECDDEE`
- `Amarillo CTA`: `#FCC63D`
- `Negro base`: `#080813`
- `Texto oscuro principal`: `#101828`
- `Gris 50`: `#364153`
- `Gris 40`: `#6A7282`
- `Gris medio`: `#828282`
- `Gris UI`: `#9D9BA8`
- `Gris 30 / bordes suaves`: `#BEC5D2`
- `Gris claro`: `#D9D9D9`
- `Gris 20 / fondo neutro`: `#F9FAFB`
- `Blanco`: `#FFFFFF`
- `Fondo crema cálido`: `#F9F6F3`
- `WhatsApp`: `#25D366`

### Uso recomendado

- `#8949FF` para secciones hero, FAQs, acentos, chips, labels y títulos destacados.
- `#4F3BF9` para gradientes profundos y fondos con más contraste.
- `#FCC63D` exclusivamente para CTAs principales, indicadores de acción y puntos de alto contraste.
- `#080813` para footer, bandas oscuras, tarjetas comparativas oscuras y fondos de cierre.
- `#101828` para texto de lectura principal sobre fondos claros.
- `#ECDDEE` para tarjetas suaves, SEO cards, fondos lilas pálidos y contenedores de apoyo.
- `#F9F6F3` y `#F9FAFB` para respiración de secciones claras.

### Gradientes permitidos

Los gradientes deben seguir la familia violeta de marca:

- Hero y banners:
  - `linear-gradient(163deg, #8949FF 0%, #4F3BF9 100%)`
- Variantes suaves:
  - mezcla de `#8949FF`, `#AD5CFF`, `#C993FF`
- Bloques oscuros:
  - base `#080813` con halo violeta difuso

No introducir gradientes nuevos con verdes, corales, dorados o paletas que no existan ya en Figma.

## Tipografía

### Familias

- Primaria: `Inter`
- Secundaria editorial / descriptiva ligera: `Trueno Light`

### Regla de uso

- `Inter` es la tipografía dominante de la interfaz.
- `Trueno` se usa de forma muy controlada en bloques descriptivos o institucionales, especialmente en footer.
- No introducir nuevas familias visuales para componentes o secciones nuevas.

### Escala tipográfica validada

- `H1 Bold`: `56px`, `700`, `line-height: 1.1`, `letter-spacing: 1px`
- `H1 Regular`: `56px`, `400`, `line-height: 1.1`, `letter-spacing: 1px`
- `H2 Bold`: `40px`, `700`, `line-height: 1.1`
- `H2 Regular`: `40px`, `400`, `line-height: 1.1`
- `H3 Bold`: `28px`, `700`, `line-height: 1.1`
- `H4 Bold`: `22px`, `700`, `line-height: 1.1`
- `Párrafo resaltado Bold`: `18px`, `700`, `line-height: 1.1`
- `Párrafo resaltado Regular`: `18px`, `400`, `line-height: 1.1`
- `Párrafo`: `16px`, `400`, `line-height: 1.1`
- `Body`: `15px`, `400`
- `Body Bold`: `15px`, `700`
- `Body card`: `12px`, `400`
- `Body card Bold`: `12px`, `700`
- `Botón`: `18px`, `700`, `line-height: 27px`, `tracking: 1.8px`, `uppercase`
- `Trueno Light`: `16px`, `300`, `line-height: 1.2`

### Regla de composición

- Los títulos usan frases cortas y contundentes.
- El color de un segundo fragmento del H1 o H2 puede cambiar a `#C993FF` para enfatizar.
- El cuerpo de texto no debe verse “aireado” como editorial. Debe ser compacto, claro y fácil de escanear.

## Espaciado y layout

### Ancho de contenedor

En desktop, el sistema trabaja con una lógica muy consistente:

- lienzo general: `1920px`
- contenido principal: ancho útil entre `1296px` y `1460px`
- padding lateral común:
  - `230px`
  - `312px`
  - según el tipo de sección

Para implementación en código:

- usar contenedores centrados
- preservar la percepción visual de amplitud
- evitar layouts estrechos tipo blog clásico

### Ritmo vertical

Los bloques principales suelen usar:

- `80px` arriba y abajo como ritmo estándar desktop
- `120px` para heroes, cierres o bloques destacados
- `40px` como gap estructural entre grupos internos
- `24px`, `16px`, `12px`, `8px` como micro-espaciado recurrente

### Border radius

Radios dominantes observados:

- `6px` para inputs
- `10px` para FAQ/cajas simples
- `16px` para chips y botones rectangulares cortos
- `24px` para cards frecuentes
- `28px` para cajas de dirección o formularios destacados
- `32px` para bloques promocionales
- `40px` para mapas o media grandes
- `48px` y `60px` para secciones especiales
- `999px` / pill para botones y badges

Regla:

- no mezclar radios arbitrarios nuevos
- si dudas, elegir uno del sistema ya existente

## Sombras

Sombras comunes:

- CTA amarillo:
  - glow cálido visible
  - ejemplo visual: `0 25px 50px rgba(252, 198, 61, 0.3)`
- WhatsApp:
  - glow verde
  - ejemplo visual: `0 8px 24px rgba(37, 211, 102, 0.4)`
- Inputs y botones secundarios:
  - sombra sutil o casi nula
- Cards:
  - sombra muy ligera, nunca agresiva

Regla:

- los elementos con sombra fuerte deben ser pocos
- reservar sombras intensas para CTAs y elementos flotantes

## Componentes base

### Header

Características:

- fondo blanco
- altura contenida
- navegación horizontal simple
- logo a la izquierda
- CTA amarillo a la derecha
- tipografía `Inter Bold 15-16px`
- enlaces sobrios con color gris azulado

Reglas:

- mantenerlo limpio
- evitar menús pesados
- el CTA principal del header siempre debe destacar claramente

### Botón primario

Características:

- fondo `#FCC63D`
- texto oscuro `#101828` o `#080813`
- mayúsculas
- tracking alto
- radio pill
- opcional ícono flecha a la derecha

Uso:

- CTA principal
- acciones clave
- envío de formulario
- agenda / diagnóstico / contacto experto

No usar:

- para acciones secundarias
- en bloques con demasiados botones simultáneos

### Botón secundario

Patrones observados:

- fondo blanco o claro
- borde suave
- texto oscuro o morado
- pill o radio medio

Uso:

- acciones de soporte
- comparativas
- filtros simples

### Link CTA sin contenedor

Patrón usado en cards y SEO local:

- texto morado
- ícono `arrow_forward`
- sin caja alrededor

Uso:

- links editoriales
- cards de noticia
- cards locales

### Badge / Eyebrow

Características:

- pill pequeña
- texto en `12px`
- bold
- color morado o blanco según contexto
- punto circular decorativo opcional

Uso:

- títulos de sección
- categorías
- newsletter
- etiquetas informativas

### WhatsApp floating

Características:

- fondo verde `#25D366`
- texto blanco
- sombra verde
- pill
- siempre como CTA rápido y visible

Regla:

- no duplicar demasiadas veces
- mantenerlo flotante o lateral

### FAQ

Características:

- fondo morado `#8949FF`
- texto blanco
- contenedor horizontal
- ícono circular amarillo a la derecha
- radio `24px`

Regla:

- todo el stack de FAQs debe verse uniforme
- no introducir acordeones visualmente distintos en otras páginas

### Formularios

Características:

- fondo morado para contenedor principal o blanco según sección
- labels en `16px bold`
- inputs blancos
- bordes grises suaves
- radio `6px`
- distribución en dos columnas en desktop cuando aplica

Reglas:

- labels claros y humanos
- placeholders suaves
- CTA amarillo de cierre
- checkbox con texto corto y legible

### Cards de testimonio

Características:

- fondo claro
- estrellas amarillas
- quote principal
- avatar con meta secundaria
- esquinas suaves

Regla:

- mantener mucho aire interior
- texto testimonial como protagonista

### Cards SEO/localización

Características:

- tarjeta horizontal
- imagen a la izquierda
- ciudad en morado
- texto breve
- link CTA morado
- fondo `#ECDDEE` o claro similar

Regla:

- se comportan casi como un carrusel o lista horizontal
- mantener coherencia exacta entre ciudades

### Footer

Características:

- fondo negro `#080813`
- glow violeta lateral
- logo blanco
- enlaces agrupados en columnas
- texto institucional con `Trueno Light`
- CTA amarillo pequeño

Regla:

- el footer es parte del sistema visual, no solo un cierre funcional
- nunca simplificarlo a un footer genérico

## Patrones de sección que se repiten

### Hero de página

Patrón:

- banda morada o gradiente violeta
- título blanco fuerte
- fragmento resaltado en lila
- subtítulo corto
- uno o dos CTAs

### Bloque informativo con media

Patrón:

- texto a un lado
- imagen a otro
- fuerte separación de jerarquía
- uso de bullets con check o iconos circulares

### Banda CTA oscura

Patrón:

- fondo `#080813`
- texto blanco
- CTA amarillo
- bordes grandes
- contraste muy alto

### Sección de métricas

Patrón:

- normalmente sobre bloque oscuro
- 3 números principales
- separadores verticales suaves
- títulos de soporte en blanco o gris claro

### Sección comparativa

Patrón:

- dos columnas
- una favorable a Efiteca
- otra “por tu cuenta”
- iconografía positiva vs negativa

## Iconografía

Reglas:

- iconos sencillos
- trazo limpio
- pocos estilos distintos
- en general se usan dentro de contenedores circulares o cuadrados suaves

No introducir:

- sets de íconos visualmente distintos
- iconografía recargada o decorativa sin función

## Responsive

Aunque los frames revisados son desktop-first, la intención responsive es clara:

- mantener jerarquía intacta
- apilar grids en mobile
- conservar CTAs siempre visibles
- no perder contraste de bloques hero ni CTA
- simplificar, no rediseñar

Reglas:

- si una sección en desktop tiene dos columnas, en mobile debe apilar sin perder orden narrativo
- los botones deben mantener presencia y legibilidad
- evitar textos gigantes en mobile si rompen el ritmo

## Tono visual y editorial

El contenido visual de Efiteca debe sentirse:

- claro
- experto
- sin tecnicismo innecesario
- cercano
- orientado a resolver

En diseño, eso significa:

- títulos directos
- subtítulos cortos
- bullets concretos
- comparativas fáciles de escanear
- CTAs explícitos

## Reglas de implementación en este repositorio

### Fuente visual a seguir

Para cambios nuevos:

- seguir este UI kit
- seguir Figma
- reutilizar los componentes visuales ya existentes en `ReactHome.tsx` y páginas derivadas cuando sea razonable

### Conflicto con estilos legacy

Actualmente el repo tiene dos sistemas visuales conviviendo:

- uno legacy en:
  - `D:\Los Creativos\Efiteca\Pagina Web\efiteca-astro\tailwind.config.mjs`
  - `D:\Los Creativos\Efiteca\Pagina Web\efiteca-astro\src\styles\*.css`
- y otro real, visible, heredado desde Figma y usado por las páginas React grandes

Regla operativa:

- para nuevas decisiones visuales, NO usar como referencia principal los tokens `sand`, `pine`, `coral`, `gold` del `tailwind.config.mjs`
- usar la familia visual morado + amarillo + negro validada en Figma
- si se actualizan tokens globales, deben alinearse con este documento antes que con el esquema legacy

### Tokens recomendados para consolidar

Si se consolida el sistema del repo, los tokens base deberían acercarse a:

- `--color-brand: #8949FF`
- `--color-brand-strong: #4F3BF9`
- `--color-brand-hover: #C993FF`
- `--color-brand-soft: #ECDDEE`
- `--color-accent: #FCC63D`
- `--color-bg-warm: #F9F6F3`
- `--color-bg-neutral: #F9FAFB`
- `--color-surface-dark: #080813`
- `--color-text: #101828`
- `--color-text-strong: #080813`
- `--color-text-muted: #364153`
- `--color-border-soft: #BEC5D2`

## Qué sí hacer

- reutilizar combinaciones ya existentes
- mantener títulos grandes y contundentes
- usar bloques morados y oscuros como momentos de énfasis
- reservar amarillo para acción
- mantener radios generosos
- preservar el contraste entre secciones
- usar Inter como base dominante

## Qué no hacer

- introducir paletas verdes, corales o tierra como nuevas decisiones principales
- usar botones grises o azules fuera del sistema de marca
- reducir demasiado el contraste del CTA
- mezclar estilos de cards que no existan en Figma
- inventar una nueva escala tipográfica
- reemplazar el lenguaje visual por un estilo minimalista genérico

## Checklist antes de aprobar un cambio visual

- ¿Respeta la paleta morado + amarillo + negro + neutrales?
- ¿Usa la jerarquía tipográfica correcta?
- ¿El CTA principal se reconoce en menos de 1 segundo?
- ¿La sección se parece a la familia de bloques ya existentes?
- ¿El radio, sombra y espaciado pertenecen al sistema?
- ¿En mobile conserva la misma intención visual?
- ¿Se siente Efiteca y no una plantilla genérica?

## Próximo paso recomendado

Este documento ya sirve como guía de trabajo. El siguiente paso ideal sería consolidarlo técnicamente en:

- tokens CSS globales
- utilidades reutilizables
- componentes base documentados

Especialmente:

- botones
- badges
- cards
- FAQ
- formularios
- layouts de CTA
- cards SEO/locales
- footer

---

## Addendum Vivo Home Abril 2026

Este bloque reemplaza cualquier decisiÃ³n anterior del documento que contradiga la implementaciÃ³n actual del home.

### Gutter principal

Regla viva del sitio:

- `mobile`: `20px`
- `tablet`: `40px`
- `desktop`: `64px`
- `pantallas grandes`: `80px`
- `ancho mÃ¡ximo`: `1460px`

ImplementaciÃ³n real:

- `--container-width: 1460px`
- `--site-gutter: 20px`
- `@media (min-width: 768px) -> 40px`
- `@media (min-width: 1280px) -> 64px`
- `@media (min-width: 1536px) -> 80px`

Regla:

- toda secciÃ³n nueva debe partir de este gutter
- no volver a usar `xl:px-[230px]` o `xl:px-[312px]`
- si una secciÃ³n se siente estrecha, primero revisar `max-width`, `gap` y `padding`

### Breakpoints base

Los dos cortes mÃ¡s importantes del home son:

- `md`: `768px`
- `xl`: `1280px`

Lectura operativa:

- `mobile`: `< 768px`
- `tablet`: `768px - 1279px`
- `desktop`: `>= 1280px`

### BotÃ³n principal vivo

Sistema actual implementado en home:

- fondo `#FCC63D`
- hover amarillo mÃ¡s claro
- texto `Inter Bold`
- uppercase
- pill completo
- glow amarillo visible
- puede llevar flecha a la derecha

Medidas activas:

- `min-height mobile`: `56px`
- `padding-x mobile`: `20px`
- `padding-x sm`: `24px`
- `padding-x md`: `40px`
- `padding-y mobile`: `14px`
- `padding-y md`: `20px`
- `font-size mobile`: `14px`
- `font-size sm`: `15px`
- `font-size md`: `18px`
- `tracking mobile`: `1.2px`
- `tracking md`: `1.8px`

Regla responsive:

- en mobile puede ir a `width: 100%`
- debe mantener pill completo
- el texto puede romper a dos lÃ­neas si hace falta, pero nunca desbordarse

### CTA de header bloqueado

Regla crÃ­tica:

- `Contactar experto` del header no usa el estilo del botÃ³n principal
- tiene clase propia y debe mantenerse independiente
- cualquier cambio futuro al sistema de botones no debe mutarlo automÃ¡ticamente

### FAQ vivo

Estado real aprobado:

- `normal`: fondo morado, texto blanco
- `hover`: fondo blanco, borde gris suave, texto oscuro
- `activo`: fondo blanco, borde gris suave, pregunta en morado, respuesta visible
- icono circular amarillo a la derecha
- el icono es chevron y rota al abrirse

Regla:

- no volver al bloque activo oscuro anterior
- las demÃ¡s pÃ¡ginas deben reutilizar esta misma lÃ³gica visual

### Responsive ya validado en home

Patrones que ya quedaron buenos y deben replicarse:

- `Testimonios`: carrusel mobile de una card por vista, grid en tablet y desktop
- `Ciudades`: carrusel horizontal con una ciudad por vista en mobile
- `Partners`: marquee continuo con logos reales
- `About`: badge reposicionado dentro de la imagen en mobile
- `MÃ©tricas`: stack vertical en mobile, fila con divisores en desktop
- `Formularios`: pares de campos apilados y solo se parten en 2 columnas cuando el ancho lo soporta

### Sistema vivo del home

Estas reglas ya estÃ¡n probadas y deben ser la base de las otras secciones:

- ancho principal `1460px`
- gutter global `20 / 40 / 64 / 80`
- CTA principal amarillo pill con glow
- CTA de header diferenciado
- FAQ con activo blanco
- testimonios en carrusel mobile
- ciudades en carrusel mobile
- logos con marquee continuo
- footer oscuro con glow violeta y CTA amarillo pequeÃ±o
