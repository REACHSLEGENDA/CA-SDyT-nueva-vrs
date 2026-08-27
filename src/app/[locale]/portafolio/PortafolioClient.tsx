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
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { portfolioItems } from '@/lib/portfolioData';

// ─── Proyectos de clientes ─────────────────────────────────────

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

// Usa t(), que solo existe dentro del componente: se envuelve en una funcion
// que recibe el traductor. Iconos, gradientes e imagenes siguen aqui.
type Traductor = ReturnType<typeof useTranslations>;

const construirProductos = (t: Traductor): CaProduct[] => [
    {
        id: 'agencyos',
        title: 'AgencyOS',
        subtitle: 'Creative Studio',
        tagline: t('agencyTag'),
        desc: t('agencyDesc'),
        gradient: 'from-[#1a0a3a] via-[#12082e] to-[#0a1628]',
        borderColor: 'border-purple-500/30',
        glowColor: 'bg-purple-600/15',
        icon: <Briefcase size={28} className="text-purple-400" />,
        features: [t('ag1'), t('ag2'), t('ag3'), t('ag4'), t('ag5')],
        imageUrl: '/assets/products/agencyos.webp',
    },
    {
        id: 'kovex-crm',
        title: 'KOVEX',
        subtitle: 'CRM v1.0',
        tagline: t('kovexTag'),
        desc: t('kovexDesc'),
        gradient: 'from-[#1a0a1a] via-[#1a0022] to-[#0a0a1a]',
        borderColor: 'border-pink-500/30',
        glowColor: 'bg-pink-600/15',
        icon: <BarChart3 size={28} className="text-pink-400" />,
        features: [t('kx1'), t('kx2'), 'Contact Center integrado', t('kx3'), 'Revenue en tiempo real'],
        imageUrl: '/assets/products/kovex-crm.webp',
    },
    {
        id: 'dentaflow',
        title: 'DentaFlow',
        subtitle: t('dentaTag'),
        tagline: 'CRM Dental Integral',
        desc: t('dentaDesc'),
        gradient: 'from-[#021a14] via-[#01140f] to-[#010d0a]',
        borderColor: 'border-teal-500/30',
        glowColor: 'bg-teal-600/15',
        icon: <Users size={28} className="text-teal-400" />,
        features: [t('dt1'), t('dt2'), t('dt3'), 'Cobros y pagos pendientes', t('dt4')],
        imageUrl: '/assets/products/dentaflow.webp',
    },
    {
        id: 'abastoflow',
        title: 'AbastoFlow',
        subtitle: t('abastoTag'),
        tagline: t('abastoSub'),
        desc: t('abastoDesc'),
        gradient: 'from-[#0a1a0a] via-[#071207] to-[#030d03]',
        borderColor: 'border-emerald-500/30',
        glowColor: 'bg-emerald-600/15',
        icon: <ShoppingBag size={28} className="text-emerald-400" />,
        features: [t('ab1'), t('ab2'), t('ab3'), t('ab4'), t('ab5')],
        imageUrl: '/assets/abastoflow.webp',
    },
];

const TYPE_COLOR: Record<string, string> = {
    'Proyecto Top': 'text-amber-400 font-black',
    'Desarrollo Completo': 'text-ca-cyan',
    'Colaboración': 'text-ca-purple',
    'App Web': 'text-ca-mid',
};

export default function PortfolioPage() {
    const t = useTranslations('PortfolioPage');
    const CA_PRODUCTS = construirProductos(t);
    // Los valores de `type` son identificadores en espanol dentro de los datos;
    // aqui solo se traduce lo que ve el visitante.
    const tipoTraducido = (tipo: string) => ({
        'Proyecto Top': t('typeTop'),
        'Desarrollo Completo': t('typeFull'),
        'Colaboración': t('typeCollab'),
        'App Web': t('typeWebApp'),
    }[tipo] ?? tipo);
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
                    <span className="text-ca-gradient">{t('heroTail')}</span>
                </motion.h1>
                <motion.p
                    className="text-ca-muted text-xl max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    {t('heroBody')}
                </motion.p>
            </Section>

            {/* ─── PROYECTOS DE CLIENTES ────────────────────────────── */}
            <Section className="border-t border-ca-border pb-16">
                <SectionHeader
                    eyebrow="Clientes y proyectos"
                    title={t('worksTitle')}
                    subtitle={t('worksSub')}
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
                            <div className="h-full rounded-2xl border border-ca-border">
                                <GlassCard hover className="h-full flex flex-col overflow-hidden p-0 rounded-2xl bg-ca-dark/40 backdrop-blur-md">
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
                                        {tipoTraducido(item.type)}
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ─── PRODUCTOS CA PROPIOS ─────────────────────────────── */}
            <Section className="border-t border-ca-border py-20">
                <SectionHeader
                    eyebrow="Productos propios"
                    title={t('productsTitle')}
                    subtitle={t('productsSub')}
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
                        {t('ctaTitle')}
                    </h2>
                    <p className="text-ca-muted mb-8">
                        {t('ctaBody')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contacto"
                            className="bg-ca-gradient text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-ca-cyan/20"
                        >
                            {t('ctaButton')}
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
