import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/Section';

export default function PrivacyPage() {
    const t = useTranslations('PrivacyPage');
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

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('h2')}</h2>
                    <p className="mb-4">
                        {t('p2')}
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                        <li>{t('l1')}</li>
                        <li>{t('l2')}</li>
                        <li>{t('l3')}</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('h3')}</h2>
                    <p className="mb-4">
                        {t('p3')}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Cookies</h2>
                    <p className="mb-4">
                        {t('p4')}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contacto</h2>
                    <p className="mb-4">
                        {t('p5')} <a href="mailto:contacto@casolutecdigital.com" className="text-brand-blue hover:underline">contacto@casolutecdigital.com</a>
                    </p>
                </div>
            </div>
        </Section>
    );
}
