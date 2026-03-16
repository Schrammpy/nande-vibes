'use client';

import Image from "next/image";
import Link from "next/link";
import { useCurrencyStore } from "@/app/store/currencyStore";
import { productos } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import { HeroCarousel } from "./components/HeroCarousel";

export default function Home() {
  
  // 1. OBTENER MONEDA
  const { currency } = useCurrencyStore();

  // 2. FILTRAR PRODUCTOS
  const hypeProducts = productos.filter(p => p.categoria === 'hype').slice(0, 4);
  const raicesProducts = productos.filter(p => p.categoria === 'raices').slice(0, 4);
  const iconosProducts = productos.filter(p => p.categoria === 'iconos').slice(0, 4);
  
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO CAROUSEL */}
       <HeroCarousel />

      {/* --- CONTENEDOR DE COLECCIONES --- */}
      {/* CAMBIO CLAVE: La 'key' va aquí en el padre */}
      <div id="catalogo" className="flex flex-col gap-12 py-24" key={currency}>
        
        {/* SECCIÓN 1: HYPE */}
        <ProductSection
            title="⚡ HYPE Marzo" 
            products={hypeProducts} 
            categorySlug="hype" 
            currency={currency}
        />
        
        {/* SECCIÓN 2: RAICES */}
        <ProductSection
            title="🌿 RAÍCES" 
            products={raicesProducts} 
            categorySlug="raices" 
            currency={currency}
        />

        {/* SECCIÓN 3: ICONOS */}
        <ProductSection
            title="🏛️ ICONOS" 
            products={iconosProducts} 
            categorySlug="iconos" 
            currency={currency}
        />

      </div>

       {/* SECCIÓN PERSONALIZADA (Afuera del catálogo) */}
      <CustomDesignSection />

    </main>
  );
}

// --- COMPONENTE INTERNO DE PRODUCTOS ---
function ProductSection({ title, products, categorySlug, currency }: { title: string, products: any[], categorySlug: string, currency: string }) {
  if (products.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 w-full">
      
      {/* HEADER: Título y Link sutil */}
      <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <Link 
          href={`/coleccion/${categorySlug}`} 
          className="text-sm text-gray-400 hover:text-white transition whitespace-nowrap hidden md:block"
        >
          Ver todos →
        </Link>
      </div>

      {/* GRILLA DE PRODUCTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((producto) => (
          <Link key={producto.id} href={`/producto/${producto.slug}`} className="group block">
            
            {/* FOTO */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-900 mb-4">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-md text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                    {producto.categoria}
                  </span>
              </div>
            </div>

            {/* INFO */}
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors truncate">
                {producto.nombre}
              </h3>
              
              <div className="flex flex-col">
                <p className="text-gray-500 text-xs uppercase tracking-wide">Cotton Premium</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-white font-mono font-bold text-lg">
                    {currency === 'PYG' ? (
                        <>
                            <span className="text-xs align-top opacity-70">₲</span>
                            {producto.precio.toLocaleString('es-PY')}
                        </>
                    ) : (
                        <>
                            <span className="text-xs align-top opacity-70">€</span>
                            {producto.precioEUR || "29.90"}
                        </>
                    )}
                  </p>
                  {/* ... (lógica de descuentos sigue igual) ... */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* --- NUEVO: EL BOTÓN LLAMATIVO AL FINAL --- */}
      <div className="mt-10 flex justify-center">
        <Link 
            href={`/coleccion/${categorySlug}`}
            className="w-full md:w-auto text-center border border-gray-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black hover:border-white transition-all uppercase tracking-widest text-sm"
        >
            Explorar toda la colección {title.replace(/⚡|🌿|🏛️/g, '')} +
        </Link>
      </div>

    </section>
  );
}

// --- COMPONENTE SECCIÓN PERSONALIZADA ---
function CustomDesignSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* TEXTO */}
        <div className="space-y-6 z-10">
          <span className="bg-orange-500/20 text-orange-500 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full border border-orange-500/50">
            Servicio Exclusivo
          </span>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            ¿Querés un diseño <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Específico?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 font-light max-w-md">
            Tu mascota, tu grupo de amigos, o esa frase que solo ustedes entienden.
            <br/><br/>
            <strong className="text-white">No hace falta que tengas el diseño listo. Contanos qué te imaginás y nosotros hacemos la magia.</strong>
          </p>

          <a 
            href="https://wa.me/595992607802?text=Hola!%20Tengo%20una%20idea%20para%20un%20diseño..." 
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Quiero contarles mi idea
            <span className="text-xl ml-2">👉</span>
          </a>
        </div>

        {/* COLLAGE VISUAL */}
        <div className="relative h-[400px] w-full mt-10 md:mt-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-orange-600/20 blur-[100px] rounded-full"></div>

          {/* FOTO 1 */}
          <div className="absolute left-0 md:left-10 top-0 w-48 h-64 bg-gray-800 p-2 shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-500 z-10 rounded-lg border border-gray-700">
             <Image src="/productos/custom/micha_original.jpeg" alt="Foto Real" fill className="object-cover rounded" />
          </div>

          {/* FOTO 2 */}
          <div className="absolute right-0 md:right-10 top-10 w-56 h-72 bg-gray-800 p-2 shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500 z-20 rounded-lg border border-gray-700">
             <Image src="/productos/custom/micha_front.png" alt="Remera Terminada" fill className="object-cover rounded" />
          </div>

          {/* FOTO 3 */}
          <div className="absolute bottom-0 md:-bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-white p-2 shadow-2xl transform rotate-3 z-30 rounded-lg">
             <div className="relative w-full h-full border border-gray-200">
                <Image src="/productos/custom/micha_logo.png" alt="Detalle" fill className="object-cover" />
             </div>
             <div className="absolute -top-4 -right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded rotate-12">
               CUSTOM
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}