'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, RefreshCw, ChevronRight, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';
import { ThinkingOrb } from 'thinking-orbs';
import { useTranslations } from 'next-intl';

type StepId =
    | 'start'
    | 'grow_options' | 'tech_options' | 'classes_intro' | 'about_intro'
    | 'web' | 'system' | 'system_migration' | 'infra' | 'marketing' | 'automation' | 'packages'
    | 'about_portfolio' | 'about_us_info'
    | 'final_web' | 'final_system' | 'final_infra' | 'final_mkt' | 'final_auto' | 'final_classes' | 'final_pkg';

interface Option {
    label: string;
    next: StepId;
    icon?: string;
}

interface Step {
    id: StepId;
    options?: Option[];
    final?: boolean;
    serviceHref?: string;
}

const steps: Record<string, Step> = {
    start: {
        id: 'start',
        options: [
            { label: '📈 Hacer crecer mi negocio o ventas', next: 'grow_options' },
            { label: '⚙️ Resolver una necesidad técnica o de software', next: 'tech_options' },
            { label: '📚 Capacitación / Clases de informática', next: 'classes_intro' },
            { label: '🏢 Conocer más sobre CA Soluciones', next: 'about_intro' },
        ],
    },

    grow_options: {
        id: 'grow_options',
        options: [
            { label: '🌐 Crear un Sitio Web o App Móvil', next: 'web' },
            { label: '🤖 Automatización de Procesos con IA', next: 'automation' },
            { label: '📈 Posicionamiento SEO y motores de IA (AEO)', next: 'marketing' },
            { label: '📦 Ver Paquetes de Desarrollo Web', next: 'packages' },
            { label: '← Volver al inicio', next: 'start' },
        ],
    },

    tech_options: {
        id: 'tech_options',
        options: [
            { label: '⚙️ Un Sistema a medida (CRM, POS, ERP)', next: 'system' },
            { label: '🔒 Seguridad de Red, Servidores o CCTV', next: 'infra' },
            { label: '💾 Migración de Datos (Excel a Cloud)', next: 'system_migration' },
            { label: '← Volver al inicio', next: 'start' },
        ],
    },

    classes_intro: {
        id: 'classes_intro',
        options: [
            { label: '💻 Ofimática y Computación Básica', next: 'final_classes' },
            { label: '⚡ Desarrollo Web y Programación', next: 'final_classes' },
            { label: '🎨 Marketing Digital y Redes', next: 'final_classes' },
            { label: '← Volver al inicio', next: 'start' },
        ],
    },

    about_intro: {
        id: 'about_intro',
        options: [
            { label: '📂 Ver nuestro Portafolio de proyectos', next: 'about_portfolio' },
            { label: '👥 Conocer sobre nosotros y el equipo', next: 'about_us_info' },
            { label: '← Volver al inicio', next: 'start' },
        ],
    },

    web: {
        id: 'web',
        options: [
            { label: 'Landing page o Sitio corporativo', next: 'final_web' },
            { label: 'Tienda en línea (E-commerce)', next: 'final_web' },
            { label: 'Aplicación Web a medida', next: 'final_web' },
            { label: 'App Móvil (Android & iOS)', next: 'final_web' },
            { label: '← Volver', next: 'grow_options' },
        ],
        serviceHref: '/apps-web',
    },

    system: {
        id: 'system',
        options: [
            { label: 'Embudo de ventas y prospectos (CRM)', next: 'final_system' },
            { label: 'Punto de venta y control de stock (POS)', next: 'final_system' },
            { label: 'Administración de recursos / Nómina (ERP)', next: 'final_system' },
            { label: '← Volver', next: 'tech_options' },
        ],
        serviceHref: '/sistemas',
    },

    system_migration: {
        id: 'system_migration',
        options: [
            { label: 'Bajo (Tablas de Excel o Access)', next: 'final_system' },
            { label: 'Alto (Sistemas antiguos o ERP local)', next: 'final_system' },
            { label: '← Volver', next: 'tech_options' },
        ],
        serviceHref: '/sistemas',
    },

    infra: {
        id: 'infra',
        options: [
            { label: 'Ciberseguridad y protección de red (Firewall)', next: 'final_infra' },
            { label: 'Servidores locales o Nube privada (NAS)', next: 'final_infra' },
            { label: 'CCTV / Cámaras de videovigilancia', next: 'final_infra' },
            { label: '← Volver', next: 'tech_options' },
        ],
        serviceHref: '/infraestructura-ti',
    },

    marketing: {
        id: 'marketing',
        options: [
            { label: 'Aparecer en búsquedas de Google (SEO)', next: 'final_mkt' },
            { label: 'Respuestas de IA (AEO: ChatGPT, Gemini)', next: 'final_mkt' },
            { label: 'Ficha de Google Maps y Negocio Local', next: 'final_mkt' },
            { label: '← Volver', next: 'grow_options' },
        ],
        serviceHref: '/seo-aeo',
    },

    automation: {
        id: 'automation',
        options: [
            { label: 'Bot de WhatsApp inteligente (GPT-4)', next: 'final_auto' },
            { label: 'Conectar sistemas (CRM, Hojas de cálculo, etc.)', next: 'final_auto' },
            { label: 'Automatizar tareas y flujos repetitivos', next: 'final_auto' },
            { label: '← Volver', next: 'grow_options' },
        ],
        serviceHref: '/automatizacion',
    },

    packages: {
        id: 'packages',
        options: [
            { label: '🚀 Plan Despegue Digital (Sitio web corporativo)', next: 'final_pkg' },
            { label: '📊 Plan Tráfico y Conversión (SEO local y campaña)', next: 'final_pkg' },
            { label: '✨ Ecosistema Premium (Web + Bot IA + AEO)', next: 'final_pkg' },
            { label: '← Volver', next: 'grow_options' },
        ],
        serviceHref: '/paquetes-web',
    },

    about_portfolio: {
        id: 'about_portfolio',
        options: [
            { label: '¡Sí, cotizar ahora!', next: 'final_web' },
            { label: '← Volver', next: 'about_intro' },
        ],
        serviceHref: '/portafolio',
    },

    about_us_info: {
        id: 'about_us_info',
        options: [
            { label: '¡Sí, platicar del proyecto!', next: 'final_web' },
            { label: '← Volver', next: 'about_intro' },
        ],
        serviceHref: '/nosotros',
    },

    // ─── Finales con texto contextual ────────────────────────────────────
    final_web: {
        id: 'final_web',
        final: true,
        serviceHref: '/apps-web',
    },
    final_system: {
        id: 'final_system',
        final: true,
        serviceHref: '/sistemas',
    },
    final_infra: {
        id: 'final_infra',
        final: true,
        serviceHref: '/infraestructura-ti',
    },
    final_mkt: {
        id: 'final_mkt',
        final: true,
        serviceHref: '/seo-aeo',
    },
    final_auto: {
        id: 'final_auto',
        final: true,
        serviceHref: '/automatizacion',
    },
    final_classes: {
        id: 'final_classes',
        final: true,
        serviceHref: '/clases',
    },
    final_pkg: {
        id: 'final_pkg',
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
    const t = useTranslations('Chatbot.ui');
    const tSteps = useTranslations('Chatbot.steps');

    // El arbol vive en el codigo (ids, saltos y enlaces); el texto viene de messages/*.json.
    const optionLabels = (stepId: string): string[] => {
        const raw = tSteps.raw(`${stepId}.options`);
        return Array.isArray(raw) ? raw : [];
    };

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
        }, 350); // 350ms por frame para una animación un poco más lenta y fluida
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
            {/* Los frames de la animación están montados dentro del botón principal para evitar peticiones HTTP, por lo que el preloader antiguo ha sido eliminado. */}

            {/* Speech bubble balloon (globito de texto) */}
            <AnimatePresence>
                {isHovered && !isOpen && !isHeroPlaying && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 12 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 12 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="fixed right-30 md:right-40 bottom-[64px] md:bottom-[80px] z-50 bg-ca-surface border border-ca-border px-4 py-2.5 rounded-2xl rounded-br-none shadow-[0_4px_20px_rgba(0,0,0,0.4)] font-mono font-bold text-xs text-ca-cyan tracking-wide whitespace-nowrap pointer-events-none"
                    >
                        ¿Necesitas ayuda?
                        <div className="absolute right-0 bottom-3 translate-x-1/2 rotate-45 w-3 h-3 bg-ca-surface border-r border-b border-ca-border" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger button */}
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    setIsHovered(false);
                }}
                onMouseEnter={() => {
                    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                        setIsHovered(true);
                    }
                }}
                onMouseLeave={() => setIsHovered(false)}
                aria-label={t('open')}
                className={`fixed z-40 transition-all duration-300 hover:scale-110 flex items-center justify-center ${
                    isHeroPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                } ${
                    isOpen 
                        ? 'w-12 h-12 bottom-4 right-6' 
                        : 'w-28 h-28 md:w-36 md:h-36 bottom-5 right-5 md:bottom-6 md:right-6'
                }`}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                        <motion.div
                            key="x"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-12 h-12 rounded-full bg-ca-gradient shadow-[0_0_20px_rgba(0,207,255,0.4)] flex items-center justify-center text-white"
                        >
                            <X size={20} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="icon"
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-28 h-28 md:w-36 md:h-36 filter drop-shadow-[0_4px_12px_rgba(0,207,255,0.3)]"
                        >
                            {/* Optimizamos la animación renderizando todos los frames a la vez.
                                Usamos .webp (~24KB) en vez de .png (~2.7MB) y controlamos visibilidad con CSS.
                                Se agrega unoptimized para que next/image no intercepte estas peticiones. */}
                            {[1, 2, 3, 4].map((f) => {
                                const isCurrentFrame = isHovered ? f === 4 : f === frame;
                                return (
                                    <Image
                                        key={f}
                                        src={`/assets/bot${f}.webp`}
                                        alt={`Bot frame ${f}`}
                                        fill
                                        className={`object-contain transition-opacity duration-75 ${
                                            isCurrentFrame ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        priority
                                        unoptimized
                                    />
                                );
                            })}
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
                        className="fixed bottom-20 right-6 z-40 w-[92vw] md:w-[400px] h-[550px]"
                    >
                        <div className="w-full h-full bg-ca-dark/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,207,255,0.03)] flex flex-col overflow-hidden">
                            {/* Header */}
                        <div className="p-4 border-b border-white/5 bg-white/[0.02] flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 rounded-full border border-ca-cyan/20 overflow-hidden shadow-[0_0_15px_rgba(0,207,255,0.15)]">
                                    <Image src="/assets/chat.webp" alt="CA Bot" fill sizes="40px" className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-sm">Cassie</h3>
                                    <span className="flex items-center gap-1.5 text-[11px] text-ca-cyan">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ca-cyan opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ca-cyan"></span>
                                        </span>
                                        {t('status')}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={restart}
                                title={t('restart')}
                                className="p-2 hover:bg-white/5 rounded-lg text-ca-muted hover:text-ca-cyan transition-colors"
                            >
                                <RefreshCw size={14} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 chatbot-scrollbar" ref={scrollRef}>
                            {history.map((stepId, index) => {
                                const step = steps[stepId];
                                if (!step) return null;
                                return (
                                    <motion.div
                                        key={`${stepId}-${index}`}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-7 h-7 rounded-full overflow-hidden relative shrink-0 mt-0.5 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                                            <Image src="/assets/chat.webp" alt="" fill sizes="28px" className="object-cover" />
                                        </div>
                                        <div className="bg-white/[0.03] border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm text-ca-text leading-relaxed shadow-sm">
                                            {stepId === 'start' && index > 0
                                                ? t('backGreeting')
                                                : tSteps(`${stepId}.text`)
                                            }
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                                    <div className="w-7 h-7 rounded-full overflow-hidden relative shrink-0 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                                        <Image src="/assets/chat.webp" alt="" fill sizes="28px" className="object-cover" />
                                    </div>
                                    <div className="bg-white/[0.03] border border-white/5 px-4 py-2 rounded-2xl rounded-tl-none flex items-center justify-center gap-1.5 shadow-sm text-ca-cyan">
                                        <ThinkingOrb state="composing" size={20} />
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Actions / Options */}
                        <div className="p-5 border-t border-white/5 bg-white/[0.01] shrink-0">
                            {currentStep.final ? (
                                <div className="space-y-2.5">
                                    {/* Pricing note */}
                                    <p className="text-[10px] text-ca-muted text-center mb-3 font-mono tracking-wider">
                                        {t('priceNote')}
                                    </p>
                                    <a
                                        href="https://wa.me/525951145576"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/30 transition-all text-sm font-bold shadow-sm"
                                    >
                                        <MessageSquare size={16} />
                                        {t('whatsapp')}
                                    </a>
                                    <Link
                                        href="/contacto"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-ca-cyan/10 text-ca-cyan border border-ca-cyan/20 hover:bg-ca-cyan/20 hover:border-ca-cyan/30 transition-all text-sm font-bold shadow-sm"
                                    >
                                        <Mail size={15} />
                                        {t('form')}
                                    </Link>
                                    {currentStep.serviceHref && (
                                        <Link
                                            href={currentStep.serviceHref as '/'}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-white/5 text-ca-muted hover:text-ca-text hover:border-ca-cyan/20 hover:bg-white/[0.02] transition-all text-xs"
                                        >
                                            {t('servicePage')} <ChevronRight size={12} className="translate-y-[0.5px]" />
                                        </Link>
                                    )}
                                    <button
                                        onClick={restart}
                                        className="w-full text-center text-ca-muted/60 hover:text-ca-muted text-xs pt-1 transition-colors"
                                    >
                                        {t('backToStart')}
                                    </button>
                                </div>
                            ) : (
                                !isTyping && currentStep.options && (
                                    <div className="flex flex-col gap-2">
                                        {currentStep.options.map((opt, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleOption(opt.next)}
                                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.01] border border-white/5 text-ca-text text-xs font-semibold hover:border-ca-cyan/30 hover:text-ca-cyan hover:bg-ca-cyan/[0.03] transition-all text-left shadow-sm group"
                                            >
                                                <span>{optionLabels(currentStepId)[i] ?? opt.label}</span>
                                                <ChevronRight size={13} className="text-ca-muted group-hover:text-ca-cyan group-hover:translate-x-0.5 transition-all shrink-0" />
                                            </button>
                                        ))}
                                    </div>
                                )
                            )}
                        </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
