'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, RefreshCw, ChevronRight, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';

type StepId =
    | 'start'
    | 'web' | 'system' | 'infra' | 'marketing' | 'automation' | 'packages'
    | 'final_web' | 'final_system' | 'final_infra' | 'final_mkt' | 'final_auto' | 'final_classes' | 'final_pkg';

interface Option {
    label: string;
    next: StepId;
    icon?: string;
}

interface Step {
    id: StepId;
    text: string;
    options?: Option[];
    final?: boolean;
    serviceHref?: string;
}

const steps: Record<string, Step> = {
    start: {
        id: 'start',
        text: 'Hola, soy el asistente de CA Soluciones 👋 ¿En qué área puedo orientarte?',
        options: [
            { label: '🌐 Sitio web o app', next: 'web' },
            { label: '⚙️ Sistema o software', next: 'system' },
            { label: '🔒 Infraestructura TI', next: 'infra' },
            { label: '📈 Marketing y SEO', next: 'marketing' },
            { label: '🤖 Automatización & IA', next: 'automation' },
            { label: '📦 Ver paquetes', next: 'packages' },
        ],
    },

    web: {
        id: 'web',
        text: '¡Perfecto! Desarrollamos con Next.js, React y Flutter. ¿Qué tipo de proyecto tienes en mente?',
        options: [
            { label: 'Landing o sitio corporativo', next: 'final_web' },
            { label: 'Tienda en línea', next: 'final_web' },
            { label: 'App web a medida', next: 'final_web' },
            { label: 'App móvil (Android/iOS)', next: 'final_web' },
        ],
        serviceHref: '/apps-web',
    },

    system: {
        id: 'system',
        text: 'Desarrollamos sistemas empresariales con Supabase y Node.js. ¿Qué necesitas gestionar?',
        options: [
            { label: 'CRM de ventas y clientes', next: 'final_system' },
            { label: 'Inventario / Punto de venta', next: 'final_system' },
            { label: 'ERP o sistema a medida', next: 'final_system' },
            { label: 'Integración de plataformas', next: 'final_system' },
        ],
        serviceHref: '/sistemas',
    },

    infra: {
        id: 'infra',
        text: 'Somos especialistas en infraestructura con Fortinet, Synology NAS y Windows Server. ¿Qué servicio necesitas?',
        options: [
            { label: 'Redes y conectividad', next: 'final_infra' },
            { label: 'Ciberseguridad / Firewall', next: 'final_infra' },
            { label: 'Videovigilancia CCTV', next: 'final_infra' },
            { label: 'Servidores / NAS / Nube privada', next: 'final_infra' },
            { label: 'Soporte técnico mensual', next: 'final_infra' },
        ],
        serviceHref: '/infraestructura-ti',
    },

    marketing: {
        id: 'marketing',
        text: 'Posicionamos tu negocio en Google y en motores de IA. ¿Qué área te interesa?',
        options: [
            { label: 'SEO técnico en Google', next: 'final_mkt' },
            { label: 'AEO (ChatGPT, Gemini, Claude)', next: 'final_mkt' },
            { label: 'Google Business & Maps', next: 'final_mkt' },
            { label: 'Redes sociales y contenido', next: 'final_mkt' },
        ],
        serviceHref: '/seo-aeo',
    },

    automation: {
        id: 'automation',
        text: 'Automatizamos procesos y construimos agentes de IA. ¿Qué quieres optimizar?',
        options: [
            { label: 'Bot de WhatsApp con IA', next: 'final_auto' },
            { label: 'Flujos y procesos repetitivos', next: 'final_auto' },
            { label: 'Integraciones entre sistemas', next: 'final_auto' },
            { label: 'Agente de IA personalizado', next: 'final_auto' },
        ],
        serviceHref: '/automatizacion',
    },

    packages: {
        id: 'packages',
        text: 'Tenemos paquetes diseñados para diferentes etapas de crecimiento. ¿Cuál te llama la atención?',
        options: [
            { label: '🚀 Despegue Digital', next: 'final_pkg' },
            { label: '📊 Tráfico y Conversión', next: 'final_pkg' },
            { label: '✨ Ecosistema Premium IA', next: 'final_pkg' },
            { label: '🏢 Plan TI Empresarial', next: 'final_pkg' },
        ],
        serviceHref: '/paquetes-web',
    },

    // ─── Finales con texto contextual ────────────────────────────────────
    final_web: {
        id: 'final_web',
        text: '¡Genial! Todos nuestros proyectos web son bajo cotización personalizada: analizamos tus requerimientos y te damos un precio justo y detallado. Sin compromisos. 👇 Contáctanos ahora:',
        final: true,
        serviceHref: '/apps-web',
    },
    final_system: {
        id: 'final_system',
        text: 'Los sistemas a medida tienen un costo bajo cotización según la complejidad y módulos requeridos. Agenda una llamada y te presentamos una propuesta técnica sin costo. 👇',
        final: true,
        serviceHref: '/sistemas',
    },
    final_infra: {
        id: 'final_infra',
        text: 'Los proyectos de infraestructura TI son 100% bajo cotización, ya que dependen del equipo, alcance y ubicación. ¡Hablemos y te armamos una propuesta a medida! 👇',
        final: true,
        serviceHref: '/infraestructura-ti',
    },
    final_mkt: {
        id: 'final_mkt',
        text: 'Nuestras estrategias de marketing y SEO se cotizan según objetivos, competencia y alcance. Agenda una consultoría gratuita y te decimos exactamente qué necesitas. 👇',
        final: true,
        serviceHref: '/seo-aeo',
    },
    final_auto: {
        id: 'final_auto',
        text: 'Los proyectos de automatización e IA se cotizan según los flujos y sistemas que manejas. Cuéntanos tu caso y te proponemos la solución ideal. Precios siempre bajo cotización. 👇',
        final: true,
        serviceHref: '/automatizacion',
    },
    final_classes: {
        id: 'final_classes',
        text: 'Ofrecemos clases de cómputo para todos los niveles: básico, ofimática, diseño y más. Los precios varían según el plan de clases. Contáctanos para más detalles. 👇',
        final: true,
        serviceHref: '/clases',
    },
    final_pkg: {
        id: 'final_pkg',
        text: 'Nuestros paquetes tienen precios base, pero siempre los adaptamos a tu negocio. Contáctanos y te asesoramos sobre cuál paquete se ajusta mejor a tus metas. 👇',
        final: true,
        serviceHref: '/paquetes-web',
    },
};

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState<StepId[]>(['start']);
    const [isTyping, setIsTyping] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const [frame, setFrame] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const pathname = usePathname();

    const isHeroPlaying = pathname === '/' && !videoEnded;

    const currentStepId = history[history.length - 1];
    const currentStep = steps[currentStepId] || steps['start'];

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onEnd = () => setVideoEnded(true);
        window.addEventListener('ca:heroVideoEnd', onEnd);
        return () => window.removeEventListener('ca:heroVideoEnd', onEnd);
    }, []);

    useEffect(() => {
        if (isHovered || isOpen) return;
        const frames = [1, 2, 3, 2];
        let idx = 0;
        const interval = setInterval(() => {
            idx = (idx + 1) % frames.length;
            setFrame(frames[idx]);
        }, 250); // 250ms por frame para una animación fluida
        return () => clearInterval(interval);
    }, [isHovered, isOpen]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, isTyping, isOpen]);

    const handleOption = (nextId: StepId) => {
        setIsTyping(true);
        setTimeout(() => {
            setHistory(prev => [...prev, nextId]);
            setIsTyping(false);
        }, 700);
    };

    const restart = () => setHistory(['start']);

    return (
        <>
            {/* Speech bubble balloon (globito de texto) */}
            <AnimatePresence>
                {isHovered && !isOpen && !isHeroPlaying && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 12 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 12 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="fixed right-28 bottom-[48px] z-50 bg-ca-surface border border-ca-border px-4 py-2.5 rounded-2xl rounded-br-none shadow-[0_4px_20px_rgba(0,0,0,0.4)] font-mono font-bold text-xs text-ca-cyan tracking-wide whitespace-nowrap pointer-events-none"
                    >
                        ¿Necesitas ayuda?
                        <div className="absolute right-0 bottom-3 translate-x-1/2 rotate-45 w-3 h-3 bg-ca-surface border-r border-b border-ca-border" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Abrir asistente"
                className={`fixed bottom-6 right-6 z-40 transition-all duration-300 hover:scale-110 flex items-center justify-center ${
                    isHeroPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                style={{ width: '96px', height: '96px' }}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                        <motion.div
                            key="x"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-16 h-16 rounded-full bg-ca-gradient shadow-[0_0_28px_rgba(0,207,255,0.45)] flex items-center justify-center text-white"
                        >
                            <X size={26} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="icon"
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-24 h-24 filter drop-shadow-[0_4px_12px_rgba(0,207,255,0.3)]"
                        >
                            <Image
                                src={isHovered ? "/assets/bot4.png" : `/assets/bot${frame}.png`}
                                alt="Bot"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>

            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 16 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="fixed bottom-24 right-6 z-40 w-[92vw] md:w-[400px] h-[540px] bg-ca-surface border border-ca-border rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-ca-border bg-ca-surface2 flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 rounded-full border border-ca-cyan/30 overflow-hidden bg-ca-surface2 flex items-center justify-center">
                                    <Image src="/assets/bot4.png" alt="CA Bot" fill className="object-contain p-1" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-ca-text text-sm">CA Asistente</h3>
                                    <span className="flex items-center gap-1.5 text-xs text-ca-cyan">
                                        <span className="w-1.5 h-1.5 rounded-full bg-ca-cyan animate-pulse" />
                                        En línea
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={restart}
                                title="Reiniciar"
                                className="p-2 hover:bg-ca-border rounded-full text-ca-muted hover:text-ca-text transition-colors"
                            >
                                <RefreshCw size={15} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-3" ref={scrollRef}>
                            {history.map((stepId, index) => {
                                const step = steps[stepId];
                                if (!step) return null;
                                return (
                                    <motion.div
                                        key={`${stepId}-${index}`}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-start gap-2.5"
                                    >
                                        <div className="w-7 h-7 rounded-full overflow-hidden relative shrink-0 mt-0.5 border border-ca-cyan/20 bg-ca-surface flex items-center justify-center">
                                            <Image src="/assets/bot4.png" alt="" fill className="object-contain p-0.5" />
                                        </div>
                                        <div className="bg-ca-surface2 border border-ca-border px-3.5 py-2.5 rounded-2xl rounded-tl-none max-w-[88%] text-sm text-ca-text leading-relaxed">
                                            {step.text}
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-full overflow-hidden relative shrink-0 border border-ca-cyan/20 bg-ca-surface flex items-center justify-center">
                                        <Image src="/assets/bot4.png" alt="" fill className="object-contain p-0.5" />
                                    </div>
                                    <div className="bg-ca-surface2 border border-ca-border px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                                        {[0, 0.18, 0.36].map((d, i) => (
                                            <div key={i} className="w-2 h-2 bg-ca-muted rounded-full animate-bounce" style={{ animationDelay: `${d}s` }} />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Actions / Options */}
                        <div className="p-4 border-t border-ca-border bg-ca-surface2 shrink-0">
                            {currentStep.final ? (
                                <div className="space-y-2">
                                    {/* Pricing note */}
                                    <p className="text-[11px] text-ca-muted text-center mb-3 font-mono">
                                        💡 Todos los precios son bajo cotización personalizada
                                    </p>
                                    <a
                                        href="https://wa.me/525633680348"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/25 transition-colors text-sm font-semibold"
                                    >
                                        <MessageSquare size={16} />
                                        WhatsApp ahora
                                    </a>
                                    <Link
                                        href="/contacto"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-ca-cyan/10 text-ca-cyan border border-ca-cyan/25 hover:bg-ca-cyan/20 transition-colors text-sm font-semibold"
                                    >
                                        <Mail size={15} />
                                        Enviar formulario
                                    </Link>
                                    {currentStep.serviceHref && (
                                        <Link
                                            href={currentStep.serviceHref as '/'}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-ca-border text-ca-muted hover:text-ca-text hover:border-ca-cyan/30 transition-colors text-xs"
                                        >
                                            Ver página del servicio <ChevronRight size={12} />
                                        </Link>
                                    )}
                                    <button
                                        onClick={restart}
                                        className="w-full text-center text-ca-muted/60 hover:text-ca-muted text-xs pt-1 transition-colors"
                                    >
                                        ← Volver al inicio
                                    </button>
                                </div>
                            ) : (
                                !isTyping && currentStep.options && (
                                    <div className="flex flex-col gap-1.5">
                                        {currentStep.options.map((opt, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleOption(opt.next)}
                                                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-ca-dark border border-ca-border text-ca-text text-xs font-medium hover:border-ca-cyan/40 hover:text-ca-cyan hover:bg-ca-cyan/5 transition-all text-left"
                                            >
                                                <span>{opt.label}</span>
                                                <ChevronRight size={13} className="text-ca-muted shrink-0" />
                                            </button>
                                        ))}
                                    </div>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
