# Efiteca Corporate Web

Base para la web corporativa de Efiteca: una arquitectura orientada a rendimiento extremo, SEO internacional y operación simple a largo plazo.

La estrategia técnica prioriza contenido estático para maximizar velocidad, estabilidad y cacheabilidad, y reserva la logica en el edge solo para decisiones ligeras de entrada, como la sugerencia inicial de idioma o mercado.

## Objetivos del proyecto

- Carga casi instantanea en cualquier mercado.
- SEO tecnico solido para idiomas y regiones.
- Mantenimiento bajo, sin dependencias innecesarias ni capas dinamicas complejas.
- Seguridad compatible con un sitio corporativo del sector financiero.
- Flujo editorial sencillo mediante Markdown/MDX y validacion estricta.

## Stack recomendado

- Framework: Astro como base principal del sitio.
- Modo de renderizado: SSG por defecto con capacidades hybrid solo donde aporten valor real.
- Estilos: Tailwind CSS.
- Lenguaje: TypeScript en modo estricto.
- Contenido tipado: `astro:content` + Zod.
- Infraestructura: Vercel para CDN global, previews y edge middleware.
- CI/CD: GitHub + GitHub Actions + despliegue en Vercel.

## Decisiones de arquitectura

### 1. SSG primero, edge despues

La mayor parte del sitio debe compilarse como HTML estatico. Esto incluye:

- Home por idioma.
- Landings por mercado.
- Paginas corporativas.
- Noticias, blog y recursos.

El edge middleware no debe convertirse en la base del routing. Su uso recomendado es:

- Detectar idioma o mercado al entrar por `/`.
- Respetar una cookie de preferencia si el usuario ya eligio.
- No reescribir ni redirigir rutas profundas.
- No bloquear rastreo ni indexacion de bots.

Esto mantiene la complejidad baja y protege el rendimiento de cache.

### 2. i18n separado de geo-segmentacion

Idioma y region no deben mezclarse sin criterio. La estructura recomendada es:

- `/es/` y `/en/` como capas principales de idioma.
- `/es/[region]/` o `/en/[region]/` solo cuando exista una necesidad SEO o comercial real.

No todas las regiones merecen una URL dedicada. Solo deben existir rutas regionales cuando haya al menos una de estas condiciones:

- Contenido legal o regulatorio diferente.
- Propuesta comercial distinta por mercado.
- Equipo local, oficinas, telefonos o pruebas sociales locales.
- Objetivo SEO claro con contenido suficientemente diferenciado.

Si una pagina regional replica casi todo el contenido del idioma base, es mejor no crearla.

### 3. SEO internacional controlado

La base del proyecto debe generar automaticamente:

- `canonical` por pagina.
- `hreflang` por idioma y mercado.
- `x-default` para la version global.
- sitemap XML.
- `robots.txt`.
- Open Graph y metadatos base.

Ademas, debe existir un mapa central de mercados para evitar decisiones repartidas por todo el proyecto.

## Estructura recomendada

```text
/
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
│   ├── fonts/
│   ├── images/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── content/
│   │   ├── news/
│   │   ├── pages/
│   │   ├── markets/
│   │   └── config.ts
│   ├── data/
│   │   ├── locales.ts
│   │   ├── markets.ts
│   │   └── navigation.ts
│   ├── components/
│   │   ├── common/
│   │   ├── seo/
│   │   ├── i18n/
│   │   └── regions/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── [lang]/
│   │   │   ├── index.astro
│   │   │   ├── news/
│   │   │   │   ├── index.astro
│   │   │   │   └── [slug].astro
│   │   │   └── [region]/
│   │   │       └── index.astro
│   │   ├── sitemap.xml.ts
│   │   └── 404.astro
│   ├── lib/
│   │   ├── seo/
│   │   ├── i18n/
│   │   ├── content/
│   │   └── utils/
│   ├── styles/
│   │   └── global.css
│   ├── env.d.ts
│   └── middleware.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── vercel.json
```

## Gestion de contenido

La web debe operar sin base de datos para el contenido editorial.

- Noticias y blog en Markdown o MDX.
- Validacion de frontmatter con Zod.
- Colecciones de contenido mediante `astro:content`.
- Assets optimizados desde Astro para generar formatos modernos como WebP y Avif.

Esto permite seguridad alta, bajo mantenimiento y una experiencia editorial simple para el equipo.

## Middleware: alcance recomendado

`src/middleware.ts` debe ser pequeno, predecible y facil de auditar.

Responsabilidades recomendadas:

- Leer geolocalizacion disponible en Vercel.
- Resolver idioma o mercado sugerido.
- Redirigir solo desde `/`.
- Persistir preferencia del usuario en una cookie.

Responsabilidades que conviene evitar:

- Redirigir cualquier URL interna.
- Reescribir contenido SEO critico.
- Tomar decisiones complejas de negocio.
- Generar HTML dinamico segun IP.

## Seguridad

La base del proyecto debe salir con una base de cabeceras robusta:

- `Strict-Transport-Security`
- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

La CSP debe definirse en funcion de los recursos reales del proyecto. Si se agregan terceros como analitica, formularios, mapas o video, la politica debe ajustarse conscientemente.

Tambien se recomienda:

- Fuentes alojadas localmente.
- Minimo numero de scripts de terceros.
- Consentimiento explicito si se incorporan herramientas de tracking.
- No depender de Google Fonts ni recursos remotos no esenciales.

## Rendimiento

El objetivo correcto no es prometer siempre `100/100` en Lighthouse, sino construir el sistema para maximizar Core Web Vitals desde la base.

Principios de esta base:

- HTML estatico cuando sea posible.
- CSS utilitario purgado.
- Imagenes responsivas y optimizadas.
- Fuentes locales con carga controlada.
- JavaScript minimo.
- Sin dependencias pesadas en cliente salvo necesidad real.

## CI/CD recomendado

### GitHub Actions

Antes de considerar un despliegue sano, el pipeline debe ejecutar:

- `npm run lint`
- `npm run typecheck`
- `npm run astro:check`
- `npm run build`

### Vercel

- Preview deployments por pull request.
- Produccion conectada a la rama principal.
- Variables de entorno gestionadas en Vercel cuando apliquen.

GitHub Actions valida calidad. Vercel se encarga del ciclo de despliegue y distribucion global.

## Requisitos tecnicos

- Node.js 20 o superior.
- NPM o PNPM.

## Scripts esperados

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run astro:check
npm run build
```

## Criterios para considerar esta base robusta

La base se considera lista para produccion cuando cumpla estos minimos:

- Todas las rutas clave compilan en estatico.
- El middleware solo afecta la entrada y no degrada SEO.
- Existe una fuente unica de verdad para idiomas y mercados.
- Las etiquetas SEO se generan automaticamente desde utilidades compartidas.
- El contenido editorial se valida con esquemas estrictos.
- El pipeline falla si hay errores de tipos, lint o build.
- Las cabeceras de seguridad se envian de forma consistente.

## Conclusión

Esta arquitectura es recomendable para Efiteca porque combina rendimiento, claridad operativa y capacidad de crecimiento internacional sin introducir una capa de complejidad innecesaria.

La clave para que funcione bien no es usar edge en todas partes, sino mantenerlo bajo control. Si el proyecto conserva ese principio, este stack es una base muy solida para la web corporativa.
