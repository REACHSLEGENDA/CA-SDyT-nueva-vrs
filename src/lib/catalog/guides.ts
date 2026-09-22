import type { CatalogLocale, Guide } from './types';

/**
 * CA Explica — guías de respuesta directa (fase 1: es-MX y en).
 *
 * Molde de cada guía, pensado para buscadores y asistentes de IA:
 *  - Título con la misma forma en que la gente pregunta.
 *  - `quickAnswer` de 40–60 palabras arriba de todo: el fragmento citable.
 *  - Tabla de datos clave, secciones cuyo título es otra pregunta y FAQs.
 *  - Fuentes externas verificables. Nada de cifras sin respaldo.
 *  - Enlace a la ficha de producto relacionada (la guía informa, la ficha vende).
 *
 * Los precios que aparecen aquí son solo los "desde" públicos del catálogo.
 * Fuentes externas verificadas el 22 de septiembre de 2026.
 */

export const guides: Guide[] = [
    {
        id: 'cuanto-cuesta-una-pagina-web',
        slug: { 'es-MX': 'cuanto-cuesta-una-pagina-web', 'en': 'how-much-does-a-website-cost' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['pagina-web', 'paquetes-360', 'seo-web'],
        relatedGuides: ['que-es-aeo'],
        content: {
            'es-MX': {
                title: '¿Cuánto cuesta una página web en México en 2026?',
                shortTitle: '¿Cuánto cuesta una página web?',
                description: 'Qué determina el precio de una página web en México en 2026, qué costos van aparte y cómo evaluar una cotización. Sitios desde $4,500 MXN.',
                keywords: ['cuánto cuesta una página web en México', 'precio de una página web 2026', 'costo de diseño web', 'página web para negocio precio'],
                badge: 'Precios 2026',
                novaLine: 'Dos cotizaciones con el mismo precio pueden incluir cosas muy distintas. Compara alcances, no solo números.',
                quickAnswer: 'En CA, una página web profesional empieza en $4,500 MXN por un sitio de 3 secciones. El precio sube según el número de secciones, el diseño a la medida y funciones como pagos o integraciones. Hosting, dominio y licencias se pagan aparte, igual que el mantenimiento mensual, que es opcional.',
                keyFacts: [
                    { label: 'Precio de entrada en CA', value: 'Desde $4,500 MXN por un sitio de 3 secciones' },
                    { label: 'Qué mueve el precio', value: 'Número de secciones, diseño, funciones e integraciones' },
                    { label: 'Tiempo estimado', value: '2–3 semanas (básico y mediano); 3–5 semanas (premium o personalizado)' },
                    { label: 'Costos aparte', value: 'Hosting, dominio, licencias de terceros y publicidad' },
                    { label: 'Mantenimiento', value: 'Opcional, con pago mensual' },
                ],
                sections: [
                    {
                        id: 'que-determina-el-precio',
                        title: '¿Qué determina el precio de una página web?',
                        paragraphs: [
                            'El precio depende del trabajo que hay detrás, no del "tipo" de página. Un sitio de tres secciones con un diseño limpio se construye en días; uno de catorce secciones con diseño a la medida, animaciones y varias integraciones requiere semanas.',
                        ],
                        bullets: [
                            'Número de secciones o páginas.',
                            'Diseño: adaptado a tu marca o creado desde cero.',
                            'Funciones: formularios, reservas, pagos en línea, varios idiomas.',
                            'Integraciones con WhatsApp, CRM, email marketing u otros sistemas.',
                            'Contenido: si tú entregas textos e imágenes o hay que producirlos.',
                        ],
                    },
                    {
                        id: 'costos-aparte',
                        title: '¿Qué costos no están en el precio del desarrollo?',
                        paragraphs: [
                            'El desarrollo es solo una parte del costo total. Hay pagos a terceros que conviene conocer desde el principio para que no aparezcan como sorpresa.',
                        ],
                        bullets: [
                            'Dominio: se renueva cada año con el registrador.',
                            'Hosting o servidor donde se publica el sitio.',
                            'Licencias de plantillas, tipografías, imágenes o complementos de pago.',
                            'Comisiones de la pasarela de pago, si vendes en línea.',
                            'Inversión en publicidad, si vas a anunciar el sitio.',
                        ],
                    },
                    {
                        id: 'pagina-o-sistema',
                        title: '¿Cuándo una página web ya no es suficiente?',
                        paragraphs: [
                            'Una página web presenta tu negocio y capta contactos. Si necesitas que tus clientes inicien sesión, que tu equipo administre información o que se automaticen procesos, lo que buscas es un sistema web, y su costo se calcula de otra forma.',
                        ],
                    },
                    {
                        id: 'evaluar-cotizacion',
                        title: '¿Cómo saber si una cotización es justa?',
                        paragraphs: [
                            'Una cotización clara dice qué se entrega, en cuánto tiempo y qué queda fuera. Pide que el alcance esté por escrito antes de pagar el anticipo.',
                            'También vale la pena preguntar por el rendimiento. Google recomienda que el contenido principal cargue en 2.5 segundos o menos (LCP), que la página responda en 200 milisegundos o menos (INP) y que no se mueva al cargar (CLS de 0.1 o menos).',
                        ],
                        bullets: [
                            'Número de secciones y funciones incluidas.',
                            'Tiempo de entrega y quién aporta el contenido.',
                            'Que el dominio quede registrado a tu nombre.',
                            'Qué incluye el mantenimiento y cuánto cuesta.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Por qué hay páginas web de precios tan distintos?', answer: 'Porque el alcance cambia mucho: número de secciones, diseño a la medida, funciones e integraciones. Compara lo que incluye cada cotización, no solo el precio final.' },
                    { question: '¿Tengo que pagar mantenimiento?', answer: 'No es obligatorio, pero un sitio necesita actualizaciones, respaldos y ajustes. En CA el mantenimiento es un plan mensual opcional.' },
                    { question: '¿El dominio debe estar a mi nombre?', answer: 'Sí, es lo recomendable. El dominio es la dirección de tu negocio en internet y debe pertenecerte a ti, no a quien desarrolla el sitio.' },
                ],
                sources: [
                    { label: 'web.dev — Métricas Core Web Vitals', url: 'https://web.dev/articles/vitals' },
                    { label: 'Google Search Central — Contenido útil, fiable y centrado en las personas', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
                ],
                midCta: '¿Quieres ver cuánto costaría tu sitio con el alcance que necesitas?',
                finalCta: '¿Listo para cotizar tu página web con un alcance claro desde el inicio?',
            },
            'en': {
                title: 'How much does a professional website cost in 2026?',
                shortTitle: 'How much does a website cost?',
                description: 'What drives the price of a professional website in 2026, which costs are separate and how to evaluate a quote. Websites from $280 USD.',
                keywords: ['how much does a website cost', 'website price 2026', 'small business website cost', 'web design pricing'],
                badge: '2026 pricing',
                novaLine: 'Two quotes with the same price can include very different things. Compare scope, not just numbers.',
                quickAnswer: 'At CA, a professional website starts at $280 USD for a 3-page site. The price goes up with the number of pages, custom design and features such as payments or integrations. Hosting, domain and licenses are paid separately, as is monthly maintenance, which is optional.',
                keyFacts: [
                    { label: 'CA entry price', value: 'From $280 USD for a 3-page site' },
                    { label: 'What drives the price', value: 'Number of pages, design, features and integrations' },
                    { label: 'Estimated timeline', value: '2–3 weeks (basic and mid-size); 3–5 weeks (premium or custom)' },
                    { label: 'Separate costs', value: 'Hosting, domain, third-party licenses and advertising' },
                    { label: 'Maintenance', value: 'Optional, billed monthly' },
                ],
                sections: [
                    {
                        id: 'what-drives-the-price',
                        title: 'What determines the price of a website?',
                        paragraphs: [
                            'Price depends on the work involved, not the "type" of website. A clean 3-page site takes days; a 14-page site with custom design, animations and several integrations takes weeks.',
                        ],
                        bullets: [
                            'Number of pages.',
                            'Design: adapted to your brand or built from scratch.',
                            'Features: forms, bookings, online payments, multiple languages.',
                            'Integrations with WhatsApp, CRM, email marketing or other systems.',
                            'Content: whether you provide copy and images or they need to be produced.',
                        ],
                    },
                    {
                        id: 'separate-costs',
                        title: 'Which costs are not included in the development price?',
                        paragraphs: [
                            'Development is only part of the total cost. There are third-party payments worth knowing up front so they do not show up as surprises.',
                        ],
                        bullets: [
                            'Domain: renewed every year with the registrar.',
                            'Hosting or the server where the site runs.',
                            'Licenses for templates, fonts, images or paid plugins.',
                            'Payment gateway fees, if you sell online.',
                            'Advertising spend, if you promote the site.',
                        ],
                    },
                    {
                        id: 'website-or-system',
                        title: 'When is a website no longer enough?',
                        paragraphs: [
                            'A website presents your business and captures leads. If customers need to log in, your team needs to manage information or processes need automating, what you need is a web system, and it is priced differently.',
                        ],
                    },
                    {
                        id: 'evaluate-a-quote',
                        title: 'How do you know if a quote is fair?',
                        paragraphs: [
                            'A clear quote states what is delivered, when, and what is left out. Ask for the scope in writing before paying a deposit.',
                            'It is also worth asking about performance. Google recommends that the main content loads within 2.5 seconds (LCP), the page responds in 200 milliseconds or less (INP) and it does not shift while loading (CLS of 0.1 or less).',
                        ],
                        bullets: [
                            'Number of pages and included features.',
                            'Delivery time and who provides the content.',
                            'The domain registered in your name.',
                            'What maintenance covers and what it costs.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Why do website prices vary so much?', answer: 'Because scope varies a lot: number of pages, custom design, features and integrations. Compare what each quote includes, not just the final price.' },
                    { question: 'Do I have to pay for maintenance?', answer: 'It is not mandatory, but a site needs updates, backups and adjustments. At CA maintenance is an optional monthly plan.' },
                    { question: 'Should the domain be in my name?', answer: 'Yes, that is the recommended practice. The domain is your business address online and should belong to you, not to whoever builds the site.' },
                ],
                sources: [
                    { label: 'web.dev — Core Web Vitals', url: 'https://web.dev/articles/vitals' },
                    { label: 'Google Search Central — Creating helpful, reliable, people-first content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
                ],
                midCta: 'Want to see what your site would cost with the scope you need?',
                finalCta: 'Ready to quote your website with a clear scope from day one?',
            },
        },
    },
    {
        id: 'que-es-un-crm',
        slug: { 'es-MX': 'que-es-un-crm', 'en': 'what-is-a-crm' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['crm', 'sistema-web-a-medida', 'integraciones-api'],
        relatedGuides: ['bot-de-whatsapp-para-negocios'],
        content: {
            'es-MX': {
                title: '¿Qué es un CRM y cuándo lo necesita tu negocio?',
                shortTitle: '¿Qué es un CRM?',
                description: 'Qué es un CRM, para qué sirve, cuándo lo necesita tu negocio y qué conviene más: uno de suscripción o uno a medida. Incluye obligaciones de la LFPDPPP.',
                keywords: ['qué es un CRM', 'para qué sirve un CRM', 'CRM para pymes', 'CRM a medida o de suscripción'],
                badge: 'Guía básica',
                novaLine: 'Si tu seguimiento de clientes vive en la memoria de alguien o en chats sueltos, ya tienes un CRM: solo que es frágil.',
                quickAnswer: 'Un CRM (Customer Relationship Management) es un sistema que concentra la información de tus clientes y prospectos: datos de contacto, historial, cotizaciones y seguimientos. Sirve para que ninguna oportunidad de venta se pierda y para que el equipo sepa en qué etapa está cada cliente. Lo necesitas cuando Excel o WhatsApp ya no alcanzan.',
                keyFacts: [
                    { label: 'Qué es', value: 'Un sistema para gestionar la relación con clientes y prospectos' },
                    { label: 'Para qué sirve', value: 'Centralizar datos, dar seguimiento y medir ventas' },
                    { label: 'Opciones', value: 'CRM de suscripción o CRM a medida' },
                    { label: 'Datos personales en México', value: 'Sujetos a la LFPDPPP (nueva ley publicada en el DOF el 20 de marzo de 2025)' },
                    { label: 'CRM a medida en CA', value: 'Desde $18,000 MXN' },
                ],
                sections: [
                    {
                        id: 'que-hace',
                        title: '¿Qué hace un CRM en el día a día?',
                        paragraphs: [
                            'Un CRM guarda en un solo lugar quién es cada cliente, qué le cotizaste, cuándo hablaron por última vez y cuál es el siguiente paso. Cada vendedor ve sus pendientes y el responsable ve el embudo completo.',
                        ],
                        bullets: [
                            'Ficha de cada cliente con su historial.',
                            'Etapas de venta: prospecto, cotización, negociación, cierre.',
                            'Tareas y recordatorios de seguimiento.',
                            'Reportes de ventas por vendedor o periodo.',
                        ],
                    },
                    {
                        id: 'cuando-lo-necesitas',
                        title: '¿Cuándo necesita un CRM tu negocio?',
                        paragraphs: [
                            'No hace falta un número mínimo de clientes. La señal es que el seguimiento empieza a fallar.',
                        ],
                        bullets: [
                            'Pierdes prospectos porque nadie les dio seguimiento.',
                            'La información de clientes está repartida entre Excel, correos y chats.',
                            'Cuando un vendedor se va, se lleva el historial de sus clientes.',
                            'No sabes cuántas cotizaciones tienes abiertas ni cuántas cierras.',
                        ],
                    },
                    {
                        id: 'suscripcion-o-a-medida',
                        title: '¿Conviene un CRM de suscripción o uno a medida?',
                        paragraphs: [
                            'Un CRM de suscripción arranca rápido y cobra por usuario cada mes; funciona bien si tu proceso de venta es estándar. Uno a medida cuesta más al inicio, se adapta a tu proceso y no tiene licencias por usuario, así que conviene cuando tu operación es particular o tu equipo crece.',
                        ],
                    },
                    {
                        id: 'datos-personales',
                        title: '¿Qué obligaciones hay al guardar datos de clientes?',
                        paragraphs: [
                            'En México, las empresas que tratan datos personales deben cumplir la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. La ley vigente se publicó en el DOF el 20 de marzo de 2025 y asigna la supervisión a la Secretaría Anticorrupción y Buen Gobierno.',
                            'Entre otras obligaciones, debes informar a tus clientes mediante un aviso de privacidad qué datos recabas y para qué. El artículo 15 enumera lo que ese aviso debe contener como mínimo.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Excel sirve como CRM?', answer: 'Sirve al inicio, pero no avisa de seguimientos, no controla quién modifica qué y se vuelve difícil de compartir cuando crece el equipo.' },
                    { question: '¿Un CRM se conecta con WhatsApp?', answer: 'Sí, un CRM puede integrarse con WhatsApp, formularios web y otras herramientas para registrar contactos automáticamente.' },
                    { question: '¿Cuánto cuesta un CRM a medida?', answer: 'En CA, un CRM a medida empieza en $18,000 MXN. El precio de cada nivel aparece en la ficha del producto.' },
                ],
                sources: [
                    { label: 'Cámara de Diputados — Ley Federal de Protección de Datos Personales en Posesión de los Particulares (texto vigente)', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf' },
                ],
                midCta: '¿Tu seguimiento de clientes ya no cabe en una hoja de cálculo?',
                finalCta: '¿Quieres un CRM que se adapte a tu proceso de venta?',
            },
            'en': {
                title: 'What is a CRM and when does your business need one?',
                shortTitle: 'What is a CRM?',
                description: 'What a CRM is, what it does, when your business needs one and whether subscription or custom CRM is the better fit.',
                keywords: ['what is a CRM', 'what does a CRM do', 'CRM for small business', 'custom vs subscription CRM'],
                badge: 'Basics',
                novaLine: 'If customer follow-up lives in someone’s memory or scattered chats, you already have a CRM: just a fragile one.',
                quickAnswer: 'A CRM (Customer Relationship Management) is a system that keeps all your customer and prospect information in one place: contact details, history, quotes and follow-ups. It makes sure no sales opportunity slips through and that your team knows what stage each customer is at. You need one when spreadsheets or chat apps stop being enough.',
                keyFacts: [
                    { label: 'What it is', value: 'A system to manage relationships with customers and prospects' },
                    { label: 'What it is for', value: 'Centralizing data, following up and measuring sales' },
                    { label: 'Options', value: 'Subscription CRM or custom CRM' },
                    { label: 'Personal data', value: 'Subject to the data protection law of each country (e.g. GDPR in the EU)' },
                    { label: 'Custom CRM at CA', value: 'From $1,120 USD' },
                ],
                sections: [
                    {
                        id: 'what-it-does',
                        title: 'What does a CRM do day to day?',
                        paragraphs: [
                            'A CRM keeps in one place who each customer is, what you quoted them, when you last spoke and what the next step is. Each rep sees their tasks and managers see the whole pipeline.',
                        ],
                        bullets: [
                            'Customer records with full history.',
                            'Sales stages: lead, quote, negotiation, close.',
                            'Follow-up tasks and reminders.',
                            'Sales reports by rep or period.',
                        ],
                    },
                    {
                        id: 'when-you-need-it',
                        title: 'When does your business need a CRM?',
                        paragraphs: [
                            'There is no minimum number of customers. The signal is that follow-up starts to fail.',
                        ],
                        bullets: [
                            'You lose leads because nobody followed up.',
                            'Customer information is spread across spreadsheets, emails and chats.',
                            'When a rep leaves, their customer history leaves too.',
                            'You do not know how many quotes are open or how many you close.',
                        ],
                    },
                    {
                        id: 'subscription-or-custom',
                        title: 'Subscription CRM or custom CRM?',
                        paragraphs: [
                            'A subscription CRM starts fast and charges per user every month; it works well if your sales process is standard. A custom CRM costs more up front, adapts to your process and has no per-user licenses, so it pays off when your operation is specific or your team grows.',
                        ],
                    },
                    {
                        id: 'personal-data',
                        title: 'What obligations come with storing customer data?',
                        paragraphs: [
                            'Customer data is personal data, and most countries regulate how it is collected and used. In the European Union, for example, the General Data Protection Regulation (GDPR) applies. Check the rules for the countries where you operate before choosing where and how to store it.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Can a spreadsheet work as a CRM?', answer: 'It works at first, but it does not remind you to follow up, does not track who changed what and gets hard to share as the team grows.' },
                    { question: 'Can a CRM connect to WhatsApp?', answer: 'Yes, a CRM can integrate with WhatsApp, web forms and other tools to log contacts automatically.' },
                    { question: 'How much does a custom CRM cost?', answer: 'At CA, a custom CRM starts at $1,120 USD. Each tier’s price is listed on the product page.' },
                ],
                sources: [
                    { label: 'EUR-Lex — Regulation (EU) 2016/679 (GDPR)', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
                ],
                midCta: 'Has customer follow-up outgrown your spreadsheet?',
                finalCta: 'Want a CRM that fits your sales process?',
            },
        },
    },
    {
        id: 'que-es-aeo',
        slug: { 'es-MX': 'que-es-aeo', 'en': 'what-is-aeo' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['aeo-optimizacion-ia', 'seo-web', 'seo-local-google-maps'],
        relatedGuides: ['cuanto-cuesta-una-pagina-web'],
        content: {
            'es-MX': {
                title: '¿Qué es AEO y cómo aparecer en ChatGPT, Gemini y Claude?',
                shortTitle: '¿Qué es AEO?',
                description: 'Qué es AEO (optimización para motores de respuesta), en qué se diferencia del SEO y qué necesita tu sitio para que asistentes de IA lo encuentren y citen.',
                keywords: ['qué es AEO', 'cómo aparecer en ChatGPT', 'optimización para motores de respuesta', 'AEO vs SEO'],
                badge: 'IA y buscadores',
                novaLine: 'Una IA no te cita por repetir palabras clave. Te cita cuando tu respuesta es clara, verificable y fácil de encontrar.',
                quickAnswer: 'AEO (Answer Engine Optimization) es preparar el contenido de tu sitio para que buscadores y asistentes de IA, como ChatGPT, Gemini o Claude, lo encuentren, lo entiendan y lo usen como fuente. No sustituye al SEO: se apoya en él y pone el foco en respuestas claras, datos verificables y acceso de los rastreadores.',
                keyFacts: [
                    { label: 'Qué optimiza', value: 'Que tu contenido pueda ser encontrado, entendido y citado por asistentes de IA' },
                    { label: 'Relación con el SEO', value: 'Lo complementa; Google indica que sus funciones de IA no requieren optimizaciones especiales' },
                    { label: 'Rastreador de la búsqueda de ChatGPT', value: 'OAI-SearchBot (debe tener acceso en robots.txt)' },
                    { label: 'llms.txt', value: 'Propuesta emergente; Google no lo necesita para sus funciones de IA' },
                    { label: 'Garantías', value: 'Nadie puede garantizar que una IA te cite' },
                ],
                sections: [
                    {
                        id: 'aeo-vs-seo',
                        title: '¿En qué se diferencia AEO de SEO?',
                        paragraphs: [
                            'El SEO busca que tu página aparezca bien posicionada en una lista de resultados. El AEO busca que tu contenido sea la fuente de una respuesta. En la práctica comparten la misma base: contenido útil, sitio rastreable y datos consistentes.',
                        ],
                    },
                    {
                        id: 'que-necesita-tu-sitio',
                        title: '¿Qué necesita un sitio para que una IA lo cite?',
                        paragraphs: [
                            'Los asistentes de IA citan contenido que pueden leer y verificar. Lo que más ayuda es lo mismo que ayuda a un lector humano.',
                        ],
                        bullets: [
                            'Permitir el acceso de los rastreadores de búsqueda en robots.txt.',
                            'Contenido visible en el HTML, no solo cargado con JavaScript.',
                            'Respuestas directas al inicio de cada página.',
                            'Datos de la empresa consistentes: nombre, servicios, ubicación y contacto.',
                            'Fuentes y fechas visibles cuando das datos.',
                        ],
                    },
                    {
                        id: 'que-dice-google',
                        title: '¿Qué dice Google sobre sus funciones de IA?',
                        paragraphs: [
                            'Google indica que no hay requisitos adicionales para aparecer en AI Overviews o AI Mode, y que no hace falta crear archivos especiales, archivos de texto para IA ni marcado nuevo. Aplican las mismas buenas prácticas de SEO.',
                        ],
                    },
                    {
                        id: 'chatgpt',
                        title: '¿Cómo llega ChatGPT a tu sitio?',
                        paragraphs: [
                            'OpenAI usa distintos agentes. OAI-SearchBot es el que muestra sitios en las funciones de búsqueda de ChatGPT; GPTBot rastrea contenido que puede usarse para entrenar modelos. Puedes permitir uno y bloquear el otro en robots.txt.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿AEO reemplaza al SEO?', answer: 'No. Lo complementa: sin un sitio rastreable y útil, ningún asistente de IA tiene de dónde sacar tu información.' },
                    { question: '¿Bloquear GPTBot me saca de ChatGPT?', answer: 'No necesariamente. GPTBot se relaciona con el entrenamiento de modelos; la búsqueda de ChatGPT usa OAI-SearchBot, que se controla por separado.' },
                    { question: '¿Cuánto cuesta un servicio de AEO?', answer: 'En CA, la configuración AEO empieza en $2,000 MXN. El plan mensual aparece en la ficha del producto.' },
                ],
                sources: [
                    { label: 'Google Search Central — Funciones de IA y tu sitio web', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
                    { label: 'OpenAI — Rastreadores y agentes de usuario', url: 'https://developers.openai.com/api/docs/bots' },
                    { label: 'llmstxt.org — Propuesta del archivo /llms.txt', url: 'https://llmstxt.org/' },
                ],
                midCta: '¿Tu sitio está listo para que un asistente de IA lo lea y lo cite?',
                finalCta: '¿Quieres saber qué tan preparado está tu sitio para buscadores e IA?',
            },
            'en': {
                title: 'What is AEO and how do you show up in ChatGPT, Gemini and Claude?',
                shortTitle: 'What is AEO?',
                description: 'What AEO (answer engine optimization) is, how it differs from SEO and what your site needs so AI assistants can find and cite it.',
                keywords: ['what is AEO', 'how to show up in ChatGPT', 'answer engine optimization', 'AEO vs SEO'],
                badge: 'AI and search',
                novaLine: 'An AI does not cite you for repeating keywords. It cites you when your answer is clear, verifiable and easy to find.',
                quickAnswer: 'AEO (Answer Engine Optimization) means preparing your site’s content so search engines and AI assistants such as ChatGPT, Gemini or Claude can find it, understand it and use it as a source. It does not replace SEO: it builds on it and focuses on clear answers, verifiable facts and crawler access.',
                keyFacts: [
                    { label: 'What it optimizes', value: 'Your content being found, understood and cited by AI assistants' },
                    { label: 'Relationship to SEO', value: 'Complements it; Google says its AI features need no special optimizations' },
                    { label: 'ChatGPT search crawler', value: 'OAI-SearchBot (must be allowed in robots.txt)' },
                    { label: 'llms.txt', value: 'An emerging proposal; Google does not need it for its AI features' },
                    { label: 'Guarantees', value: 'Nobody can guarantee an AI will cite you' },
                ],
                sections: [
                    {
                        id: 'aeo-vs-seo',
                        title: 'How is AEO different from SEO?',
                        paragraphs: [
                            'SEO aims to rank your page well in a list of results. AEO aims to make your content the source of an answer. In practice they share the same foundation: useful content, a crawlable site and consistent data.',
                        ],
                    },
                    {
                        id: 'what-your-site-needs',
                        title: 'What does a site need for an AI to cite it?',
                        paragraphs: [
                            'AI assistants cite content they can read and verify. What helps most is the same thing that helps a human reader.',
                        ],
                        bullets: [
                            'Allow search crawlers in robots.txt.',
                            'Content visible in the HTML, not only rendered with JavaScript.',
                            'Direct answers at the top of each page.',
                            'Consistent company details: name, services, location and contact.',
                            'Visible sources and dates when you state facts.',
                        ],
                    },
                    {
                        id: 'what-google-says',
                        title: 'What does Google say about its AI features?',
                        paragraphs: [
                            'Google states there are no additional requirements to appear in AI Overviews or AI Mode, and that you do not need to create new machine-readable files, AI text files or markup. The same SEO best practices apply.',
                        ],
                    },
                    {
                        id: 'chatgpt',
                        title: 'How does ChatGPT reach your site?',
                        paragraphs: [
                            'OpenAI uses different agents. OAI-SearchBot surfaces sites in ChatGPT’s search features; GPTBot crawls content that may be used to train models. You can allow one and block the other in robots.txt.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Does AEO replace SEO?', answer: 'No. It complements it: without a crawlable, useful site, no AI assistant has anywhere to get your information from.' },
                    { question: 'Does blocking GPTBot remove me from ChatGPT?', answer: 'Not necessarily. GPTBot relates to model training; ChatGPT search uses OAI-SearchBot, which is controlled separately.' },
                    { question: 'How much does an AEO service cost?', answer: 'At CA, AEO setup starts at $125 USD. The monthly plan is listed on the product page.' },
                ],
                sources: [
                    { label: 'Google Search Central — AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
                    { label: 'OpenAI — Crawlers and user agents', url: 'https://developers.openai.com/api/docs/bots' },
                    { label: 'llmstxt.org — The /llms.txt proposal', url: 'https://llmstxt.org/' },
                ],
                midCta: 'Is your site ready for an AI assistant to read and cite it?',
                finalCta: 'Want to know how ready your site is for search engines and AI?',
            },
        },
    },
    {
        id: 'bot-de-whatsapp-para-negocios',
        slug: { 'es-MX': 'bot-de-whatsapp-para-negocios', 'en': 'whatsapp-bot-for-business' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['bot-de-whatsapp', 'agenda-automatica', 'inteligencia-artificial-integrada'],
        relatedGuides: ['que-es-un-crm'],
        content: {
            'es-MX': {
                title: '¿Cómo automatizar WhatsApp para tu negocio con un bot?',
                shortTitle: 'Bot de WhatsApp para negocios',
                description: 'Cómo funciona un bot de WhatsApp para negocios, cuánto cobra Meta por mensaje desde 2025 y cuándo conviene un bot con menús o un asistente con IA.',
                keywords: ['bot de WhatsApp para negocio', 'automatizar WhatsApp Business', 'cuánto cobra WhatsApp Business API', 'chatbot de WhatsApp con IA'],
                badge: 'Automatización',
                novaLine: 'Automatiza lo que respondes diez veces al día. Lo que requiere criterio, déjalo a tu equipo.',
                quickAnswer: 'Un bot de WhatsApp responde solo a tus clientes: da información, toma datos, agenda y pasa la conversación a una persona cuando hace falta. A escala se usa la plataforma de WhatsApp Business de Meta, que desde el 1 de julio de 2025 cobra por mensaje de plantilla; los demás mensajes, dentro de la ventana de atención, son gratis.',
                keyFacts: [
                    { label: 'Modelo de cobro de Meta', value: 'Por mensaje de plantilla, desde el 1 de julio de 2025' },
                    { label: 'Mensajes sin costo', value: 'Los que no son plantilla, dentro de la ventana de atención al cliente' },
                    { label: 'Categorías de plantilla', value: 'Marketing, utilidad y autenticación' },
                    { label: 'Tipos de bot', value: 'Con menús y flujos, o asistente con IA' },
                    { label: 'Bot en CA', value: 'Desde $2,500 MXN' },
                ],
                sections: [
                    {
                        id: 'app-o-plataforma',
                        title: '¿Qué diferencia hay entre la app WhatsApp Business y la plataforma?',
                        paragraphs: [
                            'La app WhatsApp Business se usa desde un celular y sirve para negocios pequeños que responden a mano, con respuestas rápidas y mensajes de ausencia. Para conectar un bot, un CRM o varios agentes se usa la plataforma de WhatsApp Business de Meta, que funciona mediante API.',
                        ],
                    },
                    {
                        id: 'cuanto-cobra-meta',
                        title: '¿Cuánto cobra Meta por los mensajes?',
                        paragraphs: [
                            'Desde el 1 de julio de 2025, Meta cobra por mensaje en su plataforma. Solo se cobran los mensajes de plantilla: los de marketing siempre, y los de utilidad y autenticación según el contexto. La tarifa depende de la categoría y del país del destinatario.',
                            'Los mensajes que no son plantilla son gratuitos dentro de la ventana de atención al cliente, y las plantillas de utilidad enviadas dentro de esa ventana tampoco tienen costo. Un bot que responde a quien te escribe primero suele generar poco consumo.',
                        ],
                    },
                    {
                        id: 'menus-o-ia',
                        title: '¿Bot con menús o asistente con IA?',
                        paragraphs: [
                            'Un bot con menús guía al cliente con opciones y es predecible: ideal para horarios, precios de referencia, ubicación y captura de datos. Un asistente con IA entiende preguntas abiertas y responde con la información de tu negocio, pero requiere definir límites y revisar sus respuestas.',
                        ],
                    },
                    {
                        id: 'buen-bot',
                        title: '¿Qué debe tener un buen bot de WhatsApp?',
                        paragraphs: [
                            'El objetivo no es que el cliente hable con una máquina, sino que resuelva rápido.',
                        ],
                        bullets: [
                            'Opción visible para hablar con una persona.',
                            'Horarios claros y qué pasa fuera de ellos.',
                            'Captura de nombre y necesidad antes de transferir.',
                            'Aviso de privacidad si guarda datos personales.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Puedo usar un bot con la app normal de WhatsApp Business?', answer: 'La app tiene respuestas rápidas y mensajes automáticos básicos. Un bot con flujos o IA se conecta mediante la plataforma de WhatsApp Business.' },
                    { question: '¿Responder a mis clientes me cuesta?', answer: 'Los mensajes que no son plantilla, dentro de la ventana de atención al cliente, no tienen costo en la plataforma de Meta. Se cobran las plantillas, sobre todo las de marketing.' },
                    { question: '¿Cuánto cuesta un bot de WhatsApp?', answer: 'En CA, un bot estándar empieza en $2,500 MXN. El asistente con IA y sus precios aparecen en la ficha del producto.' },
                ],
                sources: [
                    { label: 'Meta for Developers — Precios de la plataforma de WhatsApp Business', url: 'https://developers.facebook.com/docs/whatsapp/pricing' },
                ],
                midCta: '¿Cuántas veces al día respondes las mismas preguntas por WhatsApp?',
                finalCta: '¿Quieres un bot que atienda lo repetitivo y te pase clientes listos para cerrar?',
            },
            'en': {
                title: 'How do you automate WhatsApp for your business with a bot?',
                shortTitle: 'WhatsApp bot for business',
                description: 'How a WhatsApp business bot works, how Meta charges per message since 2025, and when a menu bot or an AI assistant is the better choice.',
                keywords: ['WhatsApp bot for business', 'automate WhatsApp Business', 'WhatsApp Business API pricing', 'AI WhatsApp chatbot'],
                badge: 'Automation',
                novaLine: 'Automate what you answer ten times a day. Leave what needs judgment to your team.',
                quickAnswer: 'A WhatsApp bot answers your customers automatically: it shares information, captures details, books appointments and hands the conversation to a person when needed. To automate at scale you use Meta’s WhatsApp Business Platform, which since July 1, 2025 charges per template message; non-template messages within the customer service window are free.',
                keyFacts: [
                    { label: 'Meta’s pricing model', value: 'Per template message, since July 1, 2025' },
                    { label: 'Free messages', value: 'Non-template messages within the customer service window' },
                    { label: 'Template categories', value: 'Marketing, utility and authentication' },
                    { label: 'Bot types', value: 'Menu and flow-based, or AI assistant' },
                    { label: 'Bot at CA', value: 'From $160 USD' },
                ],
                sections: [
                    {
                        id: 'app-or-platform',
                        title: 'What is the difference between the WhatsApp Business app and the platform?',
                        paragraphs: [
                            'The WhatsApp Business app runs on a phone and suits small businesses that reply by hand, with quick replies and away messages. To connect a bot, a CRM or multiple agents you use Meta’s WhatsApp Business Platform, which works through an API.',
                        ],
                    },
                    {
                        id: 'what-meta-charges',
                        title: 'How much does Meta charge for messages?',
                        paragraphs: [
                            'Since July 1, 2025, Meta charges per message on its platform. Only template messages are charged: marketing templates always, and utility and authentication templates depending on context. Rates depend on the category and the recipient’s country.',
                            'Non-template messages are free within the customer service window, and utility templates sent within that window are free too. A bot that replies to people who message you first usually generates little usage.',
                        ],
                    },
                    {
                        id: 'menus-or-ai',
                        title: 'Menu bot or AI assistant?',
                        paragraphs: [
                            'A menu bot guides customers through options and is predictable: ideal for hours, reference prices, location and lead capture. An AI assistant understands open questions and answers using your business information, but it needs clear limits and reviewed answers.',
                        ],
                    },
                    {
                        id: 'good-bot',
                        title: 'What makes a good WhatsApp bot?',
                        paragraphs: [
                            'The goal is not for customers to talk to a machine, but to get their issue solved fast.',
                        ],
                        bullets: [
                            'A visible option to talk to a person.',
                            'Clear hours and what happens outside them.',
                            'Capturing name and need before handing over.',
                            'A privacy notice if it stores personal data.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Can I run a bot on the regular WhatsApp Business app?', answer: 'The app has quick replies and basic automated messages. A flow-based or AI bot connects through the WhatsApp Business Platform.' },
                    { question: 'Does replying to customers cost me anything?', answer: 'Non-template messages within the customer service window are free on Meta’s platform. Templates are charged, especially marketing ones.' },
                    { question: 'How much does a WhatsApp bot cost?', answer: 'At CA, a standard bot starts at $160 USD. The AI assistant and its pricing are listed on the product page.' },
                ],
                sources: [
                    { label: 'Meta for Developers — WhatsApp Business Platform pricing', url: 'https://developers.facebook.com/docs/whatsapp/pricing' },
                ],
                midCta: 'How many times a day do you answer the same questions on WhatsApp?',
                finalCta: 'Want a bot that handles the repetitive part and hands you customers ready to close?',
            },
        },
    },
];

export function getGuide(id: string): Guide | undefined {
    return guides.find((guide) => guide.id === id);
}

export function getGuideBySlug(locale: CatalogLocale, slug: string): Guide | undefined {
    return guides.find((guide) => guide.slug[locale] === slug);
}
