'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
      
      {/* Usamos justify-between para separar (Izquierda) de (Derecha) */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* --- GRUPO IZQUIERDA: LOGO + LINKS --- */}
        <div className="flex items-center gap-12">
            
            {/* 1. LOGO */}
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white z-50">
              ÑANDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">VIBES</span>
            </Link>

            {/* 2. LINKS DE ESCRITORIO (Pegados al logo) */}
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
              <Link href="/" className="hover:text-white transition">Inicio</Link>
              <Link href="/#catalogo" className="hover:text-white transition">Colección 2026</Link>
              <Link href="/historia" className="hover:text-white transition">Sobre Nosotros</Link>
            </div>

        </div>

        {/* --- GRUPO DERECHA: ICONOS --- */}
        <div className="flex items-center gap-4">
          
          {/* Carrito */}
          <button className="text-white hover:text-orange-500 transition relative">
            <ShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Botón Menú Hamburguesa (Solo móvil) */}
          <button 
            className="text-white md:hidden hover:text-orange-500 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-gray-800 animate-fadeIn shadow-2xl">
          <div className="flex flex-col p-4 space-y-4 text-center">
            
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white text-lg py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            
            <Link 
              href="/#catalogo" 
              className="text-gray-300 hover:text-white text-lg py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Colección 2026
            </Link>
            
            <Link 
              href="/historia" 
              className="text-gray-300 hover:text-white text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nosotros
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}