import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. IMPORTAR LOS COMPONENTES
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ñande Vibes | Identidad Paraguaya",
    template: "%s | Ñande Vibes"
  },
  description: "Marca de ropa urbana con identidad paraguaya. Diseños exclusivos inspirados en nuestra cultura, estampados premium DTF y personalizados. Envíos a todo Paraguay.",
  keywords: ["remeras paraguay", "streetwear asuncion", "ropa urbana", "diseño paraguayo", "ñande vibes", "remeras personalizadas"],
  authors: [{ name: "Ñande Vibes" }],
  openGraph: {
    title: "Ñande Vibes | Hecho para sentir Paraguay",
    description: "La nueva era de la identidad nacional. Calidad premium y diseños únicos.",
    url: "https://www.nandevibes.com.py", // Cuando tengas el dominio activo
    siteName: "Ñande Vibes",
    images: [
      {
        url: "/hero-banner.png", // La foto que saldrá al compartir en WhatsApp
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_PY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Agregamos 'bg-black' para eliminar huecos blancos */}
        <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        
        {/* 2. AQUÍ VA EL NAVBAR ARRIBA */}
        <Navbar />
        
        {/* AQUÍ VA EL CONTENIDO DE CADA PÁGINA (HOME, PRODUCTO, ETC) */}
        {children}
        
        {/* 3. AQUÍ VA EL FOOTER ABAJO (Seguro te falta esta línea) */}
        <Footer />
        
      </body>
    </html>
  );
}