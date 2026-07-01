import { Section } from '@/components/ui/Section';

export default function TermsPage() {
    return (
        <Section className="pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Términos y Condiciones</h1>
                <div className="prose prose-invert max-w-none text-gray-300">
                    <p className="text-lg leading-relaxed mb-6">
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Aceptación de los términos</h2>
                    <p className="mb-4">
                        Al acceder y utilizar el sitio web y los servicios de CA Soluciones Digitales, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Servicios</h2>
                    <p className="mb-4">
                        Ofrecemos servicios de desarrollo de software, aplicaciones móviles, diseño web y consultoría tecnológica. Los detalles específicos, plazos y costos de cada proyecto se definirán en un contrato de servicio individual.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Propiedad Intelectual</h2>
                    <p className="mb-4">
                        Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad de CA Soluciones Digitales o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitación de Responsabilidad</h2>
                    <p className="mb-4">
                        En ningún caso CA Soluciones Digitales será responsable por daños indirectos, incidentales, especiales o consecuentes que surjan del uso o la imposibilidad de uso de nuestros servicios.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Modificaciones</h2>
                    <p className="mb-4">
                        Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Ley Aplicable</h2>
                    <p className="mb-4">
                        Estos términos se regirán e interpretarán de acuerdo con las leyes de México. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales competentes.
                    </p>
                </div>
            </div>
        </Section>
    );
}
