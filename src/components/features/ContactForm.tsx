'use client';

import { Suspense, useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useSearchParams } from 'next/navigation';
import { Loader2, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';
import { ThinkingOrb } from 'thinking-orbs';
import { playSound } from '@/lib/sound';

// El `value` de cada opcion se manda a Formspree tal cual y se mantiene en espanol,
// para que el equipo lea siempre la misma etiqueta sin importar el idioma del visitante.
// Solo se traduce lo que ve la persona.
const SERVICE_OPTIONS = [
    { group: 'dev', options: [
        'Desarrollo Web',
        'Aplicación Móvil',
        'Sistema Empresarial a Medida',
        'Automatización e Integraciones IA',
        'UI/UX Design',
    ]},
    { group: 'marketing', options: [
        'Gestión de Redes Sociales',
        'SEO Técnico y AEO',
        'Google Business & Maps',
        'Bot de WhatsApp con IA',
        'Diseño de Marca',
    ]},
    { group: 'infra', options: [
        'Redes y Conectividad Profesional',
        'Ciberseguridad y Protección de Datos',
        'Videovigilancia CCTV',
        'Servidores y Nube Privada (NAS/Windows Server)',
        'Soporte Técnico Integral',
    ]},
    { group: 'packages', options: [
        'Despegue Digital',
        'Tráfico y Conversión',
        'Ecosistema Premium IA',
        'Plan TI Empresarial',
    ]},
    { group: 'other', options: ['Consultoría', 'Otro'] },
];

const INPUT_CLASS =
    'w-full bg-ca-surface border border-ca-border rounded-xl px-4 py-3 text-ca-text text-sm ' +
    'focus:outline-none focus:border-ca-cyan/50 focus:ring-1 focus:ring-ca-cyan/30 ' +
    'transition-all placeholder:text-ca-muted/50';

function ContactFormInner() {
    const [state, handleSubmit] = useForm('mpwlzjjo');
    const [isSimulatedSending, setIsSimulatedSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const searchParams = useSearchParams();
    const t = useTranslations('ContactForm');
    const preSelected = searchParams?.get('servicio') ?? '';

    useEffect(() => {
        if (state.succeeded && !isSimulatedSending) {
            setShowSuccess(true);
            playSound('success');
            toast.success(t('toastSuccess'));
        }
        if (state.errors && Object.keys(state.errors).length > 0) {
            toast.error(t('toastError'));
            setIsSimulatedSending(false);
        }
    }, [state.succeeded, state.errors, isSimulatedSending]);

    const handleCustomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSimulatedSending(true);
        setTimeout(() => {
            setIsSimulatedSending(false);
        }, 5000);
        handleSubmit(e);
    };

    if (isSimulatedSending || state.submitting) {
        return (
            <div className="p-10 bg-ca-dark/40 border border-ca-cyan/20 rounded-2xl text-center flex flex-col items-center justify-center min-h-[350px] shadow-[0_0_30px_rgba(0,207,255,0.05)]">
                <ThinkingOrb state="searching" size={64} className="mb-6 opacity-90" />
                <h3 className="text-xl font-bold text-ca-text mb-2 font-display">{t('processingTitle')}</h3>
                <p className="text-ca-muted text-sm max-w-[250px]">
                    {t('processingBody')}
                </p>
            </div>
        );
    }

    if (showSuccess) {
        return (
            <div className="p-8 bg-ca-success/5 border border-ca-success/20 rounded-2xl text-center min-h-[350px] flex flex-col items-center justify-center">
                <CheckCircle2 size={44} className="text-ca-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-ca-text mb-2">{t('successTitle')}</h3>
                <p className="text-ca-muted text-sm max-w-[280px]">
                    {t('successBody')}
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 px-6 py-2.5 bg-ca-success/10 rounded-full text-ca-success text-sm font-semibold hover:bg-ca-success/20 transition-colors"
                >
                    {t('sendAnother')}
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleCustomSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-ca-muted uppercase tracking-wider">
                        {t('name')} *
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className={INPUT_CLASS}
                        placeholder={t('namePlaceholder')}
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs" />
                </div>
                <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-ca-muted uppercase tracking-wider">
                        {t('email')} *
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={INPUT_CLASS}
                        placeholder={t('emailPlaceholder')}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
                </div>
            </div>

            <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-medium text-ca-muted uppercase tracking-wider">
                    {t('phone')}
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={INPUT_CLASS}
                    placeholder={t('phonePlaceholder')}
                />
            </div>

            <div className="space-y-1.5">
                <label htmlFor="service" className="text-xs font-medium text-ca-muted uppercase tracking-wider">
                    {t('service')}
                </label>
                <div className="relative">
                    <select
                        id="service"
                        name="service"
                        defaultValue={preSelected}
                        className={`${INPUT_CLASS} appearance-none cursor-pointer`}
                        style={{ background: 'var(--color-ca-surface)' }}
                    >
                        <option value="">{t('servicePlaceholder')}</option>
                        {SERVICE_OPTIONS.map((group) => (
                            <optgroup key={group.group} label={`── ${t(`groups.${group.group}`)}`}>
                                {group.options.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {t(`options.${opt}`)}
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
                    {t('message')} *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${INPUT_CLASS} resize-none`}
                    placeholder={t('messagePlaceholder')}
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
                    {t('consent')}
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
                {isSimulatedSending || state.submitting ? (
                    <><ThinkingOrb state="searching" size={20} /> {t('sending')}</>
                ) : (
                    t('submit')
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
