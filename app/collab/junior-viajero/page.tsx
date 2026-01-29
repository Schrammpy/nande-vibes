'use client'; // <--- AGREGAR ESTO

import Image from "next/image";
import Link from "next/link";
import { productos } from "@/lib/data";
import { useCurrencyStore } from "@/app/store/currencyStore"; // <--- AGREGAR ESTO

export default function JuniorCollabPage() {
  const { currency } = useCurrencyStore(); // <--- LEER MONEDA
  const juniorProducts = productos.filter(p => p.categoria === 'junior');

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ... (Toda la parte del HERO y la HISTORIA queda IGUAL, no la borres, solo copio la parte del producto abajo) ... */}
      
      {/* (Mantené el código de las secciones de arriba igual...) */}
      
      {/* 4. EL DROP - AQUÍ CAMBIA EL PRECIO */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        {/* ... Títulos ... */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {juniorProducts.map((producto) => (
            <Link key={producto.id} href={`/producto/${producto.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-900 mb-4 border border-gray-800 group-hover:border-orange-500/50 transition-all">
                <Image src={producto.imagen} alt={producto.nombre} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* ... badge ... */}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">
                  {producto.nombre}
                </h3>
                
                {/* PRECIO DINÁMICO JUNIOR */}
                <p className="text-gray-500 font-mono mt-1 font-bold">
                    {currency === 'PYG' 
                        ? `₲ ${producto.precio.toLocaleString('es-PY')}`
                        : `€ ${producto.precioEUR || "29.90"}`
                    }
                </p>

              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}