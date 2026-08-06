'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
    CheckCircle2, BarChart3, Zap, MessageSquare,
    Eye, Target, LineChart, Award
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getTechLogo } from '@/components/ui/TechLogos';
import { AeoFAQSection } from '@/components/features/AeoFAQSection';

const MOTORES_IA = [
    { name: 'ChatGPT', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
    { name: 'Gemini', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
    { name: 'Claude', color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
    { name: 'Perplexity', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
    { name: 'Copilot', color: 'text-ca-cyan', bg: 'bg-ca-cyan/10 border-ca-cyan/20' },
    { name: 'Google AI Mode', color: 'text-ca-mid', bg: 'bg-ca-mid/10 border-ca-mid/20' },
];

export default function SeoAeoPage() {
    return (
        <div className="pt-20 min-h-screen">

            {/* ─── HERO ─────────────────────────────────────────────── */}
            <Section className="text-center pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-ca-cyan/8 rounded-full blur-[140px] -z-10" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ca-mid/6 rounded-full blur-[120px] -z-10" />

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="font-mono text-xs text-ca-cyan border border-ca-cyan/30 bg-ca-cyan/5 px-3 py-1.5 rounded-full uppercase tracking-widest inline-block mb-6">
                        ✦ SEO · AEO · Posicionamiento Digital
                    </span>
                </motion.div>

                <motion.h1
                    className="font-display text-5xl md:text-7xl font-black text-ca-text mb-6 leading-[1.05]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Que te encuentren{' '}
                    <span className="text-ca-gradient">en Google y en las IAs.</span>
                </motion.h1>

                <motion.p
                    className="text-ca-muted text-xl max-w-3xl mx-auto leading-relaxed mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    El SEO sigue siendo la base para aparecer en buscadores y experiencias con IA.
                    Mejoramos las señales técnicas, editoriales y de entidad que ayudan a estos sistemas a
                    encontrar, comprender y evaluar tu negocio como una fuente útil.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href={{ pathname: '/contacto', query: { servicio: 'SEO Técnico y AEO' } }}
                        className="bg-ca-gradient text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-ca-cyan/20"
                    >
                        Auditoría SEO gratuita →
                    </Link>
                    <a
                        href="https://wa.me/525951145576"
                        target="_blank"
                        rel="noreferrer"
                        className="border border-ca-border text-ca-text px-8 py-3.5 rounded-xl hover:border-ca-cyan/40 hover:text-ca-cyan transition-all flex items-center justify-center gap-2"
                    >
                        <MessageSquare size={18} /> WhatsApp
                    </a>
                </motion.div>

                {/* Motores que cubrimos */}
                <motion.div
                    className="mt-14 flex flex-wrap justify-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                >
                    <span className="text-xs text-ca-muted font-mono mr-2 self-center">Visibilidad en:</span>
                    {MOTORES_IA.map((m) => {
                        const logo = getTechLogo(m.name, { size: 14, className: 'flex-shrink-0' });
                        return (
                            <span
                                key={m.name}
                                className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-full border ${m.color} ${m.bg} hover:scale-105 transition-transform duration-300`}
                            >
                                {logo}
                                {m.name}
                            </span>
                        );
                    })}
                </motion.div>
            </Section>

            {/* ─── 3 PILARES ───────────────────────────────────────── */}
            <Section className="border-t border-ca-border">
                <SectionHeader
                    eyebrow="Nuestro enfoque"
                    title="Tres frentes de visibilidad"
                    subtitle="Atacamos tu posicionamiento desde Google hasta las IAs conversacionales."
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Image src="/assets/seo.png" alt="SEO" width={160} height={160} className="w-40 h-40 object-contain" />,
                            glow: 'cyan' as const,
                            title: 'SEO Técnico',
                            desc: 'Optimizamos la estructura, velocidad, Core Web Vitals, schema markup y arquitectura de tu sitio para que Google lo entienda y posicione primero.',
                            bullets: [
                                'Auditoría técnica completa',
                                'Velocidad y Core Web Vitals',
                                'Schema markup estructurado',
                                'Optimización On-Page / Off-Page',
                                'Link building estratégico',
                            ],
                        },
                        {
                            icon: <Image src="/assets/aeo.png" alt="AEO" width={160} height={160} className="w-40 h-40 object-contain" />,
                            glow: 'purple' as const,
                            title: 'AEO — Visibilidad en búsquedas con IA',
                            desc: 'Mejoramos la accesibilidad, claridad y respaldo de tu contenido para aumentar su elegibilidad como fuente en ChatGPT, Gemini, Claude, Perplexity y otras experiencias de búsqueda.',
                            bullets: [
                                'Contenido útil y respuestas directas',
                                'Rastreo para buscadores y asistentes',
                                'Datos de marca consistentes',
                                'Schema válido y fuentes verificables',
                                'Medición de menciones y conversiones',
                            ],
                        },
                        {
                            icon: <Image src="/assets/maps.png" alt="Google Maps" width={160} height={160} className="w-40 h-40 object-contain" />,
                            glow: 'none' as const,
                            title: 'Google Business & SEO Local',
                            desc: 'Optimizamos y gestionamos tu ficha en Google Maps para que clientes locales te encuentren antes que a la competencia.',
                            bullets: [
                                'Alta y verificación de perfil',
                                'Optimización de reseñas',
                                'Posts y fotos estratégicas',
                                'Posicionamiento en Google Maps',
                                'Seguimiento de posición local',
                            ],
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard glow={item.glow} className="p-7 h-full flex flex-col group overflow-hidden">
                                <div className="mb-6 flex justify-start group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-display font-black text-xl text-ca-text mb-3">{item.title}</h3>
                                <p className="text-ca-muted text-sm leading-relaxed mb-5">{item.desc}</p>
                                <ul className="space-y-2 mt-auto">
                                    {item.bullets.map((b) => (
                                        <li key={b} className="flex items-center gap-2 text-sm text-ca-text">
                                            <CheckCircle2 size={13} className="text-ca-cyan shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ─── SEO vs AEO ──────────────────────────────────────── */}
            <Section className="border-t border-ca-border">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="font-mono text-xs text-ca-cyan uppercase tracking-widest">El AEO empieza con buen SEO</span>
                        <h2 className="font-display font-black text-3xl md:text-4xl text-ca-text mt-3 mb-5 leading-tight">
                            La IA cita fuentes que puede encontrar, entender y evaluar.
                        </h2>
                        <p className="text-ca-muted leading-relaxed mb-6">
                            No existe un botón para ocupar una posición universal en una respuesta de IA.
                            Trabajamos la base técnica, el contenido, la entidad y las referencias que aumentan
                            la elegibilidad de tu negocio como fuente útil.
                        </p>
                        <div className="space-y-4">
                            {[
                                { label: 'Rastreo e indexación', value: 'Base técnica', color: 'text-ca-cyan' },
                                { label: 'Entidad y datos consistentes', value: 'Confianza', color: 'text-emerald-400' },
                                { label: 'Respuestas útiles y verificables', value: 'Contenido', color: 'text-ca-purple' },
                                { label: 'Medición en buscadores y asistentes', value: 'Mejora continua', color: 'text-ca-mid' },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center justify-between gap-4 py-3 border-b border-ca-border">
                                    <span className="text-ca-muted text-sm">{item.label}</span>
                                    <span className={`font-mono font-bold text-xs ${item.color}`}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-5 text-xs text-ca-muted font-mono">
                            La meta es mejorar visibilidad y conversiones con evidencia, no promesas artificiales.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard glow="cyan" className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <BarChart3 size={22} className="text-ca-cyan" />
                                <h3 className="font-bold text-ca-text">Qué optimizamos realmente</h3>
                            </div>
                            <div className="space-y-5">
                                {[
                                    { title: 'Descubrimiento', desc: 'Robots, sitemap, indexación, canonicals y acceso a recursos.' },
                                    { title: 'Comprensión', desc: 'Arquitectura, HTML semántico, enlazado y respuestas claras.' },
                                    { title: 'Confianza', desc: 'Entidad consistente, fuentes, experiencia y datos verificables.' },
                                    { title: 'Medición', desc: 'Consultas, páginas, clics, conversiones, menciones y citas observables.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-3">
                                        <CheckCircle2 size={16} className="text-ca-cyan mt-1 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-ca-text text-sm">{item.title}</p>
                                            <p className="text-ca-muted text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-xs text-ca-muted border-t border-ca-border pt-4">
                                Ningún buscador o asistente garantiza una cita. Reportamos señales que sí se pueden observar y mejorar.
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </Section>

            {/* ─── PROCESO ─────────────────────────────────────────── */}
            <Section className="border-t border-ca-border">
                <SectionHeader
                    eyebrow="Cómo trabajamos"
                    title="De auditoría a resultados"
                    subtitle="Un proceso claro en 4 fases con métricas reales cada mes."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { n: '01', icon: <Eye size={22} className="text-ca-cyan" />, title: 'Auditoría', desc: 'Análisis técnico de tu sitio, keywords actuales, presencia local y menciones en IA.' },
                        { n: '02', icon: <Target size={22} className="text-ca-mid" />, title: 'Estrategia', desc: 'Plan de palabras clave, contenidos, optimizaciones y calendario editorial.' },
                        { n: '03', icon: <Zap size={22} className="text-ca-purple" />, title: 'Ejecución', desc: 'Implementación de cambios técnicos, contenido AEO y gestión de Google Business.' },
                        { n: '04', icon: <LineChart size={22} className="text-emerald-400" />, title: 'Reportes', desc: 'Informe mensual de posiciones, tráfico, menciones en IA y próximas acciones.' },
                    ].map((step, i) => (
                        <motion.div
                            key={step.n}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard className="p-6 h-full">
                                <span className="font-mono text-xs text-ca-muted">{step.n}</span>
                                <div className="w-10 h-10 rounded-xl bg-ca-surface2 border border-ca-border flex items-center justify-center my-3">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-ca-text mb-2">{step.title}</h3>
                                <p className="text-ca-muted text-sm leading-relaxed">{step.desc}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <AeoFAQSection />

            {/* ─── CTA ─────────────────────────────────────────────── */}
            <Section className="py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <Award size={40} className="text-ca-cyan mx-auto mb-5" />
                    <h2 className="font-display font-black text-4xl md:text-5xl text-ca-text mb-4 leading-tight">
                        ¿Tu negocio aparece cuando la IA responde?
                    </h2>
                    <p className="text-ca-muted text-lg mb-8">
                        Hagamos la prueba juntos. Cuéntanos tu giro y te mostramos cómo te posicionamos
                        en Google y en las IAs que usan tus clientes.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href={{ pathname: '/contacto', query: { servicio: 'SEO Técnico y AEO' } }}
                            className="bg-ca-gradient text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-ca-cyan/20"
                        >
                            Quiero posicionarme →
                        </Link>
                        <Link
                            href="/servicios"
                            className="border border-ca-border text-ca-text px-8 py-3.5 rounded-xl hover:border-ca-cyan/40 hover:text-ca-cyan transition-all"
                        >
                            Ver todos los servicios
                        </Link>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}
