'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    Bot,
    Workflow,
    Plug,
    Zap,
    Cpu,
    MessageSquare,
    Share2,
    ArrowRight,
    CheckCircle2,
    Clock,
    DollarSign,
    Sparkles,
    ShieldCheck,
    Activity,
    Code2,
    Database,
    LineChart
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function AutomationPage({ catalog }: { catalog?: React.ReactNode }) {
    const t = useTranslations('AutomationPage');
    return (
        <div className="pt-20 min-h-screen">

            {/* 1. HERO - Intelligence & Speed */}
            <Section className="text-center pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-pink-500/10 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-bold mb-8"
                >
                    <Sparkles size={16} className="fill-pink-400" />
                    <span>{t('heroBadge')}</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
                    {t('heroA')} <br />
                    <span className="text-gradient decoration-pink-500">{t('heroB')}</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                    {t('heroBody')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/contacto" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg bg-white/10 hover:bg-white/20 border-white/10 text-white">
                            Automatizar mi Negocio
                        </Button>
                    </Link>
                    <a href="https://wa.me/525951145576" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg bg-pink-600 hover:bg-pink-500 text-white border-0 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                            {t('heroCta')}
                        </Button>
                    </a>
                </div>
            </Section>

            {/* 2. CORE CAPABILITIES - 3 Column Grid */}
            <Section className="py-24 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t('effTitle')}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {t('effSub')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <AutoCard
                        icon={<Image src="/assets/ia.webp" alt="IA" width={160} height={160} className="w-40 h-40 object-contain" />}
                        title={t('agents')}
                        desc={t('agentsDesc')}
                        features={[t('ag1'), t('ag2'), t('ag3'), t('ag4')]}
                        color="pink"
                    />
                    <AutoCard
                        icon={<Image src="/assets/workflow.webp" alt="Workflows" width={160} height={160} className="w-40 h-40 object-contain" />}
                        title={t('wfTitle')}
                        desc={t('wfDesc')}
                        features={[t('wf1'), t('wf2'), t('wf3'), t('wf4')]}
                        color="purple"
                    />
                    <AutoCard
                        icon={<Image src="/assets/api.webp" alt="API" width={160} height={160} className="w-40 h-40 object-contain" />}
                        title={t('apis')}
                        desc={t('apisDesc')}
                        features={[t('api1'), t('api2'), t('api3'), t('api4')]}
                        color="blue"
                    />
                </div>
            </Section>

            {/* 3. AI SPOTLIGHT - The Power of GPT */}
            <Section className="py-24 bg-gradient-to-br from-pink-500/5 via-brand-black to-brand-purple/5 border-y border-white/5 relative">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                            <Cpu size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            {t('cogA')} <br /> <span className="text-pink-500">{t('cogB')}</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {t('cogBody')}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 pb-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-pink-500" size={20} />
                                <span>{t('cog1')}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-pink-500" size={20} />
                                <span>{t('cog2')}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-pink-500" size={20} />
                                <span>{t('cog3')}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-pink-500" size={20} />
                                <span>{t('cog4')}</span>
                            </div>
                        </div>
                        <Link href="/contacto">
                            <Button variant="outline" className="border-pink-500/30 text-pink-400 hover:bg-pink-500/10">
                                {t('cogCta')}
                            </Button>
                        </Link>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-pink-500/20 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
                        <Card className="p-12 bg-brand-black/80 border-white/10 backdrop-blur-xl relative overflow-hidden group">
                            <div className="flex items-center gap-4 mb-8">
                                <Activity className="text-pink-500" />
                                <h3 className="text-2xl font-bold text-white">Impacto en el Negocio</h3>
                            </div>
                            <div className="space-y-8">
                                <ImpactBar label={t('m3')} percentage="100%" />
                                <ImpactBar label={t('m1')} percentage="65%" />
                                <ImpactBar label={t('m2')} percentage="95%" />
                                <ImpactBar label={t('m4')} percentage="99%" />
                            </div>
                            <div className="mt-12 pt-8 border-t border-white/5 flex gap-4 items-center">
                                <div className="p-3 bg-pink-500/10 rounded-full">
                                    <Clock className="text-pink-400" size={24} />
                                </div>
                                <p className="text-sm text-gray-400 leading-tight">{t('speed')}</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* 4. COMPARISON - Manual vs Automated */}
            <Section className="py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-white">{t('changeTitle')}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="p-10 border-red-500/20 bg-red-500/[0.02]">
                        <h4 className="text-xl font-bold text-red-500 mb-6 flex items-center gap-2">
                            {t('without')}
                        </h4>
                        <ul className="space-y-4">
                            <CompItem type="bad" text={t('w1')} />
                            <CompItem type="bad" text={t('w2')} />
                            <CompItem type="bad" text={t('w3')} />
                            <CompItem type="bad" text={t('w5')} />
                            <CompItem type="bad" text={t('w4')} />
                        </ul>
                    </Card>
                    <Card className="p-10 border-green-500/20 bg-green-500/[0.02] transform md:scale-105 shadow-2xl">
                        <h4 className="text-xl font-bold text-green-500 mb-6 flex items-center gap-2">
                            Con CA Automatizacion
                        </h4>
                        <ul className="space-y-4">
                            <CompItem type="good" text={t('a1')} />
                            <CompItem type="good" text={t('a2')} />
                            <CompItem type="good" text={t('a3')} />
                            <CompItem type="good" text={t('a5')} />
                            <CompItem type="good" text={t('a4')} />
                        </ul>
                    </Card>
                </div>
            </Section>

            {/* Catálogo de fichas con precio "desde" (solo es-MX y en) */}
            {catalog}

            {/* 5. CTA FINAL */}
            <Section className="py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                        {t('ctaA')} <br />
                        <span className="text-gradient">Autopiloto Inteligente</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t('ctaBody')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12 h-16 text-lg">{t('ctaButton')}</Button>
                        </Link>
                        <a href="https://wa.me/525951145576" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">{t('ctaWhats')}</Button>
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}

// Child Components
function AutoCard({ icon, title, desc, features, color }: { icon: any, title: string, desc: string, features: string[], color: 'pink' | 'purple' | 'blue' }) {
    return (
        <Card className="p-10 flex flex-col h-full hover:bg-white/5 transition-all duration-500 group overflow-hidden">
            <div className="mb-6 flex justify-start group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">{desc}</p>

            <div className="mt-auto space-y-3 pt-8 border-t border-white/5">
                {features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-[12px] text-gray-500 uppercase tracking-widest leading-none">
                        <Zap size={14} className={color === 'pink' ? 'text-pink-500' : color === 'purple' ? 'text-brand-purple' : 'text-brand-blue'} />
                        {f}
                    </div>
                ))}
            </div>
        </Card>
    );
}

function ImpactBar({ label, percentage }: { label: string, percentage: string }) {
    return (
        <div className="space-y-3">
            <div className="flex justify-between text-sm">
                <span className="text-gray-300 font-medium">{label}</span>
                <span className="text-pink-400 font-bold">{percentage}</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: percentage }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-pink-500"
                />
            </div>
        </div>
    );
}

function CompItem({ type, text }: { type: 'good' | 'bad', text: string }) {
    return (
        <li className="flex items-center gap-3 text-sm">
            {type === 'good' ? (
                <CheckCircle2 size={16} className="text-green-500 shrink-0" />
            ) : (
                <div className="w-4 h-4 rounded-full border border-red-500/30 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                </div>
            )}
            <span className={type === 'good' ? 'text-gray-200' : 'text-gray-500'}>{text}</span>
        </li>
    );
}
