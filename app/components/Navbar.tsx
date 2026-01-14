import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      {/* Quitamos 'justify-between' y dejamos solo 'flex items-center' */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
        
        {/* 1. LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white mr-12">
          ÑANDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">VIBES</span>
        </Link>

        {/* 2. LINKS (Ahora están pegados al logo, separados por el mr-12 de arriba) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition">Inicio</Link>
          <Link href="/#catalogo" className="hover:text-white transition">Colección 2026</Link>
          <Link href="/historia" className="hover:text-white transition">Sobre Nosotros</Link>
        </div>

        {/* 3. CARRITO (El truco: ml-auto empuja esto hasta el final a la derecha) */}
        <button className="ml-auto text-white hover:text-orange-500 transition relative">
          <ShoppingBag />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

      </div>
    </nav>
  );
}