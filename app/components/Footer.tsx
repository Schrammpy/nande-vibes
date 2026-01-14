import Link from 'next/link';
import { Instagram, Facebook, MapPin, Heart } from 'lucide-react';


const TikTok = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Esta ruta dibuja: Curva superior -> Tallo hacia abajo -> Círculo inferior */}
    <path d="M21 8a5 5 0 0 1-5-5v13a4 4 0 1 1-4-4" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* COLUMNA 1: MARCA */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tighter">ÑANDE VIBES</h3>
          <p className="text-sm text-gray-400 italic mb-4">
            Hecho para sentir Paraguay.
          </p>
          <div className="flex gap-4 mt-4">
            {/* Redes Sociales */}
            <a href="https://instagram.com" className="bg-gray-800 p-2 rounded-full hover:bg-white hover:text-black transition"><Instagram size={20}/></a>
            <a href="https://facebook.com" className="bg-gray-800 p-2 rounded-full hover:bg-white hover:text-black transition"><Facebook size={20}/></a>
            {/* NUEVO: TikTok */}
            <a href="https://tiktok.com" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-white hover:text-black transition">
              <TikTok size={20}/>
            </a>
          </div>
        </div>

        {/* COLUMNA 2: TIENDA */}
        <div>
          <h4 className="font-bold text-white mb-4">Tienda</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/construccion" className="hover:text-orange-500">Todos los productos</Link></li>
            <li><Link href="/construccion" className="hover:text-orange-500">Colección Verano</Link></li>
            <li><Link href="/construccion" className="hover:text-orange-500">Ofertas</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: SOPORTE */}
        <div>
          <h4 className="font-bold text-white mb-4">Soporte</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/construccion" className="hover:text-orange-500">Rastrear Pedido</Link></li>
            <li><Link href="/construccion" className="hover:text-orange-500">Envíos y Entregas</Link></li>
            <li><Link href="/construccion" className="hover:text-orange-500">Tabla de Talles</Link></li>
            <li><Link href="/construccion" className="hover:text-orange-500">Preguntas Frecuentes</Link></li>
          </ul>
        </div>

        {/* COLUMNA 4: LEGAL */}
        <div>
          <h4 className="font-bold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
             <li><Link href="/construccion" className="hover:text-orange-500">Términos y Condiciones</Link></li>
             <li><Link href="/construccion" className="hover:text-orange-500">Políticas de Privacidad</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-900 mt-12 pt-8 text-center text-xs text-gray-600 flex flex-col items-center gap-2">
        <p>© 2026 Ñande Vibes. Luque, Paraguay.</p>
        <p className="flex items-center gap-1">Creado por My Docs Studio.</p>
      </div>
    </footer>
  );
}