'use client';

import Image from "next/image";
import { productos } from "@/lib/data";
import { notFound } from "next/navigation";
import { useState, use } from "react"; 
import { ProductImageZoom } from "@/app/components/ProductImageZoom";
import { Ruler, ChevronDown, ChevronUp, Truck } from "lucide-react"; // <--- Agregá Truck
// 1. IMPORTAMOS LO NECESARIO PARA PAGOS Y MONEDA
import { useCurrencyStore } from "@/app/store/currencyStore"; 
import { PaypalButton } from "@/app/components/PaypalButton"; 

// Componente de Bandera de España para que se vea bien en Windows
const FlagES = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24" width="20" height="14" className="rounded-[2px] inline-block ml-2 align-middle">
    <rect width="36" height="24" fill="#AA151B"/>
    <rect y="6" width="36" height="12" fill="#F1BF00"/>
  </svg>
);

const FlagPY = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24" width="20" height="14" className="rounded-[2px] inline-block ml-2 align-middle">
    <rect width="36" height="24" fill="#fff"/>
    <rect width="36" height="8" fill="#D52B1E"/>
    <rect y="8" width="36" height="8" fill="#fff"/>
    <rect y="16" width="36" height="8" fill="#0038A8"/>
    <circle cx="18" cy="12" r="3" fill="none" stroke="#000" strokeWidth="0.5"/>
    <circle cx="18" cy="12" r="1" fill="#D52B1E"/>
  </svg>
);


