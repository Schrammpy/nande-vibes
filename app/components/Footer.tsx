import Link from 'next/link';
import { Instagram, Facebook, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 mt-20 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* COLUMNA 1: MARCA */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tighter">ÑANDE VIBES</h3>
          <p className="text-sm text-gray-400 italic mb-4">
            Hecho para sentir Paraguay.
          </p>
          <div className="flex gap-4 mt-4">
            {/* Redes Sociales */}
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-white hover:text-black transition"><Instagram size={20}/></a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-white hover:text-black transition"><Facebook size={20}/></a>
          </div>
        </div>

        {/* COLUMNA 2: TIENDA */}
        <div>
          <h4 className="font-bold text-white mb-4">Tienda</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-orange-500">Todos los productos</Link></li>
            <li><Link href="/" className="hover:text-orange-500">Colección Verano</Link></li>
            <li><Link href="/" className="hover:text-orange-500">Ofertas</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: SOPORTE */}
        <div>
          <h4 className="font-bold text-white mb-4">Soporte</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-orange-500">Rastrear Pedido</Link></li>
            <li><Link href="#" className="hover:text-orange-500">Envíos y Entregas</Link></li>
            <li><Link href="#" className="hover:text-orange-500">Tabla de Talles</Link></li>
            <li><Link href="#" className="hover:text-orange-500">Preguntas Frecuentes</Link></li>
          </ul>
        </div>

        {/* COLUMNA 4: LEGAL */}
        <div>
          <h4 className="font-bold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
             <li><Link href="#" className="hover:text-orange-500">Términos y Condiciones</Link></li>
             <li><Link href="#" className="hover:text-orange-500">Políticas de Privacidad</Link></li>
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