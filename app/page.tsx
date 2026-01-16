import Image from "next/image";
import Link from "next/link";
import { productos } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export default function Home() {
  
  // FILTRAMOS LOS PRODUCTOS POR CATEGORÍA (Máximo 4 por sección)
  const hypeProducts = productos.filter(p => p.categoria === 'hype').slice(0, 4);
  const raicesProducts = productos.filter(p => p.categoria === 'raices').slice(0, 4);
  const iconosProducts = productos.filter(p => p.categoria === 'iconos').slice(0, 4);

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* --- HERO SECTION (Igual que antes) --- */}
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/hero-banner.png" 
            alt="Ñande Vibes Lifestyle" 
            fill 
            className="object-cover opacity-60" 
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base animate-pulse">
            Nueva Colección 2026
          </span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white drop-shadow-lg">
            ÑANDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">VIBES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-lg mx-auto font-light drop-shadow-md">
            "Hecho para sentir Paraguay."
          </p>
          <div className="pt-8">
            <Link 
              href="#catalogo" 
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
            >
              Ver Colecciones
              <ArrowDown size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- CONTENEDOR DE COLECCIONES --- */}
      <div id="catalogo" className="flex flex-col gap-12 py-24">
        
        {/* SECCIÓN 1: HYPE */}
        <ProductSection title="⚡ HYPE Febrero" products={hypeProducts} categorySlug="hype" />

        {/* SECCIÓN 2: RAICES */}
        <ProductSection title="🌿 RAÍCES" products={raicesProducts} categorySlug="raices" />

        {/* SECCIÓN 3: ICONOS */}
        <ProductSection title="🏛️ ICONOS" products={iconosProducts} categorySlug="iconos" />

       

      </div>

       {/* AQUÍ AGREGAMOS LA NUEVA SECCIÓN */}
      <CustomDesignSection />
    </main>
  );
}

// --- COMPONENTE INTERNO PARA NO REPETIR CÓDIGO ---
// (Esto hace que tu código sea más limpio y fácil de mantener)

// --- COMPONENTE INTERNO CORREGIDO ---
function ProductSection({ title, products, categorySlug }: { title: string, products: any[], categorySlug: string }) {
  if (products.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 w-full">
      <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        
        
        <Link 
          href={`/coleccion/${categorySlug}`} 
          className="text-sm text-gray-400 hover:text-white transition whitespace-nowrap"
        >
          Ver todos →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((producto) => (
          <Link key={producto.id} href={`/producto/${producto.slug}`} className="group block">
            
            {/* Card de Imagen */}
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

            {/* Info Producto */}
            {/* Info Producto */}
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors truncate">
                {producto.nombre}
              </h3>
              
              <div className="flex flex-col"> {/* Cambiamos a flex-col para apilar precios si hay oferta */}
                <p className="text-gray-500 text-xs uppercase tracking-wide">Cotton Premium</p>
                
                <div className="flex items-center gap-2 mt-1">
                  {/* PRECIO ACTUAL (Con color de oportunidad) */}
                  <p className="text-white font-mono font-bold text-lg">
                    <span className="text-xs align-top opacity-70">₲</span> {/* Símbolo más chico */}
                    {producto.precio.toLocaleString('es-PY')}
                  </p>

                  {/* PRECIO ANTERIOR (Tachado - Solo si existe) */}
                  {producto.precioAntes && (
                    <p className="text-gray-500 text-sm line-through font-mono">
                      ₲ {producto.precioAntes.toLocaleString('es-PY')}
                    </p>
                  )}
                  
                  {/* ETIQUETA DE DESCUENTO (Opcional, muy pro) */}
                  {producto.precioAntes && (
                    <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-1 rounded">
                      -{Math.round(((producto.precioAntes - producto.precio) / producto.precioAntes) * 100)}%
                    </span>
                  )}
                </div>
              </div>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}

// --- COMPONENTE SECCIÓN PERSONALIZADA ---
function CustomDesignSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
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
            <strong className="text-white">No hace falta que tengas el diseño listo, contanos tu idea y nosotros hacemos la magia.</strong>
          </p>

          <a 
            href="https://wa.me/595992607802?text=Hola!%20Quiero%20un%20diseño%20personalizado." 
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Quiero contarles mi idea 
            <span className="text-xl">👉</span>
          </a>
        </div>

        {/* COLUMNA DERECHA: COLLAGE VISUAL */}
        <div className="relative h-[400px] w-full mt-10 md:mt-0 flex items-center justify-center">
          
          {/* Círculo de fondo para dar atmósfera */}
          <div className="absolute inset-0 bg-orange-600/20 blur-[100px] rounded-full"></div>

          {/* FOTO 1: La foto real (ej: el perro) - Rotada a la izquierda */}
          <div className="absolute left-0 md:left-10 top-0 w-48 h-64 bg-gray-800 p-2 shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-500 z-10 rounded-lg border border-gray-700">
             {/* Reemplazá src con una foto de ejemplo real */}
             <Image src="/productos/custom/micha_original.jpeg" alt="Foto Real" fill className="object-cover rounded" />
          </div>

          {/* FOTO 2: La remera terminada - Rotada a la derecha */}
          <div className="absolute right-0 md:right-10 top-10 w-56 h-72 bg-gray-800 p-2 shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500 z-20 rounded-lg border border-gray-700">
             {/* Reemplazá src con una remera tuya */}
             <Image src="/productos/custom/micha_front.png" alt="Remera Terminada" fill className="object-cover rounded" />
          </div>

          {/* FOTO 3: Detalle o Sticker - Al centro */}
          <div className="absolute bottom-0 md:-bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-white p-2 shadow-2xl transform rotate-3 z-30 rounded-lg">
             <div className="relative w-full h-full border border-gray-200">
                <Image src="/productos/custom/micha_logo.png" alt="Detalle" fill className="object-cover" />
             </div>
             {/* Sticker de 'Personalizado' pegado encima */}
             <div className="absolute -top-4 -right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded rotate-12">
               CUSTOM
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}