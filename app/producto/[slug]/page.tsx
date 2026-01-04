'use client';

import Image from "next/image";
import { productos } from "@/lib/data";
import { notFound } from "next/navigation";
import { useState, use } from "react"; 

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const producto = productos.find((p) => p.slug === slug);

  if (!producto) {
    notFound();
  }

  // ESTADO 1: Talle (por defecto M)
  const [talle, setTalle] = useState("M");

  // ESTADO 2: Color (Iniciamos con el primero de la lista, o null si no tiene variantes)
  // Si tiene variantes, usamos la primera. Si no, usamos un objeto "dummy" con la imagen principal.
  const [colorSeleccionado, setColorSeleccionado] = useState(
    producto.variantes ? producto.variantes[0] : { color: "Único", imagen: producto.imagen }
  );

  // Lógica de WhatsApp (Ahora incluye el COLOR)
  const handleComprar = () => {
    const telefono = "595981000000"; 
    const mensaje = `Hola Ñande Vibes! 👋 Quiero la *${producto.nombre}*.
    \n📏 Talle: *${talle}*
    \n🎨 Color: *${colorSeleccionado.color}*
    \n💰 Precio: Gs. ${producto.precio.toLocaleString()}`;
    
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4 py-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: FOTO DINÁMICA */}
        <div className="sticky top-24"> {/* Sticky para que la foto te siga al bajar */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
            {/* key={colorSeleccionado.imagen} sirve para que React haga una animación cuando cambia la foto */}
            <Image
                key={colorSeleccionado.imagen} 
                src={colorSeleccionado.imagen}
                alt={`${producto.nombre} - ${colorSeleccionado.color}`}
                fill
                className="object-cover transition-opacity duration-500 opacity-0 animate-fadeIn" // Pequeño efecto fade
                onLoadingComplete={(image) => image.classList.remove("opacity-0")} // Truco para que no parpadee feo
                priority
            />
            </div>
        </div>

        {/* COLUMNA DERECHA: INFO */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter uppercase">
              {producto.nombre}
            </h1>
            <p className="text-3xl font-mono text-orange-500 font-bold">
              ₲ {producto.precio.toLocaleString('es-PY')}
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed text-lg">
            Diseño exclusivo de la colección 2026. Algodón 100% premium peinado. 
            Estampado DTF de alta definición que no se cuartea.
          </p>

          {/* SELECTOR DE COLOR (Solo aparece si hay variantes) */}
          {producto.variantes && (
            <div>
                <p className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
                    Color: <span className="text-white">{colorSeleccionado.color}</span>
                </p>
                <div className="flex gap-4">
                    {producto.variantes.map((variante) => (
                    <button
                      key={variante.color}
                      onClick={() => setColorSeleccionado(variante)}
                      className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center
                      ${colorSeleccionado.color === variante.color 
                      ? 'border-orange-500 scale-110' // Si está seleccionado, borde naranja
                      : 'border-transparent hover:scale-105' // Si no, transparente
                      }
                      /* SOLUCIÓN: Si es negro, le forzamos un borde grisecito siempre */
                      ${variante.color === "Negro" ? "ring-1 ring-gray-600" : ""}
                      `}
                        style={{ backgroundColor: variante.hex }}
                        title={variante.color}
                          >
                        {/* Esto ya lo tenías para el blanco, lo dejamos igual */}
                        {variante.color === "Blanco" && (
                        <div className="w-full h-full rounded-full border border-gray-300 opacity-20"></div>
                        )}
                    </button>
                  ))}<br></br>  
                </div>
            </div>
          )}

          {/* SELECTOR DE TALLES */}
          <div>
            <p className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Talle</p>
            <div className="flex gap-3 flex-wrap">
              {['P', 'M', 'G', 'XG', 'XXG'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTalle(t)}
                  className={`min-w-[3rem] h-12 rounded-lg font-bold border transition-all px-2
                    ${talle === t 
                      ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                      : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-500 hover:text-white'}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 hover:text-orange-400 cursor-pointer underline">Ver tabla de medidas</p>
          </div>

          {/* BOTÓN DE COMPRA */}
          <button
            onClick={handleComprar}
            className="mt-4 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-5 rounded-xl text-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-green-900/40 transform active:scale-95"
          >
            <span>Pedir por WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </button>
          
        </div>
      </div>
    </main>
  );
}