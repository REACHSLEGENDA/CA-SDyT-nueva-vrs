'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    LayoutDashboard,
    Globe,
    Layers,
    Zap,
    ShieldCheck,
    Cpu,
    ArrowRight,
    CheckCircle2,
    BarChart3,
    MousePointer2,
    Smartphone,
    Rocket,
    Code2,
    Database,
    Cloud,
    Search
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function AppsWebPage() {
    const t = useTranslations('AppsWebPage');
    return (
        <div className="pt-20 min-h-screen">

            {/* 1. HERO - High Impact Performance Header */}
            <Section className="text-center pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold mb-8"
                >
                    <Zap size={16} className="fill-brand-blue" />
                    <span>{t('heroTitle')}</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
                    {t('h1a')} <br />
                    <span className="text-gradient">{t('h1b')}</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                    {t('heroBody')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/contacto" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg">Iniciar Proyecto</Button>
                    </Link>
                    <Link href="/portafolio" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">{t('heroCta')}</Button>
                    </Link>
                </div>
            </Section>

            {/* 2. CAPABILITIES - Professional Feature Blocks */}
            <Section className="py-24 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Expertos en lo Complejo</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {t('intro')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <AppCapability
                        icon={<LayoutDashboard size={40} />}
                        title={t('capDash')}
                        desc={t('dashDesc')}
                        features={[t('dash1'), t('dash4'), t('dash2'), t('dash3')]}
                        color="blue"
                    />
                    <AppCapability
                        icon={<Layers size={40} />}
                        title={t('capSaas')}
                        desc={t('saasDesc')}
                        features={[t('saas1'), t('saas2'), t('saas3'), t('saas4')]}
                        color="purple"
                    />
                    <AppCapability
                        icon={<Smartphone size={40} />}
                        title={t('capPwa')}
                        desc={t('pwaDesc')}
                        features={[t('pwa4'), t('pwa1'), t('pwa2'), t('pwa3')]}
                        color="cyan"
                    />
                </div>
            </Section>

            {/* 3. TECH STACK - Engineering Power */}
            <Section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] -z-10" />
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-white mb-8">{t('techTitle')}</h2>
                        <div className="space-y-6">
                            <TechFeature
                                icon={<Code2 className="text-brand-blue" />}
                                title="Next.js 15 & Typescript"
                                text={t('stackDesc')}
                            />
                            <TechFeature
                                icon={<Database className="text-brand-purple" />}
                                title={t('dbTitle')}
                                text={t('dbDesc')}
                            />
                            <TechFeature
                                icon={<Cloud className="text-brand-cyan" />}
                                title={t('cloud')}
                                text={t('upDesc')}
                            />
                        </div>
                    </div>
                    <div className="bg-brand-black/40 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md shadow-2xl relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <h3 className="text-2xl font-bold text-white mb-8 relative z-10">{t('guarantees')}</h3>
                        <div className="grid gap-4 relative z-10">
                            {[
                                t('sec'),
                                "API First Architecture",
                                t('g1'),
                                t('g2'),
                                t('g3'),
                                t('g4')
                            ].map(item => (
                                <div key={item} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 size={18} className="text-brand-blue" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-white/5">
                            <p className="text-sm text-gray-500 italic">t('quote')</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. PROCESS - Roadmap Block */}
            <Section className="py-24 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">{t('processTitle')}</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    <ProcessStep num="01" title={t('step1')} text={t('step1d')} />
                    <ProcessStep num="02" title={t('step2')} text={t('step2d')} />
                    <ProcessStep num="03" title={t('step3')} text={t('step3d')} />
                    <ProcessStep num="04" title={t('step4')} text={t('step4d')} />
                </div>
            </Section>

            {/* 5. CTA FINAL */}
            <Section className="py-32">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px] group-hover:bg-brand-blue/30 transition-colors" />
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 relative z-10">{t('ctaA')} <span className="text-gradient">{t('ctaB')}</span></h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">{t('ctaBody')}</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12">Cotizar mi Web App</Button>
                        </Link>
                        <a href="https://wa.me/525951145576" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-400">
                                {t('ctaButton')}
                            </Button>
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
}

// Child Components
function AppCapability({ icon, title, desc, features, color }: { icon: any, title: string, desc: string, features: string[], color: 'blue' | 'purple' | 'cyan' }) {
    const accent = {
        blue: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
        purple: 'text-brand-purple bg-brand-purple/10 border-brand-purple/20',
        cyan: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20'
    };

    return (
        <Card className="p-10 flex flex-col h-full hover:bg-white/5 transition-all duration-500 group">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 mb-8 ${accent[color]} group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 overflow-hidden">{desc}</p>

            <div className="mt-auto space-y-3 pt-6 border-t border-white/5">
                {features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-[13px] text-gray-500 uppercase tracking-tight">
                        <ArrowRight size={14} className={color === 'blue' ? 'text-brand-blue' : color === 'purple' ? 'text-brand-purple' : 'text-brand-cyan'} />
                        {f}
                    </div>
                ))}
            </div>
        </Card>
    );
}

function TechFeature({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="flex gap-6 items-start group">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    );
}

function ProcessStep({ num, title, text }: { num: string, title: string, text: string }) {
    return (
        <div className="relative group">
            <div className="text-6xl font-display font-bold text-white/[0.03] absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-brand-blue/10 transition-colors">
                {num}
            </div>
            <h4 className="text-xl font-bold text-white mb-3 relative z-10">{title}</h4>
            <p className="text-gray-500 text-sm relative z-10">{text}</p>
        </div>
    );
}
