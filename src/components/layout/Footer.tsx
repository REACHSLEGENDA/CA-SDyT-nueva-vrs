import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-6 relative w-64 h-32">
                            <Image
                                src="/assets/footer-logo.png"
                                alt="CA Soluciones"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Transformamos ideas en experiencias digitales de alto impacto. Desarrollo web, apps y automatización para el futuro.
                        </p>
                        <div className="flex gap-4">
                            <SocialBtn href="https://www.facebook.com/share/1CJpChnxkx/?mibextid=qi2Omg" icon={<Facebook size={18} />} />
                            <SocialBtn href="https://www.instagram.com/ca.sodiyte?igsh=a3FzbWIwaDVuNWJy" icon={<Instagram size={18} />} />
                            <SocialBtn href="https://wa.me/525633680348" icon={<MessageCircle size={18} />} />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Servicios</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><FooterLink href="/servicios">Desarrollo Web</FooterLink></li>
                            <li><FooterLink href="/apps-moviles">Apps Móviles</FooterLink></li>
                            <li><FooterLink href="/sistemas">Sistemas a Medida</FooterLink></li>
                            <li><FooterLink href="/automatizacion">Automatización</FooterLink></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Empresa</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><FooterLink href="/nosotros">Nosotros</FooterLink></li>
                            <li><FooterLink href="/portafolio">Portafolio</FooterLink></li>
                            <li><FooterLink href="/clases">Clases</FooterLink></li>
                            <li><FooterLink href="/contacto">Contacto</FooterLink></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Contacto</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="mt-1 text-brand-blue shrink-0" />
                                <span>ca.sodiyte@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MessageCircle size={16} className="mt-1 text-brand-blue shrink-0" />
                                <span>+52 56 3368 0348</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} CA Soluciones Digitales y Tecnológicas. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/legal/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link href="/legal/terminos" className="hover:text-white transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function SocialBtn({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
        >
            {icon}
        </a>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="hover:text-brand-blue transition-colors block">
            {children}
        </Link>
    )
}
