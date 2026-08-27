'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2, TrendingUp, Network, Lightbulb,
    Globe, Smartphone, Database, Bot, Share2, BookOpen,
    Search, Shield, Camera, Server, Headphones,
    CheckCircle2, ArrowRight, ChevronDown
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

/* ─── Tipos ─────────────────────────────────────────────────────────── */
interface SubServiceCopy { title: string; desc: string; bullets: string[] }
interface CategoryCopy { label: string; eyebrow: string; title: string; subtitle: string; services: SubServiceCopy[] }

/* ─── Datos ──────────────────────────────────────────────────────────── */
// Solo lo que no se traduce: iconos, colores, enlaces y el orden.
// Los titulos, descripciones y bullets viven en messages/*.json (ServicesPage),
// para que las cinco versiones no se desincronicen.
const categoryVisuals = [
    {
        id: 'digital',
        icon: <Code2 size={22} />,
        accent: 'text-ca-cyan border-ca-cyan/40 bg-ca-cyan/10',
        services: [
            { icon: <Globe size={24} className="text-ca-cyan" />, pageLink: '/apps-web' },
            { icon: <Smartphone size={24} className="text-ca-mid" />, pageLink: '/apps-moviles' },
            { icon: <Database size={24} className="text-purple-400" />, pageLink: '/sistemas' },
            { icon: <Bot size={24} className="text-pink-400" />, pageLink: '/automatizacion' },
            { icon: <Search size={24} className="text-yellow-400" /> },
        ],
    },
    {
        id: 'marketing',
        icon: <TrendingUp size={22} />,
        accent: 'text-ca-purple border-ca-purple/40 bg-ca-purple/10',
        services: [
            { icon: <Share2 size={24} className="text-ca-purple" />, pageLink: '/marketing' },
            { icon: <Search size={24} className="text-orange-400" />, pageLink: '/seo-aeo' },
            { icon: <Globe size={24} className="text-emerald-400" />, pageLink: '/seo-aeo' },
            { icon: <Bot size={24} className="text-green-400" />, pageLink: '/automatizacion' },
            { icon: <BookOpen size={24} className="text-pink-400" /> },
        ],
    },
    {
        id: 'infraestructura',
        icon: <Network size={22} />,
        accent: 'text-ca-gradient border-ca-cyan/40',
        hasBadge: true,
        services: [
            { icon: <Network size={24} className="text-ca-mid" />, pageLink: '/infraestructura-ti' },
            { icon: <Shield size={24} className="text-ca-success" />, pageLink: '/infraestructura-ti' },
            { icon: <Camera size={24} className="text-ca-purple" />, pageLink: '/infraestructura-ti' },
            { icon: <Server size={24} className="text-ca-cyan" />, pageLink: '/infraestructura-ti' },
            { icon: <Headphones size={24} className="text-yellow-400" />, pageLink: '/infraestructura-ti' },
        ],
    },
    {
        id: 'consultoria',
        icon: <Lightbulb size={22} />,
        accent: 'text-ca-mid border-ca-mid/40 bg-ca-mid/10',
        services: [
            { icon: <Search size={24} className="text-ca-mid" /> },
            { icon: <TrendingUp size={24} className="text-ca-cyan" /> },
            { icon: <Database size={24} className="text-ca-purple" />, pageLink: '/automatizacion' },
            { icon: <BookOpen size={24} className="text-emerald-400" />, pageLink: '/clases' },
        ],
    },
];


