'use client';

import { motion } from 'framer-motion';
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
import Link from 'next/link';

export default function ClassesPage() {
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
                    Domina las herramientas <br />
                    <span className="text-gradient">del Futuro Digital</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                    En CA Academy, no solo enseñamos teoría; forjamos habilidades reales. Ofrecemos capacitación personalizada diseñada para cerrar la brecha entre el conocimiento básico y la maestría tecnológica profesional.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/contacto" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg">Agendar Sesión de Diagnóstico</Button>
                    </Link>
                    <Link href="/nosotros" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">Nuestra Metodología</Button>
                    </Link>
                </div>
            </Section>

            {/* 2. MENTORSHIP TRACKS - Specialized Blocks */}
            <Section className="py-24 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Programas de Formación</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Elige tu camino. Desde lo fundamental hasta el desarrollo de software profesional.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <ClassTrack
                        icon={<Monitor size={40} />}
                        title="Productividad & Office"
                        desc="Domina el entorno Windows y la suite de Office de forma profesional. Optimiza tu flujo de trabajo administrativo y personal."
                        topics={["Excel Avanzado (Fórmulas/Tablas)", "Word & PowerPoint Profesional", "Gestión de Correo & Cloud", "Seguridad Digital Básica"]}
                        color="blue"
                    />
                    <ClassTrack
                        icon={<Terminal size={40} />}
                        title="Desarrollo & Programación"
                        desc="Aprende a construir el internet. Desde lógica de programación hasta frameworks modernos utilizados por la élite tecnológica."
                        topics={["HTML5, CSS3 & JavaScript", "React & Next.js Frameworks", "Bases de Datos & SQL", "Despliegue de Aplicaciones"]}
                        color="purple"
                    />
                    <ClassTrack
                        icon={<Presentation size={40} />}
                        title="Marketing & Gestión"
                        desc="Habilidades digitales enfocadas en negocio. Aprende a gestionar tus canales y herramientas de venta de forma autónoma."
                        topics={["Gestión de Redes Sociales", "Principios de Diseño Gráfico", "WhatsApp Business Pro", "Analytics & Reportes"]}
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
                        <h3 className="text-3xl font-bold text-white mb-10">¿Por qué elegir nuestra mentoría?</h3>
                        <div className="grid gap-8">
                            <MethodItem
                                icon={<Target className="text-brand-blue" />}
                                title="Plan de Estudios a Medida"
                                text="No seguimos un manual genérico. Evaluamos tu nivel actual y creamos una ruta de aprendizaje basada en tus objetivos reales."
                            />
                            <MethodItem
                                icon={<Users className="text-brand-purple" />}
                                title="Clases 1 a 1 de Alto Valor"
                                text="Atención total. Sin distracciones. El instructor se enfoca exclusivamente en tu progreso y resuelve tus dudas al instante."
                            />
                            <MethodItem
                                icon={<Calendar className="text-brand-cyan" />}
                                title="Flexibilidad Horaria Total"
                                text="Entendemos que el tiempo es tu recurso más valioso. Adaptamos las sesiones a tus horarios de trabajo o estudio."
                            />
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">Capacitación <br /> <span className="text-brand-blue">Humana & Técnica</span></h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Creemos en la democratización del conocimiento técnico. Nuestro objetivo es que dejes de ver la tecnología como un obstáculo y comiences a verla como tu mayor aliada profesional.
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
                        <StatBlock num="100%" title="Práctico" label="Enfoque en Proyectos Reales" />
                        <StatBlock num="450+" title="Estudiantes" label="Capacitados con Éxito" />
                        <StatBlock num="15+" title="Stacks" label="Tecnologías Cubiertas" />
                        <StatBlock num="Elite" title="Mentoría" label="Consultores Seniors" />
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
                        Invierte en tu <br />
                        <span className="text-gradient">Crecimiento Profesional</span>
                    </h2>
                    <p className="text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        No importa tu nivel inicial. El único requisito es la curiosidad y las ganas de dominar el entorno digital.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12 h-16 text-lg">Agendar mi Clase</Button>
                        </Link>
                        <a href="https://wa.me/525633680348" className="w-full sm:w-auto">
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
    const accents = {
        blue: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
        purple: 'text-brand-purple bg-brand-purple/10 border-brand-purple/20',
        cyan: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20'
    };

    return (
        <Card className="p-10 flex flex-col h-full hover:bg-white/5 transition-all duration-500 group relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                {icon}
            </div>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 mb-8 ${accents[color]} group-hover:scale-110 transition-transform`}>
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
