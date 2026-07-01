'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
    ExternalLink, Code, Globe, BarChart3, Users,
    MessageCircle, Briefcase, ShoppingBag, Building2,
    Newspaper, Zap, Monitor, Star
} from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

// ─── Proyectos de clientes ─────────────────────────────────────
interface Project {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    type: string;
    client: string;
    stack: string;
    description: string;
}

const portfolioItems: Project[] = [
    {
        id: 1,
        title: 'APEN',
        url: 'https://apen.mx/',
        imageUrl: '/assets/apen-preview.png',
        type: 'Desarrollo Completo',
        client: 'Energía & Proyectos',
        stack: 'Web corporativa + SEO',
        description: 'Sitio corporativo de alta gama para empresa administradora de proyectos energéticos. Diseño industrial premium con video background.',
    },
    {
        id: 2,
        title: 'GIKINX',
        url: 'https://gikinx.mx/',
        imageUrl: '/assets/gikinx-preview.png',
        type: 'Desarrollo Completo',
        client: 'Media & Entretenimiento',
        stack: 'Portal de noticias + CMS',
        description: 'Portal de noticias gaming, anime y esports. Categorías por scroll infinito, diseño dark con acento naranja y ticker de categorías.',
    },
    {
        id: 3,
        title: 'Healthcare Training Experience',
        url: 'https://healthcareexp.com/',
        imageUrl: '/assets/healthcare-preview.png',
        type: 'Desarrollo Completo',
        client: 'Salud & Capacitación',
        stack: 'Web Platform + LMS',
        description: 'Plataforma de capacitación y entrenamiento para profesionales del sector salud. Experiencia de aprendizaje digital especializada.',
    },
    {
        id: 4,
        title: 'Kiper',
        url: 'https://kiper.app/',
        imageUrl: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/fa65e77a159d8b7f1b52b0bbb577ca3fb95792cd/Captura%20de%20pantalla%202026-01-28%20171424.png',
        type: 'Colaboración',
        client: 'Software CRM',
        stack: 'Participación en Desarrollo & Optimización',
        description: 'Participamos en módulos clave de este CRM inmobiliario líder en el mercado.',
    },
    {
        id: 5,
        title: 'FX Latam Pro',
        url: 'https://www.fxlatampro.site/',
        imageUrl: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/Captura%20de%20pantalla%202026-01-28%20172653.png',
        type: 'Desarrollo Completo',
        client: 'Educación Financiera',
        stack: 'Web Platform & LMS',
        description: 'Academia de trading online con gestión de usuarios, cursos y señales en tiempo real.',
    },
    {
        id: 6,
        title: 'Emuna',
        url: 'https://www.emuna.mx/',
        imageUrl: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/Captura%20de%20pantalla%202026-01-28%20172306.png',
        type: 'Colaboración',
        client: 'E-commerce & Retail',
        stack: 'Shopify / Custom Code',
        description: 'Colaboración en el desarrollo frontend y optimización de conversión para esta marca de joyería.',
    },
    {
        id: 7,
        title: 'Brokers Calificados',
        url: 'https://brokerscalificados.net',
        imageUrl: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/Captura%20de%20pantalla%202025-08-16%20194913.png',
        type: 'Desarrollo Completo',
        client: 'Directorio Inmobiliario',
        stack: 'Next.js, SEO Avanzado',
        description: 'Portal especializado para conectar usuarios con brokers certificados en todo México.',
    },
    {
        id: 8,
        title: 'Hotel BINDANI',
        url: 'https://hotelbindani.com/',
        imageUrl: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/Captura%20de%20pantalla%202026-01-28%20173045.png',
        type: 'Desarrollo Completo',
        client: 'Hospitalidad & Turismo',
        stack: 'Web, Booking Engine & Redes Sociales',
        description: 'Diseño web elegante y gestión de estrategia digital para posicionamiento de hotel boutique.',
    },
];

// ─── Productos CA propios ──────────────────────────────────────
interface CaProduct {
    id: string;
    title: string;
    subtitle: string;
    tagline: string;
    desc: string;
    gradient: string;
    borderColor: string;
    glowColor: string;
    icon: React.ReactNode;
    features: string[];
    imageUrl?: string;
}

