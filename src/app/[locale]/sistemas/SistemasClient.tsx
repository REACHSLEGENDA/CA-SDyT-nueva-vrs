'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    Database,
    ShoppingCart,
    Users,
    ClipboardList,
    ShieldCheck,
    Zap,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Cpu,
    Server,
    Share2,
    Cog,
    Lock,
    RefreshCw,
    Network
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getTechLogo } from '@/components/ui/TechLogos';
import Image from 'next/image';

export default function SystemsPage() {
    const t = useTranslations('SystemsPage');
    return (
        <div className="pt-20 min-h-screen">

            {/* 1. HERO - Enterprise Architecture Header */}
            <Section className="text-center pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-cyan/10 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-bold mb-8"
                >
                    <Server size={16} className="fill-brand-cyan" />
                    <span>{t('heroTitle')}</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
                    Sistemas <br />
                    <span className="text-gradient">a Medida</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                    {t('heroBody')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/contacto" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg">{t('heroCta')}</Button>
                    </Link>
                    <Link href="/nosotros" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">{t('methodology')}</Button>
                    </Link>
                </div>
            </Section>

            {/* 2. CORE SOLUTIONS - 4 Pillar Grid */}
            <Section className="py-24 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t('verticalsTitle')}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg text-balance">
                        {t('verticalsSub')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SystemCard
                        icon={<Image src="/assets/crm.webp" alt="CRM" width={160} height={160} className="w-40 h-40 object-contain" />}
                        title={t('crm')}
                        desc={t('crmDesc')}
                        features={[t('crm1'), t('crm2'), t('crm3')]}
                    />
                    <SystemCard
                        icon={<Image src="/assets/pos.webp" alt="POS" width={160} height={160} className="w-40 h-40 object-contain" />}
                        title={t('pos')}
                        desc={t('posDesc')}
                        features={[t('pos3'), t('pos1'), t('pos2')]}
                    />
                    <SystemCard
                        icon={<Image src="/assets/erp.webp" alt="ERP" width={160} height={160} className="w-40 h-40 object-contain" />}
                        title={t('erp')}
                        desc={t('erpDesc')}
                        features={[t('erp1'), t('erp2'), t('erp3')]}
                    />
                    <SystemCard
                        icon={<Image src="/assets/datos.webp" alt="Datos" width={160} height={160} className="w-40 h-40 object-contain" />}
                        title={t('migration')}
                        desc={t('migrationDesc')}
                        features={[t('mig1'), t('cloudArch'), t('zeroDown')]}
                    />
                </div>
            </Section>

            {/* 3. TECHNICAL DEPTH - Methodology & Security */}
            <Section className="py-24 bg-brand-cyan/5 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] -z-10" />
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">{t('engTitleA')} <br /> <span className="text-brand-cyan">{t('engTitleB')}</span></h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <BenefitItem
                                icon={<Lock className="text-brand-cyan" />}
                                title={t('sec')}
                                text={t('secDesc')}
                            />
                            <BenefitItem
                                icon={<Network className="text-brand-purple" />}
                                title={t('integ')}
                                text={t('integDesc')}
                            />
                            <BenefitItem
                                icon={<RefreshCw className="text-green-400" />}
                                title={t('sync')}
                                text={t('syncDesc')}
                            />
                            <BenefitItem
                                icon={<BarChart3 className="text-yellow-400" />}
                                title="Business Intelligence"
                                text={t('biDesc')}
                            />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-1 rounded-[3rem] bg-gradient-to-br from-brand-cyan/30 via-white/5 to-transparent"
                    >
                        <div className="bg-brand-black p-12 rounded-[2.9rem] border border-white/5 space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-6">{t('phases')}</h3>
                            <div className="space-y-6">
                                <StepLine num="01" title={t('ph1')} desc={t('ph1d')} />
                                <StepLine num="02" title={t('ph2')} desc={t('ph2d')} />
                                <StepLine num="03" title={t('ph3')} desc={t('ph3d')} />
                                <StepLine num="04" title={t('ph4')} desc={t('ph4d')} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 4. TECH SPECS - Authority Block */}
            <Section className="py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-white">{t('stack')}</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    <TechIcon name="Node.js" />
                    <TechIcon name="PostgreSQL" />
                    <TechIcon name="Typescript" />
                    <TechIcon name="Redis" />
                    <TechIcon name="Docker" />
                    <TechIcon name="AWS" />
                    <TechIcon name="Next.js" />
                </div>
            </Section>

            {/* 5. CTA FINAL - High Conversion */}
            <Section className="py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto bg-brand-black border border-white/10 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-transparent to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-opacity">
                        <Cog size={180} className="animate-spin-slow" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 relative z-10">
                        {t('ctaA')} <br />
                        <span className="text-gradient">{t('ctaB')}</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
                        {t('ctaBody')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12 h-16 text-lg bg-brand-cyan hover:bg-brand-cyan/90 text-brand-black border-0 font-bold">
                                {t('diag')}
                            </Button>
                        </Link>
                        <a href="https://wa.me/525951145576" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">
                                {t('ctaButton')}
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}

// Child Components
function SystemCard({ icon, title, desc, features }: { icon: any, title: string, desc: string, features: string[] }) {
    return (
        <Card className="p-8 flex flex-col h-full bg-white/[0.02] border-white/10 hover:border-brand-cyan/40 hover:bg-brand-cyan/[0.03] transition-all duration-500 group overflow-hidden">
            <div className="mb-6 flex justify-start group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{desc}</p>
            <ul className="space-y-2 pt-6 border-t border-white/5">
                {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-widest">
                        <ArrowRight size={12} className="text-brand-cyan" /> {f}
                    </li>
                ))}
            </ul>
        </Card>
    );
}

function BenefitItem({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h4 className="text-white font-bold mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    );
}

function StepLine({ num, title, desc }: { num: string, title: string, desc: string }) {
    return (
        <div className="flex gap-6 items-start group">
            <div className="text-2xl font-display font-bold text-brand-cyan/40 group-hover:text-brand-cyan transition-colors">{num}</div>
            <div>
                <h5 className="text-white font-bold mb-1">{title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function TechIcon({ name }: { name: string }) {
    const logo = getTechLogo(name, { size: 24 });
    return (
        <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xs text-white bg-white/5 hover:border-brand-cyan/40 hover:bg-brand-cyan/5 transition-colors duration-300">
                {logo || <Cpu size={20} className="text-gray-400" />}
            </div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">{name}</span>
        </div>
    );
}
