# Estado de SEO, AEO e internacionalización

**Proyecto:** casolutecdigital.com
**Última revisión:** 22 de septiembre de 2026

> Este archivo sustituye a una auditoría anterior fechada el 1 de julio de 2026 que
> declaraba la plataforma *"100% Optimizada y Sin Errores"*. Esa afirmación no era
> correcta: en ese momento las 80 rutas se renderizaban bajo demanda, los canonical de
> `es-ES` y `pt-BR` apuntaban a URLs que redirigían, y el `FAQPage` se servía en español
> en los cinco idiomas. Se documenta aquí para que nadie vuelva a tomar aquel informe
> como línea base.

---

## Arquitectura

| Aspecto | Estado |
| :--- | :--- |
| Renderizado | 80 rutas (16 × 5 locales) prerenderizadas como HTML estático (SSG) |
| Idiomas | `es-MX` (por defecto, sin prefijo), `en`, `es-419`, `es-ES`, `pt-BR` |
| Detección de idioma | Desactivada (`localeDetection: false`). La raíz sirve siempre `es-MX`; el idioma se elige de forma explícita con el selector del navbar |
| Cookie de idioma | Desactivada (`localeCookie: false`) |
| Canonical y hreflang | Generados en `src/lib/seoUtils.ts` con el casing correcto del locale |
| Sitemap | 80 URLs, cada una con `lastmod` y los 5 `hreflang` |

**Por qué la detección está desactivada:** con ella, visitar una URL con prefijo dejaba
una cookie `NEXT_LOCALE` y a partir de ahí la raíz redirigía siempre a ese idioma. Sin
selector, no había forma de salir salvo borrando la cookie a mano.

---

## Datos estructurados

130 bloques JSON-LD en 84 páginas, todos válidos y con `inLanguage`.

| Tipo | Nº | Dónde |
| :--- | :--- | :--- |
| `Service` | 50 | Páginas de servicio, nombre localizado por ruta |
| `BreadcrumbList` | 40 | Páginas de servicio |
| `FAQPage` | 10 | Home y `/seo-aeo` |
| `Course` | 5 | `/clases` |
| `ContactPage` | 5 | `/contacto` |
| `CollectionPage` + `ItemList` | 5 | `/portafolio`, con los 14 proyectos |
| `AboutPage` | 5 | `/nosotros` |
| `WebSite` / `LocalBusiness` | 10 | Home |

### Cobertura geográfica

`areaServed` distingue entre lo remoto y lo presencial:

- **Servicios digitales** — cobertura por mercado según el locale (10 países en `en`,
  13 en `es-419`, etc.).
- **`/infraestructura-ti`** — solo México. Está en `ONSITE_ONLY_ROUTES` dentro de
  `seoUtils.ts` porque redes, servidores y CCTV exigen desplazamiento. **No cambiar
  esto sin que exista cobertura real**: declarar países donde no se presta el servicio
  es una afirmación falsa en los datos estructurados.

---

## Rastreadores de IA

`robots.txt` permite explícitamente 22 agentes (GPTBot, OAI-SearchBot, ChatGPT-User,
ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended,
Applebot-Extended, meta-externalagent, CCBot, Amazonbot, cohere-ai, MistralAI-User y
otros). Se listan uno a uno aunque `User-agent: *` ya los cubra, porque varios ignoran
el comodín.

`llms.txt` y `llms-full.txt` son bilingües (español e inglés) e incluyen la cobertura
por mercado y los cinco puntos de entrada por idioma.

**Nota importante:** los crawlers de IA no ejecutan JavaScript. El paso a SSG es lo que
garantiza que vean el contenido; conviene no revertirlo.

---

## Contenido por idioma

688 claves por idioma en `messages/*.json`, con estructura idéntica en los cinco
archivos. Cubren navbar, footer, banner de cookies, formulario, chatbot y las 16
páginas.

