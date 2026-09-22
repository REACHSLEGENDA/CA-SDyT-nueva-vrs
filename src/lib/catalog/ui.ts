import type { Billing, CatalogLocale, Currency } from './types';

/**
 * Textos de interfaz del catálogo y de CA Explica.
 *
 * Viven aquí y no en `messages/*.json` porque en la fase 1 solo existen en
 * es-MX y en; añadirlos a los mensajes obligaría a mantener claves vacías en
 * los otros tres idiomas.
 */
export const UI = {
    'es-MX': {
        home: 'Inicio',
        services: 'Servicios',
        guides: 'CA Explica',
        guidesTagline: 'Respuestas claras sobre tecnología para tu negocio',
        guidesIntro: 'Guías directas para decidir mejor: cuánto cuesta, qué necesitas y qué preguntar antes de contratar. Con fuentes, sin letra chiquita.',
        from: 'Desde',
        upTo: 'Hasta',
        quote: 'Cotización',
        perMonth: '/mes',
        setup: 'configuración inicial',
        oneTime: 'pago único',
        monthly: 'mensual',
        maintenance: 'Mantenimiento',
        referencePrice: 'Precio de referencia. El alcance y el precio final se confirman en la propuesta.',
        quickFacts: 'Ficha rápida',
        startingPrice: 'Precio desde',
        billing: 'Modalidad',
        timeline: 'Tiempo estimado',
        timelineByScope: 'Se define en la propuesta',
        delivery: 'Atención',
        deliveryValue: 'Remota, en todo México',
        onThisPage: 'En esta ficha',
        onThisGuide: 'En esta guía',
        includes: '¿Qué incluye?',
        tiers: 'Niveles y precios',
        tiersLockedHint: 'Deja tus datos y te mostramos los precios de todos los niveles, con mensualidades.',
        inputs: '¿Qué necesitamos para empezar?',
        deliverables: '¿Qué recibes?',
        process: '¿Cómo trabajamos?',
        processSteps: [
            { title: 'Diagnóstico', text: 'Revisamos tu necesidad y lo que ya tienes para definir el alcance correcto.' },
            { title: 'Propuesta', text: 'Recibes alcance, precio, calendario y lo que queda fuera, por escrito.' },
            { title: 'Entrega', text: 'Desarrollamos, probamos contigo y entregamos con accesos y capacitación.' },
        ],
        notIncluded: 'Se cotiza por separado',
        notIncludedText: 'Hosting, dominios, licencias, consumo de APIs, mensajería y pauta publicitaria se cotizan aparte, salvo que la propuesta indique lo contrario.',
        faqs: 'Preguntas frecuentes',
        relatedGuides: 'Guías relacionadas',
        relatedProducts: 'También te puede interesar',
        seeAllServices: 'Ver página del servicio',
        ctaQuote: 'Cotizar este servicio',
        ctaWhatsapp: 'Preguntar por WhatsApp',
        ctaSeePrices: 'Ver todos los precios',
        finalCtaTitle: '¿Lo platicamos?',
        finalCtaText: 'Cuéntanos qué necesitas y te enviamos una propuesta clara, sin compromiso.',
        // Gate de precios
        gateTitle: 'Desbloquea la tabla completa de precios',
        gateText: 'Te mostramos al instante el precio de cada nivel. Un asesor puede contactarte para resolver dudas; no enviamos publicidad.',
        gateName: 'Nombre',
        gateEmail: 'Correo',
        gatePhone: 'WhatsApp',
        gateContactHint: 'Correo o WhatsApp: con uno basta.',
        gateSubmit: 'Ver precios',
        gateSubmitting: 'Desbloqueando…',
        gatePrivacy: 'Al continuar aceptas nuestro',
        gatePrivacyLink: 'Aviso de Privacidad',
        gateErrorContact: 'Escribe un correo o un WhatsApp válido.',
        gateErrorName: 'Escribe tu nombre.',
        gateErrorGeneric: 'No pudimos desbloquear los precios. Inténtalo de nuevo o escríbenos por WhatsApp.',
        gateUnlocked: 'Precios desbloqueados',
        gateContinueWhatsapp: 'Seguir por WhatsApp',
        gateWhatsappMessage: (product: string) => `Hola, vi los precios de ${product} en su sitio y me gustaría una cotización.`,
        locked: 'Bloqueado',
        // Guías
        quickAnswer: 'Respuesta rápida',
        keyFacts: 'Datos clave',
        sources: 'Fuentes',
        sourcesNote: 'Fuentes consultadas en la fecha de actualización. Esta guía es informativa y no sustituye asesoría legal o fiscal.',
        updated: 'Actualizado',
        readGuide: 'Leer guía',
        viewProduct: 'Ver ficha y precios',
        catalogTitle: 'Catálogo de servicios',
        catalogSubtitle: 'Cada servicio con lo que incluye, lo que necesitamos para empezar y su precio de referencia.',
        novaSays: 'Nova',
    },
    'en': {
        home: 'Home',
        services: 'Services',
        guides: 'CA Explains',
        guidesTagline: 'Clear answers about technology for your business',
        guidesIntro: 'Straight-to-the-point guides to decide better: what it costs, what you need and what to ask before hiring. With sources, no fine print.',
        from: 'From',
        upTo: 'Up to',
        quote: 'Quote',
        perMonth: '/month',
        setup: 'setup',
        oneTime: 'one-time',
        monthly: 'monthly',
        maintenance: 'Maintenance',
        referencePrice: 'Reference price. Final scope and price are confirmed in the proposal.',
        quickFacts: 'At a glance',
        startingPrice: 'Starting price',
        billing: 'Billing',
        timeline: 'Estimated timeline',
        timelineByScope: 'Defined in the proposal',
        delivery: 'Service',
        deliveryValue: 'Remote, nearshore from Mexico',
        onThisPage: 'On this page',
        onThisGuide: 'In this guide',
        includes: 'What is included?',
        tiers: 'Tiers and pricing',
        tiersLockedHint: 'Leave your details and we will show you the price of every tier, including monthly fees.',
        inputs: 'What do we need to start?',
        deliverables: 'What do you get?',
        process: 'How do we work?',
        processSteps: [
            { title: 'Discovery', text: 'We review your needs and what you already have to define the right scope.' },
            { title: 'Proposal', text: 'You get scope, price, schedule and exclusions, in writing.' },
            { title: 'Delivery', text: 'We build, test with you and hand over with access and training.' },
        ],
        notIncluded: 'Quoted separately',
        notIncludedText: 'Hosting, domains, licenses, API usage, messaging and ad spend are quoted separately unless the proposal says otherwise.',
        faqs: 'Frequently asked questions',
        relatedGuides: 'Related guides',
        relatedProducts: 'You may also like',
        seeAllServices: 'See service page',
        ctaQuote: 'Get a quote',
        ctaWhatsapp: 'Ask on WhatsApp',
        ctaSeePrices: 'See all prices',
        finalCtaTitle: 'Shall we talk?',
        finalCtaText: 'Tell us what you need and we will send you a clear proposal, no strings attached.',
        gateTitle: 'Unlock the full pricing table',
        gateText: 'We show you every tier’s price instantly. An advisor may reach out to answer questions; we do not send marketing emails.',
        gateName: 'Name',
        gateEmail: 'Email',
        gatePhone: 'WhatsApp',
        gateContactHint: 'Email or WhatsApp: one is enough.',
        gateSubmit: 'See prices',
        gateSubmitting: 'Unlocking…',
        gatePrivacy: 'By continuing you accept our',
        gatePrivacyLink: 'Privacy Notice',
        gateErrorContact: 'Enter a valid email or WhatsApp number.',
        gateErrorName: 'Enter your name.',
        gateErrorGeneric: 'We could not unlock the prices. Please try again or message us on WhatsApp.',
        gateUnlocked: 'Prices unlocked',
        gateContinueWhatsapp: 'Continue on WhatsApp',
        gateWhatsappMessage: (product: string) => `Hi, I saw the prices for ${product} on your website and I would like a quote.`,
        locked: 'Locked',
        quickAnswer: 'Quick answer',
        keyFacts: 'Key facts',
        sources: 'Sources',
        sourcesNote: 'Sources checked on the update date. This guide is informational and is not legal or tax advice.',
        updated: 'Updated',
        readGuide: 'Read guide',
        viewProduct: 'See details and pricing',
        catalogTitle: 'Service catalog',
        catalogSubtitle: 'Every service with what it includes, what we need to start and its reference price.',
        novaSays: 'Nova',
    },
} as const;

export type CatalogUI = (typeof UI)[CatalogLocale];

// ─── Precios ──────────────────────────────────────────────────────────────

export function formatMoney(amount: number, currency: Currency, locale: CatalogLocale): string {
    const formatted = new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'es-MX', {
        style: 'currency',
        currency,
        currencyDisplay: 'narrowSymbol',
        maximumFractionDigits: 0,
    }).format(amount);
    return `${formatted} ${currency}`;
}

export function billingLabel(billing: Billing, locale: CatalogLocale): string {
    const ui = UI[locale];
    if (billing === 'monthly') return ui.monthly;
    if (billing === 'setup') return ui.setup;
    return ui.oneTime;
}

/** "Desde $4,500 MXN", "Desde $3,500 MXN/mes"… */
export function formatFrom(amount: number, currency: Currency, billing: Billing, locale: CatalogLocale): string {
    const ui = UI[locale];
    const suffix = billing === 'monthly' ? ui.perMonth : '';
    return `${ui.from} ${formatMoney(amount, currency, locale)}${suffix}`;
}
