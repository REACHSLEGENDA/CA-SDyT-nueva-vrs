'use client';

import { motion } from 'framer-motion';
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
import Link from 'next/link';

export default function AutomationPage() {
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
                    <span>Inteligencia Artificial al Servicio de tu Negocio</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
                    Automatización e <br />
                    <span className="text-gradient decoration-pink-500">Integraciones IA</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                    Elimina las tareas repetitivas y deja que la IA trabaje por ti 24/7. Construimos ecosistemas digitales donde tus aplicaciones se comunican entre sí, optimizando tiempos de respuesta y escalando tu capacidad operativa sin aumentar los costos.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/contacto" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg bg-white/10 hover:bg-white/20 border-white/10 text-white">
                            Automatizar mi Negocio
                        </Button>
                    </Link>
                    <a href="https://wa.me/525633680348" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg bg-pink-600 hover:bg-pink-500 text-white border-0 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                            Demo de Chatbot IA
                        </Button>
                    </a>
                </div>
            </Section>

            {/* 2. CORE CAPABILITIES - 3 Column Grid */}
            <Section className="py-24 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Eficiencia sin Límites</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Conectamos lo desconectado y automatizamos lo manual con tecnología de punta.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <AutoCard
                        icon={<Bot size={40} />}
                        title="Agentes y Chatbots con IA"
                        desc="No son simples bots de botones. Implementamos cerebros digitales con GPT-4 que entienden contexto, califican prospectos y cierran ventas en WhatsApp, Facebook y Web."
                        features={["Integración con OpenAI / Claude", "Conexión a tu Base de Datos", "Traspaso a Humano Inteligente", "Multilenguaje y Multicanal"]}
                        color="pink"
                    />
                    <AutoCard
                        icon={<Workflow size={40} />}
                        title="Workflows Avanzados"
                        desc="Conectamos tus herramientas favoritas (CRM, Slack, Google, ERP) usando Make.com y Zapier. Cuando ocurre 'A', tu sistema ejecuta 'B', 'C' y 'D' automáticamente."
                        features={["Reducción de Errores Humanos", "Ahorro de +40h Semanales", "Sincronización de Leads", "Alertas en Tiempo Real"]}
                        color="purple"
                    />
                    <AutoCard
                        icon={<Plug size={40} />}
                        title="Integración de APIs"
                        desc="Creamos puentes de comunicación entre sistemas que originalmente no pueden hablar entre sí. Desarrollo de middleware seguro para flujo de datos constante."
                        features={["Webhooks Personalizados", "Seguridad End-to-End", "Documentación Técnica", "Escalabilidad Cloud"]}
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
                            Cognición Artificial <br /> <span className="text-pink-500">en tu Operación</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            No solo movemos datos de un lado a otro. Usamos IA para procesar información, tomar decisiones lógicas basadas en tus reglas de negocio y responder de forma humana.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 pb-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-pink-500" size={20} />
                                <span>IA de Texto (LLMs)</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-pink-500" size={20} />
                                <span>Visión por Computadora</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-pink-500" size={20} />
                                <span>Análisis de Sentimiento</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-pink-500" size={20} />
                                <span>Predicción de Ventas</span>
                            </div>
                        </div>
                        <Link href="/contacto">
                            <Button variant="outline" className="border-pink-500/30 text-pink-400 hover:bg-pink-500/10">
                                Consultar Proyecto de IA
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
                                <ImpactBar label="Disponibilidad 24/7" percentage="100%" />
                                <ImpactBar label="Ahorro en Operación" percentage="65%" />
                                <ImpactBar label="Velocidad de Respuesta" percentage="95%" />
                                <ImpactBar label="Precisión de Datos" percentage="99%" />
                            </div>
                            <div className="mt-12 pt-8 border-t border-white/5 flex gap-4 items-center">
                                <div className="p-3 bg-pink-500/10 rounded-full">
                                    <Clock className="text-pink-400" size={24} />
                                </div>
                                <p className="text-sm text-gray-400 leading-tight">Implementamos flujos en días, no en meses. Resultados visibles desde la primera semana.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* 4. COMPARISON - Manual vs Automated */}
            <Section className="py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-white">El Cambio es Drástico</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="p-10 border-red-500/20 bg-red-500/[0.02]">
                        <h4 className="text-xl font-bold text-red-500 mb-6 flex items-center gap-2">
                            Sin Automatización
                        </h4>
                        <ul className="space-y-4">
                            <CompItem type="bad" text="Tareas manuales repetitivas." />
                            <CompItem type="bad" text="Errores humanos frecuentes." />
                            <CompItem type="bad" text="Respuesta lenta al cliente (+4h)." />
                            <CompItem type="bad" text="Altos costos operativos fijos." />
                            <CompItem type="bad" text="Datos aislados en silos." />
                        </ul>
                    </Card>
                    <Card className="p-10 border-green-500/20 bg-green-500/[0.02] transform md:scale-105 shadow-2xl">
                        <h4 className="text-xl font-bold text-green-500 mb-6 flex items-center gap-2">
                            Con CA Automatizacion
                        </h4>
                        <ul className="space-y-4">
                            <CompItem type="good" text="Flujos digitales autónomos." />
                            <CompItem type="good" text="Precisión técnica garantizada." />
                            <CompItem type="good" text="Respuesta inmediata (Segundos)." />
                            <CompItem type="good" text="Escalabilidad con costo marginal." />
                            <CompItem type="good" text="Sincronización total en vivo." />
                        </ul>
                    </Card>
                </div>
            </Section>

            {/* 5. CTA FINAL */}
            <Section className="py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                        Pon tu negocio en <br />
                        <span className="text-gradient">Autopiloto Inteligente</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        No pierdas más tiempo en tareas que una IA puede hacer mejor y más rápido. Agenda hoy tu diagnóstico de automatización.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12 h-16 text-lg">Hablar con un Especialista</Button>
                        </Link>
                        <a href="https://wa.me/525633680348" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">Cotizar Bot de WhatsApp</Button>
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}

// Child Components
function AutoCard({ icon, title, desc, features, color }: { icon: any, title: string, desc: string, features: string[], color: 'pink' | 'purple' | 'blue' }) {
    const accents = {
        pink: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
        purple: 'text-brand-purple bg-brand-purple/10 border-brand-purple/20',
        blue: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20'
    };

    return (
        <Card className="p-10 flex flex-col h-full hover:bg-white/5 transition-all duration-500 group">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 mb-8 ${accents[color]} group-hover:scale-110 transition-transform`}>
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
