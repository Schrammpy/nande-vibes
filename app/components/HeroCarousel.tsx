'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';


const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="red" // Color rojo oficial
    stroke="currentColor"
    strokeWidth="0"
    className="inline-block ml-3 mb-1" // Ajustes para que quede alineado al texto
  >
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

// --- CONFIGURACIÓN DE LOS SLIDES ---
const slides = [
  {
    id: 1,
    bgImage: "/hero-banner.png",
    subtitle: "NUEVA COLECCIÓN 2026",
    renderTitle: () => (
      <>
        ÑANDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">VIBES</span>
      </>
    ),
    altText: "Portada Principal Ñande Vibes",
    desc: "\"Hecho para sentir Paraguay.\"",
    btnText: "Ver las Colecciones",
    btnLink: "#catalogo",
    isCollab: false
  },
  
  /* --- COMENTAMOS ESTO HASTA QUE JUNIOR DE EL OK ---
  {
    id: 2,
    bgImage: "/hero-junior.jpg",
    subtitle: "EDICIÓN LIMITADA",
    renderTitle: () => (
      <div className="flex flex-col items-center leading-tight w-full px-2">
        <div className="flex flex-wrap justify-center items-baseline gap-2 md:gap-4 tracking-tighter">
          <span className="text-white">ÑANDE</span>
          <span className="text-orange-500">VIBES</span>
          <span className="font-serif italic text-white opacity-80 text-4xl md:text-7xl">x</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-4 mt-2 tracking-tighter">
          <span className="text-red-600">JUNIOR</span>
          <div className="flex items-center gap-3">
            <span className="text-white">VIAJERO</span>
            <div className="transform scale-110 mt-1">
               <YoutubeIcon />
            </div>
          </div>
        </div>
      </div>
    ),
    altText: "Colaboración Junior Viajero",
    desc: "Una colección exclusiva para los que aman la ruta.",
    btnText: "Ver Colaboración",
    btnLink: "/collab/junior-viajero",
    isCollab: true
  }
  --- FIN DEL COMENTARIO --- */
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Lógica de Autoplay (Cambia cada 6 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-black">
      
      {/* MAPEO DE SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform
            ${index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
          `}
          // El truco de 'translate-x-full' hace que el que no se ve, se vaya a la derecha
          // Pero para un efecto más suave de "fade + slide", jugamos con la opacidad.
        >
          {/* 1. IMAGEN DE FONDO */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={slide.bgImage} 
              alt={slide.altText} 
              fill 
              className={`object-cover ${slide.isCollab ? 'opacity-50' : 'opacity-60'}`} 
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          {/* 2. CONTENIDO */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
            
            {/* Badge especial si es Collab */}
            {slide.isCollab && (
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 mb-4 rounded uppercase tracking-wider animate-pulse">
                    🔥 Colaboración Oficial
                </span>
            )}

            <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-2 animate-pulse">
                {slide.subtitle}
            </span>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter drop-shadow-lg mb-4">
                {slide.renderTitle()}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-lg mx-auto font-light drop-shadow-md">
              {slide.desc}
            </p>

            <div className="pt-8">
              <Link 
                href={slide.btnLink} 
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
              >
                {slide.btnText}
                {slide.isCollab ? <ArrowRight size={20} /> : <ArrowDown size={20} />}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* PUNTITOS INDICADORES (Abajo) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${current === idx ? 'bg-white w-8' : 'bg-gray-600 hover:bg-gray-400'}`}
          />
        ))}
      </div>

    </section>
  );
}