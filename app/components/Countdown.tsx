'use client';

import { useState, useEffect } from 'react';

// Fecha objetivo: 6 de Marzo de 2026 a las 20:00 hs (Hora ideal de lanzamiento)
const TARGET_DATE = new Date('2026-03-06T20:00:00').getTime();

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      finished: false
    };
  }

  useEffect(() => {
    setMounted(true); // Evita errores de hidratación
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null; // No mostrar nada hasta que cargue en el cliente

  // Si ya terminó el tiempo, devolvemos NULL para que el padre decida qué mostrar (el botón)
  if (timeLeft.finished) {
    return null; 
  }

  return (
    <div className="flex gap-4 text-center justify-center my-6">
      <TimeBox value={timeLeft.days} label="DÍAS" />
      <TimeBox value={timeLeft.hours} label="HS" />
      <TimeBox value={timeLeft.minutes} label="MIN" />
      <TimeBox value={timeLeft.seconds} label="SEG" />
    </div>
  );
}

// Cajita individual para cada número (Estilo Matrix/Cyberpunk)
function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900/80 border border-orange-500/50 backdrop-blur-md rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)]">
        <span className="text-2xl md:text-4xl font-black text-white font-mono">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-bold text-orange-500 mt-2 tracking-widest">
        {label}
      </span>
    </div>
  );
}