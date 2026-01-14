import Link from "next/link";
import { Hammer, HardHat } from "lucide-react";

export default function ConstruccionPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
      
      {/* ÍCONO ANIMADO */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 rounded-full animate-pulse"></div>
        <HardHat size={80} className="relative z-10 text-white" />
      </div>

      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 uppercase">
        En Construcción
      </h1>

      <p className="text-gray-400 text-lg max-w-md mb-8">
        Estamos preparando esta sección para brindarte la mejor experiencia. 
        Muy pronto vas a encontrar toda la info acá.
      </p>

      <div className="flex gap-4">
        <Link 
          href="/" 
          className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
        >
          Volver al Inicio
        </Link>
        
        {/* Opción Pro: Botón para preguntar por WhatsApp si es urgente */}
        <a 
          href="https://wa.me/595981000000" // PONÉ TU NÚMERO
          target="_blank"
          className="border border-gray-700 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition-all"
        >
          Consultar duda
        </a>
      </div>

    </main>
  );
}