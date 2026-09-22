'use client';

import { useEffect, useState } from 'react';
import { Check, Lock, LockOpen, MessageCircle, Loader2 } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { UI, formatMoney } from '@/lib/catalog/ui';
import type { Billing, CatalogLocale, Currency, TierPrice } from '@/lib/catalog/types';
import { cn } from '@/lib/utils';

const TOKEN_KEY = 'ca:pricing-token';
const WHATSAPP = 'https://wa.me/525951145576';

type PublicTier = { id: string; name: string; features: string[] };

type Props = {
    productId: string;
    productName: string;
    locale: CatalogLocale;
    tiers: PublicTier[];
    /** "Desde" público del primer nivel: se ve sin registro. */
    publicFrom: { amount: number; currency: Currency; billing: Billing };
};

type Status = 'locked' | 'submitting' | 'unlocked';

function readToken(): string | null {
    try {
        return window.localStorage.getItem(TOKEN_KEY);
    } catch {
        return null;
    }
}

function writeToken(token: string | null) {
    try {
        if (token) window.localStorage.setItem(TOKEN_KEY, token);
        else window.localStorage.removeItem(TOKEN_KEY);
    } catch {
        // Modo privado o almacenamiento bloqueado: el desbloqueo vale solo para esta vista.
    }
}

function formatTier(price: TierPrice, currency: Currency, locale: CatalogLocale): { main: string; note?: string } {
    const ui = UI[locale];
    if (price.quote) return { main: ui.quote };
    const money = (value: number) => formatMoney(value, currency, locale);
    let main: string;
    if (price.min !== undefined && price.max !== undefined) main = `${money(price.min)} – ${money(price.max)}`;
    else if (price.max !== undefined) main = `${ui.upTo} ${money(price.max)}`;
    else main = `${price.from ? `${ui.from} ` : ''}${money(price.min ?? 0)}`;
    if (price.billing === 'monthly') main += ui.perMonth;

    const notes: string[] = [];
    if (price.billing === 'setup') notes.push(ui.setup);
    if (price.maintenance) notes.push(`${ui.maintenance}: ${money(price.maintenance)}${ui.perMonth}`);
    return { main, note: notes.join(' · ') || undefined };
}

