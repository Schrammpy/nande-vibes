'use client'; // <--- OBLIGATORIO para leer la moneda

import Image from "next/image";
import Link from "next/link";
import { productos } from "@/lib/data";
import { useCurrencyStore } from "@/app/store/currencyStore"; // <--- IMPORTAR STORE
import { use } from "react"; // Para leer los params en Next 15

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function CategoryPage({ params }: { params: Promise<{ categoria: string }> }) {
  // 1. Desempaquetar params
  const { categoria } = use(params);
  
  // 2. Leer moneda global
  const { currency } = useCurrencyStore();

  const filteredProducts = productos.filter((p) => p.categoria === categoria);

  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Colección no encontrada 😔</h1>
        <Link href="/" className="text-orange-500 hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-24 text-center">
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">Colección Oficial</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 uppercase">
            {categoria}
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Explorá todos los diseños de la línea {capitalize(categoria)}. 
            Identidad paraguaya con estilo propio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((producto) => (
            <Link key={producto.id} href={`/producto/${producto.slug}`} className="group block">
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-900 mb-4 border border-gray-800">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-md text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                      {producto.categoria}
                    </span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">
                  {producto.nombre}
                </h3>
                
                {/* --- PRECIO DINÁMICO --- */}
                <div className="flex items-center gap-2">
                    <p className="text-white font-mono font-medium text-lg">
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
                </div>

              </div>

            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}