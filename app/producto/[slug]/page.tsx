'use client';

import Image from "next/image";
import { productos } from "@/lib/data";
import { notFound } from "next/navigation";
import { useState, use } from "react"; 
import { Ruler, ChevronDown, ChevronUp } from "lucide-react"; 
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

  const [mostrarGuia, setMostrarGuia] = useState(false);


  // Función para cambiar de color y resetear la foto al frente
  const cambiarColor = (nuevaVariante: any) => {
    setVarianteSeleccionada(nuevaVariante);
    setImagenActual(nuevaVariante.imagenes[0]); // Volver a mostrar el frente al cambiar color
  };

  const handleComprar = () => {
    const telefono = "595992607802"; 
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
<div className="md:sticky md:top-24 flex flex-col gap-4"> 
    
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
            
            {/* --- INICIO BLOQUE PRECIO NEUROMARKETING --- */}
            <div className="flex items-end gap-3 mt-2">
              {/* Precio Actual (Grande y Naranja) */}
              <p className="text-4xl font-mono text-orange-500 font-bold leading-none">
                <span className="text-xl align-top mr-1 opacity-80">₲</span>
                {producto.precio.toLocaleString('es-PY')}
              </p>
              
              {/* Lógica: Si existe precioAntes, mostramos el tachado */}
              {producto.precioAntes && (
                <div className="flex flex-col mb-1">
                   <p className="text-lg text-gray-500 line-through decoration-red-500/50 font-mono">
                     ₲ {Number(producto.precioAntes).toLocaleString('es-PY')}
                   </p>
                   <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded w-fit">
                     Ahorrás ₲ {(Number(producto.precioAntes) - producto.precio).toLocaleString('es-PY')}
                   </span>
                </div>
              )}
            </div>
            {/* --- FIN BLOQUE PRECIO --- */}
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
              {/* --- INICIO GUÍA DE TALLES DESPLEGABLE --- */}
          <div className="border-t border-b border-gray-800 py-4">
            <button 
              onClick={() => setMostrarGuia(!mostrarGuia)}
              className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <Ruler size={18} className="text-orange-500"/>
                <span className="text-sm font-bold uppercase tracking-wider">Guía de Medidas</span>
              </div>
              {mostrarGuia ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
            </button>

            {/* LA TABLA (Solo se muestra si mostrarGuia es true) */}
            {mostrarGuia && (
              <div className="mt-4 animate-fadeIn">
                <div className="bg-gray-900 rounded-lg p-4 text-xs md:text-sm border border-gray-800">
                  <p className="text-gray-500 mb-3 italic">
                    * Medidas en centímetros.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 border-b border-gray-700 pb-2 mb-2 font-bold text-gray-300">
                    <div>TALLE</div>
                    <div>ANCHO (A)</div>
                    <div>LARGO (B)</div>
                  </div>

                  {/* FILAS DE LA TABLA */}
                  <div className="space-y-2 text-gray-400 font-mono">
                    <div className="grid grid-cols-3 gap-4"><span>P (S)</span><span>48 cm</span><span>68 cm</span></div>
                    <div className="grid grid-cols-3 gap-4"><span>M (M)</span><span>50 cm</span><span>70 cm</span></div>
                    <div className="grid grid-cols-3 gap-4"><span>G (L)</span><span>54 cm</span><span>74 cm</span></div>
                    <div className="grid grid-cols-3 gap-4"><span>XG (XL)</span><span>58 cm</span><span>78 cm</span></div>
                    <div className="grid grid-cols-3 gap-4"><span>XXG (XXL)</span><span>60 cm</span><span>80 cm</span></div>
                  </div>
                  
                  {/* DIBUJITO EXPLICATIVO (Opcional, texto visual) */}
                  <div className="mt-4 border-t border-gray-800 pt-3 flex justify-center opacity-50">
                     <span className="text-[10px] text-center">
                        (A) Axila a Axila <br/> (B) Hombro hasta abajo
                     </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* --- FIN GUÍA DE TALLES --- */}
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