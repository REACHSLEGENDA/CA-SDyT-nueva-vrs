import { Section } from '@/components/ui/Section';

export default function PrivacyPage() {
    return (
        <Section className="pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Política de Privacidad</h1>
                <div className="prose prose-invert max-w-none text-gray-300">
                    <p className="text-lg leading-relaxed mb-6">
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Información que recopilamos</h2>
                    <p className="mb-4">
                        Recopilamos información que usted nos proporciona directamente, como cuando solicita una cotización, se suscribe a nuestro boletín o se comunica con nosotros. Esta información puede incluir su nombre, correo electrónico, número de teléfono y detalles de su proyecto.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Uso de la información</h2>
                    <p className="mb-4">
                        Utilizamos la información recopilada para:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                        <li>Procesar sus solicitudes y enviarle la información relacionada.</li>
                        <li>Enviarle comunicaciones técnicas, avisos de seguridad y soporte.</li>
                        <li>Comunicarle noticias y promociones de CA Soluciones Digitales.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Protección de datos</h2>
                    <p className="mb-4">
                        Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra el acceso no autorizado, la pérdida o la alteración.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Cookies</h2>
                    <p className="mb-4">
                        Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al navegar por nuestro sitio, usted acepta el uso de cookies de acuerdo con esta política.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contacto</h2>
                    <p className="mb-4">
                        Si tiene preguntas sobre esta política de privacidad, por favor contáctenos en: <a href="mailto:ca.sodiyte@gmail.com" className="text-brand-blue hover:underline">ca.sodiyte@gmail.com</a>
                    </p>
                </div>
            </div>
        </Section>
    );
}
