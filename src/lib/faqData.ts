import { AppLocale, pickLocale } from './locales';

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Preguntas frecuentes por locale.
 *
 * Alimentan a la vez el bloque visible (`FAQSection`) y el schema `FAQPage`, que es
 * lo que los motores de respuesta citan de forma más literal. Por eso las variantes
 * de español NO son copias: cada una habla de su mercado (moneda, marco legal,
 * ciudades, husos horarios). Contenido idéntico en cinco URLs sería duplicado y
 * ninguna se posicionaría.
 *
 * Los datos operativos (plazos, stack, alcance) son los mismos en todos los idiomas:
 * lo único que cambia es el encuadre regional.
 */
export const faqsByLocale: Record<AppLocale, FAQItem[]> = {
  'es-MX': [
    {
      question: '¿Cuánto tiempo tarda el desarrollo de un proyecto web?',
      answer: 'Depende del alcance. Un sitio web básico o mediano toma de 2 a 3 semanas, y uno premium o personalizado de 3 a 5 semanas. Los sistemas, CRM y plataformas SaaS llevan entre 4 y 10 semanas, y las apps móviles y automatizaciones entre 4 y 12. La fecha final se fija en la propuesta.',
    },
    {
      question: '¿Trabajan con empresas fuera de la Ciudad de México?',
      answer: 'Sí. Los servicios digitales (web, apps, sistemas, automatización) se prestan de forma remota para todo México, incluyendo Monterrey, Guadalajara, Querétaro y Puebla. Los servicios físicos de infraestructura TI —redes, servidores, CCTV— dependen de cobertura y se confirman según la ubicación.',
    },
    {
      question: '¿Trabajan también con aplicaciones móviles?',
      answer: 'Sí. Desarrollamos móvil nativo (Swift, Kotlin) y multiplataforma (React Native, Flutter). Llevamos tu idea a iOS y Android con una base de código optimizada, y nos encargamos de la publicación en App Store y Google Play.',
    },
    {
      question: '¿Pueden integrar sistemas o APIs existentes?',
      answer: 'Sí. Conectamos tu sitio o app con CRMs (Salesforce, HubSpot), ERPs, pasarelas de pago (Stripe, PayPal, Mercado Pago) o cualquier API REST/GraphQL que tu negocio ya utilice.',
    },
    {
      question: '¿Ofrecen mantenimiento después del lanzamiento?',
      answer: 'Sí. Ofrecemos planes de mantenimiento evolutivo con actualizaciones de seguridad, monitoreo de servidores, respaldos automáticos y optimizaciones de rendimiento continuas.',
    },
    {
      question: '¿El sitio será rápido y seguro?',
      answer: 'Usamos Next.js y edge computing para lograr cargas casi instantáneas. Implementamos certificados SSL, buenas prácticas de seguridad y protección contra ataques DDoS de forma predeterminada.',
    },
    {
      question: '¿Puedo escalar mi sistema en el futuro?',
      answer: 'Sí. La arquitectura modular y serverless permite que tu sistema crezca de cientos a millones de usuarios sin reescribir el código base.',
    },
    {
      question: '¿Cómo se realiza el proceso de cotización?',
      answer: 'Primero agendamos una llamada breve para entender tus necesidades. Después entregamos una propuesta formal desglosada por fases, entregables y tiempos, sin costos ocultos. Puedes iniciarlo por WhatsApp, correo o el formulario de contacto.',
    },
  ],

  'en': [
    {
      question: 'How long does it take to build a website?',
      answer: 'It depends on scope. A basic or mid-size website takes 2 to 3 weeks, and a premium or custom one 3 to 5 weeks. Systems, CRMs and SaaS platforms take 4 to 10 weeks, and mobile apps and automations 4 to 12. The final date is set in the proposal.',
    },
    {
      question: 'Do you work with clients outside Mexico?',
      answer: 'Yes. We are based in Mexico and work remotely with companies in the United States, Canada, the United Kingdom and across Europe. Our team communicates in English, and Mexico time zones overlap with US business hours, so meetings and reviews happen in real time rather than overnight.',
    },
    {
      question: 'Why hire a nearshore team in Mexico instead of a local agency?',
      answer: 'You get the same technology stack and engineering standards at a lower rate than typical US or Western European agencies, with same-day overlap in working hours. Unlike offshore teams many time zones away, feedback cycles stay within the same business day.',
    },
    {
      question: 'Do you also build mobile apps?',
      answer: 'Yes. We build native (Swift, Kotlin) and cross-platform (React Native, Flutter) apps for iOS and Android, and we handle publishing to the App Store and Google Play.',
    },
    {
      question: 'Can you integrate with our existing systems and APIs?',
      answer: 'Yes. We connect your site or app to CRMs (Salesforce, HubSpot), ERPs, payment gateways (Stripe, PayPal) and any REST or GraphQL API your business already runs on.',
    },
    {
      question: 'Do you provide maintenance after launch?',
      answer: 'Yes. We offer ongoing maintenance plans covering security updates, server monitoring, automated backups and continuous performance work.',
    },
    {
      question: 'Do you offer on-site IT infrastructure outside Mexico?',
      answer: 'Digital services — web, apps, custom systems, automation — are delivered remotely worldwide. Physical IT work such as networking, servers and CCTV depends on coverage and is confirmed case by case, so it is primarily available in Mexico.',
    },
    {
      question: 'How does the quoting process work?',
      answer: 'We start with a short call to understand your requirements. You then receive a formal proposal broken down by phase, deliverables and timeline, with no hidden costs. You can start by email, WhatsApp or the contact form.',
    },
  ],

  'es-419': [
    {
      question: '¿Cuánto tiempo tarda el desarrollo de un proyecto web?',
      answer: 'Depende del alcance. Un sitio web básico o mediano toma de 2 a 3 semanas, y uno premium o personalizado de 3 a 5 semanas. Los sistemas, CRM y plataformas SaaS llevan entre 4 y 10 semanas, y las apps móviles y automatizaciones entre 4 y 12. La fecha final se fija en la propuesta.',
    },
    {
      question: '¿Atienden clientes en Colombia, Chile, Argentina o Perú?',
      answer: 'Sí. Los servicios digitales se prestan de forma totalmente remota en toda Latinoamérica. Trabajamos con empresas en Bogotá, Santiago, Buenos Aires, Lima, Quito y Montevideo. La diferencia horaria con México es de pocas horas, así que las reuniones y revisiones ocurren dentro de la misma jornada laboral.',
    },
    {
      question: '¿Cómo funcionan los pagos y contratos entre países?',
      answer: 'El alcance, los plazos y el costo se definen por escrito en una propuesta formal antes de comenzar. Los detalles de facturación y medio de pago se acuerdan según el país del cliente durante esa etapa.',
    },
    {
      question: '¿Trabajan también con aplicaciones móviles?',
      answer: 'Sí. Desarrollamos móvil nativo (Swift, Kotlin) y multiplataforma (React Native, Flutter) para iOS y Android, incluida la publicación en App Store y Google Play.',
    },
    {
      question: '¿Pueden integrar sistemas o APIs existentes?',
      answer: 'Sí. Conectamos tu sitio o app con CRMs (Salesforce, HubSpot), ERPs, pasarelas de pago regionales y cualquier API REST/GraphQL que tu negocio ya utilice.',
    },
    {
      question: '¿Ofrecen mantenimiento después del lanzamiento?',
      answer: 'Sí. Los planes de mantenimiento incluyen actualizaciones de seguridad, monitoreo de servidores, respaldos automáticos y optimizaciones de rendimiento continuas.',
    },
    {
      question: '¿Ofrecen servicios de infraestructura TI en toda la región?',
      answer: 'Los servicios digitales son remotos y están disponibles en toda Latinoamérica. Los trabajos físicos de infraestructura —redes, servidores, CCTV— dependen de cobertura y se confirman según la ubicación; su base principal está en México.',
    },
    {
      question: '¿Cómo se realiza el proceso de cotización?',
      answer: 'Agendamos una llamada breve para entender tus necesidades y luego entregamos una propuesta formal desglosada por fases, entregables y tiempos, sin costos ocultos.',
    },
  ],

  'es-ES': [
    {
      question: '¿Cuánto tiempo tarda el desarrollo de un proyecto web?',
      answer: 'Depende del alcance. Una web básica o mediana lleva de 2 a 3 semanas, y una premium o personalizada de 3 a 5 semanas. Los sistemas, CRM y plataformas SaaS requieren entre 4 y 10 semanas, y las apps móviles y automatizaciones entre 4 y 12. La fecha final se fija en la propuesta.',
    },
    {
      question: '¿Trabajan con empresas en España desde México?',
      answer: 'Sí. Los servicios digitales se prestan de forma remota para empresas en Madrid, Barcelona, Valencia, Sevilla y el resto del país. Trabajamos en español peninsular en la documentación y las reuniones, y organizamos las sesiones en horario europeo.',
    },
    {
      question: '¿Cómo gestionan la protección de datos y el RGPD?',
      answer: 'Los proyectos para clientes europeos se plantean teniendo en cuenta los requisitos del RGPD: base legal del tratamiento, minimización de datos, consentimiento de cookies y ubicación de los servidores. Los requisitos concretos se acuerdan en la fase de análisis, y recomendamos validación jurídica del cliente antes de publicar.',
    },
    {
      question: '¿Trabajan también con aplicaciones móviles?',
      answer: 'Sí. Desarrollamos aplicaciones nativas (Swift, Kotlin) y multiplataforma (React Native, Flutter) para iOS y Android, incluida la publicación en App Store y Google Play.',
    },
    {
      question: '¿Pueden integrar sistemas o APIs existentes?',
      answer: 'Sí. Conectamos tu web o app con CRMs (Salesforce, HubSpot), ERPs, pasarelas de pago y cualquier API REST/GraphQL que tu empresa ya utilice.',
    },
    {
      question: '¿Ofrecen mantenimiento después del lanzamiento?',
      answer: 'Sí. Los planes de mantenimiento incluyen actualizaciones de seguridad, monitorización de servidores, copias de seguridad automáticas y optimización de rendimiento continua.',
    },
    {
      question: '¿Ofrecen servicios de infraestructura TI en España?',
      answer: 'No. Los trabajos físicos de infraestructura —redes, servidores, CCTV— dependen de cobertura y su base está en México. Para clientes en España ofrecemos únicamente servicios digitales remotos: desarrollo, sistemas, automatización y SEO/AEO.',
    },
    {
      question: '¿Cómo se realiza el proceso de presupuesto?',
      answer: 'Primero una llamada breve para entender los requisitos. Después entregamos una propuesta formal desglosada por fases, entregables y plazos, sin costes ocultos.',
    },
  ],

  'pt-BR': [
    {
      question: 'Quanto tempo leva o desenvolvimento de um projeto web?',
      answer: 'Depende do escopo. Um site básico ou médio leva de 2 a 3 semanas, e um premium ou personalizado de 3 a 5 semanas. Sistemas, CRM e plataformas SaaS levam de 4 a 10 semanas, e aplicativos móveis e automações de 4 a 12. A data final é definida na proposta.',
    },
    {
      question: 'Vocês atendem empresas no Brasil a partir do México?',
      answer: 'Sim. Os serviços digitais são prestados remotamente para empresas em São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba e todo o país. A documentação e as reuniões podem ser conduzidas em português, e o fuso do México permite sobreposição com o horário comercial brasileiro.',
    },
    {
      question: 'Como vocês tratam a LGPD e a proteção de dados?',
      answer: 'Projetos para clientes brasileiros consideram os requisitos da LGPD: base legal do tratamento, minimização de dados, consentimento de cookies e localização dos servidores. Os requisitos específicos são acordados na fase de análise, e recomendamos validação jurídica do cliente antes da publicação.',
    },
    {
      question: 'Vocês também desenvolvem aplicativos móveis?',
      answer: 'Sim. Desenvolvemos aplicativos nativos (Swift, Kotlin) e multiplataforma (React Native, Flutter) para iOS e Android, incluindo a publicação na App Store e no Google Play.',
    },
    {
      question: 'É possível integrar sistemas ou APIs existentes?',
      answer: 'Sim. Conectamos seu site ou aplicativo a CRMs (Salesforce, HubSpot), ERPs, gateways de pagamento e qualquer API REST ou GraphQL que sua empresa já utilize.',
    },
    {
      question: 'Vocês oferecem manutenção após o lançamento?',
      answer: 'Sim. Os planos de manutenção incluem atualizações de segurança, monitoramento de servidores, backups automáticos e otimização contínua de desempenho.',
    },
    {
      question: 'Vocês oferecem infraestrutura de TI no Brasil?',
      answer: 'Não. Os trabalhos físicos de infraestrutura — redes, servidores, CCTV — dependem de cobertura e têm base no México. Para clientes no Brasil oferecemos apenas serviços digitais remotos: desenvolvimento, sistemas, automação e SEO/AEO.',
    },
    {
      question: 'Como funciona o processo de orçamento?',
      answer: 'Começamos com uma conversa breve para entender os requisitos. Em seguida enviamos uma proposta formal detalhada por fases, entregáveis e prazos, sem custos ocultos.',
    },
  ],
};

export function getFaqs(locale: string): FAQItem[] {
  return pickLocale(faqsByLocale, locale);
}
