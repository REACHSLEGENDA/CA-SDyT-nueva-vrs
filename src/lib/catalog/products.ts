import { getCategory } from './categories';
import type { CatalogLocale, CategoryId, Product } from './types';

/**
 * Catálogo público de productos (fase 1: es-MX y en).
 *
 * Fuente: Manual interno de cotizaciones, septiembre 2026 (MXN y USD).
 * Solo el precio "desde" de cada producto es público. Los precios por nivel,
 * mensualidades y rangos completos están en `pricing.server.ts`.
 *
 * Criterio: una ficha por intención de búsqueda, no por nivel. Básico, Mediano y
 * Premium son la misma búsqueda ("página web"), así que viven como niveles dentro
 * de una ficha; separarlos crearía páginas casi idénticas que se canibalizarían.
 */

/** Fecha de la última revisión del catálogo contra el manual de cotizaciones. */
export const CATALOG_LAST_REVIEWED = '2026-09-22';

const TIMELINE = {
    web: {
        'es-MX': '2–3 semanas para sitios básicos y medianos; 3–5 semanas para premium o personalizados.',
        'en': '2–3 weeks for basic and mid-size sites; 3–5 weeks for premium or custom builds.',
    },
    systems: {
        'es-MX': '4–10 semanas estimadas, según módulos, usuarios, migraciones e integraciones.',
        'en': 'An estimated 4–10 weeks, depending on modules, users, migrations and integrations.',
    },
    apps: {
        'es-MX': '4–12 semanas estimadas; los hitos y la fecha final se fijan en la propuesta.',
        'en': 'An estimated 4–12 weeks; milestones and the final date are set in the proposal.',
    },
} as const;

