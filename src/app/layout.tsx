import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/features/Chatbot";
import { DynamicBackground } from "@/components/layout/DynamicBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CA Soluciones Digitales | Desarrollo de Software a Medida",
  description: "Transformamos tu negocio con tecnología de vanguardia. Desarrollo Web, Apps Móviles y Sistemas Empresariales.",
  icons: {
    icon: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${sora.variable} antialiased bg-brand-black text-foreground overflow-x-hidden selection:bg-brand-purple/30 selection:text-white`}
      >
        <div className="flex flex-col min-h-screen relative">

          {/* Global Dynamic Background */}
          <DynamicBackground />

          <Navbar />
          <main className="flex-grow pt-20 relative z-10">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </div>
      </body>
    </html>
  );
}
