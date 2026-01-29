'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    Facebook,
    Instagram,
    TrendingUp,
    Users,
    MessageCircle,
    Zap,
    Target,
    BarChart3,
    Image as ImageIcon,
    Video,
    PenTool,
    Hash,
    MousePointerClick,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function MarketingPage() {
    return (
        <div className="pt-20 min-h-screen">

            {/* 1. HERO - Social Dominance */}
            <Section className="text-center pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/10 to-pink-600/10 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-8"
                >
                    <Facebook size={16} className="text-blue-500" />
                    <span className="text-gray-500">|</span>
                    <Instagram size={16} className="text-pink-500" />
                    <span>Estrategia Meta Expert</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
                    Domina las Redes <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">Más Potentes</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 text-balance">
                    Nos especializamos exclusivamente en el ecosistema Meta (Facebook & Instagram). Creamos marcas que la gente ama y campañas de anuncios que convierten desconocidos en clientes leales.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/contacto" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0">
                            Lanzar Campaña
                        </Button>
                    </Link>
                    <Link href="/portafolio" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">
                            Ver Casos de Éxito
                        </Button>
                    </Link>
                </div>
            </Section>

            {/* 2. DUAL STRATEGY - Organic vs Paid */}
            <Section className="py-24 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Dos Motores de Crecimiento</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg text-balance">
                        Combinamos el branding estético con la precisión de los datos para un crecimiento sostenible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <StrategyCard
                        title="Contenido Orgánico (Branding)"
                        subtitle="Construcción de Comunidad & Lealtad"
                        desc="Tu feed es tu carta de presentación. Diseñamos una identidad visual irresistible que transmite profesionalismo y conecta emocionalmente con tu audiencia."
                        icon={<Instagram size={48} />}
                        color="pink"
                        features={[
                            "Diseño de Feed Estético (Grid)",
                            "Edición de Reels Virales",
                            "Historias Interactivas Diarias",
                            "Copywriting Persuasivo"
                        ]}
                    />
                    <StrategyCard
                        title="Tráfico Pago (Ads)"
                        subtitle="Adquisición de Clientes & Ventas"
                        desc="Dejamos de depender de la suerte. Implementamos embudos de venta con Facebook Ads para llegar exactamente a tu cliente ideal con el mensaje correcto."
                        icon={<Target size={48} />}
                        color="blue"
                        features={[
                            "Segmentación Avanzada",
                            "Retargeting Estratégico",
                            "Pruebas A/B de Creativos",
                            "Optimización de ROAS"
                        ]}
                    />
                </div>
            </Section>

            {/* 3. PLATFORM FOCUS - Specific Features */}
            <Section className="py-24 bg-white/[0.01]">
                <div className="grid md:grid-cols-3 gap-8">
                    <PlatformFeature
                        icon={<Video />}
                        title="Reels & Video Marketing"
                        text="Aprovechamos el formato #1 de consumo actual. Videos cortos, dinámicos y editados profesionalmente para retener la atención."
                    />
                    <PlatformFeature
                        icon={<MessageCircle />}
                        title="Gestión de Comunidad"
                        text="No dejamos comentarios sin responder. Humanizamos tu marca interactuando genuinamente con tus seguidores."
                    />
                    <PlatformFeature
                        icon={<TrendingUp />}
                        title="Viralidad Estratégica"
                        text="Usamos audios en tendencia y formatos ganadores para maximizar el alcance orgánico de tu cuenta."
                    />
                    <PlatformFeature
                        icon={<MousePointerClick />}
                        title="Campañas de Mensajes"
                        text="Anuncios Direct-to-Create. Llenamos tu bandeja de entrada de WhatsApp o DM con prospectos calificados."
                    />
                    <PlatformFeature
                        icon={<Users />}
                        title="Públicos Similares"
                        text="Encontramos a miles de personas idénticas a tus mejores clientes usando la IA de Meta."
                    />
                    <PlatformFeature
                        icon={<BarChart3 />}
                        title="Reportes Claros"
                        text="Olvídate de métricas vanidosas. Te mostramos costos por resultado, conversión y retorno de inversión."
                    />
                </div>
            </Section>

            {/* 4. PROCESS - ROI FOCUSED */}
            <Section className="py-24 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-96 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full blur-[120px] -z-10" />

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                            Tu marca merece ser <br /> <span className="text-gradient from-purple-500 to-pink-500">Inolvidable</span>
                        </h2>
                        <div className="space-y-8">
                            <StepItem num="01" title="Auditoría Visual" text="Analizamos tu perfil actual y definimos una línea gráfica que te diferencie de la competencia." />
                            <StepItem num="02" title="Plan de Contenidos" text="Creamos una parrilla mensual con pilares de contenido: Educativo, Entretenimiento y Venta." />
                            <StepItem num="03" title="Ejecución & Ads" text="Publicamos religiosamente y activamos la pauta publicitaria para acelerar resultados." />
                            <StepItem num="04" title="Optimización Continua" text="Lo que no se mide no se mejora. Ajustamos la estrategia mes a mes basándonos en datos." />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[3rem] bg-brand-black border border-white/10 relative overflow-hidden flex items-center justify-center group">
                            {/* Mockup visual representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/80" />
                            <div className="relative z-10 text-center p-8">
                                <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full p-1 mb-6">
                                    <div className="w-full h-full bg-black rounded-full border-4 border-black flex items-center justify-center">
                                        <Instagram size={40} className="text-white" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Tu Marca</h3>
                                <p className="text-gray-400 text-sm mb-8">Marketing Digital Premium</p>
                                <div className="flex justify-center gap-8 text-white">
                                    <div>
                                        <div className="font-bold text-xl">10k+</div>
                                        <div className="text-xs text-gray-500">Seguidores</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">5.8%</div>
                                        <div className="text-xs text-gray-500">Engagement</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">ROAS 4x</div>
                                        <div className="text-xs text-gray-500">Retorno</div>
                                    </div>
                                </div>
                                <div className="mt-8 grid grid-cols-3 gap-2 opacity-50">
                                    <div className="aspect-square bg-white/10 rounded-lg"></div>
                                    <div className="aspect-square bg-white/10 rounded-lg"></div>
                                    <div className="aspect-square bg-white/10 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        ¿Listo para escalar en <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Social Media?</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Deja de postear por postear. Comienza una estrategia profesional hoy mismo.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12 h-16 text-lg">Solicitar Propuesta</Button>
                        </Link>
                        <a href="https://wa.me/525633680348" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg hover:bg-white/5">
                                <MessageCircle className="mr-2" /> WhatsApp Directo
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}

// Child Components
function StrategyCard({ title, subtitle, desc, icon, color, features }: { title: string, subtitle: string, desc: string, icon: any, color: 'pink' | 'blue', features: string[] }) {
    const accents = {
        pink: 'text-pink-500 bg-pink-500/10 border-pink-500/20 hover:border-pink-500/50',
        blue: 'text-blue-500 bg-blue-500/10 border-blue-500/20 hover:border-blue-500/50'
    };

    return (
        <Card className={`p-10 flex flex-col h-full bg-brand-black/40 transition-all duration-500 group border-white/5 ${accents[color].split(' ')[3]}`}>
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 mb-8 ${accents[color]} group-hover:scale-110 transition-transform`}>
                {icon}
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-2">{title}</h3>
            <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${color === 'pink' ? 'text-pink-500' : 'text-blue-500'}`}>{subtitle}</p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">{desc}</p>

            <div className="mt-auto space-y-4 pt-8 border-t border-white/5">
                {features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                        <CheckCircle2 size={18} className={color === 'pink' ? 'text-pink-500' : 'text-blue-500'} />
                        {f}
                    </div>
                ))}
            </div>
        </Card>
    );
}

function PlatformFeature({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
            <div className="text-gray-400 mb-4 group-hover:text-white transition-colors group-hover:scale-110 origin-left transform duration-300">
                {icon && (typeof icon === 'object' ? { ...icon, props: { ...icon.props, size: 32 } } : icon)}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
        </div>
    );
}

function StepItem({ num, title, text }: { num: string, title: string, text: string }) {
    return (
        <div className="flex gap-6 items-start group">
            <div className="text-2xl font-display font-bold text-white/20 group-hover:text-white/40 transition-colors">{num}</div>
            <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    );
}
