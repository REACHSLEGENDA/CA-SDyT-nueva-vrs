'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    Smartphone,
    WifiOff,
    Bell,
    Zap,
    Fingerprint,
    Layers,
    ArrowRight,
    CheckCircle2,
    Apple,
    Play,
    Cpu,
    Globe,
    Code2,
    Palette,
    Rocket,
    ShieldCheck
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function MobileAppsPage() {
    const t = useTranslations('MobileAppsPage');
    return (
        <div className="pt-20 min-h-screen">

            {/* 1. HERO - Mobile-First High Impact Header */}
            <Section className="text-center pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-purple/10 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-sm font-bold mb-8"
                >
                    <Smartphone size={16} className="fill-brand-purple" />
                    <span>Experiencias Nativas Premium</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
                    {t('heroA')} <br />
                    <span className="text-gradient">{t('heroB')}</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                    {t('heroBody')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/contacto" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg">{t('heroCta')}</Button>
                    </Link>
                    <div className="flex items-center justify-center gap-6 text-gray-500">
                        <div className="flex items-center gap-2">
                            <Apple size={24} />
                            <span className="text-xs font-medium">iOS</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Play size={24} />
                            <span className="text-xs font-medium">Android</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 2. TECHNOLOGY - Native vs Hybrid Approach */}
            <Section className="py-24 border-t border-white/5">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            {t('archA')} <br /> <span className="text-brand-purple">{t('archB')}</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {t('archBody')}
                        </p>

                        <div className="space-y-6">
                            <TechCard
                                icon={<Code2 className="text-brand-blue" />}
                                title={t('hybrid')}
                                text={t('hybridDesc')}
                            />
                            <TechCard
                                icon={<Cpu className="text-brand-purple" />}
                                title={t('native')}
                                text={t('nativeDesc')}
                            />
                            <TechCard
                                icon={<Globe className="text-brand-cyan" />}
                                title={t('pwa')}
                                text={t('pwaDesc')}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-brand-black/40 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md relative overflow-hidden"
                    >
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px]" />
                        <h3 className="text-2xl font-bold text-white mb-8">{t('featTitle')}</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <FeatureItem icon={<Bell />} title="Push Notifications" text={t('fPushD')} />
                            <FeatureItem icon={<WifiOff />} title={t('fOffline')} text={t('fOfflineD')} />
                            <FeatureItem icon={<Fingerprint />} title={t('fBio')} text={t('fBioD')} />
                            <FeatureItem icon={<Zap />} title="Real-time Data" text={t('fSyncD')} />
                            <FeatureItem icon={<ShieldCheck />} title={t('fSec')} text={t('fSecD')} />
                            <FeatureItem icon={<Layers />} title="Cloud Sync" text={t('fCloudD')} />
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 3. CAPABILITIES GRID - What we Build */}
            <Section className="py-24 bg-white/[0.01]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">{t('buildTitle')}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">{t('buildSub')}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <CapabilityCard
                        title="E-commerce Pro"
                        desc={t('ecomDesc')}
                        color="blue"
                    />
                    <CapabilityCard
                        title={t('delivery')}
                        desc={t('deliveryDesc')}
                        color="purple"
                    />
                    <CapabilityCard
                        title={t('internal')}
                        desc={t('internalDesc')}
                        color="cyan"
                    />
                </div>
            </Section>

            {/* 4. PROCESS - Roadmap to the Stores */}
            <Section className="py-24 border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl font-display font-bold text-white mb-16">Tu App en 4 Pasos</h2>
                    <div className="space-y-12">
                        <ProcessRow num="01" title={t('pUi')} text={t('pUiD')} icon={<Palette />} />
                        <ProcessRow num="02" title={t('pArch')} text={t('pArchD')} icon={<Code2 />} />
                        <ProcessRow num="03" title={t('pQa')} text={t('pQaD')} icon={<CheckCircle2 />} />
                        <ProcessRow num="04" title={t('pLaunch')} text={t('pLaunchD')} icon={<Rocket />} />
                    </div>
                </div>
            </Section>

            {/* 5. CTA FINAL */}
            <Section className="py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-[3rem] p-12 md:p-24 border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 relative z-10">{t('ctaA')} <span className="text-gradient">{t('ctaB')}</span>?</h2>
                    <p className="text-xl text-gray-400 mb-12 relative z-10">{t('ctaBody')}</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12 h-16 text-lg">Empezar a Programar</Button>
                        </Link>
                        <a href="https://wa.me/525951145576" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">{t('ctaButton')}</Button>
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}

// Child Components
function TechCard({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="flex gap-6 items-start group p-4 hover:bg-white/5 rounded-2xl transition-all">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-brand-purple/20 group-hover:border-brand-purple/30 transition-all">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-purple transition-colors">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    );
}

function FeatureItem({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="space-y-2 group">
            <div className="text-brand-purple mb-2 group-hover:scale-110 transition-transform origin-left">{icon}</div>
            <h4 className="text-white font-bold text-sm tracking-tight">{title}</h4>
            <p className="text-gray-500 text-[11px] leading-tight">{text}</p>
        </div>
    );
}

function CapabilityCard({ title, desc, color }: { title: string, desc: string, color: 'blue' | 'purple' | 'cyan' }) {
    const t = useTranslations('MobileAppsPage');
    const borders = {
        blue: 'border-brand-blue/20 hover:border-brand-blue/50',
        purple: 'border-brand-purple/20 hover:border-brand-purple/50',
        cyan: 'border-brand-cyan/20 hover:border-brand-cyan/50'
    };

    return (
        <Card className={`p-10 flex flex-col h-full bg-brand-black/40 ${borders[color]} transition-all duration-500 group`}>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{desc}</p>
            <div className="mt-auto">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">
                    {t('phase')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Card>
    );
}

function ProcessRow({ num, title, text, icon }: { num: string, title: string, text: string, icon: any }) {
    return (
        <div className="flex gap-8 group">
            <div className="hidden md:flex flex-col items-center">
                <div className="text-4xl font-display font-bold text-white/5 group-hover:text-brand-purple/20 transition-colors">{num}</div>
                <div className="w-px h-full bg-white/5 group-hover:bg-brand-purple/20 transition-colors" />
            </div>
            <div className="flex-1 p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 group-hover:border-brand-purple/20 group-hover:bg-white/[0.05] transition-all flex gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-purple shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-all">
                    {icon}
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </div>
            </div>
        </div>
    );
}
