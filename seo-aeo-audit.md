# Reporte de Auditoría Técnica de SEO y AEO (Answer Engine Optimization)
**Proyecto:** casolutecdigital.com  
**Fecha:** 1 de julio de 2026  
**Auditor:** Antigravity (AI Coding Assistant, DeepMind)  
**Estado:** Completado

---

## 1. Archivos de Configuración Base

### A. robots.txt
El archivo [robots.txt](file:///c:/Users/Christian%20Gonzalez/Desktop/ca%20sdyt/public/robots.txt) existe en la ruta `/public/robots.txt`. Su configuración es óptima para permitir el rastreo general y tiene directivas específicas para los bots de Inteligencia Artificial (AEO):

```text
User-agent: *
Allow: /
Allow: /en/
Allow: /es-419/
Allow: /es-es/
Allow: /pt-br/

Disallow: /api/
Disallow: /_next/

# IA crawlers — full access for AEO
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Bytespider
Allow: /

User-agent: FacebookBot
Allow: /

Sitemap: https://casolutecdigital.com/sitemap.xml
```

*Análisis:* Excelente configuración. Da acceso completo a los rastreadores de motores de búsqueda y de IA, lo cual es fundamental para el posicionamiento en buscadores convencionales y en motores de respuesta (AEO).

### B. llms.txt
El archivo [llms.txt](file:///c:/Users/Christian%20Gonzalez/Desktop/ca%20sdyt/public/llms.txt) existe en la ruta `/public/llms.txt`. 
Contiene una descripción exhaustiva del modelo de entrega de servicios de CA, idiomas, mercados atendidos, ventajas de precios, desglose de servicios digitales y de infraestructura, información de contacto y una sección estructurada de Preguntas Frecuentes (FAQs) optimizada para motores de búsqueda de IA.

*Análisis:* Muy bien estructurado. Facilita que modelos como GPT, Claude o Gemini procesen rápidamente la propuesta de valor y respondan consultas precisas sobre la empresa.

### C. sitemap.xml
El sitemap se genera dinámicamente mediante el archivo [sitemap.ts](file:///c:/Users/Christian%20Gonzalez/Desktop/ca%20sdyt/src/app/sitemap.ts). 
Genera las siguientes URLs por idioma:

*   **Español (es-MX / base):**
    *   `https://casolutecdigital.com/` (Inicio)
    *   `https://casolutecdigital.com/servicios`
    *   `https://casolutecdigital.com/redes-empresariales` *(¡No existe en el código!)*
    *   `https://casolutecdigital.com/ciberseguridad` *(¡No existe en el código!)*
    *   `https://casolutecdigital.com/servidores` *(¡No existe en el código!)*
    *   `https://casolutecdigital.com/soporte-tecnico` *(¡No existe en el código!)*
    *   `https://casolutecdigital.com/videovigilancia-cctv` *(¡No existe en el código!)*
    *   `https://casolutecdigital.com/google-workspace` *(¡No existe en el código!)*
    *   `https://casolutecdigital.com/seo-aeo`
    *   `https://casolutecdigital.com/apps-moviles`
    *   `https://casolutecdigital.com/sistemas`
    *   `https://casolutecdigital.com/automatizacion`
    *   `https://casolutecdigital.com/portafolio`
    *   `https://casolutecdigital.com/nosotros`
    *   `https://casolutecdigital.com/contacto`
*   **Inglés (en):**
    *   `https://casolutecdigital.com/en`
    *   `https://casolutecdigital.com/en/services`
    *   `https://casolutecdigital.com/en/services/web-development`
    *   `https://casolutecdigital.com/en/services/mobile-app-development`
    *   `https://casolutecdigital.com/en/services/custom-crm`
    *   `https://casolutecdigital.com/en/services/automation-ai`
    *   `https://casolutecdigital.com/en/services/whatsapp-bot`
    *   `https://casolutecdigital.com/en/services/seo-aeo`
    *   `https://casolutecdigital.com/en/services/ui-ux-design`
    *   `https://casolutecdigital.com/en/contact`
*   **Español LATAM (es-419):**
    *   `https://casolutecdigital.com/es-419`
    *   `https://casolutecdigital.com/es-419/servicios`
    *   `https://casolutecdigital.com/es-419/contacto`
*   **Español España (es-es):**
    *   `https://casolutecdigital.com/es-es`
    *   `https://casolutecdigital.com/es-es/servicios`
    *   `https://casolutecdigital.com/es-es/contacto`
*   **Portugués Brasil (pt-br):**
    *   `https://casolutecdigital.com/pt-br`
    *   `https://casolutecdigital.com/pt-br/servicos`
    *   `https://casolutecdigital.com/pt-br/contato`

> [!WARNING]
> **Errores Críticos en el Sitemap:**
> 1. **Páginas inexistentes (404s):** El sitemap incluye `/redes-empresariales`, `/ciberseguridad`, `/servidores`, `/soporte-tecnico`, `/videovigilancia-cctv` y `/google-workspace`. Ninguno de estos paths tiene un archivo `page.tsx` en el proyecto. Rastrear estas páginas devolverá un error 404, penalizando el SEO.
> 2. **Páginas omitidas:** El sitemap no incluye las páginas reales `/apps-web` (desarrollo web en español), `/marketing`, `/paquetes-web` ni `/clases`, a pesar de que sí existen en el proyecto.

### D. Configuración Global de Canonical URLs
**No existe** un archivo o comportamiento global para manejar URLs canónicas de forma dinámica. 
*   En la página de inicio (`/`), se definen de forma manual para cada locale en `generateMetadata`.
*   En las subpáginas (como `/servicios`, `/contacto`, etc.), **falta por completo** el tag canonical, ya que son componentes de cliente (`'use client';`) y no exportan ningún tipo de metadatos.

---

## 2. Meta Tags por Página

### A. Página de Inicio (`/` y variantes locales)
La metadata de la página de inicio se configura de manera dinámica en [src/app/[locale]/page.tsx](file:///c:/Users/Christian%20Gonzalez/Desktop/ca%20sdyt/src/app/%5Blocale%5D/page.tsx) según el idioma:

*   **Español México (es-MX / default):**
    *   `title`: `"CA Soluciones Digitales | Desarrollo Web · Infraestructura TI · Ciberseguridad"`
    *   `description`: `"Ecosistemas digitales completos: webs, apps, sistemas, redes, ciberseguridad, CCTV, servidores y soporte TI. Todo para operar sin interrupciones."`
    *   `canonical`: `https://casolutecdigital.com/`
    *   `openGraph`: **Falta por completo.** No se define ningún objeto Open Graph para esta variante local, lo que perjudicará la apariencia al compartir en redes sociales y apps de mensajería.
*   **Inglés (en):**
    *   `title`: `"CA Digital Solutions | Web Development, Apps & IT Services Worldwide"`
    *   `description`: `"Professional software agency serving businesses worldwide. We design and build custom websites, mobile apps, CRM systems, AI automation, and IT solutions. English-speaking team, competitive remote rates, and enterprise-grade support."`
    *   `canonical`: `https://casolutecdigital.com/en`
    *   `openGraph`: 
        *   `type`: `"website"`
        *   `locale`: `"en_US"`
        *   `url`: `"https://casolutecdigital.com/en"`
        *   `siteName`: `"CA Digital Solutions"`
        *   `title`: `"CA Digital Solutions | Web, Apps & IT Services — Enterprise Quality, Competitive Rates"`
        *   `description`: `"Professional software agency building custom websites, mobile apps, CRM systems, and AI automation for businesses worldwide. English-speaking remote team, competitive rates."`
        *   `images`: `[{ url: '/assets/og-image-en.jpg', width: 1200, height: 630 }]`
*   **Español Latinoamérica (es-419):**
    *   `title`: `"CA Soluciones Digitales | Agencia Web, Apps y Sistemas para toda Latinoamérica"`
    *   `description`: `"Agencia digital con sede en México atendiendo clientes en toda Latinoamérica. Desarrollo web, apps móviles, CRM, automatización con IA y bots de WhatsApp. Trabajo 100% remoto. Precios en USD. Soporte real."`
    *   `canonical`: `https://casolutecdigital.com/es-419/`
    *   `openGraph`: **Falta por completo.**
*   **Español España (es-es):**
    *   `title`: `"CA Soluciones Digitales | Agencia de Desarrollo Web y Apps desde México para España"`
    *   `description`: `"Agencia digital mexicana con servicios para España. Desarrollo web con React y Next.js, apps móviles, sistemas a medida, CRM, automatización con IA y bots de WhatsApp. Servicio remoto, precios competitivos."`
    *   `canonical`: `https://casolutecdigital.com/es-es/`
    *   `openGraph`: **Falta por completo.**
*   **Portugués Brasil (pt-br):**
    *   `title`: `"CA Soluções Digitais | Desenvolvimento Web, Apps e Sistemas no Brasil"`
    *   `description`: `"Agência digital mexicana atendendo clientes no Brasil. Desenvolvimento web com React e Next.js, apps móveis, sistemas personalizados, CRM, automação com IA e bots do WhatsApp. Trabalho remoto, preços competitivos."`
    *   `canonical`: `https://casolutecdigital.com/pt-br/`
    *   `openGraph`: **Falta por completo.**

### B. Subpáginas de la Aplicación
Para **TODAS** las subpáginas dinámicas en `src/app/[locale]/` (como `/servicios`, `/contacto`, `/seo-aeo`, `/nosotros`, `/portafolio`, `/apps-web`, `/apps-moviles`, `/sistemas`, `/automatizacion`, `/marketing`, `/paquetes-web`, `/clases`, `/legal/privacidad` y `/legal/terminos`):
*   `<title>` actual: **Falta.** Al ser componentes con `'use client';` sin archivo wrapper de servidor, no exportan metadata. El navegador usará un título en blanco o heredará metadatos inexistentes.
*   `meta description` actual: **Falta.**
*   `canonical tag`: **Falta.**
*   `Open Graph (og:title, og:description, og:image)`: **Faltan.**
*   `Structured Data (JSON-LD)`: **Falta.**

### C. Rutas Estáticas de Legal (fuera de la carpeta locales)
*   **/legal/privacidad** (en [src/app/legal/privacidad/page.tsx](file:///c:/Users/Christian%20Gonzalez/Desktop/ca%20sdyt/src/app/legal/privacidad/page.tsx)):
    *   `title`: `"Aviso de Privacidad | CA Soluciones Digitales"`
    *   `description`: `"Aviso de privacidad integral de CA Soluciones Digitales y Tecnológicas conforme a la LFPDPPP."`
    *   `canonical`: **Falta.**
    *   `openGraph`: **Falta.**
*   **/legal/terminos** (en [src/app/legal/terminos/page.tsx](file:///c:/Users/Christian%20Gonzalez/Desktop/ca%20sdyt/src/app/legal/terminos/page.tsx)):
    *   `title`: `"Términos y Condiciones | CA Soluciones Digitales"`
    *   `description`: `"Términos y condiciones de uso del sitio web y servicios de CA Soluciones Digitales y Tecnológicas."`
    *   `canonical`: **Falta.**
    *   `openGraph`: **Falta.**

---

## 3. SEO Multilingüe e Hreflang

### A. Configuración de hreflang
La configuración de etiquetas alternas por idioma (`hreflang`) se define dinámicamente a nivel de layout en [src/app/[locale]/layout.tsx](file:///c:/Users/Christian%20Gonzalez/Desktop/ca%20sdyt/src/app/%5Blocale%5D/layout.tsx):

```typescript
    alternates: {
      languages: {
        'es-MX':  'https://casolutecdigital.com/',
        'en':     'https://casolutecdigital.com/en/',
        'es-419': 'https://casolutecdigital.com/es-419/',
        'es-ES':  'https://casolutecdigital.com/es-es/',
        'pt-BR':  'https://casolutecdigital.com/pt-br/',
        'x-default': 'https://casolutecdigital.com/en/',
      },
    },
```

> [!CRITICAL]
> **Error de hreflang estático en subpáginas:**
> Al estar hardcodeadas las URLs de inicio (`https://casolutecdigital.com/`, `https://casolutecdigital.com/en/`, etc.) en el layout global, cuando un usuario o bot visita una subpágina (por ejemplo, `https://casolutecdigital.com/servicios`), las etiquetas `hreflang` en el HTML apuntarán erróneamente a las páginas de inicio de los demás idiomas, en lugar de apuntar a la versión traducida de esa subpágina en particular (`https://casolutecdigital.com/en/services`, `https://casolutecdigital.com/pt-br/servicos`, etc.). Esto destruye la equivalencia lingüística que los buscadores esperan.

### B. x-default
El tag `x-default` apunta correctamente a la versión en inglés (`https://casolutecdigital.com/en/`), que actúa como la versión de reserva global por defecto para usuarios de cualquier otro idioma.

---

## 4. Auditoría de AEO (Answer Engine Optimization)

### A. Optimización para Modelos de Lenguaje
El sitio presenta una base sólida para AEO:
1.  El archivo `llms.txt` provee contexto de forma estructurada e incluye un set de preguntas preparadas que facilitan la indexación semántica en respuestas de ChatGPT y Claude.
2.  El robots.txt da permiso explícito a los bots de IA, evitando bloqueos de rastreo.

### B. Estructura y Semántica del HTML
*   **Jerarquía de Encabezados:** Cada página utiliza exactamente una etiqueta `<h1>` principal (o `<motion.h1>`) en el Hero de la página, lo que proporciona un punto de entrada claro para el tema central.
*   **Structured Data / Esquemas:**
    *   La página de inicio tiene un esquema `LocalBusiness` con la información de contacto, logo, redes sociales y países en los que opera.
    *   **Problema AEO:** Falta estructuración semántica del bloque de Preguntas Frecuentes. El componente `<FAQSection />` renderiza las preguntas y respuestas usando texto plano dentro de divs dinámicos, pero no genera un marcado estructurado de tipo `FAQPage` (JSON-LD), impidiendo que buscadores inteligentes asimilen formalmente el par pregunta-respuesta.
    *   Faltan esquemas de tipo `Service` en las páginas de servicio y `AboutPage` en `/nosotros`.

---

## 5. Rendimiento y Core Web Vitals

*   **Ignorado de Errores en Build:** El archivo `next.config.ts` ignora errores de Typescript y ESLint durante la compilación (`ignoreBuildErrors: true`, `ignoreDuringBuilds: true`). Esto puede permitir fallos de código silenciosos que afecten al rendimiento o indexación en producción.
*   **Precarga de Fuentes Desactivada:** En `layout.tsx`, las fuentes `Inter` y `Syne` se cargan con `preload: false`. Esto se implementó para evitar fallos de compilación sin internet, pero provoca FOUT (Flash of Unstyled Text) y aumenta la métrica CLS (Cumulative Layout Shift) en la carga inicial, lo que afecta negativamente al Core Web Vitals.
*   **Uso de etiquetas img crudas:** En `nosotros/page.tsx` se utiliza una etiqueta `<img>` convencional en lugar del componente `<Image>` de Next.js. Esto deshabilita la optimización automática de tamaño, el formato WebP de última generación y el Lazy Loading integrado de Next.js, ralentizando la velocidad de carga.

---

## 6. Recomendaciones Priorizadas (Roadmap)

### Prioridad 1: Crítica / Alta (Resolver de Inmediato)

1.  **Corregir Mismatch en Sitemap:**
    *   *Por qué:* Los buscadores penalizan la presencia de enlaces rotos (404) en el sitemap y la omisión de páginas reales debilita la indexación.
    *   *Acción:* Editar `sitemap.ts` para eliminar `/redes-empresariales`, `/ciberseguridad`, `/servidores`, `/soporte-tecnico`, `/videovigilancia-cctv` y `/google-workspace`. Añadir en su lugar las rutas existentes `/apps-web`, `/marketing`, `/paquetes-web` y `/clases`.
2.  **Habilitar Metadata en Subpáginas:**
    *   *Por qué:* Páginas sin títulos ni descripciones específicas no pueden posicionarse de forma efectiva en Google.
    *   *Acción:* Crear páginas híbridas o separar la lógica de cliente. Se sugiere crear un archivo de servidor `page.tsx` para cada ruta (que exporte el objeto `metadata` estático o dinámico con `generateMetadata`) y que importe un componente hijo con `'use client';` que maneje el resto de la interfaz.
3.  **Hreflang Dinámico en el Layout:**
    *   *Por qué:* Un hreflang que siempre apunta a la página de inicio arruina la correspondencia de idiomas en las subpáginas.
    *   *Acción:* En `layout.tsx`, obtener la ruta actual del usuario y construir los enlaces hreflang dinámicamente concatenando la base del idioma con el pathname relativo.

---

### Prioridad 2: Media (Mejoras de Visibilidad e Indexación)

1.  **Añadir Open Graph a los Locales en Español y Portugués:**
    *   *Por qué:* Al compartir el sitio en redes, solo la versión en inglés muestra una tarjeta enriquecida (título, descripción, imagen).
    *   *Acción:* Copiar y adaptar el bloque `openGraph` de la versión inglesa al resto de los casos de idioma en `generateMetadata` de la página de inicio.
2.  **Integrar Esquemas JSON-LD de Servicios y FAQs:**
    *   *Por qué:* Los esquemas estructurados facilitan a la IA entender las respuestas exactas a las consultas de los usuarios.
    *   *Acción:*
        *   Generar un esquema de tipo `FAQPage` dinámicamente en la página de inicio que recopile las preguntas del FAQSection.
        *   Crear esquemas `Service` individuales para cada página de servicios describiendo el tipo de servicio, el público objetivo y la zona de servicio.
3.  **Migrar a Next.js Image:**
    *   *Por qué:* Optimiza el tamaño del archivo de imagen según el dispositivo, reduciendo el Largest Contentful Paint (LCP).
    *   *Acción:* Reemplazar la etiqueta `<img>` en `nosotros/page.tsx` por el componente `Image` de `next/image` con dimensiones optimizadas.

---

### Prioridad 3: Baja (Buenas Prácticas Técnicas)

1.  **Habilitar Precarga de Fuentes (Font Preloading):**
    *   *Por qué:* Evita el parpadeo de texto en la carga inicial y reduce la inestabilidad visual (CLS).
    *   *Acción:* Volver a habilitar `preload: true` para las fuentes de Google en `layout.tsx` una vez que las fases críticas locales estén resueltas.
2.  **Resolver Advertencia de eslint en Configuración:**
    *   *Por qué:* Evita posibles comportamientos inesperados de Next.js al usar propiedades de configuración obsoletas.
    *   *Acción:* Retirar el bloque `eslint` de `next.config.ts` y manejar la exclusión de linting mediante el CLI o un archivo `.eslintignore` estándar.