export const products: Product[] = [
    // ─── Web ──────────────────────────────────────────────────────────────
    {
        id: 'pagina-web',
        category: 'web',
        slug: { 'es-MX': 'pagina-web', 'en': 'website' },
        icon: 'globe',
        from: { amount: { MXN: 4500, USD: 280 }, billing: 'one-time' },
        tiers: [
            {
                id: 'basico',
                name: { 'es-MX': 'Básico', 'en': 'Basic' },
                features: {
                    'es-MX': ['3 secciones', 'Diseño responsivo', 'Formulario de contacto y WhatsApp'],
                    'en': ['3 pages', 'Responsive design', 'Contact form and WhatsApp'],
                },
            },
            {
                id: 'mediano',
                name: { 'es-MX': 'Mediano', 'en': 'Mid-size' },
                features: {
                    'es-MX': ['7 secciones', 'Estructura pensada para SEO', 'Integraciones básicas'],
                    'en': ['7 pages', 'SEO-ready structure', 'Basic integrations'],
                },
            },
            {
                id: 'premium',
                name: { 'es-MX': 'Premium', 'en': 'Premium' },
                features: {
                    'es-MX': ['14 secciones o más', 'Diseño a la medida', 'Animaciones y rendimiento optimizado'],
                    'en': ['14+ pages', 'Custom design', 'Animations and optimized performance'],
                },
            },
            {
                id: 'personalizado',
                name: { 'es-MX': 'Personalizado', 'en': 'Custom' },
                features: {
                    'es-MX': ['Alcance especial', 'Se cotiza por proyecto'],
                    'en': ['Special scope', 'Quoted per project'],
                },
            },
        ],
        content: {
            'es-MX': {
                name: 'Página web profesional',
                seoTitle: 'Página web profesional para tu negocio | Precios desde $4,500 MXN',
                description: 'Diseño y desarrollo de páginas web rápidas y responsivas para negocios en México. Paquetes de 3, 7 y 14+ secciones, desde $4,500 MXN.',
                intro: 'Diseñamos y programamos sitios web rápidos, seguros y fáciles de encontrar en Google. Elige el tamaño que necesita tu negocio hoy y crece después sin rehacer el sitio.',
                novaLine: 'Una buena web no es la más cara: es la que responde lo que tu cliente busca en los primeros segundos.',
                includes: [
                    'Diseño responsivo para celular, tablet y computadora',
                    'Estructura y metadatos preparados para buscadores',
                    'Formulario de contacto y botón de WhatsApp',
                    'Certificado SSL y buenas prácticas de rendimiento',
                    'Publicación del sitio en tu dominio',
                ],
                inputs: [
                    'Logotipo y colores de tu marca (o los definimos juntos)',
                    'Textos e imágenes de tus productos o servicios',
                    'Dominio, si ya tienes uno',
                    'Ejemplos de sitios que te gusten',
                ],
                deliverables: [
                    'Sitio publicado y funcionando en tu dominio',
                    'Accesos y guía básica de uso',
                    'Plan de mantenimiento opcional',
                ],
                timeline: TIMELINE.web['es-MX'],
                faqs: [
                    { question: '¿Cuánto cuesta una página web en CA?', answer: 'El paquete Básico de 3 secciones empieza en $4,500 MXN. Los paquetes Mediano y Premium, y el mantenimiento mensual de cada uno, aparecen en la tabla de precios de esta ficha.' },
                    { question: '¿El precio incluye dominio y hosting?', answer: 'No, salvo que la propuesta lo indique. Hosting, dominio y licencias de terceros se cotizan por separado para que sepas exactamente qué pagas y a quién.' },
                    { question: '¿Puedo empezar con el paquete Básico y crecer después?', answer: 'Sí. El sitio se construye para ampliarse: puedes agregar secciones o pasar a otro paquete sin empezar de cero.' },
                ],
                keywords: ['cuánto cuesta una página web en México', 'diseño de páginas web precio', 'página web para negocio', 'desarrollo web profesional'],
            },
            'en': {
                name: 'Professional website',
                seoTitle: 'Professional business website | Pricing from $280 USD',
                description: 'Fast, responsive business websites designed and built by a nearshore team in Mexico. 3, 7 and 14+ page packages, from $280 USD.',
                intro: 'We design and build fast, secure websites that are easy to find on Google. Pick the size your business needs today and grow later without rebuilding.',
                novaLine: 'A good website is not the most expensive one: it is the one that answers what your customer is looking for in the first few seconds.',
                includes: [
                    'Responsive design for phone, tablet and desktop',
                    'Search-ready structure and metadata',
                    'Contact form and WhatsApp button',
                    'SSL certificate and performance best practices',
                    'Launch on your domain',
                ],
                inputs: [
                    'Your logo and brand colors (or we define them together)',
                    'Copy and images for your products or services',
                    'Your domain, if you already have one',
                    'Examples of websites you like',
                ],
                deliverables: [
                    'Live website on your domain',
                    'Access credentials and a basic user guide',
                    'Optional maintenance plan',
                ],
                timeline: TIMELINE.web['en'],
                faqs: [
                    { question: 'How much does a website cost at CA?', answer: 'The Basic 3-page package starts at $280 USD. Mid-size and Premium packages, and the monthly maintenance for each, are listed in the pricing table on this page.' },
                    { question: 'Are domain and hosting included?', answer: 'No, unless the proposal says so. Hosting, domain and third-party licenses are quoted separately so you know exactly what you pay and to whom.' },
                    { question: 'Can I start with Basic and upgrade later?', answer: 'Yes. The site is built to grow: you can add pages or move to another package without starting over.' },
                ],
                keywords: ['website cost for small business', 'nearshore web design', 'business website pricing', 'professional website development'],
            },
        },
        relatedGuides: ['cuanto-cuesta-una-pagina-web'],
        relatedProducts: ['seo-web', 'paquetes-360', 'sistema-web-a-medida'],
    },

    // ─── Sistemas ─────────────────────────────────────────────────────────
    {
        id: 'sistema-web-a-medida',
        category: 'sistemas',
        slug: { 'es-MX': 'sistema-web-a-medida', 'en': 'custom-web-system' },
        icon: 'layout',
        from: { amount: { MXN: 12000, USD: 750 }, billing: 'one-time' },
        tiers: [
            {
                id: 'basico',
                name: { 'es-MX': 'Básico', 'en': 'Basic' },
                features: { 'es-MX': ['Panel de administración', 'Base de datos'], 'en': ['Admin panel', 'Database'] },
            },
            {
                id: 'intermedio',
                name: { 'es-MX': 'Intermedio', 'en': 'Intermediate' },
                features: { 'es-MX': ['Módulos a la medida', 'Usuarios con roles y permisos'], 'en': ['Custom modules', 'Users with roles and permissions'] },
            },
            {
                id: 'avanzado',
                name: { 'es-MX': 'Avanzado', 'en': 'Advanced' },
                features: { 'es-MX': ['APIs e integraciones', 'Automatizaciones'], 'en': ['APIs and integrations', 'Automations'] },
            },
            {
                id: 'personalizado',
                name: { 'es-MX': 'Personalizado', 'en': 'Custom' },
                features: { 'es-MX': ['Alcance especial', 'Se cotiza por proyecto'], 'en': ['Special scope', 'Quoted per project'] },
            },
        ],
        content: {
            'es-MX': {
                name: 'Sistema web a medida',
                seoTitle: 'Sistema web a medida para empresas | Desde $12,000 MXN',
                description: 'Desarrollamos sistemas web a medida: paneles, bases de datos, roles de usuario, APIs y automatizaciones. Proyectos desde $12,000 MXN.',
                intro: 'Cuando las hojas de cálculo ya no alcanzan, un sistema propio ordena tu operación: un panel para tu equipo, datos centralizados y procesos que no dependen de copiar y pegar.',
                novaLine: 'Antes de programar, dibujamos tu proceso real. El sistema debe parecerse a cómo trabajas, no al revés.',
                includes: [
                    'Análisis del proceso que se va a digitalizar',
                    'Panel web con acceso por usuario',
                    'Base de datos centralizada y respaldada',
                    'Roles y permisos según el nivel',
                    'Integraciones con otras herramientas en el nivel Avanzado',
                ],
                inputs: [
                    'Descripción del proceso actual y quién participa',
                    'Hojas de cálculo o formatos que usan hoy',
                    'Número aproximado de usuarios',
                    'Herramientas con las que debe conectarse',
                ],
                deliverables: [
                    'Sistema en producción con usuarios configurados',
                    'Migración de los datos iniciales acordados',
                    'Capacitación para tu equipo',
                ],
                timeline: TIMELINE.systems['es-MX'],
                faqs: [
                    { question: '¿Qué diferencia hay entre un sistema a medida y un software de suscripción?', answer: 'Un sistema a medida se adapta a tu proceso y es tuyo; un software de suscripción te obliga a adaptarte a él y pagas por usuario cada mes. Conviene a la medida cuando tu operación es particular o el costo por usuario crece mucho.' },
                    { question: '¿Pueden migrar mis datos de Excel?', answer: 'Sí. La migración de los datos iniciales se define en la propuesta según volumen y calidad de la información.' },
                    { question: '¿Cómo se paga un sistema?', answer: 'El proyecto inicia con un anticipo y el resto se liga a entregas. El porcentaje y el calendario se especifican en la propuesta.' },
                ],
                keywords: ['sistema web a medida', 'desarrollo de software a la medida México', 'panel administrativo web', 'sistema para empresa precio'],
            },
            'en': {
                name: 'Custom web system',
                seoTitle: 'Custom web systems for businesses | From $750 USD',
                description: 'Custom web systems: admin panels, databases, user roles, APIs and automations, built by a nearshore team in Mexico. From $750 USD.',
                intro: 'When spreadsheets stop scaling, a system of your own brings order to operations: one panel for your team, centralized data and processes that no longer depend on copy and paste.',
                novaLine: 'Before we write code, we map your real process. The system should fit how you work, not the other way around.',
                includes: [
                    'Analysis of the process to be digitized',
                    'Web panel with per-user access',
                    'Centralized, backed-up database',
                    'Roles and permissions depending on tier',
                    'Integrations with other tools in the Advanced tier',
                ],
                inputs: [
                    'A description of the current process and who is involved',
                    'Spreadsheets or forms you use today',
                    'Approximate number of users',
                    'Tools it needs to connect with',
                ],
                deliverables: [
                    'System in production with users set up',
                    'Migration of the agreed initial data',
                    'Training for your team',
                ],
                timeline: TIMELINE.systems['en'],
                faqs: [
                    { question: 'What is the difference between a custom system and subscription software?', answer: 'A custom system adapts to your process and you own it; subscription software makes you adapt to it and charges per user every month. Custom makes sense when your operation is specific or per-user costs keep growing.' },
                    { question: 'Can you migrate my Excel data?', answer: 'Yes. Migration of the initial data is defined in the proposal based on volume and data quality.' },
                    { question: 'How is a system paid for?', answer: 'The project starts with a deposit and the balance is tied to deliveries. The percentage and schedule are set in the proposal.' },
                ],
                keywords: ['custom web system development', 'nearshore custom software', 'admin panel development', 'business software cost'],
            },
        },
        relatedGuides: ['que-es-un-crm'],
        relatedProducts: ['crm', 'sistema-de-inventarios', 'integraciones-api'],
    },
    {
        id: 'crm',
        category: 'sistemas',
        slug: { 'es-MX': 'crm', 'en': 'crm' },
        icon: 'users',
        from: { amount: { MXN: 18000, USD: 1120 }, billing: 'one-time' },
        tiers: [
            {
                id: 'basico',
                name: { 'es-MX': 'CRM Básico', 'en': 'Basic CRM' },
                features: { 'es-MX': ['Gestión de clientes', 'Seguimiento de contactos'], 'en': ['Customer management', 'Contact follow-up'] },
            },
            {
                id: 'comercial',
                name: { 'es-MX': 'CRM Comercial', 'en': 'Sales CRM' },
                features: { 'es-MX': ['Leads y embudos de venta', 'Tareas y recordatorios'], 'en': ['Leads and sales pipelines', 'Tasks and reminders'] },
            },
            {
                id: 'avanzado',
                name: { 'es-MX': 'CRM Avanzado', 'en': 'Advanced CRM' },
                features: { 'es-MX': ['Automatizaciones', 'Múltiples usuarios y equipos'], 'en': ['Automations', 'Multiple users and teams'] },
            },
        ],
        content: {
            'es-MX': {
                name: 'CRM a medida',
                seoTitle: 'CRM a medida para tu negocio | Desde $18,000 MXN',
                description: 'CRM a medida para gestionar clientes, leads, embudos de venta y tareas, sin pagar licencias por usuario. Desde $18,000 MXN.',
                intro: 'Un CRM propio concentra a tus clientes, cotizaciones y seguimientos en un solo lugar, con los campos y etapas que usa tu equipo de ventas, sin licencias mensuales por usuario.',
                novaLine: 'El mejor CRM es el que tu equipo sí usa. Por eso lo diseñamos con sus etapas de venta, no con las de un manual genérico.',
                includes: [
                    'Ficha de cada cliente con historial',
                    'Etapas de venta configuradas a tu proceso',
                    'Tareas, recordatorios y seguimiento',
                    'Reportes básicos de ventas',
                    'Automatizaciones y equipos en el nivel Avanzado',
                ],
                inputs: [
                    'Tu proceso de venta actual, paso a paso',
                    'Base de clientes existente (Excel u otro sistema)',
                    'Número de vendedores y quién supervisa',
                ],
                deliverables: [
                    'CRM en producción con usuarios y etapas configuradas',
                    'Importación de la base de clientes acordada',
                    'Capacitación para el equipo comercial',
                ],
                timeline: TIMELINE.systems['es-MX'],
                faqs: [
                    { question: '¿Por qué un CRM a medida y no uno de suscripción?', answer: 'Conviene cuando tu proceso de venta es particular o cuando pagar licencias por vendedor sale más caro con el tiempo. Si tu proceso es estándar, una herramienta comercial puede bastar y te lo diremos.' },
                    { question: '¿El CRM puede conectarse con WhatsApp o mi sitio web?', answer: 'Sí. Las integraciones con formularios web, WhatsApp u otras herramientas se incluyen en el nivel Avanzado o se cotizan como complemento.' },
                    { question: '¿Mis datos de clientes están protegidos?', answer: 'El sistema se construye con acceso por usuario y respaldos. Como responsable de esos datos, tu empresa debe contar con aviso de privacidad conforme a la LFPDPPP.' },
                ],
                keywords: ['CRM a medida México', 'CRM para pymes precio', 'sistema de seguimiento de clientes', 'CRM sin licencias por usuario'],
            },
            'en': {
                name: 'Custom CRM',
                seoTitle: 'Custom CRM for your business | From $1,120 USD',
                description: 'Custom CRM to manage customers, leads, sales pipelines and tasks without per-user licenses. Built nearshore in Mexico, from $1,120 USD.',
                intro: 'A CRM of your own keeps customers, quotes and follow-ups in one place, with the fields and stages your sales team actually uses and no monthly per-seat licenses.',
                novaLine: 'The best CRM is the one your team actually uses. That is why we design it around your sales stages, not a generic manual.',
                includes: [
                    'Customer records with full history',
                    'Sales stages configured to your process',
                    'Tasks, reminders and follow-ups',
                    'Basic sales reports',
                    'Automations and teams in the Advanced tier',
                ],
                inputs: [
                    'Your current sales process, step by step',
                    'Existing customer base (Excel or another system)',
                    'Number of sales reps and who supervises them',
                ],
                deliverables: [
                    'CRM in production with users and stages configured',
                    'Import of the agreed customer base',
                    'Training for the sales team',
                ],
                timeline: TIMELINE.systems['en'],
                faqs: [
                    { question: 'Why a custom CRM instead of a subscription one?', answer: 'It makes sense when your sales process is specific or when per-seat licenses become more expensive over time. If your process is standard, an off-the-shelf tool may be enough and we will tell you so.' },
                    { question: 'Can the CRM connect to WhatsApp or my website?', answer: 'Yes. Integrations with web forms, WhatsApp or other tools are included in the Advanced tier or quoted as an add-on.' },
                    { question: 'Is my customer data protected?', answer: 'The system is built with per-user access and backups. Your company remains responsible for complying with the data protection law that applies in your country.' },
                ],
                keywords: ['custom CRM development', 'nearshore CRM developers', 'CRM without per-user licenses', 'small business CRM cost'],
            },
        },
        relatedGuides: ['que-es-un-crm'],
        relatedProducts: ['sistema-web-a-medida', 'bot-de-whatsapp', 'integraciones-api'],
    },
    {
        id: 'plataforma-saas',
        category: 'sistemas',
        slug: { 'es-MX': 'plataforma-saas', 'en': 'saas-platform' },
        icon: 'cloud',
        from: { amount: { MXN: 45000, USD: 2800 }, billing: 'one-time' },
        content: {
            'es-MX': {
                name: 'Plataforma SaaS',
                seoTitle: 'Desarrollo de plataforma SaaS con suscripciones | Desde $45,000 MXN',
                description: 'Desarrollo de plataformas SaaS en la nube con cuentas de usuario y cobro por suscripción. Proyectos desde $45,000 MXN.',
                intro: 'Convierte tu idea o tu servicio en un software que vendes por suscripción: cuentas de clientes, planes, cobro recurrente y un panel para administrarlo todo en la nube.',
                novaLine: 'Un SaaS se valida con clientes pagando, no con funciones. Empezamos por lo mínimo que alguien pagaría y crecemos desde ahí.',
                includes: [
                    'Registro e inicio de sesión de clientes',
                    'Planes y cobro por suscripción',
                    'Panel de administración de cuentas',
                    'Infraestructura en la nube',
                ],
                inputs: [
                    'Descripción del problema que resuelve tu SaaS',
                    'Tipos de usuario y planes que imaginas',
                    'Pasarela de pago preferida',
                ],
                deliverables: [
                    'Plataforma publicada en tu dominio',
                    'Cobro recurrente configurado',
                    'Documentación técnica y accesos',
                ],
                timeline: TIMELINE.systems['es-MX'],
                faqs: [
                    { question: '¿Qué incluye el precio desde $45,000 MXN?', answer: 'Una primera versión funcional con cuentas de usuario, planes y cobro por suscripción. Funciones adicionales se cotizan según el alcance.' },
                    { question: '¿Quién paga los servidores y la pasarela de pago?', answer: 'Los costos de infraestructura, licencias y comisiones de la pasarela son de terceros y se cotizan aparte, salvo que la propuesta indique lo contrario.' },
                    { question: '¿El código es mío?', answer: 'La propiedad y las licencias del código se establecen en el contrato de cada proyecto.' },
                ],
                keywords: ['desarrollo SaaS México', 'crear plataforma por suscripción', 'software como servicio a medida', 'cuánto cuesta desarrollar un SaaS'],
            },
            'en': {
                name: 'SaaS platform',
                seoTitle: 'SaaS platform development with subscriptions | From $2,800 USD',
                description: 'Cloud SaaS platforms with user accounts and subscription billing, built by a nearshore team in Mexico. From $2,800 USD.',
                intro: 'Turn your idea or service into software you sell by subscription: customer accounts, plans, recurring billing and a cloud admin panel to run it all.',
                novaLine: 'A SaaS is validated by paying customers, not by features. We start with the smallest thing someone would pay for and grow from there.',
                includes: [
                    'Customer sign-up and login',
                    'Plans and subscription billing',
                    'Account admin panel',
                    'Cloud infrastructure',
                ],
                inputs: [
                    'The problem your SaaS solves',
                    'User types and plans you have in mind',
                    'Preferred payment gateway',
                ],
                deliverables: [
                    'Platform live on your domain',
                    'Recurring billing configured',
                    'Technical documentation and access',
                ],
                timeline: TIMELINE.systems['en'],
                faqs: [
                    { question: 'What does the $2,800 USD starting price include?', answer: 'A first working version with user accounts, plans and subscription billing. Additional features are quoted based on scope.' },
                    { question: 'Who pays for servers and the payment gateway?', answer: 'Infrastructure, licenses and gateway fees are third-party costs quoted separately unless the proposal says otherwise.' },
                    { question: 'Do I own the code?', answer: 'Code ownership and licensing are set out in each project contract.' },
                ],
                keywords: ['SaaS development nearshore', 'build a subscription platform', 'custom SaaS development cost', 'MVP SaaS developers'],
            },
        },
        relatedGuides: [],
        relatedProducts: ['sistema-web-a-medida', 'pasarelas-de-pago', 'app-movil'],
    },
    {
        id: 'sistema-de-inventarios',
        category: 'sistemas',
        slug: { 'es-MX': 'sistema-de-inventarios', 'en': 'inventory-system' },
        icon: 'package',
        from: { amount: { MXN: 18000, USD: 1120 }, billing: 'one-time' },
        content: {
            'es-MX': {
                name: 'Sistema de inventarios',
                seoTitle: 'Sistema de inventarios a medida | Desde $18,000 MXN',
                description: 'Sistema de inventarios a medida: entradas, salidas, existencias por almacén y alertas de stock. Desde $18,000 MXN.',
                intro: 'Controla entradas, salidas y existencias en tiempo real, con los productos, almacenes y reglas de tu negocio. Sin conteos a mano ni hojas de cálculo desactualizadas.',
                novaLine: 'Un inventario confiable empieza con un solo lugar donde se registra cada movimiento.',
                includes: [
                    'Catálogo de productos y almacenes',
                    'Registro de entradas y salidas',
                    'Existencias en tiempo real y alertas de stock mínimo',
                    'Reportes de movimientos',
                ],
                inputs: [
                    'Lista de productos y unidades de medida',
                    'Almacenes o sucursales',
                    'Cómo registran hoy los movimientos',
                ],
                deliverables: [
                    'Sistema en producción con catálogo cargado',
                    'Usuarios configurados',
                    'Capacitación para el equipo',
                ],
                timeline: TIMELINE.systems['es-MX'],
                faqs: [
                    { question: '¿Se puede conectar con mi punto de venta?', answer: 'Sí. Puede integrarse con un sistema de ventas a medida o con otras herramientas mediante API; la integración se define en la propuesta.' },
                    { question: '¿Funciona con varias sucursales?', answer: 'Sí, el sistema puede manejar varios almacenes o sucursales con existencias separadas.' },
                    { question: '¿Pueden cargar mi inventario actual?', answer: 'Sí, la carga inicial del catálogo se acuerda en la propuesta según el formato y volumen de tu información.' },
                ],
                keywords: ['sistema de inventarios a medida', 'software de inventario para negocio', 'control de almacén web', 'sistema de inventario precio México'],
            },
            'en': {
                name: 'Inventory system',
                seoTitle: 'Custom inventory management system | From $1,120 USD',
                description: 'Custom inventory system: stock in and out, levels per warehouse and low-stock alerts. Built nearshore in Mexico, from $1,120 USD.',
                intro: 'Track stock in, stock out and levels in real time, with your products, warehouses and business rules. No manual counts or outdated spreadsheets.',
                novaLine: 'Reliable inventory starts with a single place where every movement is recorded.',
                includes: [
                    'Product and warehouse catalog',
                    'Stock-in and stock-out records',
                    'Real-time levels and low-stock alerts',
                    'Movement reports',
                ],
                inputs: [
                    'Product list and units of measure',
                    'Warehouses or branches',
                    'How movements are recorded today',
                ],
                deliverables: [
                    'System in production with catalog loaded',
                    'Users configured',
                    'Team training',
                ],
                timeline: TIMELINE.systems['en'],
                faqs: [
                    { question: 'Can it connect to my point of sale?', answer: 'Yes. It can integrate with a custom sales system or other tools via API; the integration is defined in the proposal.' },
                    { question: 'Does it work with multiple branches?', answer: 'Yes, the system can handle several warehouses or branches with separate stock levels.' },
                    { question: 'Can you load my current inventory?', answer: 'Yes, the initial catalog load is agreed in the proposal based on your data format and volume.' },
                ],
                keywords: ['custom inventory system', 'inventory management software development', 'warehouse tracking web app', 'nearshore inventory software'],
            },
        },
        relatedGuides: [],
        relatedProducts: ['sistema-de-ventas', 'sistema-web-a-medida', 'integraciones-api'],
    },
    {
        id: 'sistema-de-ventas',
        category: 'sistemas',
        slug: { 'es-MX': 'sistema-de-ventas', 'en': 'sales-system' },
        icon: 'receipt',
        from: { amount: { MXN: 22000, USD: 1375 }, billing: 'one-time' },
        content: {
            'es-MX': {
                name: 'Sistema de ventas y punto de venta',
                seoTitle: 'Sistema de ventas y punto de venta a medida | Desde $22,000 MXN',
                description: 'Sistema de ventas y punto de venta a medida: registro de ventas, cortes de caja, clientes y reportes. Desde $22,000 MXN.',
                intro: 'Registra cada venta, cierra caja sin descuadres y consulta qué se vende, cuándo y quién lo vende, con un sistema hecho para la forma en que cobra tu negocio.',
                novaLine: 'Si al final del día tienes que cuadrar a mano, tu sistema de ventas todavía no está trabajando para ti.',
                includes: [
                    'Registro de ventas y tickets',
                    'Cortes de caja por usuario',
                    'Catálogo de productos y precios',
                    'Reportes de ventas por periodo',
                ],
                inputs: [
                    'Productos, precios y formas de pago',
                    'Número de cajas o vendedores',
                    'Reportes que necesitas ver',
                ],
                deliverables: [
                    'Sistema en producción con usuarios y catálogo',
                    'Capacitación para cajeros y supervisores',
                ],
                timeline: TIMELINE.systems['es-MX'],
                faqs: [
                    { question: '¿Se conecta con inventarios?', answer: 'Sí. Puede trabajar junto con un sistema de inventarios para descontar existencias en cada venta.' },
                    { question: '¿Puedo cobrar con tarjeta?', answer: 'Sí, mediante la integración de una pasarela o terminal de pago; se cotiza según el proveedor que elijas.' },
                    { question: '¿Genera facturas?', answer: 'La facturación electrónica depende de un proveedor de certificación autorizado y se integra como complemento según la propuesta.' },
                ],
                keywords: ['sistema de punto de venta a medida', 'software de ventas para negocio', 'POS web México', 'sistema de caja precio'],
            },
            'en': {
                name: 'Sales and point-of-sale system',
                seoTitle: 'Custom sales and POS system | From $1,375 USD',
                description: 'Custom sales and point-of-sale system: sales records, cash-register closings, customers and reports. Built nearshore, from $1,375 USD.',
                intro: 'Record every sale, close the register without discrepancies and see what sells, when and by whom, with a system built around how your business charges.',
                novaLine: 'If you still reconcile by hand at the end of the day, your sales system is not working for you yet.',
                includes: [
                    'Sales and receipt records',
                    'Per-user register closings',
                    'Product and price catalog',
                    'Sales reports by period',
                ],
                inputs: [
                    'Products, prices and payment methods',
                    'Number of registers or sales reps',
                    'Reports you need to see',
                ],
                deliverables: [
                    'System in production with users and catalog',
                    'Training for cashiers and supervisors',
                ],
                timeline: TIMELINE.systems['en'],
                faqs: [
                    { question: 'Does it connect to inventory?', answer: 'Yes. It can work alongside an inventory system to deduct stock with each sale.' },
                    { question: 'Can I accept cards?', answer: 'Yes, by integrating a payment gateway or terminal; it is quoted based on the provider you choose.' },
                    { question: 'Does it issue invoices?', answer: 'Electronic invoicing depends on the tax rules and certified providers in your country and is integrated as an add-on per the proposal.' },
                ],
                keywords: ['custom POS system', 'sales management software development', 'web point of sale', 'nearshore POS developers'],
            },
        },
        relatedGuides: [],
        relatedProducts: ['sistema-de-inventarios', 'pasarelas-de-pago', 'crm'],
    },

    // ─── Apps ─────────────────────────────────────────────────────────────
    {
        id: 'app-movil',
        category: 'apps',
        slug: { 'es-MX': 'app-movil', 'en': 'mobile-app' },
        icon: 'smartphone',
        from: { amount: { MXN: 20000, USD: 1250 }, billing: 'one-time' },
        tiers: [
            {
                id: 'informativa',
                name: { 'es-MX': 'App informativa', 'en': 'Informational app' },
                features: { 'es-MX': ['Contenido de tu negocio', 'Contacto y ubicación'], 'en': ['Your business content', 'Contact and location'] },
            },
            {
                id: 'login',
                name: { 'es-MX': 'App con login', 'en': 'App with login' },
                features: { 'es-MX': ['Cuentas de usuario', 'Contenido personalizado'], 'en': ['User accounts', 'Personalized content'] },
            },
            {
                id: 'comercial',
                name: { 'es-MX': 'App comercial', 'en': 'Commerce app' },
                features: { 'es-MX': ['Catálogo y pedidos', 'Pagos en línea'], 'en': ['Catalog and orders', 'Online payments'] },
            },
            {
                id: 'empresarial',
                name: { 'es-MX': 'App empresarial', 'en': 'Enterprise app' },
                features: { 'es-MX': ['Integración con tus sistemas', 'Flujos de operación internos'], 'en': ['Integration with your systems', 'Internal operation workflows'] },
            },
        ],
        content: {
            'es-MX': {
                name: 'App móvil para Android y iOS',
                seoTitle: 'Desarrollo de app móvil Android y iOS | Desde $20,000 MXN',
                description: 'Desarrollo de apps móviles para Android y iOS: informativas, con login, comerciales y empresariales. Desde $20,000 MXN.',
                intro: 'Lleva tu negocio al celular de tus clientes o de tu equipo con una app para Android y iOS, desde una app informativa hasta una app empresarial conectada a tus sistemas.',
                novaLine: 'Antes de pensar en la tienda de apps, piensa en la tarea que tu usuario quiere resolver en dos toques.',
                includes: [
                    'Diseño de interfaz para Android y iOS',
                    'Desarrollo multiplataforma',
                    'Publicación en Google Play y App Store',
                    'Panel o conexión de datos según el tipo de app',
                ],
                inputs: [
                    'Qué debe poder hacer el usuario en la app',
                    'Logotipo, colores y contenidos',
                    'Cuentas de desarrollador de Google y Apple (te guiamos a crearlas)',
                ],
                deliverables: [
                    'App publicada en las tiendas',
                    'Código y accesos según contrato',
                    'Guía de actualización',
                ],
                timeline: TIMELINE.apps['es-MX'],
                faqs: [
                    { question: '¿La app funciona en Android y iPhone?', answer: 'Sí. Desarrollamos una sola base de código para ambas plataformas y la publicamos en Google Play y App Store.' },
                    { question: '¿Quién paga las cuentas de las tiendas?', answer: 'Las cuentas de desarrollador de Google y Apple son a nombre de tu empresa y se pagan directamente a ellas; no están incluidas en el precio.' },
                    { question: '¿Qué tipo de app necesito?', answer: 'Depende de lo que hará el usuario: consultar información, iniciar sesión, comprar u operar procesos internos. La tabla de esta ficha compara los cuatro tipos.' },
                ],
                keywords: ['desarrollo de apps móviles México', 'cuánto cuesta una app', 'crear app Android y iOS', 'app para mi negocio precio'],
            },
            'en': {
                name: 'Android and iOS mobile app',
                seoTitle: 'Android and iOS mobile app development | From $1,250 USD',
                description: 'Android and iOS app development: informational, login-based, commerce and enterprise apps, built nearshore in Mexico. From $1,250 USD.',
                intro: 'Put your business on your customers’ or team’s phones with an Android and iOS app, from a simple informational app to an enterprise app connected to your systems.',
                novaLine: 'Before thinking about the app store, think about the task your user wants done in two taps.',
                includes: [
                    'Interface design for Android and iOS',
                    'Cross-platform development',
                    'Publishing to Google Play and the App Store',
                    'Admin panel or data connection depending on app type',
                ],
                inputs: [
                    'What users must be able to do in the app',
                    'Logo, colors and content',
                    'Google and Apple developer accounts (we guide you through setup)',
                ],
                deliverables: [
                    'App published in the stores',
                    'Code and access as per contract',
                    'Update guide',
                ],
                timeline: TIMELINE.apps['en'],
                faqs: [
                    { question: 'Does the app work on Android and iPhone?', answer: 'Yes. We build one codebase for both platforms and publish it to Google Play and the App Store.' },
                    { question: 'Who pays for the store accounts?', answer: 'Google and Apple developer accounts are in your company’s name and paid directly to them; they are not included in the price.' },
                    { question: 'Which type of app do I need?', answer: 'It depends on what users will do: browse information, log in, buy, or run internal processes. The table on this page compares the four types.' },
                ],
                keywords: ['mobile app development cost', 'nearshore app developers', 'build Android and iOS app', 'business app pricing'],
            },
        },
        relatedGuides: [],
        relatedProducts: ['plataforma-saas', 'sistema-web-a-medida', 'pasarelas-de-pago'],
    },

    // ─── Marketing ────────────────────────────────────────────────────────
    {
        id: 'gestion-de-redes-sociales',
        category: 'marketing',
        slug: { 'es-MX': 'gestion-de-redes-sociales', 'en': 'social-media-management' },
        icon: 'megaphone',
        from: { amount: { MXN: 3500, USD: 220 }, billing: 'monthly' },
        tiers: [
            {
                id: 'basico',
                name: { 'es-MX': 'Básico', 'en': 'Basic' },
                features: {
                    'es-MX': ['8 publicaciones y 4 historias al mes', 'Diseño gráfico y copywriting'],
                    'en': ['8 posts and 4 stories per month', 'Graphic design and copywriting'],
                },
            },
            {
                id: 'intermedio',
                name: { 'es-MX': 'Intermedio', 'en': 'Intermediate' },
                features: {
                    'es-MX': ['16 publicaciones y 8 reels al mes', 'Historias de apoyo', 'Gestión de 1 campaña en Meta Ads'],
                    'en': ['16 posts and 8 reels per month', 'Supporting stories', 'Management of 1 Meta Ads campaign'],
                },
            },
            {
                id: 'premium',
                name: { 'es-MX': 'Premium', 'en': 'Premium' },
                features: {
                    'es-MX': ['20–25 piezas al mes', 'Embudo de ventas', 'Remarketing avanzado'],
                    'en': ['20–25 pieces per month', 'Sales funnel', 'Advanced remarketing'],
                },
            },
        ],
        content: {
            'es-MX': {
                name: 'Gestión de redes sociales',
                seoTitle: 'Gestión de redes sociales para negocios | Desde $3,500 MXN al mes',
                description: 'Gestión de redes sociales con diseño, copywriting, reels y campañas en Meta Ads. Planes mensuales desde $3,500 MXN.',
                intro: 'Mantén tus redes activas con contenido diseñado para tu marca y, en los planes superiores, campañas en Meta Ads y embudos que convierten seguidores en clientes.',
                novaLine: 'Publicar diario no sirve si nadie sabe qué hacer después de ver tu post. Cada pieza debe llevar a un siguiente paso.',
                includes: [
                    'Calendario mensual de contenido',
                    'Diseño gráfico y redacción de cada pieza',
                    'Reels y campañas según el plan',
                    'Reporte mensual de resultados',
                ],
                inputs: [
                    'Accesos a tus cuentas de Facebook e Instagram',
                    'Logotipo, colores y fotos de tus productos',
                    'Promociones o fechas importantes del mes',
                ],
                deliverables: [
                    'Publicaciones programadas cada mes',
                    'Reporte mensual con métricas clave',
                ],
                timeline: null,
                faqs: [
                    { question: '¿El precio incluye la inversión en anuncios?', answer: 'No. La pauta publicitaria de Meta Ads la pagas directamente a Meta; nuestra mensualidad cubre la gestión de la campaña.' },
                    { question: '¿Cómo se paga?', answer: 'Es un servicio mensual que se paga por adelantado y se renueva por periodo.' },
                    { question: '¿Qué redes manejan?', answer: 'Principalmente Facebook e Instagram. Otras redes se evalúan según tu público y se definen en la propuesta.' },
                ],
                keywords: ['gestión de redes sociales precio', 'community manager para negocio', 'agencia de redes sociales México', 'manejo de Facebook e Instagram'],
            },
            'en': {
                name: 'Social media management',
                seoTitle: 'Social media management for businesses | From $220 USD per month',
                description: 'Social media management with design, copywriting, reels and Meta Ads campaigns. Monthly plans from $220 USD.',
                intro: 'Keep your social accounts active with content designed for your brand and, on higher plans, Meta Ads campaigns and funnels that turn followers into customers.',
                novaLine: 'Posting every day is useless if nobody knows what to do after seeing your post. Every piece should lead to a next step.',
                includes: [
                    'Monthly content calendar',
                    'Graphic design and copy for every piece',
                    'Reels and campaigns depending on plan',
                    'Monthly results report',
                ],
                inputs: [
                    'Access to your Facebook and Instagram accounts',
                    'Logo, colors and product photos',
                    'Promotions or key dates for the month',
                ],
                deliverables: [
                    'Scheduled posts every month',
                    'Monthly report with key metrics',
                ],
                timeline: null,
                faqs: [
                    { question: 'Is ad spend included?', answer: 'No. Meta Ads spend is paid directly to Meta; our monthly fee covers campaign management.' },
                    { question: 'How is it billed?', answer: 'It is a monthly service paid in advance and renewed each period.' },
                    { question: 'Which networks do you manage?', answer: 'Mainly Facebook and Instagram. Other networks are assessed based on your audience and defined in the proposal.' },
                ],
                keywords: ['social media management pricing', 'outsourced community manager', 'Instagram and Facebook management', 'social media agency Latin America'],
            },
        },
        relatedGuides: [],
        relatedProducts: ['diseno-de-marca', 'seo-local-google-maps', 'paquetes-360'],
    },
    {
        id: 'diseno-de-marca',
        category: 'marketing',
        slug: { 'es-MX': 'diseno-de-marca', 'en': 'brand-design' },
        icon: 'palette',
        from: { amount: { MXN: 2500, USD: 160 }, billing: 'one-time' },
        tiers: [
            {
                id: 'logotipo',
                name: { 'es-MX': 'Logotipo', 'en': 'Logo' },
                features: { 'es-MX': ['Diseño de logotipo', 'Versiones para fondo claro y oscuro'], 'en': ['Logo design', 'Light and dark background versions'] },
            },
            {
                id: 'identidad',
                name: { 'es-MX': 'Identidad de marca', 'en': 'Brand identity' },
                features: { 'es-MX': ['Logotipo, paleta y tipografías', 'Manual de marca y aplicaciones'], 'en': ['Logo, palette and typography', 'Brand guidelines and applications'] },
            },
        ],
        content: {
            'es-MX': {
                name: 'Diseño de marca y logotipo',
                seoTitle: 'Diseño de logotipo e identidad de marca | Desde $2,500 MXN',
                description: 'Diseño de logotipo e identidad de marca: paleta de colores, tipografías y manual de uso. Desde $2,500 MXN según alcance.',
                intro: 'Una marca coherente hace que tu negocio se vea confiable en todos lados: en tu web, tus redes, tu empaque y tu fachada. Diseñamos desde el logotipo hasta el manual de marca.',
                novaLine: 'Un logo no tiene que explicarlo todo. Tiene que ser reconocible en un vistazo, en grande y en chiquito.',
                includes: [
                    'Propuestas de logotipo',
                    'Rondas de ajustes acordadas',
                    'Archivos para web e impresión',
                    'Paleta, tipografías y manual en identidad completa',
                ],
                inputs: [
                    'Nombre del negocio y a qué se dedica',
                    'Público al que te diriges',
                    'Referencias visuales que te gusten y que no',
                ],
                deliverables: [
                    'Logotipo en formatos editables y de uso diario',
                    'Manual de marca en el nivel de identidad',
                ],
                timeline: null,
                faqs: [
                    { question: '¿Cuánto cuesta un logotipo?', answer: 'Empieza en $2,500 MXN por un logotipo. Una identidad completa con manual cuesta más; el precio de cada nivel aparece en la tabla de esta ficha.' },
                    { question: '¿Los archivos son míos?', answer: 'Sí, al liquidar el proyecto recibes los archivos finales para usarlos en tu negocio.' },
                    { question: '¿Incluye registro de marca?', answer: 'No. El registro de marca es un trámite legal ante la autoridad correspondiente y no forma parte del servicio de diseño.' },
                ],
                keywords: ['diseño de logotipo precio', 'identidad de marca para negocio', 'branding México', 'manual de marca'],
            },
            'en': {
                name: 'Brand and logo design',
                seoTitle: 'Logo and brand identity design | From $160 USD',
                description: 'Logo and brand identity design: color palette, typography and brand guidelines. From $160 USD depending on scope.',
                intro: 'A consistent brand makes your business look trustworthy everywhere: your website, social media, packaging and storefront. We design everything from the logo to the brand guidelines.',
                novaLine: 'A logo does not have to explain everything. It has to be recognizable at a glance, large or tiny.',
                includes: [
                    'Logo proposals',
                    'Agreed rounds of revisions',
                    'Files for web and print',
                    'Palette, typography and guidelines in full identity',
                ],
                inputs: [
                    'Business name and what you do',
                    'Target audience',
                    'Visual references you like and dislike',
                ],
                deliverables: [
                    'Logo in editable and everyday formats',
                    'Brand guidelines in the identity tier',
                ],
                timeline: null,
                faqs: [
                    { question: 'How much does a logo cost?', answer: 'It starts at $160 USD for a logo. A full identity with guidelines costs more; the price of each tier is in the table on this page.' },
                    { question: 'Do I own the files?', answer: 'Yes, once the project is paid in full you receive the final files to use in your business.' },
                    { question: 'Does it include trademark registration?', answer: 'No. Trademark registration is a legal filing with the relevant authority and is not part of the design service.' },
                ],
                keywords: ['logo design pricing', 'brand identity design', 'affordable branding agency', 'brand guidelines design'],
            },
        },
        relatedGuides: [],
        relatedProducts: ['pagina-web', 'gestion-de-redes-sociales', 'paquetes-360'],
    },

    // ─── SEO / AEO ────────────────────────────────────────────────────────
    {
        id: 'seo-local-google-maps',
        category: 'seo-aeo',
        slug: { 'es-MX': 'seo-local-google-maps', 'en': 'local-seo-google-maps' },
        icon: 'map-pin',
        from: { amount: { MXN: 2000, USD: 125 }, billing: 'setup' },
        tiers: [
            {
                id: 'perfil',
                name: { 'es-MX': 'Perfil de Google Business', 'en': 'Google Business Profile' },
                features: { 'es-MX': ['Alta u optimización inicial del perfil', 'Categorías, horarios, fotos y servicios'], 'en': ['Profile setup or initial optimization', 'Categories, hours, photos and services'] },
            },
            {
                id: 'seo-local',
                name: { 'es-MX': 'SEO local mensual', 'en': 'Monthly local SEO' },
                features: { 'es-MX': ['Publicaciones y gestión de reseñas', 'Seguimiento de visibilidad en Maps'], 'en': ['Posts and review management', 'Maps visibility tracking'] },
            },
        ],
        content: {
            'es-MX': {
                name: 'SEO local y Google Maps',
                seoTitle: 'SEO local y Google Maps para negocios | Desde $2,000 MXN',
                description: 'Optimización de tu perfil de Google Business y SEO local para aparecer en Google Maps cuando te buscan cerca. Desde $2,000 MXN.',
                intro: 'Cuando alguien busca "cerca de mí", Google muestra primero el mapa. Optimizamos tu perfil de Google Business para que tu negocio aparezca con información completa, fotos y reseñas.',
                novaLine: 'Para un negocio con local, el perfil de Google suele ser la primera página que ve un cliente, antes que tu sitio web.',
                includes: [
                    'Revisión y optimización del perfil de Google Business',
                    'Categorías, servicios, horarios y fotos',
                    'Publicaciones y respuesta a reseñas en el plan mensual',
                    'Reporte de visibilidad en el plan mensual',
                ],
                inputs: [
                    'Acceso al perfil de Google Business (o datos para crearlo)',
                    'Dirección, horarios y servicios',
                    'Fotos del local, productos y equipo',
                ],
                deliverables: [
                    'Perfil optimizado y verificado',
                    'Reporte mensual en el plan de SEO local',
                ],
                timeline: null,
                faqs: [
                    { question: '¿Me garantizan el primer lugar en Google Maps?', answer: 'No. Nadie puede garantizar posiciones: Google decide según relevancia, distancia y prominencia. Lo que sí hacemos es que tu perfil esté completo, correcto y activo.' },
                    { question: '¿Necesito tener local físico?', answer: 'El perfil de Google Business es para negocios que atienden en persona, ya sea en un local o visitando a sus clientes en una zona definida.' },
                    { question: '¿Qué diferencia hay entre la optimización inicial y el plan mensual?', answer: 'La optimización inicial deja el perfil completo una vez. El plan mensual lo mantiene activo con publicaciones, reseñas y seguimiento.' },
                ],
                keywords: ['aparecer en Google Maps', 'optimizar perfil de Google Business', 'SEO local México', 'posicionamiento en Google Maps precio'],
            },
            'en': {
                name: 'Local SEO and Google Maps',
                seoTitle: 'Local SEO and Google Maps for businesses | From $125 USD',
                description: 'Google Business Profile optimization and local SEO to show up on Google Maps when people search nearby. From $125 USD.',
                intro: 'When someone searches "near me", Google shows the map first. We optimize your Google Business Profile so your business appears with complete information, photos and reviews.',
                novaLine: 'For a business with a physical location, the Google profile is often the first page a customer sees, before your website.',
                includes: [
                    'Google Business Profile review and optimization',
                    'Categories, services, hours and photos',
                    'Posts and review replies in the monthly plan',
                    'Visibility report in the monthly plan',
                ],
                inputs: [
                    'Access to your Google Business Profile (or details to create it)',
                    'Address, hours and services',
                    'Photos of your location, products and team',
                ],
                deliverables: [
                    'Optimized, verified profile',
                    'Monthly report in the local SEO plan',
                ],
                timeline: null,
                faqs: [
                    { question: 'Do you guarantee first place on Google Maps?', answer: 'No. Nobody can guarantee rankings: Google decides based on relevance, distance and prominence. What we do is make sure your profile is complete, accurate and active.' },
                    { question: 'Do I need a physical location?', answer: 'Google Business Profiles are for businesses that serve customers in person, either at a location or by visiting them in a defined area.' },
                    { question: 'What is the difference between the initial optimization and the monthly plan?', answer: 'The initial optimization completes your profile once. The monthly plan keeps it active with posts, reviews and tracking.' },
                ],
                keywords: ['Google Business Profile optimization', 'local SEO services', 'rank on Google Maps', 'local SEO pricing'],
            },
        },
        relatedGuides: ['que-es-aeo'],
        relatedProducts: ['seo-web', 'aeo-optimizacion-ia', 'gestion-de-redes-sociales'],
    },
    {
        id: 'seo-web',
        category: 'seo-aeo',
        slug: { 'es-MX': 'seo-web', 'en': 'website-seo' },
        icon: 'search',
        from: { amount: { MXN: 3000, USD: 190 }, billing: 'setup' },
        tiers: [
            {
                id: 'configuracion',
                name: { 'es-MX': 'Configuración inicial', 'en': 'Initial setup' },
                features: { 'es-MX': ['Auditoría técnica y de contenido', 'Correcciones iniciales y palabras clave'], 'en': ['Technical and content audit', 'Initial fixes and keywords'] },
            },
            {
                id: 'mensual',
                name: { 'es-MX': 'SEO mensual', 'en': 'Monthly SEO' },
                features: { 'es-MX': ['Optimización continua de páginas', 'Reporte de posiciones y tráfico'], 'en': ['Ongoing page optimization', 'Rankings and traffic report'] },
            },
            {
                id: 'analitica',
                name: { 'es-MX': 'Analytics + Search Console', 'en': 'Analytics + Search Console' },
                features: { 'es-MX': ['Instalación de Google Analytics', 'Alta y verificación en Search Console'], 'en': ['Google Analytics installation', 'Search Console setup and verification'] },
            },
        ],
        content: {
            'es-MX': {
                name: 'SEO profesional para tu sitio web',
                seoTitle: 'SEO profesional para sitios web | Desde $3,000 MXN',
                description: 'SEO técnico y de contenido para que tu sitio aparezca en Google: auditoría, correcciones, seguimiento mensual y analítica. Desde $3,000 MXN.',
                intro: 'Revisamos tu sitio como lo ve Google: velocidad, estructura, contenido y datos estructurados. Corregimos lo que frena tu visibilidad y medimos el avance cada mes.',
                novaLine: 'El SEO no es un truco: es hacer que tu sitio responda mejor que los demás lo que la gente busca.',
                includes: [
                    'Auditoría técnica y de contenido',
                    'Investigación de palabras clave',
                    'Correcciones de metadatos, estructura y datos estructurados',
                    'Seguimiento mensual en el plan continuo',
                ],
                inputs: [
                    'Acceso a tu sitio web o a su administrador',
                    'Servicios y zonas que quieres posicionar',
                    'Competidores que conoces',
                ],
                deliverables: [
                    'Informe de auditoría con prioridades',
                    'Correcciones aplicadas',
                    'Reporte mensual de posiciones y tráfico',
                ],
                timeline: null,
                faqs: [
                    { question: '¿En cuánto tiempo veo resultados?', answer: 'Las correcciones técnicas pueden notarse en semanas, pero el posicionamiento orgánico suele tomar meses y depende de la competencia de tu sector.' },
                    { question: '¿Garantizan el primer lugar en Google?', answer: 'No. Ninguna agencia seria puede garantizar posiciones; garantizamos el trabajo acordado y reportes claros del avance.' },
                    { question: '¿Necesito Google Analytics?', answer: 'Es muy recomendable para medir resultados. Si no lo tienes, lo instalamos junto con Search Console como complemento.' },
                ],
                keywords: ['SEO para sitio web precio', 'posicionamiento web en Google', 'auditoría SEO México', 'agencia SEO para pymes'],
            },
            'en': {
                name: 'Professional website SEO',
                seoTitle: 'Professional website SEO | From $190 USD',
                description: 'Technical and content SEO so your site shows up on Google: audit, fixes, monthly tracking and analytics. From $190 USD.',
                intro: 'We review your site the way Google sees it: speed, structure, content and structured data. We fix what holds back your visibility and measure progress every month.',
                novaLine: 'SEO is not a trick: it is making your site answer what people search for better than everyone else.',
                includes: [
                    'Technical and content audit',
                    'Keyword research',
                    'Metadata, structure and structured data fixes',
                    'Monthly tracking in the ongoing plan',
                ],
                inputs: [
                    'Access to your website or its admin',
                    'Services and locations you want to rank for',
                    'Competitors you know of',
                ],
                deliverables: [
                    'Audit report with priorities',
                    'Fixes applied',
                    'Monthly rankings and traffic report',
                ],
                timeline: null,
                faqs: [
                    { question: 'How long until I see results?', answer: 'Technical fixes can show up within weeks, but organic rankings usually take months and depend on how competitive your industry is.' },
                    { question: 'Do you guarantee first place on Google?', answer: 'No. No serious agency can guarantee rankings; we guarantee the agreed work and clear progress reports.' },
                    { question: 'Do I need Google Analytics?', answer: 'It is highly recommended to measure results. If you do not have it, we install it along with Search Console as an add-on.' },
                ],
                keywords: ['website SEO pricing', 'technical SEO audit', 'SEO agency for small business', 'nearshore SEO services'],
            },
        },
        relatedGuides: ['que-es-aeo', 'cuanto-cuesta-una-pagina-web'],
        relatedProducts: ['aeo-optimizacion-ia', 'seo-local-google-maps', 'pagina-web'],
    },
    {
        id: 'aeo-optimizacion-ia',
        category: 'seo-aeo',
        slug: { 'es-MX': 'aeo-optimizacion-ia', 'en': 'aeo-ai-search-optimization' },
        icon: 'sparkles',
        from: { amount: { MXN: 2000, USD: 125 }, billing: 'setup' },
        tiers: [
            {
                id: 'inicial',
                name: { 'es-MX': 'Configuración AEO', 'en': 'AEO setup' },
                features: { 'es-MX': ['Revisión de rastreo para bots de IA', 'Datos estructurados y respuestas citables'], 'en': ['AI crawler access review', 'Structured data and citable answers'] },
            },
            {
                id: 'mensual',
                name: { 'es-MX': 'AEO mensual', 'en': 'Monthly AEO' },
                features: { 'es-MX': ['Contenido de preguntas y respuestas', 'Seguimiento de menciones en asistentes de IA'], 'en': ['Question-and-answer content', 'Tracking of mentions in AI assistants'] },
            },
        ],
        content: {
            'es-MX': {
                name: 'AEO: optimización para ChatGPT, Gemini y Claude',
                seoTitle: 'AEO: aparece en ChatGPT, Gemini y Claude | Desde $2,000 MXN',
                description: 'AEO para que asistentes de IA como ChatGPT, Gemini y Claude encuentren y citen tu negocio. Configuración desde $2,000 MXN.',
                intro: 'Cada vez más clientes preguntan a un asistente de IA antes de buscar en Google. Preparamos tu sitio para que esos asistentes puedan leerlo, entenderlo y citarlo como fuente.',
                novaLine: 'Una IA cita lo que puede verificar. Respuestas claras, datos consistentes y fuentes visibles valen más que cualquier truco.',
                includes: [
                    'Revisión de acceso de rastreadores de IA en robots.txt',
                    'Respuestas directas y preguntas frecuentes citables',
                    'Datos estructurados (schema.org) consistentes',
                    'Datos de marca coherentes en todo el sitio',
                    'Seguimiento mensual en el plan continuo',
                ],
                inputs: [
                    'Acceso a tu sitio web',
                    'Preguntas que tus clientes hacen con más frecuencia',
                    'Datos oficiales de tu negocio',
                ],
                deliverables: [
                    'Informe de estado AEO con prioridades',
                    'Correcciones aplicadas en el sitio',
                    'Reporte mensual en el plan continuo',
                ],
                timeline: null,
                faqs: [
                    { question: '¿Me garantizan aparecer en ChatGPT?', answer: 'No. Ningún proveedor controla qué cita un asistente de IA. Trabajamos sobre lo que sí depende de tu sitio: acceso, claridad, estructura y evidencia.' },
                    { question: '¿AEO reemplaza al SEO?', answer: 'No, lo complementa. Google indica que para sus funciones de IA aplican las mismas prácticas de SEO; AEO pone el foco en respuestas claras y citables.' },
                    { question: '¿Sirve el archivo llms.txt?', answer: 'Es una propuesta emergente que algunas herramientas leen, pero Google no lo usa para posicionar. Lo incluimos como complemento, no como garantía.' },
                ],
                keywords: ['AEO México', 'aparecer en ChatGPT', 'optimización para motores de respuesta', 'posicionamiento en IA'],
            },
            'en': {
                name: 'AEO: optimization for ChatGPT, Gemini and Claude',
                seoTitle: 'AEO: get found in ChatGPT, Gemini and Claude | From $125 USD',
                description: 'Answer engine optimization so AI assistants like ChatGPT, Gemini and Claude can find and cite your business. Setup from $125 USD.',
                intro: 'More and more customers ask an AI assistant before searching Google. We prepare your site so those assistants can read it, understand it and cite it as a source.',
                novaLine: 'An AI cites what it can verify. Clear answers, consistent data and visible sources beat any trick.',
                includes: [
                    'Review of AI crawler access in robots.txt',
                    'Direct answers and citable FAQs',
                    'Consistent structured data (schema.org)',
                    'Consistent brand data across the site',
                    'Monthly tracking in the ongoing plan',
                ],
                inputs: [
                    'Access to your website',
                    'Your customers’ most frequent questions',
                    'Official business details',
                ],
                deliverables: [
                    'AEO status report with priorities',
                    'Fixes applied on the site',
                    'Monthly report in the ongoing plan',
                ],
                timeline: null,
                faqs: [
                    { question: 'Do you guarantee I will appear in ChatGPT?', answer: 'No. No provider controls what an AI assistant cites. We work on what your site does control: access, clarity, structure and evidence.' },
                    { question: 'Does AEO replace SEO?', answer: 'No, it complements it. Google says the same SEO practices apply to its AI features; AEO focuses on clear, citable answers.' },
                    { question: 'Does an llms.txt file help?', answer: 'It is an emerging proposal some tools read, but Google does not use it for ranking. We include it as an extra, not a guarantee.' },
                ],
                keywords: ['answer engine optimization services', 'get cited by ChatGPT', 'AI search optimization', 'AEO agency'],
            },
        },
        relatedGuides: ['que-es-aeo'],
        relatedProducts: ['seo-web', 'seo-local-google-maps', 'pagina-web'],
    },

    // ─── Automatización ───────────────────────────────────────────────────
    {
        id: 'bot-de-whatsapp',
        category: 'automatizacion',
        slug: { 'es-MX': 'bot-de-whatsapp', 'en': 'whatsapp-bot' },
        icon: 'message',
        from: { amount: { MXN: 2500, USD: 160 }, billing: 'one-time' },
        tiers: [
            {
                id: 'estandar',
                name: { 'es-MX': 'Bot estándar', 'en': 'Standard bot' },
                features: { 'es-MX': ['Flujos y menús de opciones', 'Preguntas frecuentes y captura de datos'], 'en': ['Flows and option menus', 'FAQs and data capture'] },
            },
            {
                id: 'ia',
                name: { 'es-MX': 'Asistente con IA', 'en': 'AI assistant' },
                features: { 'es-MX': ['Conversación en lenguaje natural', 'Respuestas con la información de tu negocio'], 'en': ['Natural-language conversation', 'Answers based on your business information'] },
            },
        ],
        content: {
            'es-MX': {
                name: 'Bot de WhatsApp para negocios',
                seoTitle: 'Bot de WhatsApp para negocios | Desde $2,500 MXN',
                description: 'Bots de WhatsApp para atender clientes 24/7: menús, preguntas frecuentes, captura de datos y asistentes con IA. Desde $2,500 MXN.',
                intro: 'Responde al instante las preguntas de siempre, toma datos de interesados y pasa a una persona solo cuando hace falta. Desde bots con menús hasta asistentes con inteligencia artificial.',
                novaLine: 'Un buen bot no finge ser humano: resuelve rápido lo repetitivo y te entrega al cliente listo para cerrar.',
                includes: [
                    'Diseño de los flujos de conversación',
                    'Respuestas a preguntas frecuentes',
                    'Captura de datos de contacto',
                    'Transferencia a un asesor',
                    'IA conversacional en el asistente con IA',
                ],
                inputs: [
                    'Número de WhatsApp Business del negocio',
                    'Preguntas frecuentes y sus respuestas',
                    'Horarios y a quién se transfiere la conversación',
                ],
                deliverables: [
                    'Bot funcionando en tu número',
                    'Documento de flujos',
                    'Capacitación para tu equipo',
                ],
                timeline: null,
                faqs: [
                    { question: '¿Qué diferencia hay entre el bot estándar y el asistente con IA?', answer: 'El estándar funciona con flujos, menús, preguntas frecuentes y captura de datos. El asistente con IA conversa en lenguaje natural con la información de tu negocio.' },
                    { question: '¿Meta cobra por los mensajes?', answer: 'Sí, en la plataforma de WhatsApp Business Meta cobra por mensaje de plantilla según su categoría y país. Ese consumo y el de modelos de IA se cotizan aparte.' },
                    { question: '¿Puedo seguir contestando yo?', answer: 'Sí. El bot resuelve lo repetitivo y transfiere la conversación a una persona cuando el cliente lo pide o el caso lo requiere.' },
                ],
                keywords: ['bot de WhatsApp para negocio', 'chatbot WhatsApp precio', 'automatizar WhatsApp Business', 'asistente de IA para WhatsApp'],
            },
            'en': {
                name: 'WhatsApp bot for business',
                seoTitle: 'WhatsApp bot for business | From $160 USD',
                description: 'WhatsApp bots that serve customers 24/7: menus, FAQs, lead capture and AI assistants. Built nearshore in Mexico, from $160 USD.',
                intro: 'Answer the usual questions instantly, capture leads and hand over to a person only when needed. From menu-based bots to AI-powered assistants.',
                novaLine: 'A good bot does not pretend to be human: it handles the repetitive part fast and hands you a customer ready to close.',
                includes: [
                    'Conversation flow design',
                    'Answers to frequent questions',
                    'Contact data capture',
                    'Handover to a human agent',
                    'Conversational AI in the AI assistant',
                ],
                inputs: [
                    'Your WhatsApp Business number',
                    'Frequent questions and their answers',
                    'Business hours and who takes over conversations',
                ],
                deliverables: [
                    'Bot running on your number',
                    'Flow document',
                    'Team training',
                ],
                timeline: null,
                faqs: [
                    { question: 'What is the difference between the standard bot and the AI assistant?', answer: 'The standard bot runs on flows, menus, FAQs and data capture. The AI assistant holds natural-language conversations using your business information.' },
                    { question: 'Does Meta charge for messages?', answer: 'Yes, on the WhatsApp Business Platform Meta charges per template message by category and country. That usage and any AI model usage are quoted separately.' },
                    { question: 'Can I still reply myself?', answer: 'Yes. The bot handles repetitive questions and hands the conversation to a person when the customer asks or the case requires it.' },
                ],
                keywords: ['WhatsApp bot for business', 'WhatsApp chatbot pricing', 'WhatsApp Business automation', 'AI WhatsApp assistant'],
            },
        },
        relatedGuides: ['bot-de-whatsapp-para-negocios'],
        relatedProducts: ['agenda-automatica', 'crm', 'inteligencia-artificial-integrada'],
    },
    {
        id: 'agenda-automatica',
        category: 'automatizacion',
        slug: { 'es-MX': 'agenda-automatica', 'en': 'automated-booking' },
        icon: 'calendar',
        from: { amount: { MXN: 2000, USD: 125 }, billing: 'one-time' },
        content: {
            'es-MX': {
                name: 'Agenda automática de citas',
                seoTitle: 'Agenda automática de citas en línea | Desde $2,000 MXN',
                description: 'Sistema de agenda automática: tus clientes reservan en línea, reciben confirmación y recordatorios. Desde $2,000 MXN.',
                intro: 'Deja de coordinar citas por mensaje. Tus clientes eligen horario disponible, reciben su confirmación y un recordatorio, y tú ves tu agenda ordenada en un solo lugar.',
                novaLine: 'Cada cita confirmada por mensaje a mano es tiempo que no estás atendiendo a nadie.',
                includes: [
                    'Página o enlace de reservación',
                    'Horarios y servicios configurables',
                    'Confirmaciones y recordatorios',
                    'Vista de agenda para tu equipo',
                ],
                inputs: [
                    'Servicios, duración y horarios disponibles',
                    'Quiénes atienden las citas',
                    'Canal preferido para recordatorios',
                ],
                deliverables: [
                    'Agenda publicada y funcionando',
                    'Capacitación para administrarla',
                ],
                timeline: null,
                faqs: [
                    { question: '¿Se conecta con mi sitio web o WhatsApp?', answer: 'Sí, el enlace de reservación puede colocarse en tu sitio, tus redes o integrarse con un bot de WhatsApp.' },
                    { question: '¿Pueden agendar varias personas de mi equipo?', answer: 'Sí, se configura con los horarios de cada persona que atiende.' },
                    { question: '¿Los recordatorios tienen costo extra?', answer: 'Los recordatorios por canales de mensajería de terceros pueden tener consumo propio, que se cotiza aparte.' },
                ],
                keywords: ['agenda de citas en línea', 'sistema de reservaciones para negocio', 'agendar citas automáticamente', 'recordatorios de citas'],
            },
            'en': {
                name: 'Automated booking system',
                seoTitle: 'Automated online booking system | From $125 USD',
                description: 'Automated booking: customers book online and get confirmations and reminders. Built nearshore in Mexico, from $125 USD.',
                intro: 'Stop coordinating appointments by message. Customers pick an available time, get a confirmation and a reminder, and you see a tidy schedule in one place.',
                novaLine: 'Every appointment confirmed by hand is time you are not serving anyone.',
                includes: [
                    'Booking page or link',
                    'Configurable hours and services',
                    'Confirmations and reminders',
                    'Calendar view for your team',
                ],
                inputs: [
                    'Services, duration and available hours',
                    'Who takes the appointments',
                    'Preferred reminder channel',
                ],
                deliverables: [
                    'Booking system live and working',
                    'Admin training',
                ],
                timeline: null,
                faqs: [
                    { question: 'Does it connect to my website or WhatsApp?', answer: 'Yes, the booking link can go on your site or social media, or be integrated with a WhatsApp bot.' },
                    { question: 'Can several team members take bookings?', answer: 'Yes, it is configured with each person’s availability.' },
                    { question: 'Do reminders cost extra?', answer: 'Reminders sent through third-party messaging channels may carry their own usage fees, quoted separately.' },
                ],
                keywords: ['online booking system', 'appointment scheduling for business', 'automated appointment reminders', 'custom booking app'],
            },
        },
        relatedGuides: ['bot-de-whatsapp-para-negocios'],
        relatedProducts: ['bot-de-whatsapp', 'pagina-web', 'crm'],
    },
    {
        id: 'pasarelas-de-pago',
        category: 'automatizacion',
        slug: { 'es-MX': 'pasarelas-de-pago', 'en': 'payment-gateways' },
        icon: 'credit-card',
        from: { amount: { MXN: 3000, USD: 190 }, billing: 'one-time' },
        tiers: [
            {
                id: 'basica',
                name: { 'es-MX': 'Integración básica', 'en': 'Basic integration' },
                features: { 'es-MX': ['Un proveedor (Stripe, PayPal u otro)', 'Botón o página de pago'], 'en': ['One provider (Stripe, PayPal or other)', 'Payment button or page'] },
            },
            {
                id: 'completa',
                name: { 'es-MX': 'Integración completa', 'en': 'Full integration' },
                features: { 'es-MX': ['Pagos dentro de tu sitio o sistema', 'Suscripciones o varios métodos de pago'], 'en': ['Payments inside your site or system', 'Subscriptions or multiple payment methods'] },
            },
        ],
        content: {
            'es-MX': {
                name: 'Integración de pasarelas de pago',
                seoTitle: 'Integración de pasarelas de pago Stripe y PayPal | Desde $3,000 MXN',
                description: 'Integramos Stripe, PayPal y otras pasarelas en tu sitio web, tienda o sistema para cobrar en línea. Desde $3,000 MXN.',
                intro: 'Cobra en línea desde tu sitio, tu tienda o tu sistema con la pasarela que prefieras: pagos únicos, suscripciones o varios métodos de pago.',
                novaLine: 'Mientras más pasos tenga pagar, más clientes se quedan en el camino.',
                includes: [
                    'Configuración de la pasarela elegida',
                    'Integración en tu sitio o sistema',
                    'Pruebas de pago',
                    'Notificaciones de pago',
                ],
                inputs: [
                    'Cuenta en la pasarela (Stripe, PayPal u otra)',
                    'Productos o planes a cobrar',
                    'Acceso a tu sitio o sistema',
                ],
                deliverables: [
                    'Pagos funcionando en producción',
                    'Guía para consultar cobros',
                ],
                timeline: null,
                faqs: [
                    { question: '¿Qué pasarelas integran?', answer: 'Stripe, PayPal y otras que ofrezcan API. La elección depende de tu país, tus clientes y las comisiones de cada una.' },
                    { question: '¿Las comisiones están incluidas?', answer: 'No. Cada pasarela cobra sus comisiones directamente por transacción.' },
                    { question: '¿Cuánto cuesta integrar una pasarela?', answer: 'Empieza en $3,000 MXN por una integración básica. Una integración completa con suscripciones cuesta más; el precio de cada nivel aparece en la tabla de esta ficha.' },
                ],
                keywords: ['integrar Stripe en mi sitio', 'pasarela de pago para página web', 'cobrar en línea México', 'integración PayPal'],
            },
            'en': {
                name: 'Payment gateway integration',
                seoTitle: 'Stripe and PayPal payment gateway integration | From $190 USD',
                description: 'We integrate Stripe, PayPal and other gateways into your website, store or system to accept online payments. From $190 USD.',
                intro: 'Accept online payments on your site, store or system with the gateway you prefer: one-time payments, subscriptions or multiple payment methods.',
                novaLine: 'The more steps it takes to pay, the more customers drop off along the way.',
                includes: [
                    'Setup of the chosen gateway',
                    'Integration into your site or system',
                    'Payment testing',
                    'Payment notifications',
                ],
                inputs: [
                    'A gateway account (Stripe, PayPal or other)',
                    'Products or plans to charge for',
                    'Access to your site or system',
                ],
                deliverables: [
                    'Payments working in production',
                    'Guide to review transactions',
                ],
                timeline: null,
                faqs: [
                    { question: 'Which gateways do you integrate?', answer: 'Stripe, PayPal and others that offer an API. The choice depends on your country, customers and each provider’s fees.' },
                    { question: 'Are transaction fees included?', answer: 'No. Each gateway charges its fees directly per transaction.' },
                    { question: 'How much does a gateway integration cost?', answer: 'It starts at $190 USD for a basic integration. A full integration with subscriptions costs more; the price of each tier is in the table on this page.' },
                ],
                keywords: ['Stripe integration service', 'payment gateway integration', 'accept payments online website', 'PayPal integration developer'],
            },
        },
        relatedGuides: [],
        relatedProducts: ['pagina-web', 'plataforma-saas', 'sistema-de-ventas'],
    },
    {
        id: 'integraciones-api',
        category: 'automatizacion',
        slug: { 'es-MX': 'integraciones-api', 'en': 'api-integrations' },
        icon: 'plug',
        from: { amount: { MXN: 1500, USD: 95 }, billing: 'one-time' },
        tiers: [
            {
                id: 'api',
                name: { 'es-MX': 'Conexión por API', 'en': 'API connection' },
                features: { 'es-MX': ['Conexión entre dos herramientas', 'Sincronización de datos'], 'en': ['Connection between two tools', 'Data sync'] },
            },
            {
                id: 'email',
                name: { 'es-MX': 'Email marketing (Mailchimp)', 'en': 'Email marketing (Mailchimp)' },
                features: { 'es-MX': ['Formularios conectados a tu lista', 'Segmentos y automatizaciones básicas'], 'en': ['Forms connected to your list', 'Segments and basic automations'] },
            },
        ],
        content: {
            'es-MX': {
                name: 'Integraciones y APIs',
                seoTitle: 'Integraciones entre sistemas y APIs | Desde $1,500 MXN',
                description: 'Conectamos tus herramientas por API: sitio web, CRM, hojas de cálculo, Mailchimp y más, para que los datos fluyan solos. Desde $1,500 MXN.',
                intro: 'Si copias datos de una herramienta a otra, esa tarea se puede automatizar. Conectamos tu sitio, tu CRM, tus hojas de cálculo o tu email marketing para que la información viaje sola.',
                novaLine: 'Cada vez que alguien copia y pega entre dos sistemas, hay una integración esperando.',
                includes: [
                    'Análisis de las herramientas a conectar',
                    'Desarrollo de la integración por API',
                    'Pruebas con datos reales',
                    'Monitoreo básico de errores',
                ],
                inputs: [
                    'Herramientas que quieres conectar y sus accesos',
                    'Qué datos deben pasar y cuándo',
                ],
                deliverables: [
                    'Integración funcionando',
                    'Documento de cómo opera y qué hacer si falla',
                ],
                timeline: null,
                faqs: [
                    { question: '¿Qué herramientas se pueden conectar?', answer: 'Las que ofrezcan API o conectores: CRMs, hojas de cálculo, tiendas, formularios, email marketing y sistemas propios.' },
                    { question: '¿Usan n8n o Make?', answer: 'Sí, cuando conviene. También desarrollamos integraciones propias cuando se requiere más control o volumen.' },
                    { question: '¿Hay costos de las herramientas?', answer: 'Las licencias y el consumo de las herramientas de terceros se pagan aparte, salvo que la propuesta diga lo contrario.' },
                ],
                keywords: ['integración de sistemas por API', 'conectar CRM con sitio web', 'integración Mailchimp', 'automatización n8n Make'],
            },
            'en': {
                name: 'Integrations and APIs',
                seoTitle: 'System integrations and APIs | From $95 USD',
                description: 'We connect your tools via API: website, CRM, spreadsheets, Mailchimp and more, so data flows on its own. From $95 USD.',
                intro: 'If you copy data from one tool to another, that task can be automated. We connect your website, CRM, spreadsheets or email marketing so information moves on its own.',
                novaLine: 'Every time someone copies and pastes between two systems, there is an integration waiting to be built.',
                includes: [
                    'Analysis of the tools to connect',
                    'API integration development',
                    'Testing with real data',
                    'Basic error monitoring',
                ],
                inputs: [
                    'Tools to connect and their access',
                    'Which data must move and when',
                ],
                deliverables: [
                    'Working integration',
                    'Document on how it runs and what to do if it fails',
                ],
                timeline: null,
                faqs: [
                    { question: 'Which tools can be connected?', answer: 'Any that offer an API or connectors: CRMs, spreadsheets, stores, forms, email marketing and in-house systems.' },
                    { question: 'Do you use n8n or Make?', answer: 'Yes, when it makes sense. We also build custom integrations when more control or volume is needed.' },
                    { question: 'Are there tool costs?', answer: 'Third-party licenses and usage are paid separately unless the proposal says otherwise.' },
                ],
                keywords: ['API integration services', 'connect CRM to website', 'Mailchimp integration', 'n8n Make automation'],
            },
        },
        relatedGuides: ['que-es-un-crm'],
        relatedProducts: ['crm', 'inteligencia-artificial-integrada', 'bot-de-whatsapp'],
    },
    {
        id: 'inteligencia-artificial-integrada',
        category: 'automatizacion',
        slug: { 'es-MX': 'inteligencia-artificial-integrada', 'en': 'ai-integration' },
        icon: 'brain',
        from: { amount: { MXN: 10000, USD: 625 }, billing: 'one-time' },
        content: {
            'es-MX': {
                name: 'Inteligencia artificial integrada',
                seoTitle: 'Integración de inteligencia artificial en tu negocio | Desde $10,000 MXN',
                description: 'Integramos IA en tus procesos: clasificación de mensajes, resúmenes, asistentes internos y análisis de documentos. Desde $10,000 MXN.',
                intro: 'La IA rinde cuando resuelve una tarea concreta de tu operación: clasificar solicitudes, resumir documentos, redactar respuestas o consultar tu información interna.',
                novaLine: 'Empieza por una tarea medible. Si la IA no ahorra tiempo o errores en algo concreto, todavía no es el momento.',
                includes: [
                    'Identificación del caso de uso',
                    'Integración de un modelo de IA en tu sistema o flujo',
                    'Pruebas con información real',
                    'Criterios de revisión humana',
                ],
                inputs: [
                    'Tarea que quieres automatizar y cómo se hace hoy',
                    'Ejemplos reales de entrada y resultado esperado',
                    'Sistemas donde debe funcionar',
                ],
                deliverables: [
                    'Función de IA integrada y probada',
                    'Guía de uso y límites',
                ],
                timeline: TIMELINE.apps['es-MX'],
                faqs: [
                    { question: '¿Qué modelos de IA usan?', answer: 'Elegimos el modelo según la tarea, el costo y la privacidad requerida. La función exacta se define en el alcance.' },
                    { question: '¿Cuánto cuesta el consumo del modelo?', answer: 'El consumo de APIs y modelos es de terceros y se cotiza aparte, porque depende del volumen de uso.' },
                    { question: '¿La IA puede equivocarse?', answer: 'Sí. Por eso definimos en qué casos una persona revisa el resultado antes de usarlo.' },
                ],
                keywords: ['integrar inteligencia artificial en mi negocio', 'IA para empresas México', 'automatización con IA', 'asistente de IA interno'],
            },
            'en': {
                name: 'AI integration',
                seoTitle: 'AI integration for your business | From $625 USD',
                description: 'We integrate AI into your processes: message classification, summaries, internal assistants and document analysis. From $625 USD.',
                intro: 'AI pays off when it solves a specific task in your operations: classifying requests, summarizing documents, drafting replies or querying your internal information.',
                novaLine: 'Start with one measurable task. If AI does not save time or errors on something concrete, it is not the right moment yet.',
                includes: [
                    'Use-case identification',
                    'Integration of an AI model into your system or workflow',
                    'Testing with real information',
                    'Human-review criteria',
                ],
                inputs: [
                    'The task to automate and how it is done today',
                    'Real input examples and the expected output',
                    'Systems where it must run',
                ],
                deliverables: [
                    'AI feature integrated and tested',
                    'Usage and limitations guide',
                ],
                timeline: TIMELINE.apps['en'],
                faqs: [
                    { question: 'Which AI models do you use?', answer: 'We choose the model based on the task, cost and required privacy. The exact feature is defined in the scope.' },
                    { question: 'How much does model usage cost?', answer: 'API and model usage are third-party costs quoted separately, because they depend on usage volume.' },
                    { question: 'Can the AI make mistakes?', answer: 'Yes. That is why we define when a person reviews the output before it is used.' },
                ],
                keywords: ['AI integration services', 'AI for small business', 'AI automation nearshore', 'internal AI assistant development'],
            },
        },
        relatedGuides: ['que-es-aeo'],
        relatedProducts: ['bot-de-whatsapp', 'integraciones-api', 'sistema-web-a-medida'],
    },

    // ─── Paquetes ─────────────────────────────────────────────────────────
    {
        id: 'paquetes-360',
        category: 'paquetes',
        slug: { 'es-MX': 'paquetes-360', 'en': '360-bundles' },
        icon: 'layers',
        from: { amount: { MXN: 9900, USD: 620 }, billing: 'one-time' },
        tiers: [
            {
                id: 'despegue',
                name: { 'es-MX': 'Despegue Digital', 'en': 'Digital Launch' },
                features: {
                    'es-MX': ['Web básica', 'Redes sociales plan Básico', 'Perfil de Google Maps', 'Logotipo básico'],
                    'en': ['Basic website', 'Basic social media plan', 'Google Maps profile', 'Basic logo'],
                },
            },
            {
                id: 'trafico',
                name: { 'es-MX': 'Tráfico y Conversión', 'en': 'Traffic & Conversion' },
                features: {
                    'es-MX': ['Web mediana', 'Chatbot estándar', 'Redes sociales plan Intermedio', 'SEO web', 'Pagos con Stripe'],
                    'en': ['Mid-size website', 'Standard chatbot', 'Intermediate social media plan', 'Website SEO', 'Stripe payments'],
                },
            },
            {
                id: 'ecosistema',
                name: { 'es-MX': 'Ecosistema Premium IA', 'en': 'Premium AI Ecosystem' },
                features: {
                    'es-MX': ['Web premium con IA', 'Redes sociales plan Premium', 'Bot de WhatsApp con IA', 'AEO inicial'],
                    'en': ['Premium website with AI', 'Premium social media plan', 'AI WhatsApp bot', 'Initial AEO'],
                },
            },
        ],
        content: {
            'es-MX': {
                name: 'Paquetes 360',
                seoTitle: 'Paquetes 360 de presencia digital | Desde $9,900 MXN',
                description: 'Paquetes integrales con página web, redes sociales, Google Maps, chatbot, SEO y AEO para lanzar o crecer tu negocio. Desde $9,900 MXN.',
                intro: 'Todo lo que un negocio necesita para arrancar o crecer en internet, en un solo paquete: sitio web, redes, Google Maps y, en los paquetes superiores, chatbot, pagos, SEO y AEO.',
                novaLine: 'Un paquete tiene sentido cuando cada pieza empuja a la siguiente: la red lleva a la web, la web al WhatsApp y el WhatsApp a la venta.',
                includes: [
                    'Servicios combinados según el paquete',
                    'Un solo equipo coordinando todo',
                    'Arranque con calendario de entregas',
                ],
                inputs: [
                    'Logotipo, colores y contenidos (o los creamos en el paquete Despegue)',
                    'Accesos a redes y perfil de Google',
                    'Objetivo principal: visibilidad, ventas o automatización',
                ],
                deliverables: [
                    'Cada servicio del paquete funcionando',
                    'Accesos y guías de uso',
                ],
                timeline: TIMELINE.web['es-MX'],
                faqs: [
                    { question: '¿Qué incluye la web premium con IA?', answer: 'Una web premium con una integración de IA básica. La función exacta de IA se define en el alcance; APIs, modelos y consumos externos se cotizan aparte.' },
                    { question: '¿Qué incluye el chatbot estándar?', answer: 'Flujos, preguntas frecuentes y captura de datos. No incluye IA conversacional avanzada ni consumo de APIs, salvo que se indique.' },
                    { question: '¿Hay costos que no estén en el paquete?', answer: 'Sí: hosting, dominio, licencias, consumo de APIs, mensajería y pauta publicitaria se cotizan por separado salvo que la propuesta indique lo contrario.' },
                ],
                keywords: ['paquete de página web y redes sociales', 'paquete de marketing digital precio', 'presencia digital para negocio', 'paquete web con chatbot'],
            },
            'en': {
                name: '360 bundles',
                seoTitle: '360 digital presence bundles | From $620 USD',
                description: 'All-in-one bundles with website, social media, Google Maps, chatbot, SEO and AEO to launch or grow your business. From $620 USD.',
                intro: 'Everything a business needs to launch or grow online, in one bundle: website, social media, Google Maps and, in higher bundles, chatbot, payments, SEO and AEO.',
                novaLine: 'A bundle makes sense when every piece pushes the next: social leads to the website, the website to WhatsApp, and WhatsApp to the sale.',
                includes: [
                    'Combined services depending on the bundle',
                    'One team coordinating everything',
                    'Kick-off with a delivery schedule',
                ],
                inputs: [
                    'Logo, colors and content (or we create them in Digital Launch)',
                    'Access to social accounts and Google profile',
                    'Main goal: visibility, sales or automation',
                ],
                deliverables: [
                    'Every service in the bundle up and running',
                    'Access credentials and user guides',
                ],
                timeline: TIMELINE.web['en'],
                faqs: [
                    { question: 'What does the premium website with AI include?', answer: 'A premium website with a basic AI integration. The exact AI feature is defined in the scope; APIs, models and external usage are quoted separately.' },
                    { question: 'What does the standard chatbot include?', answer: 'Flows, FAQs and data capture. It does not include advanced conversational AI or API usage unless stated.' },
                    { question: 'Are there costs outside the bundle?', answer: 'Yes: hosting, domain, licenses, API usage, messaging and ad spend are quoted separately unless the proposal says otherwise.' },
                ],
                keywords: ['website and social media bundle', 'digital marketing package pricing', 'small business online presence package', 'website with chatbot package'],
            },
        },
        relatedGuides: ['cuanto-cuesta-una-pagina-web'],
        relatedProducts: ['pagina-web', 'gestion-de-redes-sociales', 'bot-de-whatsapp'],
    },
];

export function getProduct(id: string): Product | undefined {
    return products.find((product) => product.id === id);
}

export function getProductBySlug(locale: CatalogLocale, category: string, slug: string): Product | undefined {
    return products.find((product) => product.slug[locale] === slug && categorySlugMatches(product.category, locale, category));
}

export function getProductsByCategory(category: CategoryId): Product[] {
    return products.filter((product) => product.category === category);
}


function categorySlugMatches(category: CategoryId, locale: CatalogLocale, slug: string): boolean {
    return getCategory(category).slug[locale] === slug;
}
