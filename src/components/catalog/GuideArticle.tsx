import { ArrowRight, BookOpenCheck, ChevronRight, ExternalLink, Link2, ListChecks, Zap } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getCategory } from '@/lib/catalog/categories';
import { getGuide, guideIn } from '@/lib/catalog/guides';
import { getProduct } from '@/lib/catalog/products';
import { UI, formatFrom } from '@/lib/catalog/ui';
import { productParams } from '@/lib/catalog/urls';
import { CURRENCY_BY_LOCALE, type CatalogLocale, type LocalizedGuide } from '@/lib/catalog/types';
import { HostBubble } from './HostBubble';
import { ProductIcon } from './ProductIcon';

function formatDate(date: string, locale: CatalogLocale) {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'es-MX', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(new Date(`${date}T00:00:00Z`));
}

export function GuideArticle({ entry, locale }: { entry: LocalizedGuide; locale: CatalogLocale }) {
    const ui = UI[locale];
    const { guide, content: c } = entry;
    const currency = CURRENCY_BY_LOCALE[locale];
    const products = guide.relatedProducts.map(getProduct).filter((item) => item !== undefined);
    const mainProduct = products[0];
    // Sin ficha de producto (infraestructura, clases) la llamada a la acción lleva
    // a la página del servicio.
    const category = getCategory(guide.category);
    const ctaHref = mainProduct
        ? { pathname: '/servicios/[categoria]/[slug]' as const, params: productParams(mainProduct, locale) }
        : category.landing;
    const ctaLabel = mainProduct ? ui.viewProduct : ui.seeServices;
    // Solo las guías relacionadas que existen en este idioma.
    const relatedGuides = guide.relatedGuides
        .map((id) => {
            const related = getGuide(id);
            return related ? guideIn(related, locale) : null;
        })
        .filter((item) => item !== null);

    const toc = [
        { id: 'respuesta-rapida', label: ui.quickAnswer },
        { id: 'datos-clave', label: ui.keyFacts },
        ...c.sections.map((section) => ({ id: section.id, label: section.title })),
        { id: 'preguntas', label: ui.faqs },
        ...(c.sources.length > 0 ? [{ id: 'fuentes', label: ui.sources }] : []),
    ];

    return (
        <article className="pb-24">
            <header className="relative overflow-hidden border-b border-ca-border/60">
                <div className="pointer-events-none absolute -top-40 right-1/4 h-[420px] w-[420px] rounded-full bg-ca-purple/15 blur-[120px]" />
                <div className="container relative mx-auto px-4 pb-12 pt-10 sm:px-6 md:pb-16 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-ca-muted">
                        <Link href="/" className="hover:text-ca-cyan">{ui.home}</Link>
                        <ChevronRight size={12} aria-hidden />
                        <Link href="/guias" className="hover:text-ca-cyan">{ui.guides}</Link>
                        <ChevronRight size={12} aria-hidden />
                        <span className="text-ca-text/80">{c.shortTitle}</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="mb-6 flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-ca-purple/30 bg-ca-purple/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#B98CFF]">
                                {c.badge}
                            </span>
                            <span className="text-xs text-ca-muted">
                                {ui.updated}: <time dateTime={guide.dateModified}>{formatDate(guide.dateModified, locale)}</time>
                            </span>
                        </div>
                        <h1 className="font-display text-4xl font-black leading-[1.08] text-ca-text md:text-6xl">{c.title}</h1>
                        <HostBubble text={c.hostLine} label={ui.hostName} className="mt-8 max-w-2xl" />
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 pt-12 lg:grid-cols-[240px_minmax(0,1fr)]">
                    {/* Índice */}
                    <aside className="hidden lg:block">
                        <nav aria-label={ui.onThisGuide} className="sticky top-28">
                            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ca-cyan">{ui.onThisGuide}</p>
                            <ol className="space-y-1 border-l border-ca-border">
                                {toc.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm leading-snug text-ca-muted transition-colors hover:border-ca-cyan hover:text-ca-text"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </aside>

                    <div className="min-w-0 max-w-3xl">
                        {/* Respuesta rápida */}
                        <section
                            id="respuesta-rapida"
                            className="scroll-mt-28 relative overflow-hidden rounded-2xl border border-ca-cyan/25 bg-gradient-to-br from-ca-cyan/[0.09] to-ca-surface/60 p-6 md:p-8"
                        >
                            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ca-cyan">
                                <Zap size={14} aria-hidden />
                                {ui.quickAnswer}
                            </p>
                            <p className="mt-4 text-lg leading-relaxed text-ca-text md:text-xl">{c.quickAnswer}</p>
                        </section>

                        {/* Datos clave */}
                        <section id="datos-clave" className="scroll-mt-28 mt-10">
                            <h2 className="mb-4 flex items-center gap-3 font-display text-2xl font-bold text-ca-text">
                                <ListChecks size={20} className="text-ca-cyan" aria-hidden />
                                {ui.keyFacts}
                            </h2>
                            <div className="overflow-hidden rounded-2xl border border-ca-border">
                                <table className="w-full text-left text-sm">
                                    <tbody className="divide-y divide-ca-border">
                                        {c.keyFacts.map((row) => (
                                            <tr key={row.label} className="align-top odd:bg-ca-surface/40">
                                                <th scope="row" className="w-2/5 px-4 py-3 font-semibold text-ca-text">{row.label}</th>
                                                <td className="px-4 py-3 text-ca-muted">{row.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Secciones */}
                        {c.sections.map((section, index) => (
                            <section key={section.id} id={section.id} className="scroll-mt-28 mt-12 border-t border-ca-border/60 pt-10">
                                <h2 className="font-display text-2xl font-bold leading-snug text-ca-text md:text-3xl">{section.title}</h2>
                                <div className="mt-4 space-y-4 text-base leading-8 text-ca-muted">
                                    {section.paragraphs.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                                {section.bullets && (
                                    <ul className="mt-5 space-y-2.5">
                                        {section.bullets.map((bullet) => (
                                            <li key={bullet} className="flex gap-3 text-ca-text/85">
                                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ca-cyan" aria-hidden />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* CTA intermedio, a mitad de la guía */}
                                {index === 1 && (
                                    <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-ca-purple/25 bg-ca-purple/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between">
                                        <p className="font-semibold text-ca-text">{c.midCta}</p>
                                        <Link
                                            href={ctaHref}
                                            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-2.5 text-sm font-semibold text-white"
                                        >
                                            {ctaLabel}
                                            <ArrowRight size={16} aria-hidden />
                                        </Link>
                                    </div>
                                )}
                            </section>
                        ))}

                        {/* FAQs */}
                        <section id="preguntas" className="scroll-mt-28 mt-12 border-t border-ca-border/60 pt-10">
                            <h2 className="mb-6 font-display text-2xl font-bold text-ca-text md:text-3xl">{ui.faqs}</h2>
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

                        {/* Productos relacionados */}
                        {products.length > 0 && (
                            <section className="mt-12 border-t border-ca-border/60 pt-10">
                                <h2 className="mb-6 flex items-center gap-3 font-display text-xl font-bold text-ca-text">
                                    <Link2 size={18} className="text-ca-cyan" aria-hidden />
                                    {ui.relatedProducts}
                                </h2>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    {products.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={{ pathname: '/servicios/[categoria]/[slug]', params: productParams(item, locale) }}
                                            className="group rounded-2xl border border-ca-border bg-ca-surface/50 p-4 transition-colors hover:border-ca-cyan/30"
                                        >
                                            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ca-border bg-ca-surface2 text-ca-cyan">
                                                <ProductIcon name={item.icon} size={17} />
                                            </span>
                                            <p className="mt-3 text-sm font-semibold text-ca-text">{item.content[locale].name}</p>
                                            <p className="mt-1 text-xs text-ca-muted">
                                                {formatFrom(item.from.amount[currency], currency, item.from.billing, locale)}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {relatedGuides.length > 0 && (
                            <section className="mt-10">
                                <h2 className="mb-4 flex items-center gap-3 font-display text-xl font-bold text-ca-text">
                                    <BookOpenCheck size={18} className="text-ca-cyan" aria-hidden />
                                    {ui.relatedGuides}
                                </h2>
                                <ul className="space-y-2">
                                    {relatedGuides.map((item) => (
                                        <li key={item.guide.id}>
                                            <Link
                                                href={{ pathname: '/guias/[slug]', params: { slug: item.slug } }}
                                                className="inline-flex items-center gap-2 text-ca-cyan hover:underline"
                                            >
                                                {item.content.title}
                                                <ArrowRight size={14} aria-hidden />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Fuentes */}
                        {c.sources.length > 0 && (
                        <section id="fuentes" className="scroll-mt-28 mt-12 border-t border-ca-border/60 pt-10">
                            <h2 className="mb-4 font-display text-xl font-bold text-ca-text">{ui.sources}</h2>
                            <ul className="space-y-2">
                                {c.sources.map((source) => (
                                    <li key={source.url}>
                                        <a
                                            href={source.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-start gap-2 text-sm text-ca-muted hover:text-ca-cyan"
                                        >
                                            <ExternalLink size={14} className="mt-0.5 shrink-0" aria-hidden />
                                            {source.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-xs text-ca-muted/70">{ui.sourcesNote}</p>
                        </section>
                        )}

                        {/* CTA final */}
                        {(
                            <section className="relative mt-14 overflow-hidden rounded-3xl border border-ca-border bg-ca-surface p-8 md:p-10">
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ca-cyan/10 via-transparent to-ca-purple/15" />
                                <div className="relative">
                                    <h2 className="font-display text-2xl font-black text-ca-text md:text-3xl">{c.finalCta}</h2>
                                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                        <Link
                                            href={ctaHref}
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 font-semibold text-white"
                                        >
                                            {ctaLabel}
                                            <ArrowRight size={17} aria-hidden />
                                        </Link>
                                        <Link
                                            href="/contacto"
                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-ca-text hover:bg-white/5"
                                        >
                                            {ui.ctaQuote}
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