/* ─── Componente principal ───────────────────────────────────────────── */
export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState('digital');
    const [openService, setOpenService] = useState<number | null>(null);
    const t = useTranslations('ServicesPage');

    const copy = t.raw('categories') as CategoryCopy[];
    const categories = categoryVisuals.map((v, i) => ({
        ...v,
        ...copy[i],
        services: v.services.map((sv, j) => ({ ...sv, ...copy[i].services[j] })),
    }));

    const active = categories.find((c) => c.id === activeTab)!;

    return (
        <div className="pt-20 min-h-screen">

            {/* Header */}
            <Section className="pb-16 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="font-mono text-xs text-ca-cyan border border-ca-cyan/30 bg-ca-cyan/5 px-3 py-1.5 rounded-full uppercase tracking-widest inline-block mb-6">
                        ✦ Soluciones completas
                    </span>
                </motion.div>
                <motion.h1
                    className="font-display text-5xl md:text-7xl font-black text-ca-text leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    {t('ui.heroA')}

                    <span className="text-ca-gradient">{t('ui.heroB')}</span>
                </motion.h1>
                <motion.p
                    className="text-ca-muted text-xl max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    {t('ui.heroSub')}
                </motion.p>
            </Section>

            {/* Tabs de categorías */}
            <Section className="pt-0">
                <div className="flex flex-wrap gap-3 justify-center mb-14">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveTab(cat.id); setOpenService(null); }}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${activeTab === cat.id
                                    ? 'bg-ca-surface border-ca-cyan/40 text-ca-cyan shadow-lg shadow-ca-cyan/10'
                                    : 'bg-ca-surface/40 border-ca-border text-ca-muted hover:border-ca-border hover:text-ca-text'
                                }`}
                        >
                            {cat.icon}
                            <span className="hidden sm:inline">{cat.label}</span>
                            {cat.hasBadge && <span className="hidden lg:inline"><Badge variant="new">{t('ui.badgeNew')}</Badge></span>}
                        </button>
                    ))}
                </div>

                {/* Contenido de la categoría activa */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header de categoría */}
                        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <span className="font-mono text-xs text-ca-muted uppercase tracking-widest">
                                    {active.eyebrow}
                                </span>
                                <h2 className="font-display font-black text-3xl md:text-4xl text-ca-text mt-2 flex items-center gap-3">
                                    {active.title}
                                    {active.hasBadge && <Badge variant="new">{t('ui.badgeNew')}</Badge>}
                                </h2>
                                <p className="text-ca-muted mt-2 max-w-2xl">{active.subtitle}</p>
                            </div>
                        </div>

                        {/* Grid de servicios */}
                        <div className="space-y-4">
                            {active.services.map((svc, idx) => (
                                <motion.div
                                    key={svc.title}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.06 }}
                                >
                                    <GlassCard
                                        glow={activeTab === 'infraestructura' ? 'cyan' : 'none'}
                                        hover={false}
                                        className="p-6 cursor-pointer"
                                        onClick={() => setOpenService(openService === idx ? null : idx)}
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                                <div className="w-11 h-11 rounded-xl bg-ca-surface2 border border-ca-border flex items-center justify-center shrink-0">
                                                    {svc.icon}
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="font-bold text-ca-text text-lg">{svc.title}</h3>
                                                    <p className="text-ca-muted text-sm mt-0.5 line-clamp-1">{svc.desc}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                {svc.pageLink && (
                                                    <Link
                                                        href={svc.pageLink as '/'}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-ca-text border border-ca-border px-3 py-1.5 rounded-lg hover:border-ca-cyan/30 hover:text-ca-cyan transition-colors"
                                                    >
                                                        Ver más
                                                    </Link>
                                                )}
                                                <Link
                                                    href={{ pathname: '/contacto', query: { servicio: svc.title } }}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-ca-cyan border border-ca-cyan/30 px-3 py-1.5 rounded-lg hover:bg-ca-cyan/10 transition-colors"
                                                >
                                                    {t('ui.request')} <ArrowRight size={12} />
                                                </Link>
                                                <motion.div
                                                    animate={{ rotate: openService === idx ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown size={18} className="text-ca-muted" />
                                                </motion.div>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {openService === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="mt-5 pt-5 border-t border-ca-border">
                                                        <p className="text-ca-muted text-sm mb-4">{svc.desc}</p>
                                                        <ul className="grid sm:grid-cols-2 gap-2">
                                                            {svc.bullets.map((b, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-ca-text">
                                                                    <CheckCircle2 size={14} className="text-ca-cyan mt-0.5 shrink-0" />
                                                                    {b}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="mt-5 flex flex-wrap gap-3">
                                                            {svc.pageLink && (
                                                                <Link
                                                                    href={svc.pageLink as '/'}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                    className="inline-flex items-center gap-2 text-sm font-medium text-ca-text border border-ca-border px-4 py-2 rounded-lg hover:border-ca-cyan/40 hover:text-ca-cyan transition-all"
                                                                >
                                                                    {t('ui.fullPage')}
                                                                </Link>
                                                            )}
                                                            <Link
                                                                href={{ pathname: '/contacto', query: { servicio: svc.title } }}
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="inline-flex items-center gap-2 text-sm font-medium text-ca-cyan hover:gap-3 transition-all"
                                                            >
                                                                {t('ui.requestService')}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-ca-surface/30 rounded-[2rem] border border-ca-border mx-4 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <h2 className="font-display font-black text-3xl md:text-4xl text-ca-text mb-3">
                            {t('ui.ctaTitle')}
                        </h2>
                        <p className="text-ca-muted">
                            {t('ui.ctaBody')}
                            una propuesta sin compromiso.
                        </p>
                    </div>
                    <Link
                        href="/contacto"
                        className="bg-ca-gradient text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-200 whitespace-nowrap shadow-lg shadow-ca-cyan/20"
                    >
                        {t('ui.ctaButton')}
                    </Link>
                </div>
            </Section>
        </div>
    );
}
