import { ArrowRight, BookOpen, CalendarClock, Check, ChevronRight, CircleDollarSign, ClipboardList, FileCheck2, Info, MapPin, MessageCircle, Receipt } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getCategory } from '@/lib/catalog/categories';
import { getGuide, guideIn } from '@/lib/catalog/guides';
import { getProduct } from '@/lib/catalog/products';
import { UI, billingLabel, formatFrom } from '@/lib/catalog/ui';
import { productParams } from '@/lib/catalog/urls';
import { CURRENCY_BY_LOCALE, type CatalogLocale, type Product } from '@/lib/catalog/types';
import { HostBubble } from './HostBubble';
import { PricingGate } from './PricingGate';
import { ProductIcon } from './ProductIcon';

/**
 * Valor del <select> de /contacto que corresponde a cada producto. Debe coincidir
 * exactamente con SERVICE_OPTIONS de ContactForm (se envía a Formspree en español).
 */
const CONTACT_SERVICE: Record<string, string> = {
    'pagina-web': 'Desarrollo Web',
    'sistema-web-a-medida': 'Sistema Empresarial a Medida',
    crm: 'Sistema Empresarial a Medida',
    'plataforma-saas': 'Sistema Empresarial a Medida',
    'sistema-de-inventarios': 'Sistema Empresarial a Medida',
    'sistema-de-ventas': 'Sistema Empresarial a Medida',
    'app-movil': 'Aplicación Móvil',
    'gestion-de-redes-sociales': 'Gestión de Redes Sociales',
    'diseno-de-marca': 'Diseño de Marca',
    'seo-local-google-maps': 'Google Business & Maps',
    'seo-web': 'SEO Técnico y AEO',
    'aeo-optimizacion-ia': 'SEO Técnico y AEO',
    'bot-de-whatsapp': 'Bot de WhatsApp con IA',
    'agenda-automatica': 'Automatización e Integraciones IA',
    'pasarelas-de-pago': 'Automatización e Integraciones IA',
    'integraciones-api': 'Automatización e Integraciones IA',
    'inteligencia-artificial-integrada': 'Automatización e Integraciones IA',
    'paquetes-360': 'Despegue Digital',
};

const WHATSAPP = 'https://wa.me/525951145576';

