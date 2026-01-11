'use client';

import Image from "next/image";
import { useState, MouseEvent } from "react";
import { ZoomIn } from "lucide-react";

interface Props {
  src: string;
  alt: string;
}

export function ProductImageZoom({ src, alt }: Props) {
  const [transform, setTransform] = useState("scale(1)");
  const [origin, setOrigin] = useState("center center");
  const [showIcon, setShowIcon] = useState(true);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Calculamos la posición del mouse relativa al contenedor
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    // Movemos el origen del zoom hacia donde está el mouse
    setOrigin(`${x}% ${y}%`);
    setTransform("scale(2)"); // Zoom x2
    setShowIcon(false); // Ocultamos el ícono al hacer zoom
  };

  const handleMouseLeave = () => {
    setTransform("scale(1)");
    setOrigin("center center");
    setShowIcon(true);
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden cursor-crosshair group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-200 ease-out"
        style={{ 
          transformOrigin: origin, 
          transform: transform 
        }}
        priority
      />
      
      {/* Indicador visual de Lupa (Desaparece al usarlo) */}
      <div 
        className={`absolute bottom-4 right-4 bg-white/90 backdrop-blur text-black p-2 rounded-full shadow-lg transition-opacity duration-300 pointer-events-none
        ${showIcon ? 'opacity-100' : 'opacity-0'}`}
      >
        <ZoomIn size={20} />
      </div>
    </div>
  );
}