import Image from "next/image";
import Link from "next/link";
import { productos } from "@/lib/data";
import { ArrowDown } from "lucide-react"; // Importamos una flechita

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* --- HERO SECTION (LA PORTADA GIGANTE) --- */}
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* 1. La Imagen de Fondo */}
        <div className="absolute inset-0 w-full h-full">
          {/* Si no tenés la foto 'hero-banner.jpg' aún, cambiá src por una url de unsplash temporal */}
          <Image 
            src="/hero-banner.png" 
            alt="Ñande Vibes Lifestyle" 
            fill 
            className="object-cover opacity-60" // opacity-60 oscurece la foto para que se lea el texto
            priority
          />
          {/* Degradado negro abajo para que se una suave con la tienda */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* 2. El Contenido Encima de la Foto */}
        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base animate-pulse">
            Nueva Colección 2026
          </span>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white drop-shadow-lg">
            ÑANDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">VIBES</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-lg mx-auto font-light drop-shadow-md">
            Hecho para sentir Paraguay
          </p>

          <div className="pt-8">
            <Link 
              href="#tienda" // Esto hace scroll suave hasta la sección tienda
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
            >
              Explorar Colección
              <ArrowDown size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN TIENDA (PRODUCTOS) --- */}
      {/* Le ponemos id="tienda" para que el botón de arriba baje hasta acá */}
      <section id="tienda" className="max-w-7xl mx-auto px-4 py-24">
        
        <div className="flex items-center justify-between mb-12 border-b border-gray-800 pb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            🔥 Últimos lanzamientos
          </h2>
          <span className="text-gray-500 text-sm hidden md:block">
            {productos.length} productos disponibles
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {productos.map((producto) => (
            <Link key={producto.id} href={`/producto/${producto.slug}`} className="group block">
              
              {/* Card de Imagen */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-gray-900 mb-4">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay al pasar el mouse */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                
                <div className="absolute top-3 left-3">
                   <span className="bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">Nuevo</span>
                </div>
              </div>

              {/* Info Producto Minimalista */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">
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
    </main>
  );
}