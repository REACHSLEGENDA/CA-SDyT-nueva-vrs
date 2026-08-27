'use client';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Target, Lightbulb, Users, CheckCircle2, Award, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function AboutPage() {
    const t = useTranslations('AboutPage');
    return (
        <div className="pt-20 min-h-screen">

            <Section className="text-center !py-0 !pt-6 md:!pt-8 pb-12 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-64 h-64 md:w-80 md:h-80 mb-4 drop-shadow-[0_8px_24px_rgba(139,92,246,0.2)]"
                >
                    <Image
                        src="/assets/nosotros.webp"
                        alt={t('imgAlt')}
                        fill
                        sizes="(max-width: 768px) 256px, 320px"
                        className="object-contain"
                        priority
                    />
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                    {t('heroA')} <br className="hidden md:block" />
                    <span className="text-gradient">{t('heroB')}</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    {t('heroBody')}
                </p>
            </Section>

            {/* 2. Concept & Image Section */}
            <Section className="py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/assets/sobre-nosotros.webp"
                                alt="Sobre Nosotros - CA Soluciones"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                            {t('storyA')} <br /> <span className="text-brand-blue">{t('storyB')}</span>
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            {t('story1')}
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            {t('story2')}
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle2 size={16} className="text-brand-blue" />
                                {t('tagSenior')}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle2 size={16} className="text-brand-blue" />
                                Soporte 24/7
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle2 size={16} className="text-brand-blue" />
                                {t('tagClean')}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle2 size={16} className="text-brand-blue" />
                                Escalabilidad
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 3. Stats Section */}
            <Section className="py-20 border-y border-white/5 bg-white/[0.02]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <StatItem number="52" label="Proyectos Exitosos" />
                    <StatItem number="50+" label="Clientes Globales" />
                    <StatItem number="10k+" label={t('statHours')} />
                    <StatItem number="99%" label={t('statSat')} />
                </div>
            </Section>

            {/* 4. Values Section */}
            <Section className="py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">{t('pillars')}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">{t('whySub')}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <ValueCard
                        icon={<Target size={32} />}
                        title="Enfoque en Resultados"
                        color="blue"
                        desc={t('v1d')}
                    />
                    <ValueCard
                        icon={<Lightbulb size={32} />}
                        title={t('v2')}
                        color="purple"
                        desc={t('v2d')}
                    />
                    <ValueCard
                        icon={<Users size={32} />}
                        title="Trato Personalizado"
                        color="cyan"
                        desc={t('v3d')}
                    />
                </div>
            </Section>

            {/* 5. Why Choose Us Section */}
            <Section className="py-24 bg-brand-purple/5 rounded-[3rem]">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-display font-bold text-white">{t('whyTitle')}</h2>
                        <div className="space-y-8">
                            <FeatureItem
                                icon={<Zap className="text-yellow-400" />}
                                title={t('v4')}
                                desc={t('v4d')}
                            />
                            <FeatureItem
                                icon={<ShieldCheck className="text-green-400" />}
                                title={t('v5')}
                                desc={t('v5d')}
                            />
                            <FeatureItem
                                icon={<Award className="text-brand-blue" />}
                                title="Experiencia Multidisciplinar"
                                desc={t('v6d')}
                            />
                        </div>
                    </div>
                    <div className="bg-brand-black/50 p-12 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-6">Nuestra Cultura</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            {t('team1')}
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            {t('team2')}
                        </p>
                        <Link href="/contacto">
                            <Button variant="primary" size="lg" className="w-full">{t('joinCta')}</Button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* 6. Final CTA */}
            <Section className="py-32 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">{t('ctaA')} <span className="text-gradient">{t('ctaB')}</span> {t('ctaC')}</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contacto"><Button size="lg" className="w-full sm:w-auto">{t('ctaButton')}</Button></Link>
                    <Link href="/portafolio"><Button variant="outline" size="lg" className="w-full sm:w-auto">Ver proyectos exitosos</Button></Link>
                </div>
            </Section>
        </div>
    )
}

function StatItem({ number, label }: { number: string, label: string }) {
    return (
        <div className="text-center group">
            <h4 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:text-brand-blue transition-colors">{number}</h4>
            <p className="text-gray-500 text-sm md:text-base font-medium uppercase tracking-wider">{label}</p>
        </div>
    )
}

function ValueCard({ icon, title, desc, color }: { icon: any, title: string, desc: string, color: 'blue' | 'purple' | 'cyan' }) {
    const colorMap = {
        blue: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
        purple: 'text-brand-purple bg-brand-purple/10 border-brand-purple/20',
        cyan: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20'
    };

    return (
        <Card className="p-10 text-center hover:translate-y-[-10px] transition-all duration-300">
            <div className={`w-16 h-16 mx-auto mb-8 rounded-full flex items-center justify-center border ${colorMap[color]}`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
                {desc}
            </p>
        </Card>
    )
}

function FeatureItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex gap-6 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
