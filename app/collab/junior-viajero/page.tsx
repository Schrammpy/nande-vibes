'use client';

import Image from "next/image";
import Link from "next/link";
import { productos } from "@/lib/data";
import { useCurrencyStore } from "@/app/store/currencyStore";

export default function JuniorCollabPage() {
  // 1. Leemos la moneda para los precios
  const { currency } = useCurrencyStore();

  const TARGET_DATE = new Date('2026-03-06T20:00:00').getTime();
  // CAMBIO TEMPORAL: Fecha vieja
  //const TARGET_DATE = new Date('2024-01-01T00:00:00').getTime();

  const now = new Date().getTime();
  const isLaunched = now >= TARGET_DATE; // True si ya pasó la fecha
  
  // 2. Filtramos los productos
  const juniorProducts = productos.filter(p => p.categoria === 'junior');

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* --- 1. HERO HEADER (LA PORTADA) --- */}
     <section className="relative h-[70vh] flex items-end justify-center pb-12 md:pb-20 overflow-hidden">
        
        <Image 
          src="/hero-junior.jpg"
          alt="Junior Viajero"
          fill
          className="object-cover" // Sacamos la opacidad general para que la foto brille más
          priority
        />
        
        {/* DEGRADADO: Fundamental para que el texto blanco se lea sobre el fondo */}
        {/* Va desde negro sólido abajo (100%) hasta transparente arriba */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* CONTENIDO: Centrado y ancho completo */}
        <div className="relative z-10 text-center w-full px-4 max-w-5xl mx-auto">
          
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 inline-block animate-pulse shadow-lg">
            Colaboración Oficial
          </span>
          
          {/* Título Gigante */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl mb-2 leading-none uppercase">
            Junior Viajero
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-3xl text-orange-500 font-bold tracking-widest mt-2 drop-shadow-md">
            x ÑANDE VIBES
          </p>

        </div>
      </section>

      {/* --- 2. LA HISTORIA (BLOG) --- */}
      <section className="max-w-4xl mx-auto px-6 py-8 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Texto de la Biografía */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <h2 className="text-3xl font-bold text-white mb-4 text-left leading-tight">"El paraíso se encuentra Tierra Adentro"</h2>
            <p className="text-justify">
              Junior Gomez, más conocido como Junior Viajero, es un creador de contenido que ha conquistado las redes sociales con su carisma 
              y pasión por descubrir los rincones más increíbles de nuestro país. A través de sus videos documenta y comparte la belleza y diversidad del Paraguay.
            </p>
             <p className="text-justify">
              Con un estilo sencillo y auténtico, Junior aporta valor al turismo local, inspirando a otros a explorar y valorar la riqueza cultural de nuestro país, mostrando
              lugares únicos y conociendo a personas maravillosas en el camino. 
            </p>
          </div>

          {/* Foto de Perfil / Lifestyle */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 rotate-2 transform hover:rotate-0 transition-all duration-500">
            <Image 
              src="/junior-bio.jpeg" // <--- Subí una foto vertical linda de él a public
              alt="Junior Viajero Retrato"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* --- 3. LA CITA (QUOTE) --- */}
        <div className="mt-20 p-8 bg-gray-900/50 border-l-4 border-orange-500 rounded-r-lg">
          <p className="text-xl md:text-2xl font-serif italic text-gray-200 mb-4">
            "Paraguay está lleno de caminos, paisajes y experiencias increíbles, solo hay que animarse a descubrirlos"
          </p>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white text-xs">JV</div>
             <span className="font-bold text-white text-sm uppercase tracking-wide">Junior Viajero</span>
          </div>
        </div>
      </section>

      {/* --- 4. EL DROP (CATÁLOGO) --- */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            LA COLECCIÓN
          </h2>
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Edición Exclusiva de Lanzamiento
          </p>
        </div>

        {/* LÓGICA DE MISTERIO */}
        {!isLaunched ? (
            
            // --- OPCIÓN A: MISTERIO (ANTES DEL 6 MARZO) ---
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="relative aspect-[4/5] bg-gray-900/50 border border-gray-800 rounded-xl flex flex-col items-center justify-center p-8 text-center animate-pulse">
                        <span className="text-6xl mb-4">🔒</span>
                        <h3 className="text-xl font-bold text-gray-500 uppercase">Diseño #{item}</h3>
                        <p className="text-sm text-gray-600 mt-2">Se revela:</p>
                        <p className="text-orange-500 font-mono font-bold">06 / 03 / 2026</p>
                    </div>
                ))}
            </div>

        ) : (

            // --- OPCIÓN B: REVELACIÓN (DESPUÉS DEL 6 MARZO) ---
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
            {juniorProducts.map((producto) => (
                <Link key={producto.id} href={`/producto/${producto.slug}`} className="group block">
                {/* ... (Tu código de tarjeta de producto normal va acá) ... */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-900 mb-4 border border-gray-800 group-hover:border-orange-500/50 transition-all">
                    <Image src={producto.imagen} alt={producto.nombre} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">JUNIOR x NV</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">{producto.nombre}</h3>
                    <p className="text-gray-500 font-mono mt-1 font-bold">
                        {currency === 'PYG' ? `₲ ${producto.precio.toLocaleString('es-PY')}` : `€ ${producto.precioEUR || "29.90"}`}
                    </p>
                  </div>
                </Link>
            ))}
            </div>

        )}
      </section>

    </main>
  );
}