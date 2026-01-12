// src/lib/data.ts

export const productos = [
  // --- COLECCIÓN: HYPE (Febrero) ---
  {
    id: 1,
    nombre: "Valentine's Day: 'ANADIE' ",
    precio: 120000,
    categoria: "hype", // <--- ETIQUETA NUEVA
    imagen: "/productos/hype/back_anadie2.png", // Asegurate que este archivo exista en esa carpeta
    slug: "remera-anadie",
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
    nombre: "Valentine's Day: 'Terere Lovers' ",
    precio: 110000,
    categoria: "hype",
    imagen: "/productos/hype/terere_lovev1.png",
    slug: "remera-tererelovers",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/hype/terere_lovev1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/hype/terere_lovev2.png"
        ]
      }
    ]
  },
  {
    id: 3,
    nombre: "Valentine's Day: 'Terere Sunset' ",
    precio: 110000,
    categoria: "hype",
    imagen: "/productos/hype/tererelove2.png",
    slug: "remera-tereresunset",
    variantes: [
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/hype/terere_lovev2.png"
        ]
      },
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/hype/terere_lovev1.png"
        ]
      }
    ]
  },
  {
    id: 4,
    nombre: "PENDIENTE UPD",
    precio: 100,
    categoria: "hype",
    imagen: "/productos/hype/back_anadie.png",
    slug: "remera-trap-asu",
    variantes: [
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/hype/terere_lovev2.png"
        ]
      },
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/hype/terere_lovev1.png"
        ]
      }
    ]
  },

  // --- COLECCIÓN: RAICES ---
  {
    id: 5,
    nombre: "Remera 'Team Sopa'",
    precio: 100000,
    categoria: "raices",
    imagen: "/productos/raices/sopa1.png",
    slug: "remera-teamsopa",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/sopa1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/raices/sop2.png"
        ]
      }
    ]
  },
  {
    id: 6,
    nombre: "Remera 'Team Chipa Guazu'",
    precio: 100000,
    categoria: "raices",
    imagen: "/productos/raices/chguazu2.png",
    slug: "remera-chipaguazu",
    variantes: [
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/raices/chguazu2.png"
        ]
      },
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/chguazu1.png"
        ]
      }
    ]
  },
  {
    id: 7,
    nombre: "Remera 'Sopa vs Chipa Guazu'",
    precio: 110000,
    categoria: "raices",
    imagen: "/productos/raices/sopavschguazu1.png",
    slug: "remera-sopavschipaguazu",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/sopavschguazu1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/raices/sopavschguazu2.png"
        ]
      }
    ]
  },
  {
    id: 8,
    nombre: "Remera 'Terere pantano'",
    precio: 120000,
    categoria: "raices",
    imagen: "/productos/raices/terere_front2.png",
    slug: "remera-tererepantano",
    variantes: [
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/raices/terere_front2.png",
            "/productos/raices/terere_back2.png"
        ]
      },
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/terere_front1.png",
            "/productos/raices/terere_back1.png"
        ]
      }
    ]
  },

  // --- COLECCIÓN: ICONOS ---
  {
    id: 9,
    nombre: "Remera 'Costanera Asunción'",
    precio: 130000,
    categoria: "iconos",
    imagen: "/productos/iconos/costanera2.png",
    slug: "remera-costanera",
    variantes: [
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/iconos/costanera2.png"
        ]
      },
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/iconos/costanera1.png"
        ]
      }
    ]
  },
  {
    id: 10,
    nombre: "Remera 'Jaha Mombyry'",
    precio: 130000,
    categoria: "iconos",
    imagen: "/productos/iconos/mombyry1.png",
    slug: "remera-mombyry",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/iconos/mombyry1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/iconos/mombyry2.png"
        ]
      }
    ]
  },
   {
    id: 11,
    nombre: "Remera 'Salto Cristal'",
    precio: 130000,
    categoria: "iconos",
    imagen: "/productos/iconos/saltocristal2.png",
    slug: "remera-saltocristal",
    variantes: [
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/iconos/saltocristal2.png"
        ]
      },
      { 
        
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/iconos/saltocristal1.png"
        ]
      }
    ]
  },
   {
    id: 12,
    nombre: "Remera 'Cerro Hu'",
    precio: 130000,
    categoria: "iconos",
    imagen: "/productos/iconos/cerrohu1.png",
    slug: "remera-cerrohu",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/iconos/cerrohu1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/iconos/cerrohu2.png"
        ]
      }
    ]
  },
];