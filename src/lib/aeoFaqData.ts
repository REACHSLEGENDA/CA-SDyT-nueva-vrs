import { AppLocale, pickLocale } from './locales';

export interface AeoFAQItem {
  question: string;
  answer: string;
}

/**
 * Preguntas frecuentes de la página SEO/AEO, por locale.
 *
 * Estas respuestas son deliberadamente conservadoras: dicen con claridad lo que no
 * se puede garantizar. Un motor de respuestas que encuentra afirmaciones verificables
 * y matizadas tiene más motivos para citarlas que una promesa de "primer lugar".
 */
export const aeoFaqsByLocale: Record<AppLocale, AeoFAQItem[]> = {
  'es-MX': [
    {
      question: '¿Qué es AEO y en qué se diferencia del SEO?',
      answer: 'AEO significa optimización para motores de respuesta. Complementa al SEO: mejora la claridad, estructura, evidencia y accesibilidad del contenido para que buscadores y asistentes con IA puedan encontrarlo, comprenderlo y usarlo como fuente. No sustituye al SEO técnico ni garantiza una cita.',
    },
    {
      question: '¿Cómo puede una empresa aparecer en respuestas de ChatGPT, Gemini o Perplexity?',
      answer: 'La base es publicar información útil y verificable en páginas públicas, permitir el rastreo de los buscadores correspondientes, mantener datos de marca consistentes y conseguir referencias legítimas de terceros. Después se mide qué consultas, páginas y menciones generan visibilidad y conversiones.',
    },
    {
      question: '¿Un archivo llms.txt mejora el posicionamiento en Google?',
      answer: 'No. Google indica que no usa llms.txt para sus rankings ni para sus funciones generativas. Es una propuesta emergente que puede servir como guía curada para herramientas que decidan leerla, pero no reemplaza al sitemap, robots.txt, el contenido HTML ni los datos estructurados válidos.',
    },
    {
      question: '¿Qué se revisa en una auditoría SEO y AEO?',
      answer: 'Se revisan rastreo e indexación, canonicals, sitemap, robots.txt, rendimiento, arquitectura, enlazado interno, contenido, datos estructurados, consistencia de la entidad, fuentes externas y medición. El resultado es un plan priorizado por impacto y esfuerzo.',
    },
    {
      question: '¿Qué resultados de AEO se pueden medir?',
      answer: 'Se pueden medir páginas indexadas, consultas orgánicas, impresiones, clics, conversiones, menciones de marca y citas en respuestas cuando la plataforma permite observarlas. No existe una posición universal en IA porque las respuestas cambian según la consulta, el usuario y las fuentes disponibles.',
    },
    {
      question: '¿Cuánto tarda una estrategia SEO y AEO?',
      answer: 'Las correcciones técnicas pueden ser rastreadas en días o semanas. Las mejoras de autoridad, contenido y demanda suelen requerir varios meses. El plazo depende del estado inicial del sitio, la competencia, la frecuencia de publicación y la velocidad con la que los buscadores vuelven a rastrear las páginas.',
    },
    {
      question: '¿El AEO funciona igual en varios idiomas?',
      answer: 'Los principios son los mismos, pero cada idioma necesita su propio contenido. Traducir automáticamente o servir el mismo texto en varias URLs genera contenido duplicado y ninguna versión se posiciona. Se requieren hreflang correctos, canonicals por idioma y datos estructurados en el idioma de cada página.',
    },
  ],

  'en': [
    {
      question: 'What is AEO and how is it different from SEO?',
      answer: 'AEO stands for answer engine optimization. It complements SEO by improving the clarity, structure, evidence and accessibility of your content so that search engines and AI assistants can find it, understand it and use it as a source. It does not replace technical SEO and it does not guarantee a citation.',
    },
    {
      question: 'How can a business appear in ChatGPT, Gemini or Perplexity answers?',
      answer: 'The foundation is publishing useful, verifiable information on public pages, allowing the relevant crawlers to access it, keeping brand data consistent, and earning legitimate third-party references. From there you measure which queries, pages and mentions actually drive visibility and conversions.',
    },
    {
      question: 'Does an llms.txt file improve Google rankings?',
      answer: 'No. Google has stated it does not use llms.txt for rankings or for its generative features. It is an emerging proposal that can act as a curated guide for tools that choose to read it, but it does not replace your sitemap, robots.txt, HTML content or valid structured data.',
    },
    {
      question: 'What does an SEO and AEO audit cover?',
      answer: 'Crawling and indexing, canonicals, sitemap, robots.txt, performance, architecture, internal linking, content, structured data, entity consistency, external sources and measurement. The output is a plan prioritised by impact and effort.',
    },
    {
      question: 'What AEO results can actually be measured?',
      answer: 'Indexed pages, organic queries, impressions, clicks, conversions, brand mentions, and citations in answers where the platform lets you observe them. There is no universal AI ranking position, because answers change with the query, the user and the sources available at that moment.',
    },
    {
      question: 'How long does an SEO and AEO strategy take?',
      answer: 'Technical fixes can be crawled within days or weeks. Authority, content and demand improvements usually take several months. The timeline depends on the starting state of the site, the competition, publishing frequency and how often search engines recrawl your pages.',
    },
    {
      question: 'Do we need separate optimization for each country we sell to?',
      answer: 'You need separate content per language, not necessarily per country. Serving the same text across several locale URLs creates duplicate content and none of them rank. What matters is correct hreflang, a canonical per language, and structured data written in the language of each page.',
    },
  ],

  'es-419': [
    {
      question: '¿Qué es AEO y en qué se diferencia del SEO?',
      answer: 'AEO significa optimización para motores de respuesta. Complementa al SEO: mejora la claridad, estructura, evidencia y accesibilidad del contenido para que buscadores y asistentes con IA puedan encontrarlo, comprenderlo y usarlo como fuente. No sustituye al SEO técnico ni garantiza una cita.',
    },
    {
      question: '¿Cómo puede una empresa aparecer en respuestas de ChatGPT, Gemini o Perplexity?',
      answer: 'La base es publicar información útil y verificable en páginas públicas, permitir el rastreo de los buscadores correspondientes, mantener datos de marca consistentes y conseguir referencias legítimas de terceros. Después se mide qué consultas, páginas y menciones generan visibilidad y conversiones.',
    },
    {
      question: '¿Un archivo llms.txt mejora el posicionamiento en Google?',
      answer: 'No. Google indica que no usa llms.txt para sus rankings ni para sus funciones generativas. Es una propuesta emergente que puede servir como guía curada para herramientas que decidan leerla, pero no reemplaza al sitemap, robots.txt, el contenido HTML ni los datos estructurados válidos.',
    },
    {
      question: '¿El AEO cambia entre países de Latinoamérica?',
      answer: 'Los principios técnicos son iguales, pero la demanda y el vocabulario cambian por país: no se busca igual en Colombia que en Chile o Argentina. La investigación de consultas se hace por mercado y el contenido se ajusta al vocabulario local, manteniendo una sola entidad de marca consistente.',
    },
    {
      question: '¿Qué resultados de AEO se pueden medir?',
      answer: 'Se pueden medir páginas indexadas, consultas orgánicas, impresiones, clics, conversiones, menciones de marca y citas en respuestas cuando la plataforma permite observarlas. No existe una posición universal en IA porque las respuestas cambian según la consulta, el usuario y las fuentes disponibles.',
    },
    {
      question: '¿Cuánto tarda una estrategia SEO y AEO?',
      answer: 'Las correcciones técnicas pueden ser rastreadas en días o semanas. Las mejoras de autoridad, contenido y demanda suelen requerir varios meses. El plazo depende del estado inicial del sitio, la competencia y la frecuencia de publicación.',
    },
    {
      question: '¿Se puede trabajar el SEO y AEO de forma remota?',
      answer: 'Sí. Es un servicio completamente remoto: auditoría, implementación técnica, contenido y medición se entregan a distancia, con reportes periódicos y acceso compartido a las herramientas de análisis.',
    },
  ],

  'es-ES': [
    {
      question: '¿Qué es AEO y en qué se diferencia del SEO?',
      answer: 'AEO significa optimización para motores de respuesta. Complementa al SEO: mejora la claridad, estructura, evidencia y accesibilidad del contenido para que buscadores y asistentes con IA puedan encontrarlo, comprenderlo y usarlo como fuente. No sustituye al SEO técnico ni garantiza una cita.',
    },
    {
      question: '¿Cómo puede una empresa aparecer en respuestas de ChatGPT, Gemini o Perplexity?',
      answer: 'La base es publicar información útil y verificable en páginas públicas, permitir el rastreo de los buscadores correspondientes, mantener datos de marca consistentes y conseguir referencias legítimas de terceros. Después se mide qué consultas, páginas y menciones generan visibilidad y conversiones.',
    },
    {
      question: '¿Un archivo llms.txt mejora el posicionamiento en Google?',
      answer: 'No. Google indica que no usa llms.txt para sus rankings ni para sus funciones generativas. Es una propuesta emergente que puede servir como guía curada para herramientas que decidan leerla, pero no reemplaza al sitemap, robots.txt, el contenido HTML ni los datos estructurados válidos.',
    },
    {
      question: '¿Qué se revisa en una auditoría SEO y AEO?',
      answer: 'Se revisan rastreo e indexación, canonicals, sitemap, robots.txt, rendimiento, arquitectura, enlazado interno, contenido, datos estructurados, consistencia de la entidad, fuentes externas y medición. El resultado es un plan priorizado por impacto y esfuerzo.',
    },
    {
      question: '¿El RGPD afecta a la estrategia de SEO y AEO?',
      answer: 'Sí, en la parte de medición. El consentimiento de cookies condiciona qué datos de analítica se pueden recoger, así que la medición debe plantearse contando con datos parciales. La optimización técnica y de contenido no se ve afectada.',
    },
    {
      question: '¿Qué resultados de AEO se pueden medir?',
      answer: 'Páginas indexadas, consultas orgánicas, impresiones, clics, conversiones, menciones de marca y citas en respuestas cuando la plataforma permite observarlas. No existe una posición universal en IA porque las respuestas cambian según la consulta, el usuario y las fuentes disponibles.',
    },
    {
      question: '¿Cuánto tarda una estrategia SEO y AEO?',
      answer: 'Las correcciones técnicas pueden rastrearse en días o semanas. Las mejoras de autoridad, contenido y demanda suelen requerir varios meses, según el estado inicial del sitio y la competencia del sector.',
    },
  ],

  'pt-BR': [
    {
      question: 'O que é AEO e qual a diferença em relação ao SEO?',
      answer: 'AEO significa otimização para motores de resposta. Complementa o SEO: melhora a clareza, a estrutura, a evidência e a acessibilidade do conteúdo para que buscadores e assistentes de IA consigam encontrá-lo, compreendê-lo e usá-lo como fonte. Não substitui o SEO técnico nem garante uma citação.',
    },
    {
      question: 'Como uma empresa pode aparecer nas respostas do ChatGPT, Gemini ou Perplexity?',
      answer: 'A base é publicar informação útil e verificável em páginas públicas, permitir o rastreamento pelos buscadores correspondentes, manter dados de marca consistentes e conquistar referências legítimas de terceiros. Depois se mede quais consultas, páginas e menções geram visibilidade e conversões.',
    },
    {
      question: 'Um arquivo llms.txt melhora o posicionamento no Google?',
      answer: 'Não. O Google informa que não usa llms.txt para rankings nem para seus recursos generativos. É uma proposta emergente que pode servir como guia curado para ferramentas que decidam lê-la, mas não substitui o sitemap, o robots.txt, o conteúdo HTML nem os dados estruturados válidos.',
    },
    {
      question: 'O que é analisado em uma auditoria de SEO e AEO?',
      answer: 'Rastreamento e indexação, canonicals, sitemap, robots.txt, desempenho, arquitetura, links internos, conteúdo, dados estruturados, consistência da entidade, fontes externas e medição. O resultado é um plano priorizado por impacto e esforço.',
    },
    {
      question: 'A LGPD afeta a estratégia de SEO e AEO?',
      answer: 'Sim, na parte de medição. O consentimento de cookies determina quais dados analíticos podem ser coletados, então a medição precisa ser planejada considerando dados parciais. A otimização técnica e de conteúdo não é afetada.',
    },
    {
      question: 'Quais resultados de AEO podem ser medidos?',
      answer: 'Páginas indexadas, consultas orgânicas, impressões, cliques, conversões, menções da marca e citações em respostas quando a plataforma permite observá-las. Não existe uma posição universal em IA, porque as respostas mudam conforme a consulta, o usuário e as fontes disponíveis.',
    },
    {
      question: 'Quanto tempo leva uma estratégia de SEO e AEO?',
      answer: 'Correções técnicas podem ser rastreadas em dias ou semanas. Melhorias de autoridade, conteúdo e demanda costumam levar vários meses, dependendo do estado inicial do site, da concorrência e da frequência de publicação.',
    },
  ],
};

export function getAeoFaqs(locale: string): AeoFAQItem[] {
  return pickLocale(aeoFaqsByLocale, locale);
}
