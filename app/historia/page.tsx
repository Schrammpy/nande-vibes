import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4">
      
      {/* CONTENIDO TEXTO */}
      <div className="max-w-3xl space-y-8 text-center md:text-left">
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-8">
          NO ES SOLO ROPA. <br />
          ES IDENTIDAD.
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
          <p>
            <span className="font-bold text-white">Ñande Vibes</span> nació en 2026 con una misión simple: 
            dejar de usar remeras con frases en inglés que no significan nada para nosotros, 
            y empezar a vestir lo que realmente somos.
          </p>
          
          <p>
            Somos un estudio creativo digital en <span className="text-orange-400">Asunción</span>. 
            Usamos <span className="font-bold text-white">Inteligencia Artificial</span> de última generación 
            para diseñar, pero el corazón y la picardía son 100% paraguayos.
          </p>

          <p>
            Cada prenda se estampa bajo demanda (Print on Demand). 
            Esto significa que no generamos basura ni desperdicio. 
            Tu remera se hace única y exclusivamente para vos cuando la pedís.
          </p>
        </div>

        {/* FIRMA */}
        <div className="pt-8 border-t border-gray-800 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <p className="text-sm text-gray-500 uppercase tracking-widest">Fundador</p>
            <p className="text-white font-bold text-lg">Un Dev Paraguayo</p>
          </div>

          <Link 
            href="/" 
            className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all"
          >
            Ver la Colección
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </main>
  );
}