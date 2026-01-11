'use client';

import Image from "next/image";
import { productos } from "@/lib/data";
import { notFound } from "next/navigation";
import { useState, use } from "react"; 
import { ProductImageZoom } from "@/app/components/ProductImageZoom";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const producto = productos.find((p) => p.slug === slug);

  if (!producto) {
    notFound();
  }

  // Verificar variantes
  const tieneVariantes = producto.variantes && producto.variantes.length > 0;

  // ESTADO 1: Talle
  const [talle, setTalle] = useState("M");

  // ESTADO 2: Variante de Color Completa
  const [varianteSeleccionada, setVarianteSeleccionada] = useState(
    tieneVariantes 
      ? producto.variantes![0] 
      : { color: "Único", hex: "", imagenes: [producto.imagen] } // Fallback si no hay variantes
  );

  // ESTADO 3: La imagen que se ve ACTUALMENTE en grande
  const [imagenActual, setImagenActual] = useState(varianteSeleccionada.imagenes[0]);

  // Función para cambiar de color y resetear la foto al frente
  const cambiarColor = (nuevaVariante: any) => {
    setVarianteSeleccionada(nuevaVariante);
    setImagenActual(nuevaVariante.imagenes[0]); // Volver a mostrar el frente al cambiar color
  };

  const handleComprar = () => {
    const telefono = "595981000000"; 
    const mensaje = `Hola Ñande Vibes! 👋 Quiero la *${producto.nombre}*.
    \n📏 Talle: *${talle}*
    \n🎨 Color: *${varianteSeleccionada.color}*
    \n💰 Precio: Gs. ${producto.precio.toLocaleString()}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4 py-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: GALERÍA */}
<div className="sticky top-24 flex flex-col gap-4"> 
    
    {/* FOTO GRANDE CON ZOOM */}
<div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
    
    {/* Borramos el div con opacity-0 y ponemos el componente directo */}
    {/* Usamos 'key' aquí para que si cambiás de foto, el zoom se reinicie */}
    <ProductImageZoom 
        key={imagenActual} 
        src={imagenActual} 
        alt={producto.nombre} 
    />
    
</div>

            {/* MINIATURAS (Solo si hay más de 1 foto) */}
            {varianteSeleccionada.imagenes.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {varianteSeleccionada.imagenes.map((img: string, index: number) => (
                        <button
                            key={index}
                            onClick={() => setImagenActual(img)}
                            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all
                                ${imagenActual === img 
                                    ? 'border-orange-500 opacity-100' 
                                    : 'border-transparent opacity-50 hover:opacity-100'}`}
                        >
                            <Image src={img} alt="Vista" fill className="object-cover" />
                        </button>
                    ))}
                </div>
            )}
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
            Diseño exclusivo de la colección 2026. Algodón 100% premium.
          </p>

          {/* SELECTOR DE COLOR */}
          {tieneVariantes && (
            <div>
                <p className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
                    Color: <span className="text-white">{varianteSeleccionada.color}</span>
                </p>
                <div className="flex gap-4">
                    {producto.variantes!.map((variante) => (
                        <button
                            key={variante.color}
                            onClick={() => cambiarColor(variante)}
                            className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center
                                ${varianteSeleccionada.color === variante.color 
                                    ? 'border-orange-500 scale-110' 
                                    : 'border-transparent hover:scale-105'
                                }
                                ${variante.color === "Negro" ? "ring-1 ring-gray-600" : ""}
                            `}
                            style={{ backgroundColor: variante.hex }}
                            title={variante.color}
                        >
                             {variante.color === "Blanco" && (
                                <div className="w-full h-full rounded-full border border-gray-300 opacity-20"></div>
                            )}
                        </button>
                    ))}
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
          </div>

          <button
            onClick={handleComprar}
            className="mt-4 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-5 rounded-xl text-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-green-900/40 transform active:scale-95"
          >
            <span>Pedir por WhatsApp</span>
          </button>
          
        </div>
      </div>
    </main>
  );
}