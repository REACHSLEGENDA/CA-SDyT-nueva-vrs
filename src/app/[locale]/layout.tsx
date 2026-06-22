import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/features/Chatbot";
import { CookieBanner } from "@/components/features/CookieBanner";
import { DynamicBackground } from "@/components/layout/DynamicBackground";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    alternates: {
      languages: {
        'es-MX':  'https://casolutecdigital.com/',
        'en':     'https://casolutecdigital.com/en/',
        'es-419': 'https://casolutecdigital.com/es-419/',
        'es-ES':  'https://casolutecdigital.com/es-es/',
        'pt-BR':  'https://casolutecdigital.com/pt-br/',
        'x-default': 'https://casolutecdigital.com/en/',
      },
    },
    icons: {
      icon: "https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/logo.png",
    },
  };
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
