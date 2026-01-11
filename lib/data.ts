// src/lib/data.ts

export const productos = [
  // --- COLECCIÓN: HYPE (Febrero) ---
  {
    id: 1,
    nombre: "Remera 'Ana 10' Heart",
    precio: 85000,
    categoria: "hype", // <--- ETIQUETA NUEVA
    imagen: "/productos/hype/back_anadie2.png", // Asegurate que este archivo exista en esa carpeta
    slug: "remera-ana-10",
    variantes: [
      { 
        color: "Negro", 
        hex: "#000000",
        // AQUI ESTA EL CAMBIO: 'imagenes' en plural y es una lista []
        imagenes: [
            "/productos/hype/front_anadie2.png",
            "/productos/hype/back_anadie2.png"
        ]
      },
      { 
        color: "Blanco", 
        hex: "#FFFFFF", 
        imagenes: [
            "/productos/hype/front_anadie1.png",
            "/productos/hype/back_anadie1.png"
        ]
      }
    ]
  },
  {
    id: 2,
    nombre: "Hoodie Love Broken",
    precio: 180000,
    categoria: "hype",
    imagen: "/productos/hype/terere_lovev1.png",
    slug: "hoodie-love-broken"
  },
  {
    id: 3,
    nombre: "Remera Sad Vibes",
    precio: 85000,
    categoria: "hype",
    imagen: "/productos/hype/tererelove1.png",
    slug: "remera-sad-vibes"
  },
  {
    id: 4,
    nombre: "Remera Trap Asu",
    precio: 90000,
    categoria: "hype",
    imagen: "/productos/hype/back_anadie1.png",
    slug: "remera-trap-asu"
  },

  // --- COLECCIÓN: RAICES ---
  {
    id: 5,
    nombre: "Remera Cerro Hû",
    precio: 90000,
    categoria: "raices",
    imagen: "/productos/raices/sopa1.png",
    slug: "remera-cerro-hu"
  },
  {
    id: 6,
    nombre: "Remera Salto Cristal",
    precio: 85000,
    categoria: "raices",
    imagen: "/productos/raices/chguazu1.png",
    slug: "remera-salto-cristal"
  },
  {
    id: 7,
    nombre: "Remera Lapacho Rosa",
    precio: 85000,
    categoria: "raices",
    imagen: "/productos/raices/simbolos1.png",
    slug: "remera-lapacho"
  },
  {
    id: 8,
    nombre: "Remera Yaguareté",
    precio: 95000,
    categoria: "raices",
    imagen: "/productos/raices/terere_front1.png",
    slug: "remera-yaguarete"
  },

  // --- COLECCIÓN: ICONOS ---
  {
    id: 9,
    nombre: "Remera Chipera",
    precio: 85000,
    categoria: "iconos",
    imagen: "/productos/iconos/costanera1.png",
    slug: "remera-chipera"
  },
  {
    id: 10,
    nombre: "Remera Tereré",
    precio: 85000,
    categoria: "iconos",
    imagen: "/productos/iconos/mombyry1.png",
    slug: "remera-terere"
  },
   {
    id: 11,
    nombre: "Remera Linea 27",
    precio: 85000,
    categoria: "iconos",
    imagen: "/productos/iconos/treskandu1.png",
    slug: "remera-linea-27"
  },
   {
    id: 12,
    nombre: "Remera Pilsen",
    precio: 85000,
    categoria: "iconos",
    imagen: "/productos/iconos/cerrohu1.png",
    slug: "remera-pilsen"
  },
];