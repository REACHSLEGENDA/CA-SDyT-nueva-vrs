export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
    {
        question: '¿Cuánto tiempo tarda el desarrollo de un proyecto web?',
        answer: 'Depende de la complejidad. Una Landing Page profesional toma entre 1 y 2 semanas. Un sitio corporativo completo, de 3 a 5 semanas. Para plataformas a medida (SaaS, E-commerce avanzado), el plazo varía entre 2 y 4 meses, dependiendo del alcance definido en la fase de análisis.'
    },
    {
        question: '¿Trabajan también con aplicaciones móviles?',
        answer: 'Sí. Somos expertos en desarrollo móvil nativo (Swift, Kotlin) y multiplataforma (React Native). Podemos llevar tu idea a iOS y Android con una base de código optimizada, asegurando rendimiento nativo y una experiencia de usuario fluida.'
    },
    {
        question: '¿Pueden integrar sistemas o APIs existentes?',
        answer: 'Absolutamente. Nos especializamos en arquitectura de software compleja. Podemos conectar tu nuevo sitio o app con CRMs (Salesforce, HubSpot), ERPs, pasarelas de pago (Stripe, PayPal) o cualquier API REST/GraphQL que tu negocio utilice actualmente.'
    },
    {
        question: '¿Ofrecen mantenimiento después del lanzamiento?',
        answer: 'El software es un organismo vivo. Ofrecemos planes de mantenimiento evolutivo que incluyen actualizaciones de seguridad, monitoreo de servidores 24/7, respaldos automáticos y optimizaciones de rendimiento continuas para que tu inversión nunca quede obsoleta.'
    },
    {
        question: '¿El sitio será rápido y seguro?',
        answer: 'La velocidad y seguridad son pilares de nuestra ingeniería. Usamos tecnologías modernas (Next.js, Edge Computing) para lograr cargas casi instantáneas. Implementamos protocolos de seguridad bancaria, certificados SSL avanzados y protección contra ataques DDoS por defecto.'
    },
    {
        question: '¿Puedo escalar mi sistema en el futuro?',
        answer: 'Diseñamos pensando en el crecimiento desde el día uno. Nuestra arquitectura modular y serverless permite que tu sistema soporte desde 100 usuarios hasta millones sin necesidad de reescribir el código base. Tu tecnología crecerá al ritmo de tu éxito.'
    },
    {
        question: '¿Cómo se realiza el proceso de cotización?',
        answer: 'Transparente y detallado. Primero agendamos una breve llamada para entender tus necesidades. Luego, te entregamos una propuesta formal desglosada por fases, entregables y tiempos. Sin costos ocultos ni letras pequeñas.'
    },
    {
        question: '¿Qué tecnologías utilizan en sus desarrollos?',
        answer: 'Usamos un stack de vanguardia: React y Next.js para frontend, Node.js o Python para backend, bases de datos SQL/NoSQL escalables (PostgreSQL, MongoDB) y nube en AWS o Vercel. Seleccionamos la mejor herramienta para cada problema específico.'
    }
];
