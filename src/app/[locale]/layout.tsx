import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import { CookieBanner } from "@/components/features/CookieBanner";

// El chatbot no es contenido indexable y arrastra framer-motion y thinking-orbs.
// Diferirlo lo saca del bundle inicial de todas las paginas.
const Chatbot = dynamic(() => import("@/components/features/Chatbot").then((m) => m.Chatbot));
import { DynamicBackground } from "@/components/layout/DynamicBackground";
import { Toaster } from "react-hot-toast";
import { SoundListener } from "@/components/features/SoundListener";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/seoUtils';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'CA Soluciones Digitales',
  authors: [{ name: 'CA Soluciones Digitales', url: SITE_URL }],
  creator: 'CA Soluciones Digitales',
  publisher: 'CA Soluciones Digitales',
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Habilita el prerenderizado estatico de todas las rutas por locale
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} antialiased bg-ca-dark text-ca-text overflow-x-hidden selection:bg-ca-cyan/20 selection:text-ca-cyan`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen relative">
            <DynamicBackground />
            <Navbar />
            <main className="flex-grow pt-20 relative z-10">{children}</main>
            <Footer />
            <Chatbot />
            <CookieBanner />
            <SoundListener />
          </div>

          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#0E1220",
                color: "#E8EAFF",
                border: "1px solid rgba(0,207,255,0.2)",
                borderRadius: "12px",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
              },
              success: {
                iconTheme: { primary: "#00CFFF", secondary: "#080B14" },
              },
              error: {
                iconTheme: { primary: "#FF4D6D", secondary: "#080B14" },
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
