import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Printer, Truck } from "lucide-react"; // <--- ÍCONOS NUEVOS

// Lista de imágenes para el fondo (Repetí las que tengas o agregá nuevas)
const collageImages = [
  "/productos/hype/upd_front1.png",
  "/productos/raices/picaflor_backv2.png",
  "/productos/iconos/costanera1.png",
  "/productos/hype/front_anadie1.png",
  "/productos/raices/guacamayo_back1.png",
  "/productos/iconos/treskandu1.png",
  "/productos/hype/tererelove2.png",
  "/productos/raices/terere_front2.png",
  "/productos/iconos/cerrohu2.png",
];

export default function HistoriaPage() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      
      {/* --- FONDO COLLAGE ATMOSFÉRICO --- */}
      <div className="absolute inset-0 z-0">
        {/* Grilla de imágenes inclinada para dar estilo */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 opacity-70 transform -rotate-6 scale-110">
          {collageImages.map((src, index) => (
            <div key={index} className="relative aspect-[3/4] w-full overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src={src} 
                alt="Diseño de fondo" 
                fill 
                className="object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* DEGRADADO MÁGICO (Vignette) */}
        {/* Esto oscurece el centro para que el texto se lea perfecto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* --- CONTENIDO TEXTO (Z-10 para que flote encima) --- */}
      <div className="relative z-10 max-w-3xl space-y-8 text-center md:text-left p-8 md:p-0">
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-8 drop-shadow-2xl">
          NO ES SOLO ROPA. <br />
          ES IDENTIDAD.
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-gray-200 font-light leading-relaxed drop-shadow-md">
          <p>
            <span className="font-bold text-white">Ñande Vibes</span> nace en 2026 con una misión simple: 
            dejar de usar remeras con frases en inglés que no significan nada para nosotros, 
            y empezar a vestir lo que somos y sentimos realmente.
          </p>
          
          <p>
            Somos un estudio creativo digital en <span className="text-orange-400 font-bold">Asunción</span>. 
            Usamos <span className="font-bold text-white">nuestra cultura </span> 
            para inspirarnos y definir nuestros diseños, cada prenda es una celebración de lo que somos: nuestra gente, 
            nuestras costumbres, nuestra tierra.
          </p>
        </div>

        {/* --- NUEVA SECCIÓN: LAS REGLAS DEL JUEGO (PROCESO) --- */}
        <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8">
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm border-b border-gray-700 pb-2">
                ¿Cómo funciona?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* PASO 1 */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <div className="bg-orange-500/20 p-3 rounded-full text-orange-500">
                        <ShoppingBag size={24} />
                    </div>
                    <h4 className="font-bold text-lg">1. Vos elegís</h4>
                    <p className="text-sm text-gray-400 text-justify leading-relaxed">
                        Seleccionás tu diseño, talle y color. Confirmás tu pedido por WhatsApp directamente con nosotros.
                    </p>
                </div>

                {/* PASO 2 */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <div className="bg-blue-500/20 p-3 rounded-full text-blue-400">
                        <Printer size={24} />
                    </div>
                    <h4 className="font-bold text-lg">2. Nosotros creamos</h4>
                    <p className="text-sm text-gray-400 text-justify leading-relaxed">
                        Estampamos tu remera <strong>bajo demanda</strong>. No tenemos stock viejo acumulando polvo. Tu prenda se hace fresca para vos en 24-48hs.
                    </p>
                </div>

                {/* PASO 3 */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                        <Truck size={24} />
                    </div>
                    <h4 className="font-bold text-lg">3. Lo recibis</h4>
                    <p className="text-sm text-gray-400 text-justify leading-relaxed">
                        Coordinamos la entrega, delivery o encomienda, y recibís calidad premium lista para estrenar.
                    </p>
                </div>
            </div>
        </div>


        {/* FIRMA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4">
          <div className="text-left">
            <p className="text-sm text-gray-400 uppercase tracking-widest">Founder</p>
            <p className="text-white font-bold text-lg">JESSICA GOÑI</p>
          </div>

          <Link 
            href="/#catalogo" 
            className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full md:w-auto"
          >
            Ver la Colección
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </main>
  );
}