export function ProductArticle({ product, locale }: { product: Product; locale: CatalogLocale }) {
    const ui = UI[locale];
    const c = product.content[locale];
    const category = getCategory(product.category);
    const currency = CURRENCY_BY_LOCALE[locale];
    const fromLabel = formatFrom(product.from.amount[currency], currency, product.from.billing, locale);
    const contactHref = { pathname: '/contacto' as const, query: { servicio: CONTACT_SERVICE[product.id] ?? 'Consultoría' } };
    const whatsappHref = `${WHATSAPP}?text=${encodeURIComponent(ui.gateWhatsappMessage(c.name))}`;
    const guides = product.relatedGuides
        .map((id) => {
            const guide = getGuide(id);
            return guide ? guideIn(guide, locale) : null;
        })
        .filter((item) => item !== null);
    const related = product.relatedProducts.map(getProduct).filter((item) => item !== undefined);

    const nav = [
        { id: 'incluye', label: ui.includes },
        ...(product.tiers ? [{ id: 'precios', label: ui.tiers }] : []),
        { id: 'requisitos', label: ui.inputs },
        { id: 'proceso', label: ui.process },
        { id: 'preguntas', label: ui.faqs },
    ];

    return (
        <article className="pb-24">
            {/* ─── Hero ─────────────────────────────────────────────── */}
            <header className="relative overflow-hidden border-b border-ca-border/60">
                <div className="pointer-events-none absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-ca-cyan/10 blur-[120px]" />
                <div className="pointer-events-none absolute -bottom-40 right-0 h-[380px] w-[380px] rounded-full bg-ca-purple/15 blur-[120px]" />

                <div className="container relative mx-auto px-4 pb-14 pt-10 sm:px-6 md:pb-20 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-ca-muted">
                        <Link href="/" className="hover:text-ca-cyan">{ui.home}</Link>
                        <ChevronRight size={12} aria-hidden />
                        <Link href="/servicios" className="hover:text-ca-cyan">{ui.services}</Link>
                        <ChevronRight size={12} aria-hidden />
                        <Link href={category.landing} className="hover:text-ca-cyan">{category.name[locale]}</Link>
                        <ChevronRight size={12} aria-hidden />
                        <span className="text-ca-text/80">{c.name}</span>
                    </nav>

                    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
                        <div>
                            <Link
                                href={category.landing}
                                className="mb-6 inline-flex items-center gap-2 rounded-full border border-ca-cyan/30 bg-ca-cyan/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ca-cyan hover:bg-ca-cyan/10"
                            >
                                <ProductIcon name={product.icon} size={14} />
                                {category.name[locale]}
                            </Link>
                            <h1 className="font-display text-4xl font-black leading-[1.05] text-ca-text md:text-6xl">
                                {c.name}
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ca-muted">{c.intro}</p>

                            <div className="mt-8 flex flex-wrap items-end gap-x-4 gap-y-2">
                                <p className="font-display text-3xl font-bold text-ca-gradient md:text-4xl">{fromLabel}</p>
                                <span className="mb-1.5 rounded-full border border-ca-border bg-ca-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-ca-muted">
                                    {billingLabel(product.from.billing, locale)}
                                </span>
                            </div>
                            <p className="mt-2 text-xs text-ca-muted/80">{ui.referencePrice}</p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href={contactHref}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-7 py-3.5 font-semibold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                                >
                                    {ui.ctaQuote}
                                    <ArrowRight size={18} aria-hidden />
                                </Link>
                                {product.tiers ? (
                                    <a
                                        href="#precios"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-semibold text-ca-text transition-colors hover:border-ca-cyan/30 hover:bg-white/5"
                                    >
                                        <CircleDollarSign size={18} className="text-ca-cyan" aria-hidden />
                                        {ui.ctaSeePrices}
                                    </a>
                                ) : (
                                    <a
                                        href={whatsappHref}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-7 py-3.5 font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
                                    >
                                        <MessageCircle size={18} aria-hidden />
                                        {ui.ctaWhatsapp}
                                    </a>
                                )}
                            </div>
                        </div>

                        <aside className="rounded-3xl border border-ca-border bg-ca-surface/70 p-6 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                            <HostBubble text={c.hostLine} label={ui.hostName} />
                            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ca-cyan">{ui.quickFacts}</p>
                            <dl className="mt-3 divide-y divide-white/5 text-sm">
                                <Fact icon={<CircleDollarSign size={16} />} label={ui.startingPrice} value={fromLabel} />
                                <Fact icon={<Receipt size={16} />} label={ui.billing} value={billingLabel(product.from.billing, locale)} />
                                <Fact icon={<CalendarClock size={16} />} label={ui.timeline} value={c.timeline ?? ui.timelineByScope} />
                                <Fact icon={<MapPin size={16} />} label={ui.delivery} value={ui.deliveryValue} />
                            </dl>
                        </aside>
                    </div>
                </div>
            </header>

            {/* ─── Navegación interna ───────────────────────────────── */}
            <nav
                aria-label={ui.onThisPage}
                className="sticky top-20 z-20 border-b border-ca-border/60 bg-ca-dark/85 backdrop-blur-xl"
            >
                <div className="container mx-auto flex gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 [scrollbar-width:none]">
                    {nav.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="shrink-0 rounded-full border border-ca-border px-3.5 py-1.5 text-xs font-medium text-ca-muted transition-colors hover:border-ca-cyan/40 hover:text-ca-cyan"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 pt-12 lg:grid-cols-[minmax(0,1fr)_300px]">
                    <div className="min-w-0 space-y-16">
                        {/* Incluye */}
                        <section id="incluye" className="scroll-mt-40">
                            <SectionTitle icon={<Check size={18} />}>{ui.includes}</SectionTitle>
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {c.includes.map((item) => (
                                    <li key={item} className="flex gap-3 rounded-xl border border-ca-border bg-ca-surface/50 p-4 text-sm text-ca-text/90">
                                        <Check size={17} className="mt-0.5 shrink-0 text-ca-cyan" aria-hidden />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Precios */}
                        {product.tiers && (
                            <section id="precios" className="scroll-mt-40">
                                <SectionTitle icon={<CircleDollarSign size={18} />}>{ui.tiers}</SectionTitle>
                                <p className="-mt-3 mb-6 text-sm text-ca-muted">{ui.tiersLockedHint}</p>
                                <PricingGate
                                    productId={product.id}
                                    productName={c.name}
                                    locale={locale}
                                    tiers={product.tiers.map((tier) => ({ id: tier.id, name: tier.name[locale], features: tier.features[locale] }))}
                                    publicFrom={{ amount: product.from.amount[currency], currency, billing: product.from.billing }}
                                />
                            </section>
                        )}

                        {/* Requisitos y entregables */}
                        <section id="requisitos" className="scroll-mt-40 grid gap-5 md:grid-cols-2">
                            <ListCard icon={<ClipboardList size={18} />} title={ui.inputs} items={c.inputs} />
                            <ListCard icon={<FileCheck2 size={18} />} title={ui.deliverables} items={c.deliverables} />
                        </section>

                        {/* Proceso */}
                        <section id="proceso" className="scroll-mt-40">
                            <SectionTitle icon={<ArrowRight size={18} />}>{ui.process}</SectionTitle>
                            <ol className="grid gap-4 md:grid-cols-3">
                                {ui.processSteps.map((step, index) => (
                                    <li key={step.title} className="relative overflow-hidden rounded-2xl border border-ca-border bg-ca-surface/50 p-5">
                                        <span className="absolute -right-2 -top-5 font-display text-7xl font-black text-white/[0.04]" aria-hidden>
                                            {index + 1}
                                        </span>
                                        <p className="font-mono text-[11px] uppercase tracking-widest text-ca-cyan">0{index + 1}</p>
                                        <h3 className="mt-2 font-display text-lg font-bold text-ca-text">{step.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-ca-muted">{step.text}</p>
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-5 flex gap-3 rounded-2xl border border-ca-border bg-ca-surface2/60 p-4 text-sm">
                                <Info size={18} className="mt-0.5 shrink-0 text-ca-mid" aria-hidden />
                                <p className="text-ca-muted">
                                    <strong className="text-ca-text">{ui.notIncluded}.</strong> {ui.notIncludedText}
                                </p>
                            </div>
                        </section>

                        {/* FAQs */}
                        <section id="preguntas" className="scroll-mt-40">
                            <SectionTitle icon={<MessageCircle size={18} />}>{ui.faqs}</SectionTitle>
                            <div className="space-y-3">
                                {c.faqs.map((faq) => (
                                    <details key={faq.question} className="group rounded-2xl border border-ca-border bg-ca-surface/50 open:border-ca-cyan/25">
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-ca-text [&::-webkit-details-marker]:hidden">
                                            <h3 className="text-base">{faq.question}</h3>
                                            <ChevronRight size={18} className="shrink-0 text-ca-muted transition-transform group-open:rotate-90" aria-hidden />
                                        </summary>
                                        <p className="px-5 pb-5 text-sm leading-relaxed text-ca-muted">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        {/* Guías relacionadas */}
                        {guides.length > 0 && (
                            <section>
                                <SectionTitle icon={<BookOpen size={18} />}>{ui.relatedGuides}</SectionTitle>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {guides.map((item) => (
                                        <Link
                                            key={item.guide.id}
                                            href={{ pathname: '/guias/[slug]', params: { slug: item.slug } }}
                                            className="group rounded-2xl border border-ca-border bg-ca-surface/50 p-5 transition-colors hover:border-ca-cyan/30"
                                        >
                                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ca-cyan">{ui.guides}</p>
                                            <p className="mt-2 font-display font-bold text-ca-text">{item.content.title}</p>
                                            <p className="mt-3 inline-flex items-center gap-1 text-xs text-ca-muted group-hover:text-ca-cyan">
                                                {ui.readGuide} <ArrowRight size={13} aria-hidden />
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* ─── Lateral ───────────────────────────────────── */}
                    <aside className="space-y-5 lg:sticky lg:top-40 lg:self-start">
                        <div className="rounded-2xl border border-ca-border bg-ca-surface/70 p-5">
                            <p className="text-xs text-ca-muted">{ui.startingPrice}</p>
                            <p className="mt-1 font-display text-2xl font-bold text-ca-text">{fromLabel}</p>
                            <Link
                                href={contactHref}
                                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-3 text-sm font-semibold text-white"
                            >
                                {ui.ctaQuote}
                                <ArrowRight size={16} aria-hidden />
                            </Link>
                            <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-[#25D366]/25 px-5 py-2.5 text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/10"
                            >
                                <MessageCircle size={16} aria-hidden />
                                {ui.ctaWhatsapp}
                            </a>
                        </div>

                        {related.length > 0 && (
                            <div className="rounded-2xl border border-ca-border bg-ca-surface/50 p-5">
                                <p className="mb-3 text-sm font-semibold text-ca-text">{ui.relatedProducts}</p>
                                <ul className="space-y-1">
                                    {related.map((item) => (
                                        <li key={item.id}>
                                            <Link
                                                href={{ pathname: '/servicios/[categoria]/[slug]', params: productParams(item, locale) }}
                                                className="flex items-center gap-3 rounded-xl p-2 text-sm text-ca-muted transition-colors hover:bg-white/5 hover:text-ca-text"
                                            >
                                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-ca-border bg-ca-surface2 text-ca-cyan">
                                                    <ProductIcon name={item.icon} size={15} />
                                                </span>
                                                <span className="min-w-0 flex-1">{item.content[locale].name}</span>
                                                <ChevronRight size={14} aria-hidden />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={category.landing} className="mt-3 inline-flex items-center gap-1 px-2 text-xs text-ca-cyan hover:underline">
                                    {ui.seeAllServices} <ArrowRight size={12} aria-hidden />
                                </Link>
                            </div>
                        )}
                    </aside>
                </div>

                {/* ─── CTA final ─────────────────────────────────────── */}
                <section className="relative mt-20 overflow-hidden rounded-3xl border border-ca-border bg-ca-surface p-8 text-center md:p-14">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ca-cyan/10 via-transparent to-ca-purple/15" />
                    <div className="relative">
                        <h2 className="font-display text-3xl font-black text-ca-text md:text-4xl">{ui.finalCtaTitle}</h2>
                        <p className="mx-auto mt-4 max-w-xl text-ca-muted">{ui.finalCtaText}</p>
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                href={contactHref}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-7 py-3.5 font-semibold text-white"
                            >
                                {ui.ctaQuote}
                                <ArrowRight size={18} aria-hidden />
                            </Link>
                            <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-7 py-3.5 font-semibold text-[#25D366]"
                            >
                                <MessageCircle size={18} aria-hidden />
                                {ui.ctaWhatsapp}
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    );
}

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex gap-3 py-3">
            <span className="mt-0.5 text-ca-cyan" aria-hidden>{icon}</span>
            <div>
                <dt className="text-xs text-ca-muted">{label}</dt>
                <dd className="mt-0.5 text-ca-text/90">{value}</dd>
            </div>
        </div>
    );
}

function SectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
    return (
        <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-ca-text md:text-3xl">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-ca-cyan/25 bg-ca-cyan/10 text-ca-cyan" aria-hidden>
                {icon}
            </span>
            {children}
        </h2>
    );
}

function ListCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
    return (
        <div className="rounded-2xl border border-ca-border bg-ca-surface/50 p-6">
            <h2 className="mb-4 flex items-center gap-3 font-display text-xl font-bold text-ca-text">
                <span className="text-ca-cyan" aria-hidden>{icon}</span>
                {title}
            </h2>
            <ul className="space-y-2.5">
                {items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-ca-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ca-cyan/70" aria-hidden />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
