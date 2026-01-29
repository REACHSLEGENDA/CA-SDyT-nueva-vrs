'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/Button';
import { Loader2 } from 'lucide-react';

export function ContactForm() {
    const [state, handleSubmit] = useForm("mpwlzjjo");

    if (state.succeeded) {
        return (
            <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-2xl text-center backdrop-blur-md">
                <h3 className="text-2xl font-bold text-green-400 mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-300">Gracias por contactarnos. Te responderemos en breve a tu correo o WhatsApp.</p>
                <div className="mt-6">
                    <Button variant="outline" onClick={() => window.location.reload()}>Enviar otro</Button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Nombre</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all placeholder:text-gray-600"
                        placeholder="Tu nombre completo"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all placeholder:text-gray-600"
                        placeholder="tucorreo@empresa.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-400 ml-1">Teléfono (opcional)</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all placeholder:text-gray-600"
                    placeholder="+52 55 ..."
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-400 ml-1">Servicio de interés</label>
                <div className="relative">
                    <select
                        id="service"
                        name="service"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all cursor-pointer [&>option]:bg-brand-black"
                    >
                        <option value="web">Desarrollo Web</option>
                        <option value="app">App Móvil</option>
                        <option value="system">Sistema a Medida</option>
                        <option value="marketing">Marketing en Redes</option>
                        <option value="automation">Automatización / Bots</option>
                        <option value="classes">Clases de Cómputo</option>
                        <option value="other">Otro</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all resize-none placeholder:text-gray-600"
                    placeholder="Cuéntanos más sobre tu proyecto..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="flex items-center gap-3">
                <input type="checkbox" id="terms" required className="w-4 h-4 rounded border-brand-blue/50 bg-white/5 text-brand-blue focus:ring-brand-blue focus:ring-offset-brand-black accent-brand-blue cursor-pointer" />
                <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer select-none">Acepto enviar mis datos para contacto.</label>
            </div>

            <Button type="submit" disabled={state.submitting} className="w-full py-4 text-lg shadow-lg shadow-brand-blue/20">
                {state.submitting ? <><Loader2 className="animate-spin mr-2" /> Enviando...</> : "Enviar Mensaje"}
            </Button>
        </form>
    )
}
