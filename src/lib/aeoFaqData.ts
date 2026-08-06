export interface AeoFAQItem {
  question: string;
  answer: string;
}

export const aeoFaqs: AeoFAQItem[] = [
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
];
