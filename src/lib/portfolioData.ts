/**
 * Datos del portafolio y de los productos propios.
 *
 * Viven aqui, y no dentro del componente cliente, porque tambien alimentan el
 * schema `ItemList` que se emite desde el servidor en /portafolio. Un solo origen
 * evita que la pagina visible y los datos estructurados se desincronicen.
 */

export interface Project {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    type: string;
    client: string;
    stack: string;
    description: string;
}

export const portfolioItems: Project[] = [
    {
        id: 1,
        title: 'APEN',
        url: 'https://apen.mx/',
        imageUrl: '/assets/apen-preview.webp',
        type: 'Proyecto Top',
        client: 'Energía & Proyectos',
        stack: 'Desarrollo, Marketing, AEO y presencia digital desde 0',
        description: 'Sitio corporativo de alta gama para empresa administradora de proyectos energéticos. Diseño industrial premium con video background.',
    },
    {
        id: 20,
        title: 'CNADOT - CENATRA',
        url: 'https://cnadot.healthcareexp.com/',
        imageUrl: '/assets/cnadot.webp',
        type: 'Proyecto Top',
        client: 'Sector Salud (Gobierno)',
        stack: 'Web, Registro & Simulación',
        description: 'Plataforma oficial para el Curso Nacional Avanzado de Donación de Órganos y Tejidos (CENATRA). Sistema de pre-registro para programa multidisciplinario con modelo mexicano.',
    },
    {
        id: 3,
        title: 'Healthcare Training Experience',
        url: 'https://healthcareexp.com/',
        imageUrl: '/assets/healthcare-preview.webp',
        type: 'Proyecto Top',
        client: 'Salud & Capacitación',
        stack: 'Web y plataforma de portal de alumnos y certificados y pasarelas',
        description: 'Plataforma de capacitación y entrenamiento para profesionales del sector salud. Experiencia de aprendizaje digital especializada.',
    },
    {
        id: 9,
        title: 'Trestle Media',
        url: 'https://trestle-media.com/',
        imageUrl: '/assets/trestle.webp',
        type: 'Desarrollo Completo',
        client: 'Agencia de Medios',
        stack: 'Agencia Web + Animaciones',
        description: 'Plataforma dinámica para agencia de medios y publicidad. Diseño audaz con interacciones fluidas que reflejan su enfoque innovador.',
    },
    {
        id: 10,
        title: 'C-Consultores',
        url: 'https://c-consultores.com/',
        imageUrl: '/assets/cc.webp',
        type: 'Desarrollo Completo',
        client: 'Consultoría Empresarial',
        stack: 'Web Corporativa B2B',
        description: 'Sitio corporativo profesional para firma de consultoría. Estructura orientada a servicios empresariales, contables y financieros de alto nivel.',
    },
    {
        id: 11,
        title: 'Psicología Trasplante',
        url: 'https://psicologiatrasplante.com/',
        imageUrl: '/assets/psico.webp',
        type: 'Desarrollo Completo',
        client: 'Salud y Bienestar',
        stack: 'Web Informativa',
        description: 'Portal especializado en apoyo psicológico para pacientes de trasplante. Interfaz cálida, accesible y enfocada en brindar contención profesional.',
    },
    {
        id: 12,
        title: 'Avart Estudio',
        url: 'https://avartestudio.com/',
        imageUrl: '/assets/art.webp',
        type: 'Desarrollo Completo',
        client: 'Estudio de Arquitectura',
        stack: 'Portafolio Web',
        description: 'Portafolio digital inmersivo para estudio creativo. Experiencia visual de alto impacto que destaca la vanguardia de sus proyectos.',
    },
    {
        id: 13,
        title: 'Bioin Natural Dental',
        url: 'https://bioin-natural-dental.com/',
        imageUrl: '/assets/bio.webp',
        type: 'Desarrollo Completo',
        client: 'Clínica Odontológica',
        stack: 'Web Corporativa + SEO',
        description: 'Sitio web para clínica especializada en odontología natural y biológica. Diseño moderno con enfoque en la salud integral y estética dental.',
    },
    {
        id: 2,
        title: 'GIKINX',
        url: 'https://gikinx.mx/',
        imageUrl: '/assets/gikinx-preview.webp',
        type: 'Desarrollo Completo',
        client: 'Media & Entretenimiento',
        stack: 'Portal de noticias + CMS',
        description: 'Portal de noticias gaming, anime y esports. Categorías por scroll infinito, diseño dark con acento naranja y ticker de categorías.',
    },
    {
        id: 4,
        title: 'Kiper',
        url: 'https://kiper.app/',
        imageUrl: '/assets/kiper.webp',
        type: 'Colaboración',
        client: 'Software CRM',
        stack: 'Participación en Desarrollo & Optimización',
        description: 'Participamos en módulos clave de este CRM inmobiliario líder en el mercado.',
    },
    {
        id: 5,
        title: 'FX Latam Pro',
        url: 'https://www.fxlatampro.site/',
        imageUrl: '/assets/fx-latam-pro.webp',
        type: 'Desarrollo Completo',
        client: 'Educación Financiera',
        stack: 'Web Platform & LMS',
        description: 'Academia de trading online con gestión de usuarios, cursos y señales en tiempo real.',
    },
    {
        id: 6,
        title: 'Emuna',
        url: 'https://www.emuna.mx/',
        imageUrl: '/assets/emuna.webp',
        type: 'Colaboración',
        client: 'E-commerce & Retail',
        stack: 'Shopify / Custom Code',
        description: 'Colaboración en el desarrollo frontend y optimización de conversión para esta marca de joyería.',
    },
    {
        id: 7,
        title: 'Brokers Calificados',
        url: 'https://brokerscalificados.net',
        imageUrl: '/assets/brokers-calificados.webp',
        type: 'Desarrollo Completo',
        client: 'Directorio Inmobiliario',
        stack: 'Next.js, SEO Avanzado',
        description: 'Portal especializado para conectar usuarios con brokers certificados en todo México.',
    },
    {
        id: 8,
        title: 'Hotel BINDANI',
        url: 'https://hotelbindani.com/',
        imageUrl: '/assets/hotel-bindani.webp',
        type: 'Desarrollo Completo',
        client: 'Hospitalidad & Turismo',
        stack: 'Web, Booking Engine & Redes Sociales',
        description: 'Diseño web elegante y gestión de estrategia digital para posicionamiento de hotel boutique.',
    },
];

// ─── Productos CA propios ──────────────────────────────────────
