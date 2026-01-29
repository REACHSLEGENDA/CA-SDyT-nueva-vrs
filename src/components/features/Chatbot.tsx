'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, RefreshCw, ChevronRight, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type StepId = 'start' | 'services' | 'web' | 'system' | 'app' | 'marketing' | 'automation' | 'web_type' | 'sys_type' | 'marketing_goal' | 'budget' | 'timeline' | 'final' | 'classes' | 'content' | 'quote';

interface Option {
    label: string;
    next: StepId;
}

interface Step {
    id: StepId;
    text: string;
    options?: Option[];
    final?: boolean;
}

const steps: Record<string, Step> = {
    start: {
        id: 'start',
        text: 'Hola, soy tu asistente virtual. ¿Qué necesitas hoy?',
        options: [
            { label: 'Página web', next: 'web' },
            { label: 'Sistema / CRM / POS', next: 'system' },
            { label: 'App móvil', next: 'app' },
            { label: 'Marketing redes', next: 'marketing' },
            { label: 'Automatización & IA', next: 'automation' },
        ]
    },
    // Main Service Flows
    web: {
        id: 'web',
        text: 'Excelente. ¿Para qué tipo de negocio es?',
        options: [
            { label: 'Empresa', next: 'timeline' },
            { label: 'E-commerce', next: 'timeline' },
            { label: 'Personal/Blog', next: 'timeline' }
        ]
    },
    system: {
        id: 'system',
        text: 'Entendido. ¿Qué buscas gestionar?',
        options: [
            { label: 'Inventarios/Ventas', next: 'timeline' },
            { label: 'CRM Clientes', next: 'timeline' },
            { label: 'Recursos Humanos', next: 'timeline' }
        ]
    },
    app: {
        id: 'app',
        text: 'Genial. ¿Para qué plataforma?',
        options: [
            { label: 'Android & iOS', next: 'timeline' },
            { label: 'Solo Android', next: 'timeline' },
            { label: 'Web App (PWA)', next: 'timeline' }
        ]
    },
    marketing: {
        id: 'marketing',
        text: 'Perfecto. ¿Qué objetivo tienes?',
        options: [
            { label: 'Más ventas', next: 'timeline' },
            { label: 'Más seguidores', next: 'timeline' },
            { label: 'Branding', next: 'timeline' }
        ]
    },
    automation: {
        id: 'automation',
        text: 'La IA es el futuro. ¿Qué tarea quieres automatizar?',
        options: [
            { label: 'Chatbots', next: 'timeline' },
            { label: 'Procesos Repetitivos', next: 'timeline' },
            { label: 'Integración APIs', next: 'timeline' }
        ]
    },

    // Legacy keys to prevent crashes if user has old history
    classes: { id: 'classes', text: 'Para clases, contáctanos directamente.', final: true },
    content: { id: 'content', text: 'Entendido.', options: [{ label: 'Continuar', next: 'timeline' }] },

    // Common Flows
    timeline: {
        id: 'timeline',
        text: '¿Para cuándo te gustaría lanzar?',
        options: [
            { label: 'Lo antes posible', next: 'budget' },
            { label: 'En 1 mes', next: 'budget' },
            { label: 'Sin prisa', next: 'budget' }
        ]
    },
    budget: {
        id: 'budget',
        text: 'Gracias. ¿Tienes un presupuesto estimado?',
        options: [
            { label: 'Básico', next: 'final' },
            { label: 'Medio', next: 'final' },
            { label: 'Premium', next: 'final' }
        ]
    },
    quote: { id: 'quote', text: 'Perfecto.', options: [{ label: 'Ver opciones', next: 'final' }] },

    final: {
        id: 'final',
        text: '¡Perfecto! Aquí tienes las mejores opciones para contactarnos:',
        final: true
    }
};

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState<StepId[]>(['start']);
    const [isTyping, setIsTyping] = useState(false);

    // Initial safe check ensures we always have a valid step, falling back to 'start' if history is corrupted
    const currentStepId = history[history.length - 1];
    const currentStep = steps[currentStepId] || steps['start'];

    const scrollRef = useRef<HTMLDivElement>(null);

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
        }, 600);
    };

    const restart = () => {
        setHistory(['start']);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
                {isOpen ? <X size={28} /> : (
                    <div className="relative w-10 h-10">
                        <Image src="/assets/chatbot-icon.png" alt="Bot" fill className="object-cover rounded-full" />
                    </div>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 right-6 z-40 w-[90vw] md:w-[400px] h-[500px] bg-brand-black border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 rounded-full border border-brand-blue/30 overflow-hidden">
                                    <Image src="/assets/chatbot-icon.png" alt="Bot" fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">CA Assistant</h3>
                                    <span className="flex items-center gap-1 text-xs text-brand-blue">
                                        <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button onClick={restart} className="p-2 hover:bg-white/10 rounded-full text-gray-400 transition-colors" title="Reiniciar chat">
                                <RefreshCw size={16} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans custom-scrollbar" ref={scrollRef}>
                            {history.map((stepId, index) => {
                                const step = steps[stepId];
                                // Safety check for map rendering
                                if (!step) return null;

                                return (
                                    <motion.div
                                        key={`${stepId}-${index}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex flex-col items-start gap-2"
                                    >
                                        <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm text-gray-200 leading-relaxed border border-white/5">
                                            {step.text}
                                        </div>
                                    </motion.div>
                                )
                            })}

                            {isTyping && (
                                <div className="flex items-center gap-1 p-3 bg-white/10 rounded-2xl rounded-tl-none w-16">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="p-4 border-t border-white/10 bg-white/5">
                            {currentStep.final ? (
                                <div className="grid grid-cols-1 gap-2">
                                    <a href="https://wa.me/525633680348" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3 rounded-xl bg-green-600/20 text-green-400 hover:bg-green-600/30 transition-colors border border-green-600/30 text-sm font-medium">
                                        <MessageSquare size={16} /> WhatsApp Directo
                                    </a>
                                    <Link href="/contacto" className="flex items-center justify-center gap-2 p-3 rounded-xl bg-brand-blue/20 text-brand-blue hover:bg-brand-blue/30 transition-colors border border-brand-blue/30 text-sm font-medium">
                                        <Send size={16} /> Ir a Contacto
                                    </Link>
                                </div>
                            ) : (
                                !isTyping && (
                                    <div className="flex flex-wrap gap-2 justify-end">
                                        {currentStep.options?.map((opt, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleOption(opt.next)}
                                                className="flex items-center gap-1 px-4 py-2 rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30 text-xs font-medium hover:bg-brand-purple/40 transition-all hover:scale-105"
                                            >
                                                {opt.label} <ChevronRight size={12} />
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
