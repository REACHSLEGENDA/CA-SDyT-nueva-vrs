import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Aviso de Privacidad | CA Soluciones Digitales',
    description: 'Aviso de privacidad integral de CA Soluciones Digitales y Tecnológicas conforme a la LFPDPPP.',
};

const LAST_UPDATE = '22 de junio de 2025';
const COMPANY    = 'CA | Soluciones Digitales y Tecnológicas';
const EMAIL      = 'ca.sodiyte@gmail.com';
const WA         = '+52 56 3368 0348';

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

export default function PrivacidadPage() {
    return (
        <div className="min-h-screen bg-ca-dark">
            {/* Header */}
            <div className="bg-ca-surface border-b border-ca-border py-12">
                <div className="max-w-3xl mx-auto px-6">
                    <span className="font-mono text-xs text-ca-cyan border border-ca-cyan/30 bg-ca-cyan/8 px-3 py-1.5 rounded-full inline-block mb-4">
                        Legal
                    </span>
                    <h1 className="font-display text-4xl font-black text-ca-text mb-3">
                        Aviso de Privacidad
                    </h1>
                    <p className="text-ca-muted text-sm">
                        Última actualización: <span className="text-ca-text">{LAST_UPDATE}</span>
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-14">

                <Section title="1. Identidad y domicilio del Responsable">
                    <p>
                        <strong className="text-ca-text">{COMPANY}</strong> (en adelante "CA"), con domicilio en la Ciudad de México, México, es responsable del tratamiento de los datos personales que recabe a través de su sitio web y en el ejercicio de sus actividades comerciales, conforme a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
                    </p>
                    <p>Contacto del Responsable:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Correo electrónico: <a href={`mailto:${EMAIL}`} className="text-ca-cyan hover:underline">{EMAIL}</a></li>
                        <li>WhatsApp / Teléfono: {WA}</li>
                    </ul>
                </Section>

                <Section title="2. Datos personales que se recaban">
                    <p>CA podrá recabar, de manera enunciativa mas no limitativa, los siguientes datos personales:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Nombre completo</li>
                        <li>Correo electrónico</li>
                        <li>Número de teléfono o WhatsApp</li>
                        <li>Nombre o razón social de la empresa</li>
                        <li>Información del proyecto o servicio solicitado</li>
                        <li>Datos de navegación (cookies, IP, dispositivo) de forma anonimizada</li>
                    </ul>
                    <p>No se recaban datos personales sensibles (datos de salud, biométricos, financieros, etc.).</p>
                </Section>

                <Section title="3. Finalidades del tratamiento">
                    <p><strong className="text-ca-text">Finalidades primarias (necesarias):</strong></p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Atender solicitudes de cotización y servicios</li>
                        <li>Enviar propuestas, presupuestos y seguimiento comercial</li>
                        <li>Cumplir obligaciones contractuales derivadas de los servicios contratados</li>
                        <li>Soporte técnico y comunicación relacionada con proyectos activos</li>
                    </ul>
                    <p className="mt-3"><strong className="text-ca-text">Finalidades secundarias (opcionales):</strong></p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Envío de boletines, novedades y actualizaciones de CA</li>
                        <li>Encuestas de satisfacción</li>
                        <li>Análisis estadísticos de uso del sitio web</li>
                    </ul>
                    <p>Si no deseas que tus datos sean tratados para las finalidades secundarias, puedes manifestarlo enviando un correo a <a href={`mailto:${EMAIL}`} className="text-ca-cyan hover:underline">{EMAIL}</a>.</p>
                </Section>

                <Section title="4. Transferencia de datos personales">
                    <p>CA no transfiere datos personales a terceros sin consentimiento previo, salvo en los siguientes casos permitidos por la LFPDPPP:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Proveedores de servicios tecnológicos que actúan como encargados (ej. servicios de correo, hosting, CRM) bajo acuerdos de confidencialidad</li>
                        <li>Cumplimiento de obligaciones legales ante autoridades competentes</li>
                        <li>Protección de intereses vitales del titular</li>
                    </ul>
                    <p>Los encargados que puedan tener acceso a datos personales incluyen: Formspree (formularios de contacto), Netlify / Vercel (alojamiento web) y Google Analytics (analítica anonimizada).</p>
                </Section>

                <Section title="5. Derechos ARCO">
                    <p>Como titular de datos personales, tienes derecho a <strong className="text-ca-text">Acceder, Rectificar, Cancelar u Oponerte</strong> (derechos ARCO) al tratamiento de tus datos. Para ejercerlos:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Envía un correo a <a href={`mailto:${EMAIL}`} className="text-ca-cyan hover:underline">{EMAIL}</a> con el asunto "Ejercicio de derechos ARCO"</li>
                        <li>Incluye: nombre completo, descripción clara del derecho que deseas ejercer y copia de identificación oficial</li>
                        <li>CA dará respuesta en un plazo máximo de <strong className="text-ca-text">20 días hábiles</strong></li>
                    </ul>
                </Section>

                <Section title="6. Uso de cookies y tecnologías de rastreo">
                    <p>El sitio web de CA utiliza cookies y tecnologías similares para:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong className="text-ca-text">Cookies esenciales:</strong> necesarias para el funcionamiento básico del sitio</li>
                        <li><strong className="text-ca-text">Cookies analíticas:</strong> para medir el tráfico y comportamiento de usuarios de forma anonimizada</li>
                        <li><strong className="text-ca-text">Cookies de preferencias:</strong> para recordar opciones del usuario</li>
                    </ul>
                    <p>Puedes gestionar o deshabilitar las cookies desde la configuración de tu navegador. Consulta nuestro banner de consentimiento al ingresar al sitio.</p>
                </Section>

                <Section title="7. Medidas de seguridad">
                    <p>CA implementa medidas técnicas, administrativas y físicas para proteger tus datos personales contra pérdida, uso indebido, acceso no autorizado, divulgación, alteración o destrucción. Entre las medidas adoptadas: cifrado SSL/TLS, control de accesos, y acuerdos de confidencialidad con proveedores.</p>
                </Section>

                <Section title="8. Cambios al aviso de privacidad">
                    <p>CA se reserva el derecho de actualizar este aviso en cualquier momento. Las modificaciones serán publicadas en esta misma página con la fecha de actualización correspondiente. Te recomendamos revisarlo periódicamente.</p>
                </Section>

                <Section title="9. Autoridad competente">
                    <p>Si consideras que tus derechos han sido vulnerados, puedes acudir al <strong className="text-ca-text">Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong>, en <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-ca-cyan hover:underline">www.inai.org.mx</a>.</p>
                </Section>

                {/* Back */}
                <div className="pt-6 border-t border-ca-border flex flex-wrap gap-4">
                    <Link href="/" className="text-sm text-ca-cyan hover:underline">← Inicio</Link>
                    <Link href="/legal/terminos" className="text-sm text-ca-muted hover:text-ca-text">Términos y Condiciones →</Link>
                </div>
            </div>
        </div>
    );
}
