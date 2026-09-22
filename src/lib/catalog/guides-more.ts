import type { Guide } from './types';

/**
 * Segunda tanda de CA Explica (22 de septiembre de 2026).
 *
 * Temas elegidos por volumen de búsqueda y porque CA puede responderlos con
 * autoridad. Las guías de temas exclusivos de México (aviso de privacidad, CFDI)
 * solo existen en es-MX. Cada dato externo está respaldado en `sources`.
 */
export const moreGuides: Guide[] = [
    // ─── Web ──────────────────────────────────────────────────────────────
    {
        id: 'como-crear-una-pagina-web',
        category: 'web',
        slug: { 'es-MX': 'como-crear-una-pagina-web', 'en': 'how-to-create-a-business-website' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['pagina-web', 'seo-web', 'paquetes-360'],
        relatedGuides: ['cuanto-cuesta-una-pagina-web', 'que-es-seo', 'aviso-de-privacidad-pagina-web'],
        content: {
            'es-MX': {
                title: '¿Cómo crear una página web para tu negocio paso a paso?',
                shortTitle: 'Cómo crear una página web',
                description: 'Guía paso a paso para crear la página web de tu negocio: objetivo, contenido, dominio, desarrollo, publicación y cómo lograr que Google la encuentre.',
                keywords: ['cómo crear una página web', 'hacer una página web para mi negocio', 'pasos para crear un sitio web', 'crear página web profesional'],
                badge: 'Paso a paso',
                hostLine: 'El error más caro es empezar por el diseño. Empieza por lo que tu cliente necesita encontrar.',
                quickAnswer: 'Para crear la página web de tu negocio define primero qué debe lograr (ventas, citas o contactos), reúne textos e imágenes, registra un dominio a tu nombre y elige quién la desarrolla o con qué plataforma. Después publícala, conéctala a Google Search Console y mide los resultados para mejorarla.',
                keyFacts: [
                    { label: 'Primer paso', value: 'Definir el objetivo: vender, agendar o conseguir contactos' },
                    { label: 'Lo indispensable', value: 'Dominio a tu nombre, hosting, textos e imágenes' },
                    { label: 'Opciones', value: 'Constructor de sitios o desarrollo a medida' },
                    { label: 'Para que Google la encuentre', value: 'Search Console, sitemap y contenido útil' },
                    { label: 'En CA', value: 'Desde $4,500 MXN; 2–3 semanas para un sitio básico o mediano' },
                ],
                sections: [
                    {
                        id: 'objetivo',
                        title: '¿Qué debe lograr tu página web?',
                        paragraphs: [
                            'Una página sin objetivo termina siendo un folleto que nadie lee. Decide qué acción quieres que haga el visitante: escribirte por WhatsApp, agendar una cita, comprar o pedir una cotización. Esa acción define qué secciones necesitas y qué botón va en cada una.',
                        ],
                    },
                    {
                        id: 'antes-de-empezar',
                        title: '¿Qué necesitas antes de empezar?',
                        paragraphs: ['Tener esto listo acorta semanas de ida y vuelta con quien desarrolla el sitio.'],
                        bullets: [
                            'Un dominio registrado a nombre de tu negocio.',
                            'Textos de tus servicios o productos, escritos para tu cliente.',
                            'Fotos reales de tu negocio, equipo o trabajos.',
                            'Logotipo y colores de marca.',
                            'Datos de contacto y ubicación consistentes en todos lados.',
                        ],
                    },
                    {
                        id: 'constructor-o-a-medida',
                        title: '¿Constructor de sitios o desarrollo a medida?',
                        paragraphs: [
                            'Un constructor de sitios te deja publicar rápido con plantillas y una mensualidad. Un desarrollo a medida cuesta más al inicio, pero te da control del diseño, la velocidad y las integraciones, y el sitio es tuyo. Conviene a medida cuando la web es tu principal canal de ventas o necesita conectarse con otros sistemas.',
                        ],
                    },
                    {
                        id: 'despues-de-publicar',
                        title: '¿Qué hacer después de publicarla?',
                        paragraphs: [
                            'Publicar no es el final. Google recomienda enviar un sitemap y usar la herramienta de Inspección de URLs para confirmar que puede ver tus páginas como las ve un visitante.',
                        ],
                        bullets: [
                            'Dar de alta el sitio en Google Search Console y enviar el sitemap.',
                            'Revisar con la Inspección de URLs que las páginas clave estén indexadas.',
                            'Instalar analítica para medir visitas y contactos.',
                            'Actualizar el contenido cuando cambien tus servicios o precios.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Puedo hacer mi página web yo mismo?', answer: 'Sí, con un constructor de sitios puedes publicar una página sencilla. Conviene contratar desarrollo cuando necesitas mejor velocidad, un diseño propio o integraciones con pagos, citas o tu CRM.' },
                    { question: '¿Cuánto tarda en aparecer en Google?', answer: 'Depende. Google indica que indexar una página suele tardar desde un día hasta más tiempo, y que estar indexada no garantiza aparecer en los primeros resultados.' },
                    { question: '¿Necesito aviso de privacidad?', answer: 'Si tu página recaba datos personales, por ejemplo en un formulario de contacto, en México debes contar con aviso de privacidad.' },
                ],
                sources: [
                    { label: 'Google Search Central — Guía de optimización para buscadores (SEO) para principiantes', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
                    { label: 'Ayuda de Search Console — Herramienta de Inspección de URLs', url: 'https://support.google.com/webmasters/answer/9012289' },
                ],
                midCta: '¿Quieres que tu página se haga con un objetivo claro desde el primer día?',
                finalCta: '¿Listo para crear la página web de tu negocio?',
            },
            'en': {
                title: 'How do you create a website for your business, step by step?',
                shortTitle: 'How to create a business website',
                description: 'Step-by-step guide to creating your business website: goal, content, domain, development, launch and how to get Google to find it.',
                keywords: ['how to create a business website', 'make a website for my business', 'steps to build a website', 'create a professional website'],
                badge: 'Step by step',
                hostLine: 'The most expensive mistake is starting with the design. Start with what your customer needs to find.',
                quickAnswer: 'To create your business website, first define what it must achieve (sales, bookings or leads), gather copy and images, register a domain in your name and choose who builds it or which platform to use. Then launch it, connect it to Google Search Console and measure results to keep improving it.',
                keyFacts: [
                    { label: 'First step', value: 'Define the goal: sell, book or capture leads' },
                    { label: 'Essentials', value: 'Domain in your name, hosting, copy and images' },
                    { label: 'Options', value: 'Website builder or custom development' },
                    { label: 'To get found on Google', value: 'Search Console, sitemap and useful content' },
                    { label: 'At CA', value: 'From $280 USD; 2–3 weeks for a basic or mid-size site' },
                ],
                sections: [
                    {
                        id: 'goal',
                        title: 'What should your website achieve?',
                        paragraphs: [
                            'A website without a goal ends up as a brochure nobody reads. Decide what you want visitors to do: message you, book an appointment, buy or request a quote. That action defines which pages you need and which button goes on each one.',
                        ],
                    },
                    {
                        id: 'before-you-start',
                        title: 'What do you need before you start?',
                        paragraphs: ['Having this ready saves weeks of back and forth with whoever builds the site.'],
                        bullets: [
                            'A domain registered in your business name.',
                            'Copy for your services or products, written for your customer.',
                            'Real photos of your business, team or work.',
                            'Logo and brand colors.',
                            'Contact details and location, consistent everywhere.',
                        ],
                    },
                    {
                        id: 'builder-or-custom',
                        title: 'Website builder or custom development?',
                        paragraphs: [
                            'A website builder lets you launch fast with templates and a monthly fee. Custom development costs more up front but gives you control over design, speed and integrations, and you own the site. Custom makes sense when the website is your main sales channel or must connect to other systems.',
                        ],
                    },
                    {
                        id: 'after-launch',
                        title: 'What should you do after launching it?',
                        paragraphs: [
                            'Launching is not the end. Google recommends submitting a sitemap and using the URL Inspection tool to confirm it can see your pages the way a visitor does.',
                        ],
                        bullets: [
                            'Add the site to Google Search Console and submit the sitemap.',
                            'Check key pages are indexed with URL Inspection.',
                            'Install analytics to measure visits and leads.',
                            'Update content when your services or prices change.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Can I build my website myself?', answer: 'Yes, a website builder lets you publish a simple site. Hiring development makes sense when you need better speed, your own design or integrations with payments, bookings or your CRM.' },
                    { question: 'How long until it shows up on Google?', answer: 'It varies. Google says indexing a page usually takes from a day to longer, and being indexed does not guarantee a top position.' },
                    { question: 'Do I need a privacy notice?', answer: 'If your site collects personal data, for example through a contact form, most countries require you to tell visitors how you use it.' },
                ],
                sources: [
                    { label: 'Google Search Central — SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
                    { label: 'Search Console Help — URL Inspection tool', url: 'https://support.google.com/webmasters/answer/9012289' },
                ],
                midCta: 'Want your website built around a clear goal from day one?',
                finalCta: 'Ready to create your business website?',
            },
        },
    },
    {
        id: 'aviso-de-privacidad-pagina-web',
        category: 'web',
        slug: { 'es-MX': 'aviso-de-privacidad-pagina-web' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['pagina-web', 'crm', 'bot-de-whatsapp'],
        relatedGuides: ['como-crear-una-pagina-web', 'que-es-un-crm'],
        content: {
            'es-MX': {
                title: '¿Tu página web necesita aviso de privacidad en México?',
                shortTitle: 'Aviso de privacidad en tu página web',
                description: 'Cuándo una página web en México necesita aviso de privacidad, qué debe contener según la LFPDPPP de 2025 y qué autoridad la supervisa.',
                keywords: ['aviso de privacidad página web', 'aviso de privacidad obligatorio México', 'LFPDPPP 2025', 'aviso de privacidad formulario de contacto'],
                badge: 'Legal · México',
                hostLine: 'Si tu formulario pide un correo, ya estás tratando datos personales. El aviso no es un trámite: es parte del sitio.',
                quickAnswer: 'Sí, si tu página recaba datos personales, como nombre, correo o teléfono en un formulario o chat. La Ley Federal de Protección de Datos Personales en Posesión de los Particulares obliga a informar mediante un aviso de privacidad quién recaba los datos, cuáles, para qué y cómo ejercer los derechos sobre ellos.',
                keyFacts: [
                    { label: 'Ley aplicable', value: 'LFPDPPP, nueva ley publicada en el DOF el 20 de marzo de 2025' },
                    { label: 'Autoridad', value: 'Secretaría Anticorrupción y Buen Gobierno' },
                    { label: 'Cuándo aplica', value: 'Formularios, chats, registros de usuario, compras y boletines' },
                    { label: 'Contenido mínimo', value: 'Artículo 15 de la ley (identidad del responsable, datos, finalidades, entre otros)' },
                ],
                sections: [
                    {
                        id: 'cuando-recaba-datos',
                        title: '¿Cuándo una página web recaba datos personales?',
                        paragraphs: ['Más seguido de lo que parece. Cualquier dato que identifique o haga identificable a una persona es un dato personal.'],
                        bullets: [
                            'Formularios de contacto o de cotización.',
                            'Chats y botones que abren una conversación con tu negocio.',
                            'Registro de cuentas o inicio de sesión.',
                            'Suscripción a boletines.',
                            'Compras en línea y datos de envío.',
                        ],
                    },
                    {
                        id: 'que-debe-decir',
                        title: '¿Qué debe decir el aviso de privacidad?',
                        paragraphs: [
                            'El artículo 15 de la ley enumera lo que el aviso debe contener como mínimo. Entre otros puntos: la identidad y el domicilio de quien trata los datos, qué datos personales se tratan (señalando los sensibles) y para qué finalidades. Consulta el texto completo de la ley para revisar todas las fracciones.',
                        ],
                    },
                    {
                        id: 'ley-2025',
                        title: '¿Qué cambió con la ley de 2025?',
                        paragraphs: [
                            'El 20 de marzo de 2025 se publicó en el Diario Oficial de la Federación una nueva Ley Federal de Protección de Datos Personales en Posesión de los Particulares. La ley vigente asigna la supervisión a la Secretaría Anticorrupción y Buen Gobierno. Si tu aviso de privacidad se redactó antes, conviene revisarlo contra el texto actual.',
                        ],
                    },
                    {
                        id: 'copiar-un-aviso',
                        title: '¿Basta con copiar un aviso de otra página?',
                        paragraphs: [
                            'No. El aviso debe describir lo que tu negocio hace realmente con los datos: qué recabas, para qué y con quién lo compartes. Un aviso copiado suele describir tratamientos que no haces y omitir los que sí.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Dónde pongo el aviso de privacidad en mi página?', answer: 'En un lugar visible y accesible, normalmente enlazado en el pie de página y junto a cada formulario que recaba datos.' },
                    { question: '¿Un chatbot también cuenta?', answer: 'Sí. Si el chatbot pide nombre, teléfono u otros datos, está recabando datos personales y el aviso debe cubrirlo.' },
                    { question: '¿Esta guía sustituye a un abogado?', answer: 'No. Es informativa. Para redactar o validar tu aviso de privacidad consulta a un especialista en protección de datos.' },
                ],
                sources: [
                    { label: 'Cámara de Diputados — Ley Federal de Protección de Datos Personales en Posesión de los Particulares (texto vigente)', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf' },
                ],
                midCta: '¿Tu sitio pide datos pero no tiene aviso de privacidad visible?',
                finalCta: '¿Quieres un sitio web que cuide los datos de tus clientes desde el diseño?',
            },
        },
    },

    // ─── Sistemas ─────────────────────────────────────────────────────────
    {
        id: 'que-es-un-erp',
        category: 'sistemas',
        slug: { 'es-MX': 'que-es-un-erp', 'en': 'what-is-an-erp' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['sistema-web-a-medida', 'sistema-de-inventarios', 'crm'],
        relatedGuides: ['que-es-un-crm', 'factura-electronica-cfdi-4-0'],
        content: {
            'es-MX': {
                title: '¿Qué es un ERP y en qué se diferencia de un CRM?',
                shortTitle: '¿Qué es un ERP?',
                description: 'Qué es un ERP, qué módulos tiene, en qué se diferencia de un CRM y cuándo conviene uno comercial o uno a medida para tu empresa.',
                keywords: ['qué es un ERP', 'diferencia entre ERP y CRM', 'sistema ERP para pymes', 'ERP a medida'],
                badge: 'Guía básica',
                hostLine: 'Si cada área tiene su propio Excel con los mismos datos, lo que te falta no es otro Excel: es un sistema que los una.',
                quickAnswer: 'Un ERP (Enterprise Resource Planning) es un sistema que integra la operación interna de una empresa: inventarios, compras, ventas, finanzas y personal en una sola base de datos. Un CRM se enfoca en la relación con clientes y el proceso de venta. Muchas empresas empiezan con un CRM o un inventario y crecen hacia un ERP.',
                keyFacts: [
                    { label: 'ERP', value: 'Integra la operación interna: inventario, compras, ventas, finanzas y personal' },
                    { label: 'CRM', value: 'Gestiona clientes, prospectos y el proceso de venta' },
                    { label: 'Señal de que necesitas un ERP', value: 'Los mismos datos se capturan varias veces en distintas áreas' },
                    { label: 'Implementación', value: 'Por módulos, empezando por el proceso más crítico' },
                    { label: 'En CA', value: 'Sistemas a medida desde $12,000 MXN' },
                ],
                sections: [
                    {
                        id: 'modulos',
                        title: '¿Qué módulos tiene un ERP?',
                        paragraphs: ['Cada empresa usa los que necesita. Los más comunes son:'],
                        bullets: [
                            'Inventario y almacenes.',
                            'Compras y proveedores.',
                            'Ventas, pedidos y facturación.',
                            'Finanzas y cuentas por cobrar y pagar.',
                            'Personal y nómina.',
                        ],
                    },
                    {
                        id: 'erp-o-crm',
                        title: '¿ERP o CRM: cuál necesitas primero?',
                        paragraphs: [
                            'Si tu problema es vender y dar seguimiento a clientes, empieza por un CRM. Si el problema está en la operación (inventarios que no cuadran, compras desordenadas, reportes que tardan días), lo que necesitas es un ERP o al menos su módulo más urgente.',
                        ],
                    },
                    {
                        id: 'comercial-o-a-medida',
                        title: '¿ERP comercial o a medida?',
                        paragraphs: [
                            'Un ERP comercial trae procesos estándar y se cobra por licencia o por usuario. Uno a medida se adapta a tu forma de trabajar y crece módulo por módulo. Conviene a medida cuando tu operación es particular o cuando pagarías por muchas funciones que no usas.',
                        ],
                    },
                    {
                        id: 'implementacion',
                        title: '¿Cómo se implementa sin detener la operación?',
                        paragraphs: [
                            'Por etapas. Se empieza por el módulo que más duele, se migran los datos de ese proceso y se capacita al equipo antes de pasar al siguiente. Así el negocio nunca depende de un cambio total de un día para otro.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Un ERP es solo para empresas grandes?', answer: 'No. Una pyme puede empezar con uno o dos módulos, como inventario y ventas, y crecer con el tiempo.' },
                    { question: '¿Un ERP incluye CRM?', answer: 'Algunos incluyen un módulo de clientes, pero suele ser más básico que un CRM dedicado. Ambos pueden integrarse.' },
                    { question: '¿Cuánto cuesta un sistema a medida?', answer: 'En CA, un sistema web a medida empieza en $12,000 MXN. El precio de cada nivel aparece en la ficha del producto.' },
                ],
                sources: [],
                midCta: '¿Tu operación depende de varios Excel que nadie logra cuadrar?',
                finalCta: '¿Quieres un sistema que una la operación de tu empresa por módulos?',
            },
            'en': {
                title: 'What is an ERP and how is it different from a CRM?',
                shortTitle: 'What is an ERP?',
                description: 'What an ERP is, its typical modules, how it differs from a CRM and when an off-the-shelf or custom ERP is the better fit.',
                keywords: ['what is an ERP', 'ERP vs CRM', 'ERP for small business', 'custom ERP development'],
                badge: 'Basics',
                hostLine: 'If every department keeps its own spreadsheet with the same data, you do not need another spreadsheet: you need a system that connects them.',
                quickAnswer: 'An ERP (Enterprise Resource Planning) is a system that integrates a company’s internal operations: inventory, purchasing, sales, finance and staff in a single database. A CRM focuses on customer relationships and the sales process. Many companies start with a CRM or an inventory system and grow into an ERP.',
                keyFacts: [
                    { label: 'ERP', value: 'Integrates operations: inventory, purchasing, sales, finance and staff' },
                    { label: 'CRM', value: 'Manages customers, leads and the sales process' },
                    { label: 'Sign you need an ERP', value: 'The same data is entered several times across departments' },
                    { label: 'Rollout', value: 'Module by module, starting with the most critical process' },
                    { label: 'At CA', value: 'Custom systems from $750 USD' },
                ],
                sections: [
                    {
                        id: 'modules',
                        title: 'What modules does an ERP have?',
                        paragraphs: ['Each company uses the ones it needs. The most common are:'],
                        bullets: [
                            'Inventory and warehouses.',
                            'Purchasing and suppliers.',
                            'Sales, orders and invoicing.',
                            'Finance, receivables and payables.',
                            'Staff and payroll.',
                        ],
                    },
                    {
                        id: 'erp-or-crm',
                        title: 'ERP or CRM: which do you need first?',
                        paragraphs: [
                            'If your problem is selling and following up with customers, start with a CRM. If the problem is operations (inventory that never matches, messy purchasing, reports that take days), you need an ERP, or at least its most urgent module.',
                        ],
                    },
                    {
                        id: 'off-the-shelf-or-custom',
                        title: 'Off-the-shelf or custom ERP?',
                        paragraphs: [
                            'An off-the-shelf ERP comes with standard processes and is licensed per seat. A custom one adapts to how you work and grows module by module. Custom makes sense when your operation is specific or you would pay for many features you never use.',
                        ],
                    },
                    {
                        id: 'rollout',
                        title: 'How do you roll it out without stopping operations?',
                        paragraphs: [
                            'In stages. Start with the module that hurts most, migrate that process’s data and train the team before moving on. The business never depends on a big-bang switch overnight.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Is an ERP only for large companies?', answer: 'No. A small business can start with one or two modules, such as inventory and sales, and grow over time.' },
                    { question: 'Does an ERP include a CRM?', answer: 'Some include a customer module, but it is usually more basic than a dedicated CRM. Both can be integrated.' },
                    { question: 'How much does a custom system cost?', answer: 'At CA, a custom web system starts at $750 USD. Each tier’s price is listed on the product page.' },
                ],
                sources: [],
                midCta: 'Do your operations depend on spreadsheets nobody can reconcile?',
                finalCta: 'Want a system that connects your operations module by module?',
            },
        },
    },
    {
        id: 'factura-electronica-cfdi-4-0',
        category: 'sistemas',
        slug: { 'es-MX': 'factura-electronica-cfdi-4-0' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['sistema-de-ventas', 'sistema-de-inventarios', 'integraciones-api'],
        relatedGuides: ['que-es-un-erp'],
        content: {
            'es-MX': {
                title: '¿Cómo facturar CFDI 4.0 desde tu sistema o punto de venta?',
                shortTitle: 'Facturar CFDI 4.0 desde tu sistema',
                description: 'Cómo integrar la factura electrónica CFDI 4.0 en tu sistema o punto de venta: PAC, datos que pide al cliente y factura global a público en general.',
                keywords: ['facturar desde punto de venta', 'CFDI 4.0 sistema de ventas', 'integrar facturación electrónica', 'factura global público en general'],
                badge: 'SAT · México',
                hostLine: 'Facturar a mano después de cada venta es doble trabajo. Si el sistema ya tiene los datos, que también timbre.',
                quickAnswer: 'Un sistema de ventas o punto de venta puede emitir facturas CFDI 4.0 conectándose a un Proveedor de Certificación Autorizado (PAC), que valida y timbra el comprobante ante el SAT. Desde el 1 de abril de 2023, la versión 4.0 es la única válida, así que cualquier integración nueva debe usarla.',
                keyFacts: [
                    { label: 'Versión vigente', value: 'CFDI 4.0, única válida desde el 1 de abril de 2023' },
                    { label: 'Quién timbra', value: 'Un Proveedor de Certificación Autorizado (PAC)' },
                    { label: 'Datos del cliente', value: 'Nombre, RFC, código postal del domicilio fiscal y régimen fiscal' },
                    { label: 'Ventas a público en general', value: 'Se amparan con un CFDI global' },
                    { label: 'En CA', value: 'Sistema de ventas desde $22,000 MXN' },
                ],
                sections: [
                    {
                        id: 'que-necesita',
                        title: '¿Qué necesita un sistema para facturar?',
                        paragraphs: [
                            'Además de los productos y las ventas, el sistema debe conectarse a un PAC mediante su API. El PAC valida el comprobante, lo timbra y devuelve el XML y el folio fiscal que el sistema guarda y envía al cliente.',
                        ],
                        bullets: [
                            'Contrato con un PAC y sus credenciales de API.',
                            'Certificado de sello digital (CSD) del emisor.',
                            'Catálogo de productos con sus claves del SAT.',
                            'Datos fiscales de cada cliente que pide factura.',
                        ],
                    },
                    {
                        id: 'datos-del-cliente',
                        title: '¿Qué datos pide el CFDI 4.0 al cliente?',
                        paragraphs: [
                            'El CFDI 4.0 exige que los datos del receptor coincidan con los registrados en el SAT: nombre o razón social, RFC, código postal del domicilio fiscal y régimen fiscal. Por eso conviene que el sistema los guarde en la ficha del cliente y no se capturen en cada venta.',
                        ],
                    },
                    {
                        id: 'factura-global',
                        title: '¿Qué es la factura global?',
                        paragraphs: [
                            'Cuando vendes a clientes que no piden factura, esas operaciones se amparan con un CFDI global a público en general. El SAT publica una guía de llenado específica para este comprobante.',
                        ],
                    },
                    {
                        id: 'integrar-o-no',
                        title: '¿Conviene integrar la facturación al punto de venta?',
                        paragraphs: [
                            'Si emites muchas facturas, sí: evitas capturar dos veces, reduces errores en los datos del cliente y el corte de caja coincide con lo facturado. Si facturas pocas veces al mes, un portal del PAC puede bastar.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Todavía puedo emitir CFDI 3.3?', answer: 'No. Desde el 1 de abril de 2023 la única versión válida es la 4.0.' },
                    { question: '¿Qué es un PAC?', answer: 'Un Proveedor de Certificación Autorizado por el SAT que valida y timbra los comprobantes fiscales digitales.' },
                    { question: '¿CA tramita mi facturación ante el SAT?', answer: 'No. Integramos tu sistema con el PAC que elijas; los trámites fiscales y la configuración contable corresponden a tu contador.' },
                ],
                sources: [
                    { label: 'SAT — Avance de la emisión de CFDI en la versión 4.0', url: 'https://www.gob.mx/sat/prensa/el-sat-informa-sobre-el-avance-de-la-emision-de-cfdi-en-la-version-4-0-0012-2023?idiom=es' },
                    { label: 'SAT — Guía de llenado del CFDI global, versión 4.0', url: 'http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/Guia_llenado_CFDI_%20global.pdf' },
                ],
                midCta: '¿Tu equipo factura a mano después de cada venta?',
                finalCta: '¿Quieres un punto de venta que también facture?',
            },
        },
    },

    // ─── Apps ─────────────────────────────────────────────────────────────
    {
        id: 'cuanto-cuesta-hacer-una-app',
        category: 'apps',
        slug: { 'es-MX': 'cuanto-cuesta-hacer-una-app', 'en': 'how-much-does-an-app-cost' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['app-movil', 'plataforma-saas', 'pagina-web'],
        relatedGuides: ['cuanto-cuesta-una-pagina-web'],
        content: {
            'es-MX': {
                title: '¿Cuánto cuesta hacer una app en México en 2026?',
                shortTitle: '¿Cuánto cuesta hacer una app?',
                description: 'Cuánto cuesta desarrollar una app móvil en México en 2026, qué sube el precio y qué costos cobran Apple y Google aparte. Apps desde $20,000 MXN.',
                keywords: ['cuánto cuesta hacer una app', 'precio de una aplicación móvil', 'costo desarrollar app México', 'cuánto cobra un desarrollador de apps'],
                badge: 'Precios 2026',
                hostLine: 'Antes de cotizar una app, pregúntate si tus clientes la van a abrir cada semana. Si no, quizá necesitas una web.',
                quickAnswer: 'En CA, una app móvil empieza en $20,000 MXN por una app informativa; con inicio de sesión, pagos o conexión a tus sistemas el precio sube. Aparte están las tiendas: Apple cobra 99 USD por año de membresía en su programa de desarrolladores y Google Play un pago único de 25 USD.',
                keyFacts: [
                    { label: 'Precio de entrada en CA', value: 'Desde $20,000 MXN por una app informativa' },
                    { label: 'Apple Developer Program', value: '99 USD por año de membresía' },
                    { label: 'Cuenta de Google Play', value: '25 USD, pago único' },
                    { label: 'Tiempo estimado', value: '4–12 semanas' },
                    { label: 'Qué sube el precio', value: 'Cuentas de usuario, pagos, integraciones y paneles de administración' },
                ],
                sections: [
                    {
                        id: 'que-determina-el-precio',
                        title: '¿Qué determina el precio de una app?',
                        paragraphs: ['Lo que la app tiene que hacer, no el número de pantallas.'],
                        bullets: [
                            'Si los usuarios inician sesión y guardan información.',
                            'Si se cobra dentro de la app.',
                            'Si se conecta con tu sistema, CRM o inventario.',
                            'Si necesita un panel para administrar contenido o pedidos.',
                            'Notificaciones, mapas, cámara u otras funciones del teléfono.',
                        ],
                    },
                    {
                        id: 'costos-aparte',
                        title: '¿Qué costos hay además del desarrollo?',
                        paragraphs: [
                            'Para publicar en iPhone necesitas el Apple Developer Program, que cuesta 99 USD por año de membresía (el precio puede variar por región). Para Android, Google Play cobra un registro único de 25 USD. A eso se suman servidores, servicios de terceros y el mantenimiento para las nuevas versiones de iOS y Android.',
                        ],
                    },
                    {
                        id: 'app-o-web',
                        title: '¿App o página web?',
                        paragraphs: [
                            'Una app tiene sentido cuando el usuario vuelve con frecuencia o necesita funciones del teléfono. Si la gente te busca una vez para informarse o cotizar, una página web rápida cumple mejor y cuesta menos.',
                        ],
                    },
                    {
                        id: 'android-y-iphone',
                        title: '¿Una app para Android y iPhone cuesta el doble?',
                        paragraphs: [
                            'No necesariamente. Con desarrollo multiplataforma se escribe una sola base de código para ambos sistemas, lo que reduce tiempo y costo frente a dos apps nativas separadas.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Las cuentas de Apple y Google están incluidas?', answer: 'No. Se registran a nombre de tu empresa y se pagan directamente a Apple y Google.' },
                    { question: '¿Cuánto tarda hacer una app?', answer: 'En CA, entre 4 y 12 semanas estimadas, según las funciones. Los hitos se fijan en la propuesta.' },
                    { question: '¿Cuánto cuesta cada tipo de app en CA?', answer: 'La app informativa empieza en $20,000 MXN. Los precios de las apps con login, comerciales y empresariales aparecen en la ficha del producto.' },
                ],
                sources: [
                    { label: 'Apple Developer — Inscripción al Apple Developer Program', url: 'https://developer.apple.com/programs/enroll/' },
                    { label: 'Ayuda de Play Console — Registro de una cuenta de desarrollador', url: 'https://support.google.com/googleplay/android-developer/answer/6112435' },
                ],
                midCta: '¿Quieres saber cuánto costaría tu app con las funciones que necesita?',
                finalCta: '¿Listo para cotizar tu app con un alcance claro?',
            },
            'en': {
                title: 'How much does it cost to build an app in 2026?',
                shortTitle: 'How much does an app cost?',
                description: 'How much a mobile app costs to build in 2026, what drives the price and which fees Apple and Google charge separately. Apps from $1,250 USD.',
                keywords: ['how much does an app cost', 'mobile app development cost', 'app development pricing 2026', 'nearshore app development cost'],
                badge: '2026 pricing',
                hostLine: 'Before pricing an app, ask whether your customers will open it every week. If not, you may need a website instead.',
                quickAnswer: 'At CA, a mobile app starts at $1,250 USD for an informational app; login, payments or connections to your systems raise the price. Store fees are separate: Apple charges 99 USD per membership year for its developer program, and Google Play a one-time 25 USD registration fee.',
                keyFacts: [
                    { label: 'CA entry price', value: 'From $1,250 USD for an informational app' },
                    { label: 'Apple Developer Program', value: '99 USD per membership year' },
                    { label: 'Google Play account', value: '25 USD, one-time' },
                    { label: 'Estimated timeline', value: '4–12 weeks' },
                    { label: 'What raises the price', value: 'User accounts, payments, integrations and admin panels' },
                ],
                sections: [
                    {
                        id: 'what-drives-the-price',
                        title: 'What determines the price of an app?',
                        paragraphs: ['What the app has to do, not the number of screens.'],
                        bullets: [
                            'Whether users log in and store information.',
                            'Whether you charge inside the app.',
                            'Whether it connects to your system, CRM or inventory.',
                            'Whether it needs a panel to manage content or orders.',
                            'Notifications, maps, camera or other phone features.',
                        ],
                    },
                    {
                        id: 'other-costs',
                        title: 'What costs are there besides development?',
                        paragraphs: [
                            'To publish on iPhone you need the Apple Developer Program, which costs 99 USD per membership year (pricing may vary by region). For Android, Google Play charges a one-time 25 USD registration. Add servers, third-party services and maintenance for new iOS and Android versions.',
                        ],
                    },
                    {
                        id: 'app-or-website',
                        title: 'App or website?',
                        paragraphs: [
                            'An app makes sense when users come back often or need phone features. If people look you up once to learn or get a quote, a fast website does the job better and costs less.',
                        ],
                    },
                    {
                        id: 'android-and-iphone',
                        title: 'Does an Android and iPhone app cost double?',
                        paragraphs: [
                            'Not necessarily. Cross-platform development uses a single codebase for both systems, cutting time and cost compared with two separate native apps.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Are the Apple and Google accounts included?', answer: 'No. They are registered in your company’s name and paid directly to Apple and Google.' },
                    { question: 'How long does it take to build an app?', answer: 'At CA, an estimated 4 to 12 weeks depending on features. Milestones are set in the proposal.' },
                    { question: 'How much does each type of app cost at CA?', answer: 'The informational app starts at $1,250 USD. Prices for login, commerce and enterprise apps are listed on the product page.' },
                ],
                sources: [
                    { label: 'Apple Developer — Enrolling in the Apple Developer Program', url: 'https://developer.apple.com/programs/enroll/' },
                    { label: 'Play Console Help — Register for a developer account', url: 'https://support.google.com/googleplay/android-developer/answer/6112435' },
                ],
                midCta: 'Want to know what your app would cost with the features it needs?',
                finalCta: 'Ready to quote your app with a clear scope?',
            },
        },
    },

    // ─── Marketing ────────────────────────────────────────────────────────
    {
        id: 'cuanto-cuesta-gestion-de-redes-sociales',
        category: 'marketing',
        slug: { 'es-MX': 'cuanto-cuesta-gestion-de-redes-sociales', 'en': 'how-much-does-social-media-management-cost' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['gestion-de-redes-sociales', 'diseno-de-marca', 'paquetes-360'],
        relatedGuides: ['como-aparecer-en-google-maps'],
        content: {
            'es-MX': {
                title: '¿Cuánto cuesta la gestión de redes sociales para un negocio?',
                shortTitle: '¿Cuánto cuesta manejar redes sociales?',
                description: 'Cuánto cuesta la gestión de redes sociales para un negocio en México, qué incluye, qué hace variar el precio y por qué la publicidad se paga aparte.',
                keywords: ['cuánto cobra un community manager', 'precio gestión de redes sociales', 'cuánto cuesta manejar redes sociales', 'costo community manager México'],
                badge: 'Precios 2026',
                hostLine: 'Publicar mucho no sirve si cada publicación no lleva a un mensaje, una cita o una venta.',
                quickAnswer: 'En CA, la gestión de redes sociales empieza en $3,500 MXN al mes con 8 publicaciones y 4 historias, diseño y redacción incluidos. El precio sube con el volumen de contenido, los reels y la gestión de campañas. La inversión en anuncios de Meta se paga aparte, directamente a Meta.',
                keyFacts: [
                    { label: 'Precio de entrada en CA', value: 'Desde $3,500 MXN al mes' },
                    { label: 'Plan básico', value: '8 publicaciones y 4 historias al mes, con diseño y redacción' },
                    { label: 'Qué sube el precio', value: 'Más contenido, reels, campañas y embudos de venta' },
                    { label: 'Publicidad', value: 'La pauta de Meta Ads se paga aparte, directamente a Meta' },
                    { label: 'Forma de pago', value: 'Mensual, por adelantado' },
                ],
                sections: [
                    {
                        id: 'que-incluye',
                        title: '¿Qué incluye la gestión de redes sociales?',
                        paragraphs: ['Una gestión completa no es solo publicar. Incluye:'],
                        bullets: [
                            'Calendario de contenido del mes.',
                            'Diseño gráfico y redacción de cada pieza.',
                            'Publicación y programación.',
                            'Gestión de campañas en los planes superiores.',
                            'Reporte mensual de resultados.',
                        ],
                    },
                    {
                        id: 'que-varia',
                        title: '¿Qué hace variar el precio?',
                        paragraphs: [
                            'El volumen de piezas al mes, el tipo de contenido (un reel lleva más producción que una imagen), cuántas redes se manejan y si se gestionan campañas pagadas y embudos de venta.',
                        ],
                    },
                    {
                        id: 'freelance-o-agencia',
                        title: '¿Community manager independiente o agencia?',
                        paragraphs: [
                            'Un independiente puede costar menos y funcionar bien para cuentas pequeñas. Una agencia suma diseño, estrategia, campañas y continuidad aunque alguien del equipo falte. Lo importante es que el precio incluya por escrito cuántas piezas, en qué redes y con qué reporte.',
                        ],
                    },
                    {
                        id: 'medir',
                        title: '¿Cómo saber si está funcionando?',
                        paragraphs: [
                            'Los seguidores son la métrica menos útil. Mide mensajes recibidos, citas o cotizaciones que llegan desde redes y ventas atribuibles. Si esas cifras no se mueven en unos meses, el contenido o la segmentación necesitan cambios.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿El precio incluye los anuncios?', answer: 'No. La inversión en Meta Ads la pagas directamente a Meta; la mensualidad cubre la gestión de la campaña.' },
                    { question: '¿Qué redes manejan?', answer: 'Principalmente Facebook e Instagram. Otras redes se evalúan según tu público.' },
                    { question: '¿Cuánto cuestan los planes Intermedio y Premium?', answer: 'Aparecen en la ficha de gestión de redes sociales, en la tabla de precios por nivel.' },
                ],
                sources: [],
                midCta: '¿Tus redes publican pero no generan mensajes ni ventas?',
                finalCta: '¿Quieres redes que trabajen para tus ventas?',
            },
            'en': {
                title: 'How much does social media management cost for a business?',
                shortTitle: 'How much does social media management cost?',
                description: 'How much social media management costs for a business, what it includes, what changes the price and why ad spend is paid separately.',
                keywords: ['social media management cost', 'how much does a social media manager charge', 'social media management pricing', 'outsourced social media cost'],
                badge: '2026 pricing',
                hostLine: 'Posting a lot is useless if each post does not lead to a message, a booking or a sale.',
                quickAnswer: 'At CA, social media management starts at $220 USD per month with 8 posts and 4 stories, design and copywriting included. The price goes up with content volume, reels and campaign management. Meta ad spend is paid separately, directly to Meta.',
                keyFacts: [
                    { label: 'CA entry price', value: 'From $220 USD per month' },
                    { label: 'Basic plan', value: '8 posts and 4 stories per month, with design and copy' },
                    { label: 'What raises the price', value: 'More content, reels, campaigns and sales funnels' },
                    { label: 'Advertising', value: 'Meta Ads spend is paid separately, directly to Meta' },
                    { label: 'Billing', value: 'Monthly, in advance' },
                ],
                sections: [
                    {
                        id: 'what-it-includes',
                        title: 'What does social media management include?',
                        paragraphs: ['Full management is more than posting. It includes:'],
                        bullets: [
                            'Monthly content calendar.',
                            'Graphic design and copy for every piece.',
                            'Publishing and scheduling.',
                            'Campaign management on higher plans.',
                            'Monthly results report.',
                        ],
                    },
                    {
                        id: 'what-changes-the-price',
                        title: 'What changes the price?',
                        paragraphs: [
                            'The number of pieces per month, the type of content (a reel takes more production than an image), how many networks are managed and whether paid campaigns and sales funnels are included.',
                        ],
                    },
                    {
                        id: 'freelancer-or-agency',
                        title: 'Freelancer or agency?',
                        paragraphs: [
                            'A freelancer may cost less and work well for small accounts. An agency adds design, strategy, campaigns and continuity even when someone is out. What matters is that the price states in writing how many pieces, on which networks and with what reporting.',
                        ],
                    },
                    {
                        id: 'measure',
                        title: 'How do you know it is working?',
                        paragraphs: [
                            'Followers are the least useful metric. Measure messages received, bookings or quotes coming from social media and attributable sales. If those numbers do not move within a few months, content or targeting needs to change.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Is ad spend included?', answer: 'No. You pay Meta Ads spend directly to Meta; the monthly fee covers campaign management.' },
                    { question: 'Which networks do you manage?', answer: 'Mainly Facebook and Instagram. Other networks are assessed based on your audience.' },
                    { question: 'How much are the Intermediate and Premium plans?', answer: 'They are listed on the social media management page, in the per-tier pricing table.' },
                ],
                sources: [],
                midCta: 'Is your social media posting but not generating messages or sales?',
                finalCta: 'Want social media that works for your sales?',
            },
        },
    },

    // ─── SEO / AEO ────────────────────────────────────────────────────────
    {
        id: 'que-es-seo',
        category: 'seo-aeo',
        slug: { 'es-MX': 'que-es-seo', 'en': 'what-is-seo' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['seo-web', 'aeo-optimizacion-ia', 'seo-local-google-maps'],
        relatedGuides: ['que-es-aeo', 'google-no-indexa-mi-pagina', 'como-aparecer-en-google-maps'],
        content: {
            'es-MX': {
                title: '¿Qué es el SEO y cómo funciona en 2026?',
                shortTitle: '¿Qué es el SEO?',
                description: 'Qué es el SEO, cómo decide Google qué mostrar, qué recomienda Google para empezar, qué ya no funciona y cómo medir resultados.',
                keywords: ['qué es el SEO', 'cómo funciona el SEO', 'posicionamiento web en Google', 'SEO para principiantes'],
                badge: 'Guía básica',
                hostLine: 'Google no premia a quien más repite una palabra. Premia a quien mejor responde la pregunta.',
                quickAnswer: 'El SEO (optimización para buscadores) es el trabajo para que Google y otros buscadores encuentren, entiendan y muestren tu sitio cuando alguien busca lo que ofreces. Incluye la parte técnica (que el sitio se pueda rastrear e indexar), el contenido útil y la reputación que el sitio gana con el tiempo.',
                keyFacts: [
                    { label: 'Tres frentes', value: 'Técnico, contenido y reputación' },
                    { label: 'Meta keywords', value: 'Google Search no usa la etiqueta meta keywords' },
                    { label: 'Herramienta gratuita', value: 'Google Search Console' },
                    { label: 'Tiempo', value: 'Los resultados orgánicos suelen tomar meses' },
                    { label: 'En CA', value: 'SEO web desde $3,000 MXN de configuración inicial' },
                ],
                sections: [
                    {
                        id: 'como-decide-google',
                        title: '¿Cómo decide Google qué mostrar?',
                        paragraphs: [
                            'Primero rastrea tu sitio, después lo indexa (lo guarda y entiende de qué trata) y, cuando alguien busca, elige qué páginas responden mejor. Si alguno de esos pasos falla, tu página no aparece, por buena que sea.',
                        ],
                    },
                    {
                        id: 'recomendaciones-google',
                        title: '¿Qué recomienda Google para empezar?',
                        paragraphs: ['La guía oficial de Google para principiantes insiste en lo básico:'],
                        bullets: [
                            'Ayudar a Google a encontrar el contenido, por ejemplo con un sitemap.',
                            'Organizar el sitio con URLs descriptivas y temas agrupados.',
                            'Crear contenido original, útil, bien organizado y actualizado.',
                            'Agregar imágenes de calidad con texto alternativo descriptivo.',
                            'Promocionar el sitio para que la gente lo conozca.',
                        ],
                    },
                    {
                        id: 'que-ya-no-funciona',
                        title: '¿Qué ya no funciona?',
                        paragraphs: [
                            'Rellenar páginas con palabras clave, llenar la etiqueta meta keywords (Google Search no la usa) o publicar texto pensado para el buscador y no para la persona. Google indica que sus sistemas priorizan contenido útil y fiable creado para las personas.',
                        ],
                    },
                    {
                        id: 'como-medir',
                        title: '¿Cómo se mide el SEO?',
                        paragraphs: [
                            'Con Search Console ves en qué búsquedas apareces, cuántas veces te hacen clic y qué páginas tienen problemas. Lo que importa al final no son las posiciones, sino cuántos contactos y ventas llegan desde la búsqueda orgánica.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Cuánto tarda el SEO en dar resultados?', answer: 'Las correcciones técnicas se notan en semanas, pero el posicionamiento orgánico suele tomar meses y depende de la competencia de tu sector.' },
                    { question: '¿Pagar anuncios en Google mejora el SEO?', answer: 'No. Los anuncios y los resultados orgánicos son sistemas separados.' },
                    { question: '¿Qué diferencia hay entre SEO y AEO?', answer: 'El SEO busca que tu página aparezca en los resultados; el AEO busca que tu contenido sea la fuente de una respuesta en buscadores y asistentes de IA. Comparten la misma base.' },
                ],
                sources: [
                    { label: 'Google Search Central — Guía de SEO para principiantes', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
                    { label: 'Google Search Central — Contenido útil, fiable y centrado en las personas', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
                ],
                midCta: '¿Sabes qué le impide a tu sitio aparecer en Google?',
                finalCta: '¿Quieres una auditoría SEO con prioridades claras?',
            },
            'en': {
                title: 'What is SEO and how does it work in 2026?',
                shortTitle: 'What is SEO?',
                description: 'What SEO is, how Google decides what to show, what Google recommends to get started, what no longer works and how to measure results.',
                keywords: ['what is SEO', 'how does SEO work', 'rank on Google', 'SEO for beginners'],
                badge: 'Basics',
                hostLine: 'Google does not reward whoever repeats a word the most. It rewards whoever answers the question best.',
                quickAnswer: 'SEO (search engine optimization) is the work of making Google and other search engines find, understand and show your site when someone searches for what you offer. It covers the technical side (the site can be crawled and indexed), useful content and the reputation the site earns over time.',
                keyFacts: [
                    { label: 'Three fronts', value: 'Technical, content and reputation' },
                    { label: 'Meta keywords', value: 'Google Search does not use the keywords meta tag' },
                    { label: 'Free tool', value: 'Google Search Console' },
                    { label: 'Timeframe', value: 'Organic results usually take months' },
                    { label: 'At CA', value: 'Website SEO from $190 USD initial setup' },
                ],
                sections: [
                    {
                        id: 'how-google-decides',
                        title: 'How does Google decide what to show?',
                        paragraphs: [
                            'First it crawls your site, then it indexes it (stores it and understands what it is about) and, when someone searches, it picks the pages that answer best. If any step fails, your page does not show up, however good it is.',
                        ],
                    },
                    {
                        id: 'google-recommendations',
                        title: 'What does Google recommend to get started?',
                        paragraphs: ['Google’s official starter guide sticks to the basics:'],
                        bullets: [
                            'Help Google find your content, for example with a sitemap.',
                            'Organize the site with descriptive URLs and grouped topics.',
                            'Create original, useful, well-organized, up-to-date content.',
                            'Add quality images with descriptive alt text.',
                            'Promote the site so people discover it.',
                        ],
                    },
                    {
                        id: 'what-no-longer-works',
                        title: 'What no longer works?',
                        paragraphs: [
                            'Stuffing pages with keywords, filling the keywords meta tag (Google Search does not use it) or publishing text written for the search engine instead of people. Google says its systems prioritize helpful, reliable content created for people.',
                        ],
                    },
                    {
                        id: 'how-to-measure',
                        title: 'How is SEO measured?',
                        paragraphs: [
                            'Search Console shows which searches you appear in, how many clicks you get and which pages have issues. What ultimately matters is not rankings but how many leads and sales come from organic search.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'How long does SEO take to work?', answer: 'Technical fixes show up within weeks, but organic rankings usually take months and depend on your industry’s competition.' },
                    { question: 'Do Google Ads improve SEO?', answer: 'No. Ads and organic results are separate systems.' },
                    { question: 'What is the difference between SEO and AEO?', answer: 'SEO aims to rank your page in results; AEO aims to make your content the source of an answer in search engines and AI assistants. They share the same foundation.' },
                ],
                sources: [
                    { label: 'Google Search Central — SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
                    { label: 'Google Search Central — Creating helpful, reliable, people-first content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
                ],
                midCta: 'Do you know what is keeping your site off Google?',
                finalCta: 'Want an SEO audit with clear priorities?',
            },
        },
    },
    {
        id: 'google-no-indexa-mi-pagina',
        category: 'seo-aeo',
        slug: { 'es-MX': 'google-no-indexa-mi-pagina', 'en': 'why-is-my-page-not-on-google' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['seo-web', 'pagina-web', 'aeo-optimizacion-ia'],
        relatedGuides: ['que-es-seo', 'como-crear-una-pagina-web'],
        content: {
            'es-MX': {
                title: '¿Por qué mi página no aparece en Google y cómo saber si está indexada?',
                shortTitle: '¿Por qué mi página no aparece en Google?',
                description: 'Cómo saber si Google indexó tu página con la Inspección de URLs de Search Console, qué bloquea la indexación y cómo solicitarla.',
                keywords: ['mi página no aparece en Google', 'cómo saber si mi página está indexada', 'Google no indexa mi página', 'solicitar indexación Search Console'],
                badge: 'Diagnóstico',
                hostLine: 'Antes de pensar en posiciones, confirma lo básico: que Google sepa que tu página existe.',
                quickAnswer: 'Para saber si Google tiene tu página, usa la Inspección de URLs de Google Search Console: indica si la URL está en Google y, si no, por qué, por ejemplo una etiqueta noindex o un bloqueo en robots.txt. Tras corregirlo puedes solicitar la indexación, que suele tardar un día o más y no está garantizada.',
                keyFacts: [
                    { label: 'Herramienta', value: 'Inspección de URLs en Google Search Console' },
                    { label: 'Causas frecuentes', value: 'Etiqueta noindex, bloqueo en robots.txt, errores de rastreo o sitio muy nuevo' },
                    { label: 'Solicitar indexación', value: 'Sí, con un límite diario de solicitudes' },
                    { label: 'Tiempo', value: 'Suele tardar un día o más; no está garantizado' },
                    { label: '"La URL está en Google"', value: 'Significa que puede aparecer, no que vaya a aparecer' },
                ],
                sections: [
                    {
                        id: 'comprobar',
                        title: '¿Cómo comprobar si tu página está indexada?',
                        paragraphs: [
                            'En Search Console, pega la URL en la Inspección de URLs. Si dice que la URL está en Google, la página es apta para aparecer en los resultados. Si dice que no está, la herramienta muestra si Google pudo rastrearla y qué lo impidió.',
                        ],
                    },
                    {
                        id: 'que-bloquea',
                        title: '¿Qué bloquea la indexación?',
                        paragraphs: ['Las causas más comunes son:'],
                        bullets: [
                            'Una etiqueta noindex que quedó de la etapa de desarrollo.',
                            'Reglas de robots.txt que bloquean la página o el sitio completo.',
                            'Errores del servidor o páginas que tardan demasiado.',
                            'Contenido que depende de JavaScript y que Google no logra ver.',
                            'Un sitio muy nuevo, sin enlaces ni sitemap enviado.',
                        ],
                    },
                    {
                        id: 'solicitar',
                        title: '¿Cómo pedir a Google que indexe tu página?',
                        paragraphs: [
                            'Corrige el problema y, desde la misma Inspección de URLs, solicita la indexación. Google indica que suele tardar un día o más, que hay un límite diario de solicitudes y que pedirla no garantiza que la página entre al índice.',
                        ],
                    },
                    {
                        id: 'indexada-pero-no-aparece',
                        title: '¿Por qué está indexada pero no aparece?',
                        paragraphs: [
                            'Estar indexada solo significa que Google la puede mostrar. Para aparecer en una búsqueda concreta tiene que responder mejor que las demás páginas que compiten por esa consulta. Ahí entran el contenido, la estructura y la reputación del sitio.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Sirve buscar "site:midominio.com" en Google?', answer: 'Da una idea general, pero la fuente fiable para una URL concreta es la Inspección de URLs de Search Console.' },
                    { question: '¿Pedir la indexación varias veces la acelera?', answer: 'No. Hay un límite diario y repetir la solicitud no garantiza que la página entre antes.' },
                    { question: '¿Pueden revisar por qué mi sitio no aparece?', answer: 'Sí, es parte de la auditoría SEO: revisamos rastreo, indexación, rendimiento y contenido.' },
                ],
                sources: [
                    { label: 'Ayuda de Search Console — Herramienta de Inspección de URLs', url: 'https://support.google.com/webmasters/answer/9012289' },
                    { label: 'Google Search Central — Guía de SEO para principiantes', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
                ],
                midCta: '¿Tu página lleva semanas publicada y sigue sin aparecer?',
                finalCta: '¿Quieres saber exactamente por qué Google no muestra tu sitio?',
            },
            'en': {
                title: 'Why is my page not showing on Google and how do I check if it is indexed?',
                shortTitle: 'Why is my page not on Google?',
                description: 'How to check whether Google indexed your page with Search Console’s URL Inspection, what blocks indexing and how to request it.',
                keywords: ['my page is not showing on Google', 'how to check if a page is indexed', 'Google not indexing my page', 'request indexing Search Console'],
                badge: 'Diagnosis',
                hostLine: 'Before worrying about rankings, confirm the basics: that Google knows your page exists.',
                quickAnswer: 'To check whether Google has your page, use URL Inspection in Google Search Console: it tells you whether the URL is on Google and, if not, why, for example a noindex tag or a robots.txt block. After fixing it you can request indexing, which usually takes a day or more and is not guaranteed.',
                keyFacts: [
                    { label: 'Tool', value: 'URL Inspection in Google Search Console' },
                    { label: 'Common causes', value: 'noindex tag, robots.txt block, crawl errors or a very new site' },
                    { label: 'Request indexing', value: 'Yes, with a daily request limit' },
                    { label: 'Timing', value: 'Usually a day or more; not guaranteed' },
                    { label: '"URL is on Google"', value: 'Means it can appear, not that it will' },
                ],
                sections: [
                    {
                        id: 'check',
                        title: 'How do you check whether your page is indexed?',
                        paragraphs: [
                            'In Search Console, paste the URL into URL Inspection. If it says the URL is on Google, the page is eligible to appear in results. If not, the tool shows whether Google could crawl it and what prevented indexing.',
                        ],
                    },
                    {
                        id: 'what-blocks',
                        title: 'What blocks indexing?',
                        paragraphs: ['The most common causes on business websites:'],
                        bullets: [
                            'A noindex tag left over from development.',
                            'robots.txt rules blocking the page or the whole site.',
                            'Server errors or pages that take too long.',
                            'Content that depends on JavaScript and that Google cannot see.',
                            'A very new site with no links or submitted sitemap.',
                        ],
                    },
                    {
                        id: 'request',
                        title: 'How do you ask Google to index your page?',
                        paragraphs: [
                            'Fix the issue and request indexing from the same URL Inspection tool. Google says it usually takes a day or more, there is a daily request limit, and requesting does not guarantee the page will be indexed.',
                        ],
                    },
                    {
                        id: 'indexed-but-not-showing',
                        title: 'Why is it indexed but not showing?',
                        paragraphs: [
                            'Being indexed only means Google can show it. To appear for a specific search it has to answer better than the other pages competing for that query. That is where content, structure and site reputation come in.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Does searching "site:mydomain.com" help?', answer: 'It gives a rough idea, but the reliable source for a specific URL is Search Console’s URL Inspection.' },
                    { question: 'Does requesting indexing repeatedly speed it up?', answer: 'No. There is a daily limit and repeating the request does not guarantee faster indexing.' },
                    { question: 'Can you check why my site is not showing?', answer: 'Yes, it is part of the SEO audit: we review crawling, indexing, performance and content.' },
                ],
                sources: [
                    { label: 'Search Console Help — URL Inspection tool', url: 'https://support.google.com/webmasters/answer/9012289' },
                    { label: 'Google Search Central — SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
                ],
                midCta: 'Has your page been live for weeks and still not showing?',
                finalCta: 'Want to know exactly why Google is not showing your site?',
            },
        },
    },
    {
        id: 'como-aparecer-en-google-maps',
        category: 'seo-aeo',
        slug: { 'es-MX': 'como-aparecer-en-google-maps', 'en': 'how-to-appear-on-google-maps' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['seo-local-google-maps', 'seo-web', 'gestion-de-redes-sociales'],
        relatedGuides: ['que-es-seo', 'que-es-aeo'],
        content: {
            'es-MX': {
                title: '¿Cómo aparecer en Google Maps con tu negocio?',
                shortTitle: '¿Cómo aparecer en Google Maps?',
                description: 'Cómo aparecer en Google Maps: quién puede tener un Perfil de Empresa, qué decide el orden de los resultados locales y qué errores suspenden un perfil.',
                keywords: ['cómo aparecer en Google Maps', 'dar de alta mi negocio en Google', 'perfil de empresa de Google', 'posicionar negocio en Google Maps'],
                badge: 'SEO local',
                hostLine: 'Para un negocio con local, el mapa es la primera impresión. Un perfil incompleto se ve como un negocio cerrado.',
                quickAnswer: 'Para aparecer en Google Maps necesitas un Perfil de Empresa de Google verificado, con categoría, horario, fotos y datos correctos. Solo pueden tenerlo negocios con un local que los clientes visitan o que atienden a domicilio en una zona definida; los negocios que operan solo en línea no son elegibles.',
                keyFacts: [
                    { label: 'Quién es elegible', value: 'Negocios con local o que atienden a sus clientes en una zona de servicio' },
                    { label: 'Quién no', value: 'Negocios solo en línea y oficinas virtuales sin operación' },
                    { label: 'Qué decide el orden', value: 'Relevancia, distancia y prominencia' },
                    { label: '¿Se puede pagar por subir?', value: 'No; Google indica que no se puede pagar por mejor posición local' },
                    { label: 'En CA', value: 'Optimización del perfil desde $2,000 MXN' },
                ],
                sections: [
                    {
                        id: 'elegibilidad',
                        title: '¿Quién puede tener un Perfil de Empresa?',
                        paragraphs: [
                            'Según las directrices de Google, puedes crear un perfil si tu negocio tiene un local que los clientes visitan o si viajas a donde están tus clientes. Los negocios a domicilio usan un perfil con zona de servicio. Los negocios que solo operan en línea y las oficinas virtuales que no operan en esa dirección no son elegibles.',
                        ],
                    },
                    {
                        id: 'orden',
                        title: '¿Qué decide quién aparece primero en el mapa?',
                        paragraphs: ['Google explica que los resultados locales dependen de tres factores:'],
                        bullets: [
                            'Relevancia: qué tan bien coincide tu perfil con lo que se busca.',
                            'Distancia: qué tan lejos estás de quien busca.',
                            'Prominencia: qué tan conocido es tu negocio, incluidas tus reseñas y enlaces.',
                        ],
                    },
                    {
                        id: 'perfil-completo',
                        title: '¿Qué debe tener un perfil completo?',
                        paragraphs: ['La relevancia depende de la información que das. Revisa que tu perfil tenga:'],
                        bullets: [
                            'Categoría principal correcta y servicios.',
                            'Horario actualizado, incluidos días festivos.',
                            'Fotos reales del local, productos y equipo.',
                            'Teléfono, sitio web y dirección iguales a los de tu página.',
                            'Respuesta a las reseñas, positivas y negativas.',
                        ],
                    },
                    {
                        id: 'errores',
                        title: '¿Qué errores pueden suspender un perfil?',
                        paragraphs: [
                            'Agregar palabras clave o la ubicación al nombre del negocio no está permitido y puede provocar la suspensión del perfil. Tampoco se puede usar una dirección donde el negocio no opera. El nombre debe ser el que usas en el mundo real.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Aparecer en Google Maps cuesta?', answer: 'Crear el Perfil de Empresa es gratuito. Lo que tiene costo es el trabajo de optimizarlo y mantenerlo activo si lo contratas.' },
                    { question: '¿Puedo pagar para salir primero en el mapa?', answer: 'No en los resultados locales orgánicos. Google indica que no se puede solicitar ni pagar una mejor posición local.' },
                    { question: '¿Puedo poner mi ciudad en el nombre para salir más?', answer: 'No. Las directrices prohíben agregar información innecesaria al nombre y hacerlo puede suspender el perfil.' },
                ],
                sources: [
                    { label: 'Ayuda de Perfil de Empresa — Directrices para representar tu negocio en Google', url: 'https://support.google.com/business/answer/3038177' },
                    { label: 'Ayuda de Perfil de Empresa — Cómo mejorar tu posicionamiento local', url: 'https://support.google.com/business/answer/7091' },
                ],
                midCta: '¿Tu negocio no aparece cuando buscan tu servicio cerca?',
                finalCta: '¿Quieres un perfil de Google completo y activo?',
            },
            'en': {
                title: 'How do you get your business on Google Maps?',
                shortTitle: 'How to appear on Google Maps',
                description: 'How to appear on Google Maps: who can have a Business Profile, what decides local ranking and which mistakes get a profile suspended.',
                keywords: ['how to appear on Google Maps', 'add my business to Google', 'Google Business Profile', 'rank higher on Google Maps'],
                badge: 'Local SEO',
                hostLine: 'For a business with a location, the map is the first impression. An incomplete profile looks like a closed business.',
                quickAnswer: 'To appear on Google Maps you need a verified Google Business Profile with the right category, hours, photos and accurate details. Only businesses with a location customers visit, or that serve customers in a defined service area, are eligible; online-only businesses are not.',
                keyFacts: [
                    { label: 'Who is eligible', value: 'Businesses with a location or that serve customers in a service area' },
                    { label: 'Who is not', value: 'Online-only businesses and unstaffed virtual offices' },
                    { label: 'What decides ranking', value: 'Relevance, distance and prominence' },
                    { label: 'Can you pay to rank higher?', value: 'No; Google says you cannot pay for a better local ranking' },
                    { label: 'At CA', value: 'Profile optimization from $125 USD' },
                ],
                sections: [
                    {
                        id: 'eligibility',
                        title: 'Who can have a Business Profile?',
                        paragraphs: [
                            'Under Google’s guidelines, you can create a profile if your business has a location customers can visit or if you travel to customers. Service-area businesses use a profile with a service area. Online-only businesses and virtual offices that do not operate at that address are not eligible.',
                        ],
                    },
                    {
                        id: 'ranking',
                        title: 'What decides who shows first on the map?',
                        paragraphs: ['Google explains that local results depend on three factors:'],
                        bullets: [
                            'Relevance: how well your profile matches the search.',
                            'Distance: how far you are from the searcher.',
                            'Prominence: how well-known your business is, including reviews and links.',
                        ],
                    },
                    {
                        id: 'complete-profile',
                        title: 'What should a complete profile include?',
                        paragraphs: ['Relevance depends on the information you provide. Make sure your profile has:'],
                        bullets: [
                            'The right primary category and services.',
                            'Up-to-date hours, including holidays.',
                            'Real photos of the location, products and team.',
                            'Phone, website and address matching your website.',
                            'Replies to reviews, positive and negative.',
                        ],
                    },
                    {
                        id: 'mistakes',
                        title: 'Which mistakes can get a profile suspended?',
                        paragraphs: [
                            'Adding keywords or location to the business name is not allowed and can lead to suspension. Nor can you use an address where the business does not operate. The name must be the one you use in the real world.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Does appearing on Google Maps cost money?', answer: 'Creating a Business Profile is free. What costs money is the work of optimizing and maintaining it if you hire it out.' },
                    { question: 'Can I pay to show first on the map?', answer: 'Not in organic local results. Google says you cannot request or pay for a better local ranking.' },
                    { question: 'Can I add my city to the name to rank better?', answer: 'No. The guidelines prohibit unnecessary information in the name and doing so can get the profile suspended.' },
                ],
                sources: [
                    { label: 'Business Profile Help — Guidelines for representing your business on Google', url: 'https://support.google.com/business/answer/3038177' },
                    { label: 'Business Profile Help — Tips to improve your local ranking', url: 'https://support.google.com/business/answer/7091' },
                ],
                midCta: 'Does your business not show up when people search nearby?',
                finalCta: 'Want a complete, active Google profile?',
            },
        },
    },

    // ─── Automatización ───────────────────────────────────────────────────
    {
        id: 'automatizar-procesos-n8n-make',
        category: 'automatizacion',
        slug: { 'es-MX': 'automatizar-procesos-n8n-make', 'en': 'business-process-automation-n8n-make' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['integraciones-api', 'inteligencia-artificial-integrada', 'bot-de-whatsapp'],
        relatedGuides: ['bot-de-whatsapp-para-negocios', 'que-es-un-crm'],
        content: {
            'es-MX': {
                title: '¿Cómo automatizar procesos de tu negocio con n8n o Make?',
                shortTitle: 'Automatizar procesos con n8n o Make',
                description: 'Qué procesos conviene automatizar primero, diferencias entre n8n y Make, cuándo conviene un desarrollo a medida y cómo medir el ahorro.',
                keywords: ['automatizar procesos de negocio', 'qué es n8n', 'n8n vs Make', 'automatización de tareas repetitivas'],
                badge: 'Automatización',
                hostLine: 'Automatiza primero lo aburrido y frecuente. Lo raro y delicado, déjalo para después.',
                quickAnswer: 'Automatizar un proceso es conectar tus herramientas para que las tareas repetitivas ocurran solas: pasar datos de un formulario al CRM, enviar avisos o generar reportes. n8n y Make permiten crear esos flujos visualmente; n8n además se puede instalar en tu propio servidor. Empieza por la tarea que más tiempo consume cada semana.',
                keyFacts: [
                    { label: 'Qué se automatiza', value: 'Tareas repetitivas entre herramientas: datos, avisos, reportes' },
                    { label: 'n8n', value: 'Licencia fair-code; se puede autoalojar en tu servidor' },
                    { label: 'Make', value: 'Plataforma en la nube para crear flujos visuales' },
                    { label: 'Desarrollo a medida', value: 'Cuando el volumen, la seguridad o la lógica lo exigen' },
                    { label: 'En CA', value: 'Integraciones desde $1,500 MXN' },
                ],
                sections: [
                    {
                        id: 'que-automatizar',
                        title: '¿Qué procesos conviene automatizar primero?',
                        paragraphs: ['Los que cumplen tres condiciones: se repiten mucho, siguen reglas claras y hoy se hacen copiando datos a mano. Por ejemplo:'],
                        bullets: [
                            'Registrar en el CRM cada contacto que llega por formulario o WhatsApp.',
                            'Enviar confirmaciones y recordatorios de citas.',
                            'Avisar al equipo cuando entra un pedido o un pago.',
                            'Generar reportes semanales a partir de hojas de cálculo.',
                        ],
                    },
                    {
                        id: 'n8n-o-make',
                        title: '¿n8n o Make?',
                        paragraphs: [
                            'Ambos conectan aplicaciones con flujos visuales. n8n se describe como una herramienta de automatización con licencia fair-code que se puede instalar en tu propio servidor, útil cuando quieres controlar dónde viven tus datos. Make funciona en la nube y es práctico para arrancar rápido sin mantener infraestructura.',
                        ],
                    },
                    {
                        id: 'a-medida',
                        title: '¿Cuándo conviene un desarrollo a medida?',
                        paragraphs: [
                            'Cuando el volumen de operaciones es alto, la lógica es compleja, se manejan datos sensibles o el flujo es parte central del negocio. Ahí una integración propia da más control y puede costar menos a largo plazo que pagar por operación.',
                        ],
                    },
                    {
                        id: 'medir',
                        title: '¿Cómo saber si la automatización funciona?',
                        paragraphs: [
                            'Mide antes y después: horas a la semana que tomaba la tarea, errores de captura y tiempo de respuesta al cliente. Una automatización que nadie revisa también puede fallar en silencio, así que conviene avisar cuando un flujo se detiene.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Necesito saber programar para usar n8n o Make?', answer: 'Para flujos sencillos, no. Para integraciones con lógica compleja o APIs poco documentadas, conviene apoyo técnico.' },
                    { question: '¿La automatización reemplaza a mi equipo?', answer: 'No. Quita las tareas repetitivas para que el equipo dedique su tiempo a atender clientes y tomar decisiones.' },
                    { question: '¿Cuánto cuesta una integración?', answer: 'En CA, una conexión por API empieza en $1,500 MXN. El precio de cada tipo de integración aparece en la ficha del producto.' },
                ],
                sources: [
                    { label: 'Documentación de n8n', url: 'https://docs.n8n.io/' },
                ],
                midCta: '¿Cuántas horas a la semana pierde tu equipo copiando datos?',
                finalCta: '¿Quieres automatizar la tarea que más tiempo te quita?',
            },
            'en': {
                title: 'How do you automate business processes with n8n or Make?',
                shortTitle: 'Process automation with n8n or Make',
                description: 'Which processes to automate first, n8n vs Make, when custom development makes sense and how to measure the time saved.',
                keywords: ['business process automation', 'what is n8n', 'n8n vs Make', 'automate repetitive tasks'],
                badge: 'Automation',
                hostLine: 'Automate the boring, frequent work first. Leave the rare and delicate cases for later.',
                quickAnswer: 'Automating a process means connecting your tools so repetitive tasks happen on their own: moving form data into your CRM, sending notifications or generating reports. n8n and Make let you build those workflows visually, and n8n can also be self-hosted on your own server. Start with the task that eats the most time each week.',
                keyFacts: [
                    { label: 'What gets automated', value: 'Repetitive tasks between tools: data, notifications, reports' },
                    { label: 'n8n', value: 'Fair-code licensed; can be self-hosted on your server' },
                    { label: 'Make', value: 'Cloud platform for building visual workflows' },
                    { label: 'Custom development', value: 'When volume, security or logic require it' },
                    { label: 'At CA', value: 'Integrations from $95 USD' },
                ],
                sections: [
                    {
                        id: 'what-to-automate',
                        title: 'Which processes should you automate first?',
                        paragraphs: ['Those that meet three conditions: they repeat often, follow clear rules and are done today by copying data by hand. For example:'],
                        bullets: [
                            'Logging every contact from a form or WhatsApp into your CRM.',
                            'Sending appointment confirmations and reminders.',
                            'Notifying the team when an order or payment comes in.',
                            'Generating weekly reports from spreadsheets.',
                        ],
                    },
                    {
                        id: 'n8n-or-make',
                        title: 'n8n or Make?',
                        paragraphs: [
                            'Both connect apps through visual workflows. n8n describes itself as a fair-code licensed automation tool that can be self-hosted, useful when you want control over where your data lives. Make runs in the cloud and is handy to get started quickly without maintaining infrastructure.',
                        ],
                    },
                    {
                        id: 'custom',
                        title: 'When does custom development make sense?',
                        paragraphs: [
                            'When operation volume is high, the logic is complex, sensitive data is involved or the workflow is central to the business. A custom integration then gives more control and can cost less over time than paying per operation.',
                        ],
                    },
                    {
                        id: 'measure',
                        title: 'How do you know the automation is working?',
                        paragraphs: [
                            'Measure before and after: weekly hours the task took, data-entry errors and customer response time. An automation nobody monitors can also fail silently, so set up alerts when a workflow stops.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Do I need to code to use n8n or Make?', answer: 'Not for simple workflows. For complex logic or poorly documented APIs, technical help is worth it.' },
                    { question: 'Does automation replace my team?', answer: 'No. It removes repetitive tasks so the team can spend its time serving customers and making decisions.' },
                    { question: 'How much does an integration cost?', answer: 'At CA, an API connection starts at $95 USD. Each integration type’s price is listed on the product page.' },
                ],
                sources: [
                    { label: 'n8n documentation', url: 'https://docs.n8n.io/' },
                ],
                midCta: 'How many hours a week does your team lose copying data?',
                finalCta: 'Want to automate the task that takes up most of your time?',
            },
        },
    },
];
