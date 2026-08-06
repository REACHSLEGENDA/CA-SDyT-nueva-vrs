import { Section } from '@/components/ui/Section';
import { aeoFaqs } from '@/lib/aeoFaqData';

const copy = {
  eyebrow: 'Respuestas directas',
  title: 'Preguntas frecuentes sobre SEO y AEO',
  subtitle: 'Informaci\u00f3n clara, verificable y sin promesas de posicionamiento garantizado.',
  sources: 'Fuentes t\u00e9cnicas de referencia',
};
const sources = [
  { label: 'Google: optimizaci\u00f3n para b\u00fasqueda con IA', href: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' },
  { label: 'OpenAI: rastreadores y OAI-SearchBot', href: 'https://developers.openai.com/api/docs/bots' },
  { label: 'Propuesta llms.txt', href: 'https://llmstxt.org/' },
];


export function AeoFAQSection() {
  return (
    <Section id="preguntas-aeo" className="border-t border-ca-border">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="font-mono text-xs text-ca-cyan uppercase tracking-widest mb-3">
          {copy.eyebrow}
        </p>
        <h2 className="font-display font-black text-3xl md:text-4xl text-ca-text mb-4">
          {copy.title}
        </h2>
        <p className="text-ca-muted leading-relaxed">
          {copy.subtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3">
        {aeoFaqs.map((faq, index) => (
          <details
            key={faq.question}
            open={index === 0}
            className="group rounded-2xl border border-ca-border bg-ca-surface/40 px-5 py-4"
          >
            <summary className="cursor-pointer list-none font-semibold text-ca-text pr-8 marker:hidden">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm md:text-base text-ca-muted leading-relaxed border-t border-ca-border pt-3">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <nav aria-label={copy.sources} className="max-w-4xl mx-auto mt-8 border-t border-ca-border pt-5">
        <p className="text-xs font-mono uppercase tracking-widest text-ca-muted mb-3">
          {copy.sources}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {sources.map((source) => (
            <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="text-sm text-ca-cyan hover:underline">
              {source.label}
            </a>
          ))}
        </div>
      </nav>
    </Section>
  );
}
