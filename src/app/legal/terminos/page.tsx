import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Términos y Condiciones | CA Soluciones Digitales',
    description: 'Términos y condiciones de uso del sitio web y servicios de CA Soluciones Digitales y Tecnológicas.',
};

const LAST_UPDATE = '22 de junio de 2025';
const COMPANY    = 'CA | Soluciones Digitales y Tecnológicas';
const EMAIL      = 'ca.sodiyte@gmail.com';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-10">
            <h2 className="font-display text-xl font-bold text-ca-text mb-4 pb-2 border-b border-ca-border">
                {title}
            </h2>
            <div className="text-ca-muted text-sm leading-relaxed space-y-3">{children}</div>
        </div>
    );
}

export default function TerminosPage() {
    return (
        <div className="min-h-screen bg-ca-dark">
            {/* Header */}
            <div className="bg-ca-surface border-b border-ca-border py-12">
                <div className="max-w-3xl mx-auto px-6">
                    <span className="font-mono text-xs text-ca-cyan border border-ca-cyan/30 bg-ca-cyan/8 px-3 py-1.5 rounded-full inline-block mb-4">
                        Legal
                    </span>
                    <h1 className="font-display text-4xl font-black text-ca-text mb-3">
                        Términos y Condiciones
                    </h1>
                    <p className="text-ca-muted text-sm">
                        Última actualización: <span className="text-ca-text">{LAST_UPDATE}</span>
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-14">

                <Section title="1. Aceptación de los términos">
                    <p>
                        Al acceder y utilizar el sitio web de <strong className="text-ca-text">{COMPANY}</strong> (en adelante "CA"), o al contratar cualquiera de nuestros servicios, el usuario acepta quedar vinculado por los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de los términos aquí establecidos, te pedimos que no utilices el sitio ni contrates nuestros servicios.
                    </p>
                </Section>

                <Section title="2. Descripción de los servicios">
                    <p>CA ofrece, de manera enunciativa mas no limitativa, los siguientes servicios:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Desarrollo de sitios web, aplicaciones web y móviles</li>
                        <li>Sistemas empresariales a medida (CRM, ERP, inventarios)</li>
                        <li>Infraestructura TI: redes, ciberseguridad, CCTV, servidores y soporte técnico</li>
                        <li>Automatización de procesos e Inteligencia Artificial</li>
                        <li>Marketing digital, SEO y AEO (Answer Engine Optimization)</li>
                        <li>Clases de cómputo y capacitación tecnológica</li>
                    </ul>
                    <p>Todos los precios de los servicios son <strong className="text-ca-text">bajo cotización personalizada</strong>. CA emitirá una propuesta económica formal previa a la formalización de cualquier proyecto.</p>
                </Section>

                <Section title="3. Proceso de contratación">
                    <p>El proceso de contratación de servicios de CA se realiza de la siguiente manera:</p>
                    <ol className="list-decimal list-inside space-y-2 pl-2">
                        <li><strong className="text-ca-text">Solicitud:</strong> el cliente presenta su requerimiento por cualquier canal de contacto (formulario, WhatsApp, correo electrónico)</li>
                        <li><strong className="text-ca-text">Propuesta:</strong> CA emite una propuesta técnica y económica detallada</li>
                        <li><strong className="text-ca-text">Aceptación:</strong> el cliente confirma la propuesta de forma escrita (correo electrónico o mensaje)</li>
                        <li><strong className="text-ca-text">Anticipo:</strong> se solicita un anticipo del porcentaje acordado para iniciar el proyecto</li>
                        <li><strong className="text-ca-text">Desarrollo y entrega:</strong> CA ejecuta el proyecto según los términos pactados</li>
                        <li><strong className="text-ca-text">Liquidación:</strong> el saldo restante se cubre al momento de la entrega o según el calendario de pagos acordado</li>
                    </ol>
                </Section>

                <Section title="4. Obligaciones del cliente">
                    <p>El cliente se compromete a:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Proporcionar información veraz, completa y oportuna para el desarrollo del proyecto</li>
                        <li>Entregar materiales (textos, imágenes, logos, accesos) en los tiempos acordados</li>
                        <li>Realizar los pagos conforme a los plazos pactados</li>
                        <li>Designar un representante autorizado para la toma de decisiones del proyecto</li>
                        <li>Revisar y aprobar entregables en un plazo máximo de 5 días hábiles tras su presentación</li>
                    </ul>
                    <p>Los retrasos imputables al cliente que afecten los tiempos de entrega no serán responsabilidad de CA.</p>
                </Section>

                <Section title="5. Derechos de propiedad intelectual">
                    <p>Una vez liquidado el total del servicio contratado, el cliente adquiere los derechos de uso sobre los entregables específicos del proyecto (diseño, código fuente, contenido) conforme a lo pactado en la propuesta.</p>
                    <p>CA conserva el derecho de:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Incluir el proyecto en su portafolio de trabajo</li>
                        <li>Mencionar al cliente como referencia comercial, salvo acuerdo de confidencialidad expreso</li>
                        <li>Reutilizar componentes genéricos o librerías de código abierto empleadas en el desarrollo</li>
                    </ul>
                    <p>Las marcas, logos, nombres comerciales y demás elementos de identidad de CA son propiedad exclusiva de CA y no podrán ser usados sin autorización.</p>
                </Section>

                <Section title="6. Garantías y soporte post-entrega">
                    <p>CA ofrece una garantía de <strong className="text-ca-text">30 días naturales</strong> tras la entrega formal del proyecto para corregir errores de funcionamiento atribuibles al desarrollo original, sin costo adicional.</p>
                    <p>No se consideran parte de la garantía:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Modificaciones al alcance original solicitadas tras la entrega</li>
                        <li>Errores causados por modificaciones realizadas por el cliente o terceros</li>
                        <li>Actualizaciones de terceros que afecten el funcionamiento (plugins, APIs externas, etc.)</li>
                    </ul>
                    <p>Para soporte extendido o mantenimiento continuo, se deberá contratar un plan de mantenimiento por separado.</p>
                </Section>

                <Section title="7. Limitación de responsabilidad">
                    <p>CA no será responsable por:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Pérdidas económicas derivadas del uso o imposibilidad de uso de los servicios o entregables</li>
                        <li>Interrupciones causadas por terceros (hosting, servicios de nube, ISP)</li>
                        <li>Daños causados por el uso indebido de contraseñas o accesos por parte del cliente</li>
                        <li>Contenido publicado por el cliente en los sistemas entregados</li>
                        <li>Incumplimiento de normativas sectoriales específicas no informadas al momento del contrato</li>
                    </ul>
                    <p>En ningún caso la responsabilidad total de CA excederá el monto pagado por el servicio en cuestión.</p>
                </Section>

                <Section title="8. Confidencialidad">
                    <p>Ambas partes se comprometen a mantener la confidencialidad de la información intercambiada durante el proyecto. Ninguna de las partes divulgará a terceros información técnica, comercial o estratégica sin consentimiento previo por escrito.</p>
                    <p>Esta obligación permanecerá vigente por un período de <strong className="text-ca-text">2 años</strong> tras la conclusión del proyecto.</p>
                </Section>

                <Section title="9. Cancelaciones y reembolsos">
                    <p>Si el cliente cancela el proyecto una vez iniciado:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>El anticipo pagado no es reembolsable, ya que cubre el tiempo y recursos invertidos</li>
                        <li>Si el trabajo realizado supera el monto del anticipo, se cobrará proporcionalmente</li>
                        <li>Los entregables completados hasta el momento de la cancelación serán entregados al cliente</li>
                    </ul>
                    <p>Si CA cancela el proyecto por causas imputables a CA, se reembolsará el 100% de los montos pagados.</p>
                </Section>

                <Section title="10. Uso del sitio web">
                    <p>El usuario se compromete a utilizar el sitio web únicamente con fines lícitos. Queda prohibido:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Intentar acceder a sistemas o áreas restringidas sin autorización</li>
                        <li>Enviar comunicaciones no solicitadas (spam) a través de los formularios</li>
                        <li>Reproducir, distribuir o modificar el contenido del sitio sin autorización</li>
                        <li>Realizar cualquier acción que pueda dañar, deshabilitar o sobrecargar los servidores</li>
                    </ul>
                </Section>

                <Section title="11. Modificaciones a los términos">
                    <p>CA se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor en el momento de su publicación en el sitio. El uso continuado del sitio o de los servicios implica la aceptación de los términos actualizados.</p>
                </Section>

                <Section title="12. Legislación aplicable y jurisdicción">
                    <p>Los presentes Términos y Condiciones se rigen por las leyes de los <strong className="text-ca-text">Estados Unidos Mexicanos</strong>. Para la resolución de cualquier controversia, ambas partes se someten expresamente a la jurisdicción de los tribunales competentes de la <strong className="text-ca-text">Ciudad de México</strong>, renunciando a cualquier otro fuero que pudiera corresponderles.</p>
                </Section>

                <Section title="13. Contacto">
                    <p>Para cualquier duda, aclaración o reclamación relacionada con estos términos, contáctanos:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Correo: <a href={`mailto:${EMAIL}`} className="text-ca-cyan hover:underline">{EMAIL}</a></li>
                        <li>WhatsApp: <a href="https://wa.me/525633680348" target="_blank" rel="noopener noreferrer" className="text-ca-cyan hover:underline">+52 56 3368 0348</a></li>
                    </ul>
                </Section>

                {/* Back */}
                <div className="pt-6 border-t border-ca-border flex flex-wrap gap-4">
                    <Link href="/" className="text-sm text-ca-cyan hover:underline">← Inicio</Link>
                    <Link href="/legal/privacidad" className="text-sm text-ca-muted hover:text-ca-text">Aviso de Privacidad →</Link>
                </div>
            </div>
        </div>
    );
}
