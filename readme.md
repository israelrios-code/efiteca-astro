# Efiteca Astro

Proyecto web de Efiteca construido con Astro, React, Tailwind y TinaCMS.

Este repositorio ya incluye varias páginas maquetadas a partir de Figma, módulos reutilizables, contenido editable desde TinaCMS y una salida estática que se puede subir a hosting tradicional como BanaHosting.

## Stack

- Astro 5
- React 19
- Tailwind CSS
- TinaCMS
- TypeScript
- Vercel adapter

## Requisitos

- Node.js `24.x`
- npm

## Comandos principales

```bash
npm install
npm run dev
npm run build
npm run build:static
npm run preview
```

## Modo desarrollo

El proyecto se trabaja normalmente con TinaCMS activo:

```bash
npm run dev
```

Eso levanta:

- Astro
- TinaCMS local
- panel admin para edición visual

Rutas útiles en local:

- Sitio: `http://localhost:4321`
- Admin Tina: `http://localhost:4321/admin/index.html`

## Build

### Build normal

```bash
npm run build
```

Genera la build estándar del proyecto.

### Build estático para hosting tradicional

```bash
npm run build:static
```

Esto genera una salida estática en `dist/` pensada para subir a hosting tipo cPanel / BanaHosting.

También existe `.htaccess` en `public/.htaccess` para ayudar con el despliegue estático.

## Estructura importante

```text
src/
  components/
    about/
    blog/
    contact/
    home/
    simulator/
    solutions/
  content/
    config.ts
    pages/
  layouts/
  pages/
    [lang]/
```

## Contenido editable

El contenido principal vive en:

- `src/content/pages/*.md`

La validación del contenido está en:

- `src/content/config.ts`

La configuración de TinaCMS está en:

- `tina/config.ts`

Cuando se agregue un campo nuevo editable, normalmente hay que tocar estas 4 piezas:

1. `src/content/config.ts`
2. `tina/config.ts`
3. el `.md` correspondiente en `src/content/pages/`
4. la query Tina en la página `.astro` que consume ese contenido

Si falta una de esas piezas, el campo puede dejar de aparecer o no actualizarse bien.

## Páginas implementadas

Actualmente el proyecto tiene estas rutas principales por idioma:

- `/[lang]/`
- `/[lang]/soluciones-vivienda/`
- `/[lang]/simulador-hipoteca/`
- `/[lang]/sobre-nosotros/`
- `/[lang]/contacto/`
- `/[lang]/news/`
- `/[lang]/news/[slug]/`
- `/[lang]/[region]/`

Idiomas activos:

- `es`
- `en`

## Convenciones del proyecto

- Se reutilizan módulos entre páginas siempre que el diseño lo permita.
- La prioridad visual ha sido seguir Figma lo más fiel posible.
- Muchas secciones usan un sistema de contenedor centrado consistente.
- Hay varios componentes React grandes por página; antes de refactorizar, conviene revisar qué bloques ya se reutilizan.

## TinaCMS

Notas prácticas:

- En dev, Tina usa GraphQL local.
- Si un bloque no aparece editable, revisar primero:
  - schema de contenido
  - schema de Tina
  - query de la página
  - `data-tina-field`
- Hay archivos generados en `tina/__generated__/` que cambian cuando se actualiza el schema.

## Deploy

### Vercel

El repo ya tiene remoto configurado para despliegue desde GitHub.

### Hosting estático

Para hosting compartido:

1. ejecutar `npm run build:static`
2. subir el contenido de `dist/`

## Estado del repo

Este proyecto ha tenido varias iteraciones rápidas de maquetación y ajuste visual. Antes de hacer limpieza profunda:

- revisar módulos duplicados
- revisar assets en `public/images`
- revisar archivos zip/log temporales del workspace

No conviene hacer refactor grande sin validar primero que no se rompan los mapeos de TinaCMS.

## Recomendación para el siguiente programador

Orden sugerido para trabajar con seguridad:

1. levantar `npm run dev`
2. validar la página visualmente
3. abrir Tina y comprobar campos editables
4. tocar schema + query + componente en el mismo cambio cuando haga falta
5. correr `npm run build` antes de subir

## Repositorio

Remoto actual:

- [https://github.com/israelrios-code/efiteca-astro](https://github.com/israelrios-code/efiteca-astro)