export function PricingGate({ productId, productName, locale, tiers, publicFrom }: Props) {
    const ui = UI[locale];
    const [status, setStatus] = useState<Status>('locked');
    const [prices, setPrices] = useState<Record<string, TierPrice> | null>(null);
    const [currency, setCurrency] = useState<Currency>(publicFrom.currency);
    const [error, setError] = useState<string | null>(null);

    // Si ya desbloqueó precios en otra ficha, el token guardado basta.
    useEffect(() => {
        const token = readToken();
        if (!token) return;
        let cancelled = false;
        fetch('/api/precios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mode: 'token', token, product: productId, locale }),
        })
            .then(async (res) => {
                if (res.status === 401) writeToken(null);
                if (!res.ok) return;
                const data = await res.json();
                if (cancelled) return;
                setPrices(data.prices);
                setCurrency(data.currency);
                setStatus('unlocked');
            })
            .catch(() => {});
        return () => {
            cancelled = true;
        };
    }, [productId, locale]);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = String(form.get('name') ?? '').trim();
        const email = String(form.get('email') ?? '').trim();
        const phone = String(form.get('phone') ?? '').trim();

        if (name.length < 2) return setError(ui.gateErrorName);
        if (!email && !phone) return setError(ui.gateErrorContact);

        setError(null);
        setStatus('submitting');
        try {
            const res = await fetch('/api/precios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    mode: 'lead',
                    product: productId,
                    locale,
                    name,
                    email,
                    phone,
                    _gotcha: String(form.get('_gotcha') ?? ''),
                }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setStatus('locked');
                setError(data.error === 'invalid-contact' ? ui.gateErrorContact : data.error === 'invalid-name' ? ui.gateErrorName : ui.gateErrorGeneric);
                return;
            }
            writeToken(data.token);
            setPrices(data.prices);
            setCurrency(data.currency);
            setStatus('unlocked');
        } catch {
            setStatus('locked');
            setError(ui.gateErrorGeneric);
        }
    }

    const unlocked = status === 'unlocked' && prices;
    const whatsappHref = `${WHATSAPP}?text=${encodeURIComponent(ui.gateWhatsappMessage(productName))}`;
    const publicFromLabel = `${ui.from} ${formatMoney(publicFrom.amount, publicFrom.currency, locale)}${publicFrom.billing === 'monthly' ? ui.perMonth : ''}`;

    return (
        <div>
            <div
                className={cn(
                    'grid gap-4',
                    tiers.length >= 4 ? 'sm:grid-cols-2 xl:grid-cols-4' : tiers.length === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
                )}
            >
                {tiers.map((tier, index) => {
                    const price = unlocked ? prices[tier.id] : undefined;
                    const formatted = price ? formatTier(price, currency, locale) : null;
                    const showPublic = !unlocked && index === 0;
                    return (
                        <div
                            key={tier.id}
                            className={cn(
                                'relative flex flex-col rounded-2xl border p-5 transition-colors',
                                index === 0 ? 'border-ca-cyan/30 bg-ca-cyan/[0.04]' : 'border-ca-border bg-ca-surface/60',
                            )}
                        >
                            <h3 className="font-display font-bold text-lg text-ca-text">{tier.name}</h3>
                            <ul className="mt-3 mb-5 space-y-2 text-sm text-ca-muted">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-2">
                                        <Check size={15} className="mt-0.5 shrink-0 text-ca-cyan" aria-hidden />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto border-t border-white/5 pt-4 min-h-[64px]">
                                {formatted ? (
                                    <>
                                        <p className="font-display font-bold text-xl text-ca-text">{formatted.main}</p>
                                        {formatted.note && <p className="mt-1 text-xs text-ca-muted">{formatted.note}</p>}
                                    </>
                                ) : showPublic ? (
                                    <p className="font-display font-bold text-xl text-ca-text">{publicFromLabel}</p>
                                ) : (
                                    // Barras en lugar de un número falso: el texto de la página lo leen
                                    // buscadores e IAs, y un "$00,000" se interpretaría como precio.
                                    <p className="flex items-center gap-2" role="img" aria-label={ui.locked}>
                                        <Lock size={15} className="text-ca-purple" aria-hidden />
                                        <span className="h-6 w-28 rounded-md bg-gradient-to-r from-ca-muted/40 to-ca-muted/10 blur-[3px]" aria-hidden />
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {unlocked ? (
                <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-ca-success/20 bg-ca-success/[0.05] p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="flex items-center gap-2 font-semibold text-ca-text">
                            <LockOpen size={17} className="text-ca-success" aria-hidden />
                            {ui.gateUnlocked}
                        </p>
                        <p className="mt-1 text-xs text-ca-muted">{ui.referencePrice}</p>
                    </div>
                    <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-5 py-2.5 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
                    >
                        <MessageCircle size={16} aria-hidden />
                        {ui.gateContinueWhatsapp}
                    </a>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="relative mt-5 overflow-hidden rounded-2xl border border-ca-purple/25 bg-gradient-to-br from-ca-purple/[0.08] via-ca-surface/80 to-ca-cyan/[0.05] p-5 md:p-6"
                >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ca-purple/20 blur-3xl" />
                    <div className="relative">
                        <p className="flex items-center gap-2 font-display font-bold text-lg text-ca-text">
                            <Lock size={17} className="text-ca-purple" aria-hidden />
                            {ui.gateTitle}
                        </p>
                        <p className="mt-1 max-w-2xl text-sm text-ca-muted">{ui.gateText}</p>

                        <div className="mt-5 grid gap-3 md:grid-cols-3">
                            <GateInput name="name" label={ui.gateName} autoComplete="name" required />
                            <GateInput name="email" label={ui.gateEmail} type="email" autoComplete="email" />
                            <GateInput name="phone" label={ui.gatePhone} type="tel" autoComplete="tel" />
                        </div>
                        {/* Honeypot: invisible para personas, tentador para bots. */}
                        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
                            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                        </div>
                        <p className="mt-2 text-xs text-ca-muted/80">{ui.gateContactHint}</p>

                        {error && (
                            <p role="alert" className="mt-3 text-sm text-[#FF4D6D]">
                                {error}
                            </p>
                        )}

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-ca-muted">
                                {ui.gatePrivacy}{' '}
                                <Link href="/legal/privacidad" className="text-ca-cyan underline-offset-2 hover:underline">
                                    {ui.gatePrivacyLink}
                                </Link>
                                .
                            </p>
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] disabled:opacity-60"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" aria-hidden />
                                        {ui.gateSubmitting}
                                    </>
                                ) : (
                                    <>
                                        <LockOpen size={16} aria-hidden />
                                        {ui.gateSubmit}
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

function GateInput({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ca-muted">{label}</span>
            <input
                {...props}
                className="w-full rounded-xl border border-ca-border bg-ca-dark/70 px-4 py-2.5 text-sm text-ca-text transition-all placeholder:text-ca-muted/50 focus:border-ca-cyan/50 focus:outline-none focus:ring-1 focus:ring-ca-cyan/30"
            />
        </label>
    );
}
