'use client';

import { Suspense, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useSearchParams } from 'next/navigation';
import { Loader2, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

const SERVICE_OPTIONS = [
    { group: 'Desarrollo Digital', options: [
        'Desarrollo Web',
        'Aplicación Móvil',
        'Sistema Empresarial a Medida',
        'Automatización e Integraciones IA',
        'UI/UX Design',
    ]},
    { group: 'Marketing Digital', options: [
        'Gestión de Redes Sociales',
        'SEO Técnico y AEO',
        'Google Business & Maps',
        'Bot de WhatsApp con IA',
        'Diseño de Marca',
    ]},
    { group: 'Infraestructura TI', options: [
        'Redes y Conectividad Profesional',
        'Ciberseguridad y Protección de Datos',
        'Videovigilancia CCTV',
        'Servidores y Nube Privada (NAS/Windows Server)',
        'Soporte Técnico Integral',
    ]},
    { group: 'Paquetes', options: [
        'Despegue Digital',
        'Tráfico y Conversión',
        'Ecosistema Premium IA',
        'Plan TI Empresarial',
    ]},
    { group: 'Otro', options: ['Consultoría', 'Otro'] },
];

const INPUT_CLASS =
    'w-full bg-ca-surface border border-ca-border rounded-xl px-4 py-3 text-ca-text text-sm ' +
    'focus:outline-none focus:border-ca-cyan/50 focus:ring-1 focus:ring-ca-cyan/30 ' +
    'transition-all placeholder:text-ca-muted/50';

function ContactFormInner() {
    const [state, handleSubmit] = useForm('mpwlzjjo');
    const searchParams = useSearchParams();
    const preSelected = searchParams?.get('servicio') ?? '';

    useEffect(() => {
        if (state.succeeded) {
            toast.success('¡Mensaje enviado! Te contactamos en menos de 2 horas.');
        }
        if (state.errors && Object.keys(state.errors).length > 0) {
            toast.error('Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.');
        }
    }, [state.succeeded, state.errors]);

    if (state.succeeded) {
        return (
            <div className="p-8 bg-ca-success/5 border border-ca-success/20 rounded-2xl text-center">
                <CheckCircle2 size={40} className="text-ca-success mx-auto mb-3" />
                <h3 className="text-xl font-bold text-ca-text mb-1">¡Mensaje enviado!</h3>
                <p className="text-ca-muted text-sm">
                    Te responderemos en menos de 2 horas a tu correo o WhatsApp.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-5 text-ca-cyan text-sm font-medium hover:underline"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-ca-muted uppercase tracking-wider">
                        Nombre *
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className={INPUT_CLASS}
                        placeholder="Tu nombre completo"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs" />
                </div>
                <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-ca-muted uppercase tracking-wider">
                        Email *
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={INPUT_CLASS}
                        placeholder="tucorreo@empresa.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
                </div>
            </div>

            <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-medium text-ca-muted uppercase tracking-wider">
                    Teléfono (opcional)
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={INPUT_CLASS}
                    placeholder="+52 55 ..."
                />
            </div>

            <div className="space-y-1.5">
                <label htmlFor="service" className="text-xs font-medium text-ca-muted uppercase tracking-wider">
                    Servicio de interés
                </label>
                <div className="relative">
                    <select
                        id="service"
                        name="service"
                        defaultValue={preSelected}
                        className={`${INPUT_CLASS} appearance-none cursor-pointer`}
                        style={{ background: 'var(--color-ca-surface)' }}
                    >
                        <option value="">Selecciona un servicio...</option>
                        {SERVICE_OPTIONS.map((group) => (
                            <optgroup key={group.group} label={`── ${group.group}`}>
                                {group.options.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ca-muted">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-ca-muted uppercase tracking-wider">
                    Mensaje *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${INPUT_CLASS} resize-none`}
                    placeholder="Cuéntanos más sobre tu proyecto o necesidad..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs" />
            </div>

            <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 mt-0.5 rounded border-ca-border bg-ca-surface accent-ca-cyan cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-ca-muted cursor-pointer select-none leading-relaxed">
                    Acepto compartir mis datos para que CA Soluciones me contacte respecto a este servicio.
                </label>
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3.5 rounded-xl bg-ca-gradient text-white font-semibold text-sm
                           hover:opacity-90 hover:scale-[1.01] transition-all duration-200
                           shadow-lg shadow-ca-cyan/20 disabled:opacity-60 disabled:pointer-events-none
                           flex items-center justify-center gap-2"
            >
                {state.submitting ? (
                    <><Loader2 size={16} className="animate-spin" /> Enviando...</>
                ) : (
                    'Enviar mensaje →'
                )}
            </button>
        </form>
    );
}

export function ContactForm() {
    return (
        <Suspense fallback={
            <div className="animate-pulse space-y-5">
                <div className="grid grid-cols-2 gap-5">
                    <div className="h-12 bg-ca-surface rounded-xl" />
                    <div className="h-12 bg-ca-surface rounded-xl" />
                </div>
                <div className="h-12 bg-ca-surface rounded-xl" />
                <div className="h-12 bg-ca-surface rounded-xl" />
                <div className="h-28 bg-ca-surface rounded-xl" />
                <div className="h-12 bg-ca-gradient rounded-xl opacity-60" />
            </div>
        }>
            <ContactFormInner />
        </Suspense>
    );
}
