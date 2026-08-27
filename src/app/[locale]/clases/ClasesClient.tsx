'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    Laptop,
    Code,
    Award,
    Users,
    CheckCircle2,
    ArrowRight,
    Library,
    Terminal,
    Presentation,
    Calendar,
    Target,
    Zap,
    Monitor,
    MousePointer2,
    Sparkles,
    UserPlus,
    MessageCircle,
    Mail
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ClassesPage() {
    const t = useTranslations('ClassesPage');
    return (
        <div className="pt-20 min-h-screen">

            {/* 1. HERO - High Impact Educational Header */}
            <Section className="text-center pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold mb-8"
                >
                    <Library size={16} className="fill-brand-blue" />
                    <span>Mentoria Especializada 1 a 1</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight text-balance">
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
                    <Link href="/nosotros" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">{t('methodology')}</Button>
                    </Link>
                </div>
            </Section>

            {/* 2. MENTORSHIP TRACKS - Specialized Blocks */}
            <Section className="py-24 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t('programs')}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {t('programsSub')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <ClassTrack
                        icon={<Image src="/assets/office.webp" alt="Office" width={160} height={160} className="w-40 h-40 object-contain" />}
                        title="Productividad & Office"
                        desc={t('officeDesc')}
                        topics={[t('off1'), "Word & PowerPoint Profesional", t('off2'), t('off3')]}
                        color="blue"
                    />
                    <ClassTrack
                        icon={<Image src="/assets/desarrollo.webp" alt="Desarrollo" width={160} height={160} className="w-40 h-40 object-contain" />}
                        title={t('devTitle')}
                        desc={t('devDesc')}
                        topics={["HTML5, CSS3 & JavaScript", "React & Next.js Frameworks", t('dev1'), t('dev2')]}
                        color="purple"
                    />
                    <ClassTrack
                        icon={<Image src="/assets/marketing.webp" alt="Marketing" width={160} height={160} className="w-40 h-40 object-contain" />}
                        title={t('mkTitle')}
                        desc={t('mkDesc')}
                        topics={[t('mk1'), t('mk2'), "WhatsApp Business Pro", "Analytics & Reportes"]}
                        color="cyan"
                    />
                </div>
            </Section>

            {/* 3. METHODOLOGY - How we Teach */}
            <Section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] -z-10" />
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[3rem] bg-brand-black/40 border border-white/10 backdrop-blur-md relative group"
                    >
                        <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-blue/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h3 className="text-3xl font-bold text-white mb-10">{t('whyTitle')}</h3>
                        <div className="grid gap-8">
                            <MethodItem
                                icon={<Target className="text-brand-blue" />}
                                title={t('w1')}
                                text={t('w1d')}
                            />
                            <MethodItem
                                icon={<Users className="text-brand-purple" />}
                                title={t('w2')}
                                text={t('w2d')}
                            />
                            <MethodItem
                                icon={<Calendar className="text-brand-cyan" />}
                                title="Flexibilidad Horaria Total"
                                text={t('w3d')}
                            />
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">{t('humanA')} <br /> <span className="text-brand-blue">{t('humanB')}</span></h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {t('humanBody')}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="p-6 bg-white/5 border-white/10 text-center hover:bg-white/10 transition-colors">
                                <Award className="mx-auto mb-3 text-brand-blue" size={32} />
                                <span className="text-white font-bold block mb-1">Certificado</span>
                                <span className="text-gray-500 text-xs uppercase tracking-widest leading-none">Validez Curricular</span>
                            </Card>
                            <Card className="p-6 bg-white/5 border-white/10 text-center hover:bg-white/10 transition-colors">
                                <Monitor className="mx-auto mb-3 text-brand-purple" size={32} />
                                <span className="text-white font-bold block mb-1">Remoto/Presencial</span>
                                <span className="text-gray-500 text-xs uppercase tracking-widest leading-none">CDMX & Latam</span>
                            </Card>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. TRUST & SKILLS INDICATOR */}
            <Section className="py-24">
                <div className="bg-brand-black/50 border border-white/10 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="grid lg:grid-cols-4 gap-12 text-center group">
                        <StatBlock num="100%" title={t('practical')} label="Enfoque en Proyectos Reales" />
                        <StatBlock num="450+" title="Estudiantes" label={t('statTrained')} />
                        <StatBlock num="15+" title="Stacks" label={t('statTech')} />
                        <StatBlock num="Elite" title={t('statMentor')} label="Consultores Seniors" />
                    </div>
                </div>
            </Section>

            {/* 5. CTA FINAL - Emotional & Professional Call */}
            <Section className="py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-10"
                >
                    <div className="w-20 h-20 mx-auto rounded-3xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20 rotate-12 hover:rotate-0 transition-transform duration-500">
                        <Users size={40} />
                    </div>
                    <h2 className="text-5xl md:text-8xl font-display font-bold text-white leading-tight">
                        {t('ctaA')} <br />
                        <span className="text-gradient">Crecimiento Profesional</span>
                    </h2>
                    <p className="text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t('ctaBody')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12 h-16 text-lg">Agendar mi Clase</Button>
                        </Link>
                        <a href="https://wa.me/525951145576" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg border-green-500/50 hover:bg-green-500/10 hover:text-green-400">
                                <MessageCircle className="mr-3" /> WhatsApp Educativo
                            </Button>
                        </a>
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">
                                <Mail className="mr-3" /> Solicitar Temario
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}

// Child Components
function ClassTrack({ icon, title, desc, topics, color }: { icon: any, title: string, desc: string, topics: string[], color: 'blue' | 'purple' | 'cyan' }) {
    return (
        <Card className="p-10 flex flex-col h-full hover:bg-white/5 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                {icon}
            </div>
            <div className="mb-6 flex justify-start group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 overflow-hidden">{desc}</p>

            <div className="mt-auto space-y-3 pt-6 border-t border-white/5">
                {topics.map(t => (
                    <div key={t} className="flex items-center gap-3 text-[12px] text-gray-500 uppercase tracking-widest leading-none font-medium">
                        <CheckCircle2 size={14} className={color === 'blue' ? 'text-brand-blue' : color === 'purple' ? 'text-brand-purple' : 'text-brand-cyan'} />
                        {t}
                    </div>
                ))}
            </div>
        </Card>
    );
}

function MethodItem({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="flex gap-6 items-start group">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                {icon}
            </div>
            <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-blue transition-colors">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    );
}

function StatBlock({ num, title, label }: { num: string, title: string, label: string }) {
    return (
        <div className="space-y-2">
            <div className="text-4xl font-display font-bold text-white group-hover:text-gradient transition-all">{num}</div>
            <h4 className="text-white font-bold text-sm">{title}</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">{label}</p>
        </div>
    );
}
