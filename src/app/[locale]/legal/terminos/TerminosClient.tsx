import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/Section';

export default function TermsPage() {
    const t = useTranslations('TermsPage');
    return (
        <Section className="pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">{t('title')}</h1>
                <div className="prose prose-invert max-w-none text-gray-300">
                    <p className="text-lg leading-relaxed mb-6">
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('h1')}</h2>
                    <p className="mb-4">
                        {t('p1')}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Servicios</h2>
                    <p className="mb-4">
                        {t('p2')}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Propiedad Intelectual</h2>
                    <p className="mb-4">
                        {t('p3')}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('h4')}</h2>
                    <p className="mb-4">
                        {t('p4')}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Modificaciones</h2>
                    <p className="mb-4">
                        {t('p5')}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Ley Aplicable</h2>
                    <p className="mb-4">
                        {t('p6')}
                    </p>
                </div>
            </div>
        </Section>
    );
}