export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const producto = productos.find((p) => p.slug === slug);

  // 2. OBTENEMOS LA MONEDA DEL STORE (Esto arregla el error "currency not defined")
  const { currency } = useCurrencyStore();

  if (!producto) {
    notFound();
  }

  // Verificar variantes
  const tieneVariantes = producto.variantes && producto.variantes.length > 0;

  // ESTADO 1: Talle
  const [talle, setTalle] = useState("M");

  // ESTADO 2: Variante de Color
  const [varianteSeleccionada, setVarianteSeleccionada] = useState(
    tieneVariantes 
      ? producto.variantes![0] 
      : { color: "Único", hex: "", imagenes: [producto.imagen] }
  );

  // ESTADO 3: Imagen Actual
  const [imagenActual, setImagenActual] = useState(varianteSeleccionada.imagenes[0]);

  // ESTADO 4: Guía de Talles
  const [mostrarGuia, setMostrarGuia] = useState(false);

  const cambiarColor = (nuevaVariante: any) => {
    setVarianteSeleccionada(nuevaVariante);
    setImagenActual(nuevaVariante.imagenes[0]); 
  };

  const handleComprar = () => {
    const telefono = "595992607802"; 
    const lineas = [
        "Hola Ñande Vibes! 👋",
        "",
        "Quiero mandar hacer este diseño:",
        "",
        `👕 *Modelo:* ${producto.nombre}`,
        `📏 *Talle:* ${talle}`,
        `🎨 *Color:* ${varianteSeleccionada.color}`,
        `💰 *Precio:* Gs. ${producto.precio.toLocaleString('es-PY')}`,
        "",
        "¿Cómo hacemos para el pago y envío?"
      ];
  
      const mensaje = lineas.join("\n");
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
                <ProductImageZoom 
                    key={imagenActual} 
                    src={imagenActual} 
                    alt={producto.nombre} 
                />
            </div>

            {/* MINIATURAS */}
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
            
            {/* --- 3. PRECIO DINÁMICO (Gs o €) --- */}
            <div className="flex items-end gap-3 mt-2">
              <p className="text-4xl font-mono text-orange-500 font-bold leading-none">
                {currency === 'PYG' ? (
                    // MODO PARAGUAY
                    <>
                        <span className="text-xl align-top mr-1 opacity-80">₲</span>
                        {producto.precio.toLocaleString('es-PY')}
                    </>
                ) : (
                    // MODO EUROPA
                    <>
                        <span className="text-xl align-top mr-1 opacity-80">€</span>
                        {producto.precioEUR || "29.90"}
                    </>
                )}
              </p>
              
              {/* Tachado (Solo en Guaraníes) */}
              {currency === 'PYG' && producto.precioAntes && (
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

              {/* --- NUEVO: BADGE DE ENVÍO GRATIS --- */}
            <div className="flex items-center gap-2 mt-3 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2 w-fit">
                <Truck size={18} className="text-green-400" />
                <span className="text-green-400 text-xs font-bold uppercase tracking-wider">
                    {currency === 'PYG' ? (
                        <>Envíos a todo el país <FlagPY /></>
                    ) : (
                        <>Envío Gratis a toda España <FlagES /></>
                    )}
                </span>
            </div>


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

          {/* GUÍA DE TALLES */}
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

            {mostrarGuia && (
              <div className="mt-4 animate-fadeIn">
                <div className="bg-gray-900 rounded-lg p-4 text-xs md:text-sm border border-gray-800">
                  
                  {/* TÍTULO DINÁMICO */}
                  <p className="text-gray-500 mb-3 italic">
                    {currency === 'PYG' 
                      ? "* Medidas estándar de confección nacional (Algodón)."
                      : "* Medidas estándar camiseta unisex mangas cortas (Europa)."
                    }
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 border-b border-gray-700 pb-2 mb-2 font-bold text-gray-300">
                    <div>TALLE</div>
                    <div>ANCHO (A)</div>
                    <div>LARGO (B)</div>
                  </div>

                  {/* TABLA DINÁMICA */}
                  <div className="space-y-2 text-gray-400 font-mono">
                    {currency === 'PYG' ? (
                        // --- MEDIDAS PARAGUAY (Tu taller local) ---
                        <>
                            <div className="grid grid-cols-3 gap-4"><span>P</span><span>48 cm</span><span>68 cm</span></div>
                            <div className="grid grid-cols-3 gap-4"><span>M</span><span>50 cm</span><span>70 cm</span></div>
                            <div className="grid grid-cols-3 gap-4"><span>G</span><span>54 cm</span><span>74 cm</span></div>
                            <div className="grid grid-cols-3 gap-4"><span>XG</span><span>58 cm</span><span>78 cm</span></div>
                            <div className="grid grid-cols-3 gap-4"><span>XXG</span><span>60 cm</span><span>80 cm</span></div>
                        </>
                    ) : (
                        // --- MEDIDAS PRINTFUL (Bella + Canvas 3001) ---
                        // Fuente: Printful Size Guide
                        <>
                            <div className="grid grid-cols-3 gap-4"><span>S</span><span>46 cm</span><span>71 cm</span></div>
                            <div className="grid grid-cols-3 gap-4"><span>M</span><span>51 cm</span><span>74 cm</span></div>
                            <div className="grid grid-cols-3 gap-4"><span>L</span><span>56 cm</span><span>76 cm</span></div>
                            <div className="grid grid-cols-3 gap-4"><span>XL</span><span>61 cm</span><span>79 cm</span></div>
                            <div className="grid grid-cols-3 gap-4"><span>2XL</span><span>66 cm</span><span>81 cm</span></div>
                        </>
                    )}
                  </div>
                  
                  {/* DIBUJITO EXPLICATIVO */}
                  <div className="mt-4 border-t border-gray-800 pt-3 flex justify-center opacity-50">
                     <span className="text-[10px] text-center">
                        (A) Axila a Axila <br/> (B) Hombro hasta abajo
                     </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* --- 4. BOTONES DE COMPRA INTELIGENTES --- */}
          {currency === 'PYG' ? (
            
            // OPCIÓN A: PARAGUAY (WHATSAPP)
            <button
                onClick={handleComprar}
                className="mt-4 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-5 rounded-xl text-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-green-900/40 transform active:scale-95"
            >
                <span>Pedir por WhatsApp</span>
            </button>

          ) : (
            
              // OPCIÓN B: EUROPA (PAYPAL)
            <div className="mt-4 w-full animate-fadeIn">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl mb-4">
                    
                    {/* MENSAJE DE CONFIANZA */}
                    <div className="text-center mb-6">
                        <p className="text-white font-bold text-sm flex items-center justify-center gap-2">
                           Producido en nuestros talleres de España <FlagES />
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                           Calidad premium y envío rápido garantizado.
                        </p>
                    </div>

                    {/* Botón de PayPal */}
                    <PaypalButton 
                        amount={producto.precioEUR?.toString() || "29.90"} 
                         description={`${producto.nombre} - Talle: ${talle} - Color: ${varianteSeleccionada.color}`}
                        onSuccess={() => alert("¡Pago recibido! Gracias por tu compra.")} 
                    />
                </div>
                
                <p className="text-xs text-center text-gray-500">
                    Procesado de forma segura por PayPal.
                </p>
            </div>

          )}
        </div>
      </div>
    </main>
  );
}