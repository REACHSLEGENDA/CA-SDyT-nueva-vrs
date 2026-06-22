'use client';

import { useRef, useState, useEffect } from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
    Zap, ShieldCheck, Layout, Cpu, Bot, Layers,
    Globe, Code2, Server, Database, Plug, Smartphone,
    Network, Camera, Headphones
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { ProcessSection } from '@/components/features/ProcessSection';
import { FAQSection } from '@/components/features/FAQSection';
import { CTASection } from '@/components/features/CTASection';
import { heroVideoStart, heroVideoEnd } from '@/lib/heroState';

const TECH_TAGS = [
    'React', 'Next.js', 'Node.js', 'Supabase', 'Flutter', 'Fortinet',
    'Synology NAS', 'Windows Server', 'PRTG', 'Framer Motion',
    'Tailwind CSS', 'APIs REST', 'Google Workspace', 'Kotlin', 'TypeScript',
    'React', 'Next.js', 'Node.js', 'Supabase', 'Flutter', 'Fortinet',
    'Synology NAS', 'Windows Server', 'PRTG', 'Framer Motion',
    'Tailwind CSS', 'APIs REST', 'Google Workspace', 'Kotlin', 'TypeScript',
];

const ICON_MAP: Record<string, { icon: React.ReactNode; glow: 'none' | 'cyan' | 'purple' }> = {
    zap: {
        icon: <Zap size={28} className="text-yellow-400" />,
        glow: 'none'
    },
    shield: {
        icon: <ShieldCheck size={28} className="text-ca-success" />,
        glow: 'cyan'
    },
    layout: {
        icon: <Layout size={28} className="text-ca-cyan" />,
        glow: 'cyan'
    },
    cpu: {
        icon: <Cpu size={28} className="text-ca-purple" />,
        glow: 'purple'
    },
    bot: {
        icon: <Bot size={28} className="text-pink-400" />,
        glow: 'purple'
    },
    layers: {
        icon: <Layers size={28} className="text-orange-400" />,
        glow: 'none'
    },
    globe: {
        icon: <Globe size={28} className="text-ca-cyan" />,
        glow: 'cyan'
    },
    headphones: {
        icon: <Headphones size={28} className="text-yellow-400" />,
        glow: 'none'
    }
};

