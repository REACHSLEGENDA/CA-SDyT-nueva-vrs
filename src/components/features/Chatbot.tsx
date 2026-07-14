'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, RefreshCw, ChevronRight, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';

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
    text: string;
    options?: Option[];
    final?: boolean;
    serviceHref?: string;
}

const steps: Record<string, Step> = {
    start: {
        id: 'start',
        text: '¡Hola! Soy Cassie, tu asistente digital en CA Soluciones y Tecnología. 🤖✨ Estoy aquí para ayudarte a diseñar el ecosistema tecnológico de tu negocio. ¿En qué puedo apoyarte hoy?',
        options: [
            { label: '📈 Hacer crecer mi negocio o ventas', next: 'grow_options' },
            { label: '⚙️ Resolver una necesidad técnica o de software', next: 'tech_options' },
            { label: '📚 Capacitación / Clases de informática', next: 'classes_intro' },
            { label: '🏢 Conocer más sobre CA Soluciones', next: 'about_intro' },
        ],
    },

    grow_options: {
        id: 'grow_options',
        text: '¡Excelente decisión! Para impulsar tus ventas y presencia, contamos con varios frentes digitales. ¿Qué área te interesa fortalecer?',
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
        text: 'Entendido. En la parte técnica, ayudamos a que tu negocio opere de manera segura, rápida y sin interrupciones. ¿Qué requiere tu empresa?',
        options: [
            { label: '⚙️ Un Sistema a medida (CRM, POS, ERP)', next: 'system' },
            { label: '🔒 Seguridad de Red, Servidores o CCTV', next: 'infra' },
            { label: '💾 Migración de Datos (Excel a Cloud)', next: 'system_migration' },
            { label: '← Volver al inicio', next: 'start' },
        ],
    },

    classes_intro: {
        id: 'classes_intro',
        text: '¡Súper! Ofrecemos capacitación personalizada para que tú o tu equipo dominen las herramientas clave. ¿En qué área deseas especializarte?',
        options: [
            { label: '💻 Ofimática y Computación Básica', next: 'final_classes' },
            { label: '⚡ Desarrollo Web y Programación', next: 'final_classes' },
            { label: '🎨 Marketing Digital y Redes', next: 'final_classes' },
            { label: '← Volver al inicio', next: 'start' },
        ],
    },

    about_intro: {
        id: 'about_intro',
        text: 'Somos una agencia digital con sede en México atendiendo clientes en toda Latinoamérica. Nos especializamos en desarrollo web, apps, CRM, automatización de WhatsApp con IA y soporte de infraestructura TI. ¿Qué te gustaría explorar?',
        options: [
            { label: '📂 Ver nuestro Portafolio de proyectos', next: 'about_portfolio' },
            { label: '👥 Conocer sobre nosotros y el equipo', next: 'about_us_info' },
            { label: '← Volver al inicio', next: 'start' },
        ],
    },

    web: {
        id: 'web',
        text: '¡Perfecto! Desarrollamos con tecnologías robustas como Next.js, React y Flutter para apps móviles. ¿Qué tipo de plataforma necesitas?',
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
        text: 'Diseñamos sistemas desde cero con Supabase y Node.js para erradicar cuellos de botella. ¿Qué necesitas digitalizar?',
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
        text: 'Modernizamos bases de datos legacy o tablas de Excel hacia bases de datos cloud seguras y centralizadas. ¿Qué volumen de datos manejas?',
        options: [
            { label: 'Bajo (Tablas de Excel o Access)', next: 'final_system' },
            { label: 'Alto (Sistemas antiguos o ERP local)', next: 'final_system' },
            { label: '← Volver', next: 'tech_options' },
        ],
        serviceHref: '/sistemas',
    },

    infra: {
        id: 'infra',
        text: 'Instalamos y configuramos firewalls Fortinet, almacenamiento Synology NAS y servidores seguros. ¿Qué requiere tu espacio?',
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
        text: 'Hoy en día no basta con aparecer en Google; también optimizamos para respuestas de IA (ChatGPT, Gemini, Perplexity). ¿En qué te enfocas?',
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
        text: 'La automatización con IA (n8n, Make) reduce hasta un 80% el tiempo operativo. ¿Cuál es tu prioridad?',
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
        text: 'Contamos con planes fijos llave en mano ideales para lanzar tu negocio rápido. ¿Cuál te interesa evaluar?',
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
        text: '¡Genial! Hemos desarrollado plataformas de e-commerce, sitios de marcas internacionales y automatizaciones empresariales. Puedes verlos en detalle en nuestra sección de Portafolio. ¿Te gustaría cotizar?',
        options: [
            { label: '¡Sí, cotizar ahora!', next: 'final_web' },
            { label: '← Volver', next: 'about_intro' },
        ],
        serviceHref: '/portafolio',
    },

    about_us_info: {
        id: 'about_us_info',
        text: 'En CA Soluciones nos apasiona crear software robusto, escalable y limpio. Nos basamos en la transparencia y calidad técnica. ¿Quieres cotizar un proyecto con nosotros?',
        options: [
            { label: '¡Sí, platicar del proyecto!', next: 'final_web' },
            { label: '← Volver', next: 'about_intro' },
        ],
        serviceHref: '/nosotros',
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
            {/* Preloader de imágenes para evitar trabas en la animación */}
            <div className="sr-only select-none pointer-events-none opacity-0 w-0 h-0 overflow-hidden">
                <Image src="/assets/bot1.png" alt="" width={1} height={1} priority />
                <Image src="/assets/bot2.png" alt="" width={1} height={1} priority />
                <Image src="/assets/bot3.png" alt="" width={1} height={1} priority />
                <Image src="/assets/bot4.png" alt="" width={1} height={1} priority />
            </div>

            {/* Speech bubble balloon (globito de texto) */}
            <AnimatePresence>
                {isHovered && !isOpen && !isHeroPlaying && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 12 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 12 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="fixed right-30 bottom-[64px] z-50 bg-ca-surface border border-ca-border px-4 py-2.5 rounded-2xl rounded-br-none shadow-[0_4px_20px_rgba(0,0,0,0.4)] font-mono font-bold text-xs text-ca-cyan tracking-wide whitespace-nowrap pointer-events-none"
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
                className={`fixed z-40 transition-all duration-300 hover:scale-110 flex items-center justify-center ${
                    isHeroPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                style={{ 
                    width: isOpen ? '48px' : '112px', 
                    height: isOpen ? '48px' : '112px',
                    bottom: isOpen ? '16px' : '20px',
                    right: isOpen ? '24px' : '20px'
                }}
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
                            className="relative w-28 h-28 filter drop-shadow-[0_4px_12px_rgba(0,207,255,0.3)]"
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
                        className="fixed bottom-20 right-6 z-40 w-[92vw] md:w-[400px] h-[550px] bg-ca-dark/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,207,255,0.03)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 bg-white/[0.02] flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 rounded-full border border-ca-cyan/20 overflow-hidden shadow-[0_0_15px_rgba(0,207,255,0.15)]">
                                    <Image src="/assets/chat.jpeg" alt="CA Bot" fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-sm">Cassie</h3>
                                    <span className="flex items-center gap-1.5 text-[11px] text-ca-cyan">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ca-cyan opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ca-cyan"></span>
                                        </span>
                                        En línea
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={restart}
                                title="Reiniciar"
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
                                            <Image src="/assets/chat.jpeg" alt="" fill className="object-cover" />
                                        </div>
                                        <div className="bg-white/[0.03] border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm text-ca-text leading-relaxed shadow-sm">
                                            {stepId === 'start' && index > 0
                                                ? '¡De vuelta al menú principal! ¿Qué otra área del ecosistema tecnológico de tu negocio te gustaría explorar o cotizar hoy?'
                                                : step.text
                                            }
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                                    <div className="w-7 h-7 rounded-full overflow-hidden relative shrink-0 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                                        <Image src="/assets/chat.jpeg" alt="" fill className="object-cover" />
                                    </div>
                                    <div className="bg-white/[0.03] border border-white/5 px-4 py-3.5 rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-sm">
                                        {[0, 0.18, 0.36].map((d, i) => (
                                            <div key={i} className="w-1.5 h-1.5 bg-ca-cyan/60 rounded-full animate-bounce" style={{ animationDelay: `${d}s` }} />
                                        ))}
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
                                        💡 Todos los precios son bajo cotización personalizada
                                    </p>
                                    <a
                                        href="https://wa.me/525633680348"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/30 transition-all text-sm font-bold shadow-sm"
                                    >
                                        <MessageSquare size={16} />
                                        WhatsApp ahora
                                    </a>
                                    <Link
                                        href="/contacto"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-ca-cyan/10 text-ca-cyan border border-ca-cyan/20 hover:bg-ca-cyan/20 hover:border-ca-cyan/30 transition-all text-sm font-bold shadow-sm"
                                    >
                                        <Mail size={15} />
                                        Enviar formulario
                                    </Link>
                                    {currentStep.serviceHref && (
                                        <Link
                                            href={currentStep.serviceHref as '/'}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-white/5 text-ca-muted hover:text-ca-text hover:border-ca-cyan/20 hover:bg-white/[0.02] transition-all text-xs"
                                        >
                                            Ver página del servicio <ChevronRight size={12} className="translate-y-[0.5px]" />
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
                                    <div className="flex flex-col gap-2">
                                        {currentStep.options.map((opt, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleOption(opt.next)}
                                                className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.01] border border-white/5 text-ca-text text-xs font-semibold hover:border-ca-cyan/30 hover:text-ca-cyan hover:bg-ca-cyan/[0.03] transition-all text-left shadow-sm group"
                                            >
                                                <span>{opt.label}</span>
                                                <ChevronRight size={13} className="text-ca-muted group-hover:text-ca-cyan group-hover:translate-x-0.5 transition-all shrink-0" />
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
