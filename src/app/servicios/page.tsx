'use client';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ChevronRight, Globe, Smartphone, Bot, Database, BookOpen, Share2, CheckCircle2, ArrowRight, Zap, Target, Star } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        title: "Desarrollo Web Premium",
        desc: "Páginas institucionales, landing pages de alta conversión y sistemas web completos construidos con tecnología moderna (Next.js, React). Creamos experiencias ultra-rápidas enfocadas en SEO y experiencia de usuario.",
        icon: <Globe size={40} className="text-brand-blue" />,
        features: ["Arquitectura Next.js 15 (App Router)", "Optimización Core Web Vitals (Puntaje 100)", "Panel Autoadministrable (CMS)", "Infraestructura Cloud Segura"],
        link: "/apps-web",
        color: "blue",
        badge: "Más Solicitado"
    },
    {
        title: "Apps Móviles Nativas",
        desc: "Aplicaciones nativas para iOS y Android y Progressive Web Apps (PWA). Nos enfocamos en un rendimiento fluido y en interfaces que tus clientes amarán usar diariamente.",
        icon: <Smartphone size={40} className="text-brand-purple" />,
        features: ["Desarrollo Híbrido y Nativo", "Sincronización en Tiempo Real", "Geolocalización y Push Notifs", "UX/UI Mobile-First Premium"],
        link: "/apps-moviles",
        color: "purple"
    },
    {
        title: "Sistemas Empresariales",
        desc: "Software a medida para automatizar tu negocio: CRM, ERP, Puntos de Venta (POS) y herramientas de gestión de inventarios. Centralizamos tus datos para decisiones inteligentes.",
        icon: <Database size={40} className="text-brand-cyan" />,
        features: ["Dashboards Analíticos Avanzados", "Reportes PDF/Excel Automáticos", "Integración de Roles y Permisos", "Seguridad de Datos Bancaria"],
        link: "/sistemas",
        color: "cyan"
    },
    {
        title: "Automatización & IA",
        desc: "Optimiza tu tiempo integrando inteligencia artificial en tu flujo de trabajo. Bots para WhatsApp que venden por ti, integraciones con OpenAI y automatización de procesos repetitivos.",
        icon: <Bot size={40} className="text-pink-400" />,
        features: ["Chatbots Cognitivos (GPT-4)", "Integración Make.com / Zapier", "Automatización de WhatsApp", "Análisis de Datos con IA"],
        link: "/automatizacion",
        color: "pink",
        badge: "Tendencia"
    },
    {
        title: "Marketing & Growth",
        desc: "Estrategias de redes sociales, branding visual y campañas orgánicas enfocadas en el ROI. No solo buscamos likes, buscamos acelerar el crecimiento real de tu marca.",
        icon: <Share2 size={40} className="text-orange-400" />,
        features: ["Estrategia de Contenido 360°", "Diseño de Identidad Gráfica", "Ads (Meta, Google, LinkedIn)", "SEO On-Page y Off-Page"],
        link: "/marketing",
        color: "orange"
    },
    {
        title: "Capacitación IT",
        desc: "Capacitación tecnológica personalizada para equipos y particulares. Desde el uso básico de herramientas digitales hasta programación profesional y arquitectura de sistemas.",
        icon: <BookOpen size={40} className="text-green-400" />,
        features: ["Cursos de Stack Moderno", "Asesoría Técnica Senior", "Talleres Prácticos (Hands-on)", "Certificado de Formación"],
        link: "/clases",
        color: "green"
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-20 min-h-screen">

            {/* 1. Impact Header */}
            <Section className="text-center pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-sm font-bold mb-6"
                >
                    <Star size={14} className="fill-brand-purple" />
                    <span>Excelencia en Ejecución</span>
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                    Soluciones que impulsen su <br className="hidden md:block" />
                    <span className="text-gradient">Crecimiento Digital</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Combinamos diseño estratégico con ingeniería de software de alto nivel para resolver los desafíos más complejos de tu empresa.
                </p>
            </Section>

            {/* 2. Grid de Servicios Refinado */}
            <Section className="py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <Card key={i} className="flex flex-col h-full bg-brand-black/40 border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-500 group relative">
                            {s.badge && (
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-brand-purple text-[10px] font-bold uppercase tracking-widest z-10">
                                    {s.badge}
                                </div>
                            )}

                            <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit border border-white/5 group-hover:scale-110 transition-transform duration-500">
                                {s.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
                                {s.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                {s.desc}
                            </p>

                            <ul className="space-y-3 mb-10 border-t border-white/5 pt-6">
                                {s.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                        <CheckCircle2 size={16} className="text-brand-blue shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link href={s.link} className="mt-auto">
                                <Button variant="outline" className="w-full h-12 justify-center gap-2 group/btn hover:bg-white/10">
                                    Conocer más <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 3. Featured Packages Highlight */}
            <Section className="py-20 bg-brand-purple/5 rounded-[3rem] border border-brand-purple/10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">¿Buscas algo listo para despegar?</h2>
                        <p className="text-gray-400 text-lg">
                            Contamos con paquetes web especializados (Básico, Empresa, Pro) diseñados para cubrir las necesidades más comunes con precios competitivos y tiempos de entrega garantizados.
                        </p>
                    </div>
                    <Link href="/paquetes-web">
                        <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 whitespace-nowrap group">
                            Ver Paquetes Web <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Section>

            {/* 4. Social Proof / Process Callout */}
            <Section className="py-24 border-y border-white/5 bg-white/[0.01]">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Nuestro Enfoque en la Calidad Especializada</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Cada servicio es ejecutado siguiendo una metodología de ingeniería estricta. Nos aseguramos de que cada proyecto sea escalable, seguro y estéticamente superior.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <Zap className="text-brand-blue" />
                                <h4 className="font-bold text-white">Rápido Despliegue</h4>
                                <p className="text-gray-500 text-sm">Validación ágil para salir al mercado en tiempo récord.</p>
                            </div>
                            <div className="space-y-2">
                                <Target className="text-brand-purple" />
                                <h4 className="font-bold text-white">Enfoque en ROI</h4>
                                <p className="text-gray-500 text-sm">Software diseñado para generar ingresos y retorno.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-10 rounded-3xl bg-brand-black/50 border border-white/10 backdrop-blur-sm overflow-hidden text-center">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px]" />
                        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">¿No encuentras lo que buscas?</h3>
                        <p className="text-gray-400 mb-8 relative z-10">Desarrollamos proyectos personalizados fuera de catálogo. Si es digital, podemos construirlo.</p>
                        <Link href="/contacto">
                            <Button size="lg" className="px-10">Háblanos de tu proyecto</Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