Las tres variantes de español **no son copias**: `es-MX` habla de México, `es-419` de
pagos y contratos entre países, y `es-ES` del RGPD. Contenido idéntico en cinco URLs se
canibalizaría y no posicionaría ninguna.

### Convenciones que conviene respetar

- El `value` del `<select>` de contacto se envía a Formspree **en español** aunque la
  etiqueta se traduzca, para que el equipo lea siempre la misma etiqueta.
- En `/portafolio`, los valores de `type` son identificadores dentro de los datos y
  siguen en español; solo se traduce la etiqueta visible.
- El árbol del chatbot (ids, saltos, enlaces) vive en el código; solo el texto está en
  los mensajes.
- Los nombres de tecnología (Next.js, PostgreSQL, Docker) no se traducen.

---

## Catálogo de productos y CA Explica

Inspirado en "Energy Explica" y el catálogo de servicios de APEN. Fase 1: solo **es-MX** (MXN) y **en** (USD).

| Pieza | Dónde | Notas |
| :--- | :--- | :--- |
| 18 fichas de producto | `/servicios/[categoria]/[slug]` · `/en/services/[category]/[slug]` | Una ficha por intención de búsqueda, no por nivel. Datos en `src/lib/catalog/products.ts` |
| Precio "desde" público | Hero, catálogo, JSON-LD `Offer` y llms.txt | Del manual interno de cotizaciones (sept. 2026) |
| Tabla completa por nivel | `/api/precios`, tras registro | `pricing.server.ts` usa `server-only`; los importes no están en el HTML ni en el JS del cliente. El lead se reenvía a Formspree desde el servidor |
| CA Explica (4 guías) | `/guias` · `/en/guides` | Respuesta rápida de 40–60 palabras, datos clave, fuentes verificadas, FAQs. Datos en `src/lib/catalog/guides.ts` |
| Nova | Anfitriona de guías y chatbot | Sustituye a Cassie |

- **hreflang:** estas páginas solo enlazan es-MX ↔ en. es-419, es-ES y pt-BR responden 404 hasta que tengan textos propios.
- **Next 16:** si `generateStaticParams` devuelve `[]` para algún `[locale]`, Next descarta todas las rutas del segmento. Por eso los idiomas no publicados reciben un parámetro de relleno (`UNPUBLISHED_LOCALE_PARAMS`) que resuelve a 404.
- **Coherencia de datos:** los plazos de la FAQ de inicio y de `llms-full.txt` se alinearon con el manual (web 2–3 / 3–5 semanas; sistemas 4–10; apps y automatizaciones 4–12).
- **Al cambiar precios:** actualizar `products.ts` (desde público) y `pricing.server.ts` (niveles) a la vez, y regenerar las secciones de catálogo de `llms.txt` / `llms-full.txt`.

## Pendiente

- **Textos legales.** Traducidos de forma fiel, pero redactados bajo la LFPDPPP
  mexicana. Para clientes de la UE (RGPD) o Brasil (LGPD) hace falta revisión jurídica:
  no basta con traducir.
- **`hero-video.mp4`** pesa 9.5 MB. Ya no bloquea el primer render (el `src` se asigna
  tras la hidratación y no se descarga con `prefers-reduced-motion` ni con Save-Data),
  pero reencodearlo lo dejaría en torno a 2 MB. Requiere ffmpeg.
- **`Review` / `AggregateRating`.** No se pueden inventar. Si hay testimonios reales,
  es de las señales que más mueven la aguja en AEO.
- **30 errores de ESLint preexistentes** (`no-explicit-any`, `no-unescaped-entities`).
- **Catálogo fase 2:** fichas y guías en es-419, es-ES y pt-BR con textos propios; fichas de infraestructura TI y clases (el manual no trae precios de esas líneas).
- **Variante Markdown para agentes** (como APEN: `Accept: text/markdown` / sufijo `.md`) y `agent-instructions.md`.
- `home.png` y `logo.png` se conservan en PNG a propósito: son el `og:image` y el logo
  del JSON-LD, y WebP no es fiable en las previews de enlace de las redes.
