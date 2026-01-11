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
              Ver los Drops
              <ArrowDown size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- CONTENEDOR DE COLECCIONES --- */}
      <div id="catalogo" className="flex flex-col gap-12 py-24">
        
        {/* SECCIÓN 1: HYPE FEBRERO */}
        <ProductSection title="⚡ HYPE Febrero" products={hypeProducts} />

        {/* SECCIÓN 2: RAICES */}
        <ProductSection title="🌿 RAÍCES" products={raicesProducts} />

        {/* SECCIÓN 3: ICONOS */}
        <ProductSection title="🏛️ ICONOS" products={iconosProducts} />

      </div>
    </main>
  );
}

// --- COMPONENTE INTERNO PARA NO REPETIR CÓDIGO ---
// (Esto hace que tu código sea más limpio y fácil de mantener)
function ProductSection({ title, products }: { title: string, products: any[] }) {
  if (products.length === 0) return null; // Si no hay productos, no muestra la sección

  return (
    <section className="max-w-7xl mx-auto px-4 w-full">
      <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <Link href="#" className="text-sm text-gray-400 hover:text-white transition hidden md:block">
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
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors truncate">
                {producto.nombre}
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">Cotton Premium</p>
                <p className="text-white font-mono font-medium">
                  ₲ {(producto.precio).toLocaleString('es-PY')}
                </p>
              </div>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}