const CA_PRODUCTS: CaProduct[] = [
    {
        id: 'agencyos',
        title: 'AgencyOS',
        subtitle: 'Creative Studio',
        tagline: 'CRM para Agencias Creativas',
        desc: 'Sistema de gestión completo para estudios de marketing y producción creativa. Proyectos, clientes, campañas, solicitudes, horas trabajadas, facturación y comunicación en un solo lugar.',
        gradient: 'from-[#1a0a3a] via-[#12082e] to-[#0a1628]',
        borderColor: 'border-purple-500/30',
        glowColor: 'bg-purple-600/15',
        icon: <Briefcase size={28} className="text-purple-400" />,
        features: ['Dashboard de producción semanal', 'Tablero Kanban por cliente', 'Próximas entregas y alertas', 'Campañas activas con presupuesto', 'Facturación integrada'],
        imageUrl: '/assets/products/agencyos.png',
    },
    {
        id: 'kovex-crm',
        title: 'KOVEX',
        subtitle: 'CRM v1.0',
        tagline: 'CRM de Leads y Ventas',
        desc: 'CRM enfocado en conversión: gestión de prospectos, embudo de ventas, automatizaciones de seguimiento por WhatsApp y email, y métricas de cierre en tiempo real.',
        gradient: 'from-[#1a0a1a] via-[#1a0022] to-[#0a0a1a]',
        borderColor: 'border-pink-500/30',
        glowColor: 'bg-pink-600/15',
        icon: <BarChart3 size={28} className="text-pink-400" />,
        features: ['Embudo de ventas visual', 'Automatización de seguimiento', 'Contact Center integrado', 'Reglas de flujo personalizables', 'Revenue en tiempo real'],
        imageUrl: '/assets/products/kovex-crm.png',
    },
    {
        id: 'dentaflow',
        title: 'DentaFlow',
        subtitle: 'Gestión Clínica',
        tagline: 'CRM Dental Integral',
        desc: 'Sistema de gestión para clínicas dentales: agenda, historial clínico, inventario de materiales, cobros y alertas automáticas. Diseñado para que el dentista solo piense en sus pacientes.',
        gradient: 'from-[#021a14] via-[#01140f] to-[#010d0a]',
        borderColor: 'border-teal-500/30',
        glowColor: 'bg-teal-600/15',
        icon: <Users size={28} className="text-teal-400" />,
        features: ['Agenda y citas del día', 'Historial clínico digital', 'Alertas de inventario bajo', 'Cobros y pagos pendientes', 'Confirmación por WhatsApp'],
        imageUrl: '/assets/products/dentaflow.png',
    },
    {
        id: 'abastoflow',
        title: 'AbastoFlow',
        subtitle: 'Gestión de Abasto',
        tagline: 'Control de Inventarios y Suministro',
        desc: 'App web para empresas de logística y distribución. Control total de stock, pedidos y flujo de abasto. Dashboards en tiempo real para decisiones rápidas de compra y distribución.',
        gradient: 'from-[#0a1a0a] via-[#071207] to-[#030d03]',
        borderColor: 'border-emerald-500/30',
        glowColor: 'bg-emerald-600/15',
        icon: <ShoppingBag size={28} className="text-emerald-400" />,
        features: ['Control de stock en tiempo real', 'Gestión de pedidos y órdenes', 'Alertas de reabasto automáticas', 'Dashboard de movimientos', 'Multi-almacén'],
        imageUrl: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/abas.png',
    },
];

const TYPE_COLOR: Record<string, string> = {
    'Desarrollo Completo': 'text-ca-cyan',
    'Colaboración': 'text-ca-purple',
    'App Web': 'text-ca-mid',
};

