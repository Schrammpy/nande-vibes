import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// 1. IMPORTAR LOS COMPONENTES
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"; 

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL("https://nandevibes.com.py"),

  title: {
    default: "Ñande Vibes | Remeras y Ropa Urbana Paraguaya",
    template: "%s | Ñande Vibes",
  },

  description:
    "Descubrí remeras originales y ropa urbana con identidad paraguaya. Diseños exclusivos, cultura, humor y remeras personalizadas. Envíos a todo Paraguay.",

  authors: [{ name: "Ñande Vibes" }],

  openGraph: {
    title: "Ñande Vibes | Remeras con Identidad Paraguaya",
    description:
      "Remeras originales, diseños exclusivos y ropa urbana inspirada en Paraguay. Conocé nuestras colecciones.",
    url: "https://nandevibes.com.py",
    siteName: "Ñande Vibes",
    images: [
      {
        url: "/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Ñande Vibes - Remeras y ropa urbana paraguaya",
      },
    ],
    locale: "es_PY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ñande Vibes | Remeras con Identidad Paraguaya",
    description:
      "Remeras originales y ropa urbana inspirada en la cultura paraguaya.",
    images: ["/hero-banner.png"],
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
        

        {/* Microsoft Clarity - Corregido para Next.js */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v6qq70og64");
          `}
        </Script>

        {/* --- PÍXEL DE META (Facebook) --- */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1449131030282865'); /* TU ID REAL */
            fbq('track', 'PageView'); /* Rastrea visitas a cualquier página */
          `}
        </Script>

      </body>
    </html>
  );
}