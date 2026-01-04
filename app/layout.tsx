import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. IMPORTAR LOS COMPONENTES
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ñande Vibes | Hecho para sentir Paraguay",
  description: "Streetwear paraguayo premium.",
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