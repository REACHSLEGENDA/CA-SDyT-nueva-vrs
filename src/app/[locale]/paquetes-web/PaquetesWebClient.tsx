'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
    CheckCircle2, ArrowRight, Zap, Rocket, Layers, Smartphone,
    Bot, Mail, MessageCircle, ShieldCheck, Code2, Database,
    BarChart3, Clock, Layout, Plus, Minus, Globe, Network,
    Server, Headphones, Wifi, Search
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function WebPackagesPage({ catalog }: { catalog?: React.ReactNode }) {
    const t = useTranslations('PackagesPage');
    return (
        <div className="pt-20 min-h-screen">

            {/* HERO */}
            <Section className="text-center pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <span className="font-mono text-xs text-ca-cyan border border-ca-cyan/30 bg-ca-cyan/5 px-3 py-1.5 rounded-full uppercase tracking-widest inline-block mb-6">
                        {t('badge')}
                    </span>
                </motion.div>

                <motion.h1
                    className="font-display text-5xl md:text-7xl font-black text-ca-text mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    {t('h1a')}{' '}
                    <span className="text-ca-gradient">{t('h1b')}</span>
                </motion.h1>

                <motion.p
                    className="text-ca-muted text-xl max-w-4xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    {t('heroSub')}
                </motion.p>
            </Section>

            {/* ─── GRID DE PAQUETES ─────────────────────────────── */}
            <Section className="pb-24">
                <div className="grid lg:grid-cols-2 gap-8">

                    {/* 1. Despegue Digital */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-8 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="font-mono text-xs text-ca-muted uppercase tracking-wider">{t('forStarters')}</span>
                                    <h2 className="font-display font-black text-2xl md:text-3xl text-ca-text mt-1">
                                        Despegue Digital
                                    </h2>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <Rocket size={22} className="text-emerald-400" />
                                </div>
                            </div>

                            <p className="text-ca-muted mb-6">
                                {t('p1Desc')}
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {[
                                    t('f1'),
                                    'Google Business & Maps',
                                    t('f2'),
                                    t('f3'),
                                    'Dominio y hosting incluido',
                                    t('f4'),
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-ca-text">
                                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href={{ pathname: '/contacto', query: { servicio: 'Despegue Digital' } }} className="block">
                                <button className="w-full py-3 rounded-xl border border-ca-border text-ca-text font-medium hover:border-ca-cyan/40 hover:text-ca-cyan transition-all">
                                    Elegir plan →
                                </button>
                            </Link>
                        </GlassCard>
                    </motion.div>

                    {/* 2. Tráfico y Conversión — POPULAR */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        {/* Borde gradiente animado */}
                        <div className="absolute -inset-[1px] rounded-2xl bg-ca-gradient opacity-60 blur-[2px] -z-10" />
                        <GlassCard className="p-8 h-full flex flex-col border-ca-cyan/20">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <Badge variant="popular" className="mb-2">{t('popular')}</Badge>
                                    <h2 className="font-display font-black text-2xl md:text-3xl text-ca-text mt-1">
                                        {t('f10')}
                                    </h2>
                                    <span className="font-mono text-xs text-ca-muted">{t('forGrowth')}</span>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-ca-cyan/10 border border-ca-cyan/30 flex items-center justify-center">
                                    <BarChart3 size={22} className="text-ca-cyan" />
                                </div>
                            </div>

                            <p className="text-ca-muted mb-6">
                                {t('p2Desc')}
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {[
                                    'Web profesional (7 secciones)',
                                    'SEO On-Page + Google Analytics',
                                    t('f5'),
                                    t('f6'),
                                    t('f7'),
                                    t('f8'),
                                    'WhatsApp integrado',
                                    t('f9'),
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-ca-text">
                                        <CheckCircle2 size={15} className="text-ca-cyan shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href={{ pathname: '/contacto', query: { servicio: t('f10') } }} className="block">
                                <button className="w-full py-3 rounded-xl bg-ca-gradient text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-ca-cyan/20">
                                    Elegir plan →
                                </button>
                            </Link>
                        </GlassCard>
                    </motion.div>

                    {/* 3. Ecosistema Premium IA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <GlassCard className="p-8 h-full flex flex-col" glow="purple">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="font-mono text-xs text-ca-muted uppercase tracking-wider">{t('forAi')}</span>
                                    <h2 className="font-display font-black text-2xl md:text-3xl text-ca-text mt-1">
                                        Ecosistema Premium IA
                                    </h2>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-ca-purple/10 border border-ca-purple/30 flex items-center justify-center">
                                    <Bot size={22} className="text-ca-purple" />
                                </div>
                            </div>

                            <p className="text-ca-muted mb-6">
                                {t('p3Desc')}
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {[
                                    'Web premium (14+ secciones)',
                                    t('f11'),
                                    t('f12'),
                                    'Redes sociales premium (3 meses)',
                                    t('f13'),
                                    t('f14'),
                                    t('f15'),
                                    'Seguridad SSL avanzada',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-ca-text">
                                        <CheckCircle2 size={15} className="text-ca-purple shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href={{ pathname: '/contacto', query: { servicio: 'Ecosistema Premium IA' } }} className="block">
                                <button className="w-full py-3 rounded-xl border border-ca-purple/40 text-ca-purple font-medium hover:bg-ca-purple/10 transition-all">
                                    Elegir plan →
                                </button>
                            </Link>
                        </GlassCard>
                    </motion.div>

                    {/* 4. Plan TI Empresarial — NUEVO */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <GlassCard className="p-8 h-full flex flex-col border-ca-cyan/15" glow="cyan">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <Badge variant="new" className="mb-2">✦ Nuevo</Badge>
                                    <h2 className="font-display font-black text-2xl md:text-3xl text-ca-text mt-1">
                                        Plan TI Empresarial
                                    </h2>
                                    <span className="font-mono text-xs text-ca-muted">{t('forEnterprise')}</span>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-ca-cyan/10 border border-ca-cyan/30 flex items-center justify-center">
                                    <ShieldCheck size={22} className="text-ca-cyan" />
                                </div>
                            </div>

                            <p className="text-ca-muted mb-6">
                                {t('p4Desc')}
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {[
                                    { icon: <Wifi size={14} />, label: t('f16') },
                                    { icon: <ShieldCheck size={14} />, label: 'Firewall Fortinet configurado y seguro' },
                                    { icon: <Server size={14} />, label: 'Servidor o NAS Synology implementado' },
                                    { icon: <Globe size={14} />, label: 'Google Workspace administrado (correos, usuarios)' },
                                    { icon: <Headphones size={14} />, label: t('f17') },
                                    { icon: <Network size={14} />, label: t('f18') },
                                    { icon: <ShieldCheck size={14} />, label: t('f19') },
                                    { icon: <BarChart3 size={14} />, label: t('f20') },
                                ].map((item) => (
                                    <li key={item.label} className="flex items-start gap-3 text-sm text-ca-text">
                                        <span className="text-ca-cyan mt-0.5 shrink-0">{item.icon}</span>
                                        {item.label}
                                    </li>
                                ))}
                            </ul>

                            <Link href={{ pathname: '/contacto', query: { servicio: 'Plan TI Empresarial' } }} className="block">
                                <button className="w-full py-3 rounded-xl bg-ca-surface border border-ca-cyan/30 text-ca-cyan font-semibold hover:bg-ca-cyan/10 transition-all shadow-md shadow-ca-cyan/10">
                                    Solicitar Plan TI →
                                </button>
                            </Link>
                        </GlassCard>
                    </motion.div>
                </div>
            </Section>

            {/* Tabla comparativa */}
            <Section className="py-20 border-t border-ca-border">
                <SectionHeader
                    eyebrow="Transparencia total"
                    title={t('compare')}
                    subtitle={t('clear')}
                />

                <div className="overflow-x-auto rounded-2xl border border-ca-border bg-ca-surface/30">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-ca-border">
                                <th className="p-6 text-ca-muted font-medium text-sm">{t('feature')}</th>
                                <th className="p-6 text-center text-sm font-bold text-emerald-400">Despegue</th>
                                <th className="p-6 text-center text-sm font-bold text-ca-cyan">Tráfico</th>
                                <th className="p-6 text-center text-sm font-bold text-ca-purple">Premium IA</th>
                                <th className="p-6 text-center text-sm font-bold text-ca-text">Plan TI</th>
                            </tr>
                        </thead>
                        <tbody className="text-ca-muted text-sm">
                            <TableRow label="Secciones web" v={['3', '7', '14+', '—']} />
                            <TableRow label="SEO optimizado" v={['Básico', 'Intermedio', 'Avanzado + AEO', '—']} />
                            <TableRow label="Chatbot / Bot IA" v={['—', 'Básico', 'GPT-4 IA', '—']} />
                            <TableRow label="Infraestructura TI" v={['—', '—', '—', '✓ Completa']} highlight={3} />
                            <TableRow label="Firewall / VPN" v={['—', '—', '—', '✓ Fortinet']} highlight={3} />
                            <TableRow label="Soporte mensual" v={['—', '—', '—', '✓ Incluido']} highlight={3} />
                            <TableRow label="Monitoreo PRTG" v={['—', '—', '—', '✓ 24/7']} highlight={3} />
                            <TableRow label="Google Workspace" v={['—', '—', '—', '✓ Administrado']} highlight={3} />
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* Catálogo de fichas con precio "desde" (solo es-MX y en) */}
            {catalog}

            {/* CTA final */}
            <Section className="py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="font-display font-black text-4xl md:text-6xl text-ca-text leading-tight">
                        {t('ctaA')}{' '}
                        <span className="text-ca-gradient">{t('ctaB')}</span>?
                    </h2>
                    <p className="text-ca-muted text-lg">
                        {t('ctaBody')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contacto">
                            <button className="bg-ca-gradient text-white font-semibold px-10 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-ca-cyan/20">
                                Cotizar proyecto
                            </button>
                        </Link>
                        <a href="https://wa.me/525951145576" target="_blank" rel="noreferrer">
                            <button className="border border-ca-border text-ca-text px-10 py-3.5 rounded-xl hover:border-ca-cyan/40 hover:text-ca-cyan transition-all flex items-center gap-2">
                                <MessageCircle size={18} /> WhatsApp
                            </button>
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}

function TableRow({ label, v, highlight }: { label: string; v: string[]; highlight?: number }) {
    return (
        <tr className="border-b border-ca-border/50 hover:bg-ca-surface/20 transition-colors">
            <td className="p-5 font-medium text-ca-text">{label}</td>
            {v.map((val, i) => (
                <td
                    key={i}
                    className={`p-5 text-center ${highlight === i ? 'text-ca-cyan font-medium' : val === '—' ? 'text-ca-border' : ''}`}
                >
                    {val}
                </td>
            ))}
        </tr>
    );
}