export default function PortfolioPage() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="pt-20 min-h-screen">

            {/* ─── HERO ─────────────────────────────────────────────── */}
            <Section className="text-center pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-ca-cyan/6 rounded-full blur-[130px] -z-10" />
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="font-mono text-xs text-ca-cyan border border-ca-cyan/30 bg-ca-cyan/5 px-3 py-1.5 rounded-full uppercase tracking-widest inline-block mb-6">
                        ✦ Portafolio
                    </span>
                </motion.div>
                <motion.h1
                    className="font-display text-5xl md:text-7xl font-black text-ca-text mb-6 leading-[1.05]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Proyectos que{' '}
                    <span className="text-ca-gradient">hablan por sí solos.</span>
                </motion.h1>
                <motion.p
                    className="text-ca-muted text-xl max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    De startups fintech a portales de entretenimiento y clínicas dentales.
                    Aquí una muestra de lo que construimos para nuestros clientes — y para nosotros mismos.
                </motion.p>
            </Section>

            {/* ─── PROYECTOS DE CLIENTES ────────────────────────────── */}
            <Section className="border-t border-ca-border pb-16">
                <SectionHeader
                    eyebrow="Clientes y proyectos"
                    title="Lo que hemos construido"
                    subtitle="Sitios, apps y plataformas en producción."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 3) * 0.08 }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <GlassCard hover className="h-full flex flex-col overflow-hidden p-0">
                                {/* Image */}
                                <div className="h-48 w-full relative overflow-hidden bg-ca-surface2">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ca-surface via-transparent to-transparent" />
                                    <span className={`absolute top-3 right-3 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-ca-dark/80 backdrop-blur-sm border border-ca-border ${TYPE_COLOR[item.type] ?? 'text-ca-muted'}`}>
                                        {item.type}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="mb-3">
                                        <h3 className="font-display font-black text-xl text-ca-text group-hover:text-ca-cyan transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-ca-muted font-mono uppercase tracking-wider mt-0.5">{item.client}</p>
                                    </div>
                                    <p className="text-ca-muted text-sm leading-relaxed flex-grow mb-4">{item.description}</p>
                                    <div className="flex items-center gap-2 mb-4 text-xs text-ca-muted">
                                        <Code size={13} className="text-ca-cyan shrink-0" />
                                        <span>{item.stack}</span>
                                    </div>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-ca-border text-ca-muted text-sm font-medium hover:border-ca-cyan/40 hover:text-ca-cyan transition-all"
                                    >
                                        <ExternalLink size={14} /> Visitar sitio
                                    </a>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ─── PRODUCTOS CA PROPIOS ─────────────────────────────── */}
            <Section className="border-t border-ca-border py-20">
                <SectionHeader
                    eyebrow="Productos propios"
                    title="Software que construimos para el mercado"
                    subtitle="Sistemas a medida que desarrollamos internamente y ofrecemos para empresas que los necesitan."
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {CA_PRODUCTS.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className={`relative rounded-2xl overflow-hidden border ${product.borderColor} h-full flex flex-col`}>
                                {/* Glow */}
                                <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 ${product.glowColor} rounded-full blur-[80px] -z-10`} />

                                {/* Preview: screenshot o gradiente */}
                                <div className={`relative h-52 w-full bg-gradient-to-br ${product.gradient} overflow-hidden`}>
                                    {product.imageUrl && (
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.title}
                                            fill
                                            className="object-cover object-top opacity-90"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    )}
                                    {/* overlay siempre visible para texto */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Badge "Producto CA" */}
                                    <div className="absolute top-3 left-3">
                                        <Badge variant="new">Producto CA</Badge>
                                    </div>

                                    {/* Product icon + name en overlay */}
                                    <div className="absolute bottom-4 left-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                                {product.icon}
                                            </div>
                                            <div>
                                                <p className="font-display font-black text-white text-lg leading-none">{product.title}</p>
                                                <p className="font-mono text-[10px] text-white/50 uppercase tracking-wider mt-0.5">{product.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow bg-ca-surface/80 backdrop-blur-sm">
                                    <span className="font-mono text-xs text-ca-cyan uppercase tracking-wider mb-2">
                                        {product.tagline}
                                    </span>
                                    <p className="text-ca-muted text-sm leading-relaxed mb-4">{product.desc}</p>

                                    <ul className="space-y-1.5 mb-5">
                                        {product.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-xs text-ca-text">
                                                <div className="w-1 h-1 rounded-full bg-ca-cyan shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="https://wa.me/525951145576"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-ca-gradient text-white font-semibold text-sm px-5 py-3 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-ca-cyan/15"
                                    >
                                        <MessageCircle size={16} /> Solicitar
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ─── CTA FINAL ───────────────────────────────────────── */}
            <Section className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <Star size={36} className="text-ca-cyan mx-auto mb-5" />
                    <h2 className="font-display font-black text-4xl text-ca-text mb-4">
                        ¿Tienes un proyecto en mente?
                    </h2>
                    <p className="text-ca-muted mb-8">
                        Si te gustó lo que construimos, imagina lo que podemos hacer para tu empresa.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contacto"
                            className="bg-ca-gradient text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-ca-cyan/20"
                        >
                            Iniciar cotización →
                        </Link>
                        <a
                            href="https://wa.me/525951145576"
                            target="_blank"
                            rel="noreferrer"
                            className="border border-ca-border text-ca-text px-8 py-3.5 rounded-xl hover:border-ca-cyan/40 hover:text-ca-cyan transition-all flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} /> WhatsApp
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}
