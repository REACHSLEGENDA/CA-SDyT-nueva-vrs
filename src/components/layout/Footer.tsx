import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';

const serviceLinks = [
    { href: '/apps-web', label: 'Desarrollo Web' },
    { href: '/apps-moviles', label: 'Apps Móviles' },
    { href: '/sistemas', label: 'Sistemas a Medida' },
    { href: '/automatizacion', label: 'Automatización IA' },
    { href: '/infraestructura-ti', label: 'Infraestructura TI' },
    { href: '/seo-aeo', label: 'SEO & AEO' },
];

const companyLinks = [
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/portafolio', label: 'Portafolio' },
    { href: '/paquetes-web', label: 'Paquetes' },
    { href: '/clases', label: 'Clases de Cómputo' },
    { href: '/contacto', label: 'Contacto' },
];

export function Footer() {
    return (
        <footer className="relative bg-ca-surface border-t border-ca-border pt-16 pb-8 overflow-hidden">
            {/* Separador gradiente superior */}
            <div className="absolute top-0 left-0 right-0 h-px bg-ca-gradient opacity-50" />

            {/* Glow ambiental */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-ca-cyan/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="mb-5 relative w-48 h-24">
                            <Image
                                src="/assets/footer-logo.png"
                                alt="CA Soluciones Digitales y Tecnológicas"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-ca-muted text-sm leading-relaxed mb-6 max-w-xs">
                            Tecnología que impulsa tu negocio. Desarrollo digital, infraestructura TI y
                            ciberseguridad para empresas que quieren crecer.
                        </p>
                        <div className="flex gap-3">
                            <SocialBtn
                                href="https://www.facebook.com/share/1CJpChnxkx/?mibextid=qi2Omg"
                                icon={<Facebook size={16} />}
                                label="Facebook"
                                color="hover:bg-blue-600 hover:border-blue-600"
                            />
                            <SocialBtn
                                href="https://www.instagram.com/ca.sodiyte?igsh=a3FzbWIwaDVuNWJy"
                                icon={<Instagram size={16} />}
                                label="Instagram"
                                color="hover:bg-pink-600 hover:border-pink-600"
                            />
                            <SocialBtn
                                href="https://wa.me/5951145576"
                                icon={<MessageCircle size={16} />}
                                label="WhatsApp"
                                color="hover:bg-green-600 hover:border-green-600"
                            />
                        </div>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h4 className="font-mono text-xs text-ca-cyan uppercase tracking-widest mb-5">
                            Servicios
                        </h4>
                        <ul className="space-y-2.5">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-ca-muted text-sm hover:text-ca-text transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h4 className="font-mono text-xs text-ca-cyan uppercase tracking-widest mb-5">
                            Empresa
                        </h4>
                        <ul className="space-y-2.5">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-ca-muted text-sm hover:text-ca-text transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="font-mono text-xs text-ca-cyan uppercase tracking-widest mb-5">
                            Contacto
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:contacto@casolutecdigital.com"
                                    className="flex items-start gap-3 text-ca-muted text-sm hover:text-ca-cyan transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-ca-surface2 border border-ca-border flex items-center justify-center shrink-0 mt-0.5 group-hover:border-ca-cyan/30 transition-colors">
                                        <Mail size={14} />
                                    </div>
                                    contacto@casolutecdigital.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/5951145576"
                                    className="flex items-start gap-3 text-ca-muted text-sm hover:text-ca-cyan transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-ca-surface2 border border-ca-border flex items-center justify-center shrink-0 mt-0.5 group-hover:border-ca-cyan/30 transition-colors">
                                        <MessageCircle size={14} />
                                    </div>
                                    +52 595 114 5576
                                </a>
                            </li>
                        </ul>

                        {/* CTA */}
                        <a
                            href="https://wa.me/5951145576"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 bg-ca-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-ca-cyan/15"
                        >
                            Hablemos →
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-ca-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ca-muted">
                    <p>
                        © {new Date().getFullYear()} CA | Soluciones Digitales y Tecnológicas.
                        Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/legal/privacidad" className="hover:text-ca-text transition-colors">
                            Privacidad
                        </Link>
                        <Link href="/legal/terminos" className="hover:text-ca-text transition-colors">
                            Términos
                        </Link>
                        <span className="text-ca-muted/60">Hecho en México 🇲🇽</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialBtn({
    href,
    icon,
    label,
    color,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    color: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`w-9 h-9 rounded-xl bg-ca-surface2 border border-ca-border flex items-center justify-center text-ca-muted transition-all ${color} hover:text-white hover:shadow-md`}
        >
            {icon}
        </a>
    );
}