export function HomeClient() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const heroRef  = useRef<HTMLElement>(null);
    const hasRevealed = useRef(false);
    const t = useTranslations('Index');

    const reveal = () => {
        if (hasRevealed.current) return;
        hasRevealed.current = true;
        heroVideoEnd();
        heroRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        heroVideoStart();
        const onScroll = () => { if (window.scrollY > 60) reveal(); };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const stats = t.raw('Hero.stats') as Array<{ to: number; prefix?: string; suffix?: string; label: string }>;
    const cards = t.raw('WhyChooseUs.cards') as Array<{ icon: string; title: string; desc: string }>;

    return (
        <>
            {/* ─── VIDEO INTRO ─────────────────────────────────────── */}
            <section className="-mt-20 relative h-screen overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    onEnded={reveal}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 20%' }}
                    aria-hidden="true"
                >
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                </video>

                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ca-dark to-transparent pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                >
                    <span className="font-mono text-xs text-white/50 tracking-widest uppercase">Desliza para continuar / Scroll down</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
                    >
                        <div className="w-1 h-2 bg-white/40 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ─── HERO CONTENT ────────────── */}
            <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-ca-glow-cyan opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ca-glow-purple opacity-40 pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-dot-pattern" aria-hidden="true" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-16 w-full">
                    {/* Columna izquierda */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="font-mono text-xs text-ca-cyan border border-ca-cyan/30 bg-ca-cyan/8 px-3 py-1.5 rounded-full inline-flex items-center gap-2 mb-7">
                            <span className="w-1.5 h-1.5 rounded-full bg-ca-cyan animate-pulse" />
                            {t('Hero.badge')}
                        </span>

                        <h1 className="font-display text-5xl lg:text-[3.75rem] xl:text-7xl font-black text-ca-text leading-[1.05] mb-6">
                            {t('Hero.title1')}{' '}
                            <span className="text-ca-gradient">
                                {t('Hero.titleGradient')}
                            </span>
                        </h1>

                        <p className="text-ca-muted text-lg leading-relaxed mb-8 max-w-lg">
                            {t('Hero.desc')}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link
                                href="/contacto"
                                className="bg-ca-gradient text-white font-semibold px-7 py-3.5 rounded-xl
                                           hover:opacity-90 hover:scale-105 transition-all duration-200
                                           shadow-xl shadow-ca-cyan/20"
                            >
                                {t('Hero.ctaPrimary')}
                            </Link>
                            <Link
                                href="/servicios"
                                className="border border-ca-border text-ca-text font-medium px-7 py-3.5
                                           rounded-xl hover:border-ca-cyan/40 hover:text-ca-cyan
                                           transition-all duration-200"
                            >
                                {t('Hero.ctaSecondary')}
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-8 pt-8 border-t border-ca-border">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <AnimatedCounter 
                                        to={stat.to} 
                                        suffix={stat.suffix || ''} 
                                        prefix={stat.prefix || ''} 
                                    />
                                    <p className="text-ca-muted text-sm mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Columna derecha — mockup flotante */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-ca-border shadow-2xl shadow-ca-cyan/5">
                            <div className="bg-ca-surface p-4">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                </div>
                                <div className="bg-ca-dark rounded-xl p-6 space-y-4">
                                    <div className="h-3 bg-ca-cyan/40 rounded-full w-3/4" />
                                    <div className="h-2 bg-ca-muted/20 rounded-full w-full" />
                                    <div className="h-2 bg-ca-muted/20 rounded-full w-5/6" />
                                    <div className="grid grid-cols-3 gap-3 mt-5">
                                        {[
                                            { icon: <Globe size={18} className="text-ca-cyan" />, label: 'Web' },
                                            { icon: <Network size={18} className="text-ca-purple" />, label: 'Redes' },
                                            { icon: <ShieldCheck size={18} className="text-ca-mid" />, label: 'Cyber' },
                                        ].map((item) => (
                                            <div
                                                key={item.label}
                                                className="bg-ca-surface2 rounded-lg p-3 h-20 flex flex-col items-center justify-center gap-2 border border-ca-border"
                                            >
                                                {item.icon}
                                                <span className="text-[10px] font-mono text-ca-muted">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between mt-4 p-3 bg-ca-surface2 rounded-lg border border-ca-border">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-ca-success animate-pulse" />
                                            <span className="text-[11px] text-ca-muted font-mono">Active</span>
                                        </div>
                                        <span className="text-ca-cyan text-xs font-bold font-mono">+240%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -inset-6 bg-ca-cyan/4 rounded-3xl blur-2xl -z-10" />
                    </motion.div>
                </div>

                <div className="relative z-10 overflow-hidden pb-8 mt-4" aria-hidden="true">
                    <div className="flex animate-badge-scroll whitespace-nowrap gap-4 w-max">
                        {TECH_TAGS.map((tech, i) => (
                            <span
                                key={i}
                                className="font-mono text-xs text-ca-muted border border-ca-border px-3 py-1.5 rounded-full bg-ca-surface/50"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── POR QUÉ ELEGIRNOS ───────────────────────────────── */}
            <Section>
                <SectionHeader
                    eyebrow={t('WhyChooseUs.eyebrow')}
                    title={t('WhyChooseUs.title')}
                    subtitle={t('WhyChooseUs.subtitle')}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((item, idx) => {
                        const cardStyle = ICON_MAP[item.icon] || {
                            icon: <Zap size={28} className="text-yellow-400" />,
                            glow: 'none' as const
                        };
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 + idx * 0.05, duration: 0.5 }}
                                whileHover={{ y: -4 }}
                            >
                                <GlassCard glow={cardStyle.glow} className="p-6 h-full">
                                    <div className="mb-5 w-12 h-12 rounded-xl bg-ca-surface2 border border-ca-border flex items-center justify-center">
                                        {cardStyle.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-ca-text mb-2">{item.title}</h3>
                                    <p className="text-ca-muted text-sm leading-relaxed">{item.desc}</p>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* ─── SERVICIOS DESTACADOS ────────────────────────────── */}
            <Section className="border-y border-ca-border bg-ca-surface/20">
                <SectionHeader
                    eyebrow="Lo que hacemos"
                    title="Tecnología sin límites"
                    subtitle="Del desarrollo web a la infraestructura crítica. Un único equipo para todas tus necesidades digitales."
                />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        { icon: <Globe size={24} />, label: 'Web & Apps', color: 'text-ca-cyan' },
                        { icon: <Bot size={24} />, label: 'IA & Bots', color: 'text-pink-400' },
                        { icon: <Network size={24} />, label: 'Redes TI', color: 'text-ca-mid' },
                        { icon: <ShieldCheck size={24} />, label: 'Ciberseguridad', color: 'text-ca-success' },
                        { icon: <Camera size={24} />, label: 'CCTV', color: 'text-ca-purple' },
                        { icon: <Headphones size={24} />, label: 'Soporte TI', color: 'text-yellow-400' },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                        >
                            <Link href="/servicios">
                                <GlassCard className="p-5 text-center group cursor-pointer" glow="cyan">
                                    <div className={`${item.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-medium text-ca-muted group-hover:text-ca-text transition-colors">
                                        {item.label}
                                    </span>
                                </GlassCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link
                        href="/servicios"
                        className="inline-flex items-center gap-2 text-ca-cyan text-sm font-medium hover:gap-3 transition-all"
                    >
                        Ver todos los servicios →
                    </Link>
                </div>
            </Section>

            {/* ─── STACK TECNOLÓGICO ───────────────────────────────── */}
            <Section>
                <SectionHeader
                    eyebrow="Stack moderno"
                    title="Tecnologías que usamos"
                    subtitle="Las mismas herramientas que usan startups y empresas globales, ahora al servicio de tu negocio."
                />
                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {[
                        { name: 'React / Next.js', icon: <Code2 size={18} className="text-blue-400" /> },
                        { name: 'Tailwind CSS', icon: <Layout size={18} className="text-ca-cyan" /> },
                        { name: 'Node.js', icon: <Server size={18} className="text-green-500" /> },
                        { name: 'APIs & GraphQL', icon: <Globe size={18} className="text-purple-400" /> },
                        { name: 'MySQL / Postgres', icon: <Database size={18} className="text-blue-500" /> },
                        { name: 'Supabase', icon: <Zap size={18} className="text-emerald-400" /> },
                        { name: 'Fortinet', icon: <ShieldCheck size={18} className="text-ca-success" /> },
                        { name: 'Synology NAS', icon: <Server size={18} className="text-ca-muted" /> },
                        { name: 'Windows Server', icon: <Cpu size={18} className="text-blue-400" /> },
                        { name: 'PRTG', icon: <Network size={18} className="text-ca-mid" /> },
                        { name: 'Integraciones', icon: <Plug size={18} className="text-yellow-400" /> },
                        { name: 'Flutter / Kotlin', icon: <Smartphone size={18} className="text-ca-purple" /> },
                    ].map(({ name, icon }) => (
                        <motion.div
                            key={name}
                            whileHover={{ y: -3, scale: 1.03 }}
                            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-ca-surface border border-ca-border hover:border-ca-cyan/30 transition-all duration-300 cursor-default"
                        >
                            {icon}
                            <span className="text-ca-muted text-sm font-medium hover:text-ca-text">{name}</span>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <ProcessSection />
            <FAQSection />
            <CTASection />
        </>
    );
}
