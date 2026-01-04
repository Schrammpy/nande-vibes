// src/lib/data.ts

export const productos = [
  // FILA 1
  {
    id: 1,
    nombre: "Remera 'Mbarete' Retro",
    precio: 85000,
    imagen: "/productos/remera1.png", 
    slug: "remera-mbarete",

    variantes: [
      { color: "Blanco", hex: "#FFFFFF", imagen: "/productos/remera1.png" },
      { color: "Negro", hex: "#000000", imagen: "/productos/remera1.png" },
      { color: "Azul", hex: "#1d4ed8", imagen: "/productos/remera1.png" }
    ]
  },
  {
    id: 2,
    nombre: "Remera Tereré Vibes",
    precio: 90000,
    imagen: "/productos/remera2.png",
    slug: "remera-terere"
  },
  {
    id: 3,
    nombre: "Remera Asunción 1990",
    precio: 85000,
    imagen: "/productos/remera3.png",
    slug: "remera-asuncion"
  },
  {
    id: 4,
    nombre: "Hoddie 'Jopara' Style",
    precio: 180000,
    imagen: "/productos/remera1.png",
    slug: "hoddie-jopara"
  },
  
  // FILA 2 (Nuevos)
  {
    id: 5,
    nombre: "Remera 'Kape' Street",
    precio: 85000,
    imagen: "/productos/remera1.png", // Repetí la imagen por ahora
    slug: "remera-kape-street"
  },
  {
    id: 6,
    nombre: "Remera Rohayhu Neon",
    precio: 95000,
    imagen: "/productos/remera2.png", // Repetí la imagen por ahora
    slug: "remera-rohayhu-neon"
  },
  {
    id: 7,
    nombre: "Remera Chipero Aesthetic",
    precio: 85000,
    imagen: "/productos/remera3.png", // Repetí la imagen por ahora
    slug: "remera-chipero"
  },
  {
    id: 8,
    nombre: "Gorra 'Paraguay' Minimal",
    precio: 60000,
    imagen: "/productos/remera2.png", // Repetí la imagen por ahora
    slug: "gorra-paraguay"
  }
];