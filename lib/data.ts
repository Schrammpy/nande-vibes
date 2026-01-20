// src/lib/data.ts

export const productos = [
  // --- COLECCIÓN: HYPE (Febrero) ---
  {
    id: 1,
    nombre: "Valentine's Day: 'ANADIE' ",
    precio: 120000,
    precioAntes: '',
    categoria: "hype", // <--- ETIQUETA NUEVA
    imagen: "/productos/hype/back_anadie1.png", // Asegurate que este archivo exista en esa carpeta
    slug: "remera-anadie",
    variantes: [
      { color: "Blanco", 
        hex: "#FFFFFF",
        // AQUI ESTA EL CAMBIO: 'imagenes' en plural y es una lista []
        imagenes: [
            "/productos/hype/front_anadie1.png",
            "/productos/hype/back_anadie1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/hype/front_anadie2.png",
            "/productos/hype/back_anadie2.png"
        ]
      }
    ]
  },
  {
    id: 21,
    nombre: "Valentine's Day: 'Oparei' ",
    precio: 110000,
    categoria: "hype",
    imagen: "/productos/hype/oparei1.png",
    slug: "remera-oparei",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/hype/oparei1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/hype/oparei2.png"
        ]
      }
    ]
  },
  {
    id: 3,
    nombre: "Valentine's Day: 'Terere Sunset' ",
    precio: 110000,
    categoria: "hype",
    imagen: "/productos/hype/tererelove1.png",
    slug: "remera-tereresunset",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/hype/tererelove1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/hype/tererelove2.png"
        ]
      }
    ]
  },
  {
    id: 4,
    nombre: "UPD Promo 2026",
    precio: 100000,
    categoria: "hype",
    imagen: "/productos/hype/upd_front1.png",
    slug: "remera-upd",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/hype/upd_front1.png",
            "/productos/hype/upd_front2.png",
            "/productos/hype/upd_front3.png"
        ]
      },
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

  // --- COLECCIÓN: RAICES ---
  {
    id: 5,
    nombre: "Remera 'Team Sopa'",
    precio: 110000,
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
    precio: 110000,
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
  {
    id: 13,
    nombre: "Remera 'El Pitogue'",
    precio: 110000,
    categoria: "raices",
    imagen: "/productos/raices/pitogue1.png",
    slug: "remera-pitogue",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/pitogue1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        
        imagenes: [
            "/productos/raices/pitogue2.png"
        ]
      }
    ]
  },
  {
    id: 14,
    nombre: "Remera 'Gua'a Pytã'",
    precio: 120000,
    categoria: "raices",
    imagen: "/productos/raices/guacamayo_front1.png",
    slug: "remera-guaapyta",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/guacamayo_front1.png",
            "/productos/raices/guacamayo_back1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        
        imagenes: [
            "/productos/raices/guacamayo_front2.png",
            "/productos/raices/guacamayo_back2.png"
        ]
      }
    ]
  },
  {
    id: 15,
    nombre: "Remera 'Mainumby'",
    precio: 120000,
    categoria: "raices",
    imagen: "/productos/raices/picaflor_front1.png",
    slug: "remera-mainumby",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/picaflor_front1.png",
            "/productos/raices/picaflor_backv2.png"
        ]
      }
    ]
  },
  {
    id: 16,
    nombre: "Remera 'Ñande símbolos'",
    precio: 100000,
    precioAntes: 120000,
    categoria: "raices",
    imagen: "/productos/raices/simbolos1.png",
    slug: "remera-simbolos",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/simbolos1.png",
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/raices/simbolos2.png"
        ]
      }
    ]
  },
  {
    id: 18,
    nombre: "Remera 'Abuela Memby'",
    precio: 110000,
    precioAntes: '',
    categoria: "raices",
    imagen: "/productos/raices/abuela_memby1.png",
    slug: "remera-abuelamemby",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/abuela_memby1.png",
            "/productos/raices/abuela_memby2.png"
        ]
      }
    ]
  },
    {
    id: 19,
    nombre: "Remera 'Ka'u Argel'",
    precio: 110000,
    precioAntes: '',
    categoria: "raices",
    imagen: "/productos/raices/kau_argel2.png",
    slug: "remera-kauargel",
    variantes: [
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/raices/kau_argel2.png"
        ]
      },
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/kau_argel1.png"
        ]
      }
    ]
  },
   {
    id: 20,
    nombre: "Remera 'Ñembo Letrado/a'",
    precio: 110000,
    precioAntes: '',
    categoria: "raices",
    imagen: "/productos/raices/letrada.png",
    slug: "remera-letrado",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/letrada.png",
            "/productos/raices/letrado.png"
        ]
      }
    ]
  },
  {
    id: 22,
    nombre: "Remera 'Rova'atâ'",
    precio: 100000,
    precioAntes: 110000,
    categoria: "raices",
    imagen: "/productos/raices/rova2.png",
    slug: "remera-rova",
    variantes: [
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/raices/rova2.png",
        ]
      },
      { color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/raices/rova1.png"
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
  {
    id: 17,
    nombre: "Remera 'Cerro Tres Kandú'",
    precio: 130000,
    categoria: "iconos",
    imagen: "/productos/iconos/treskandu1.png",
    slug: "remera-cerrotreskandu",
    variantes: [
      { 
        color: "Blanco", 
        hex: "#FFFFFF",
        imagenes: [
            "/productos/iconos/treskandu1.png"
        ]
      },
      { 
        color: "Negro", 
        hex: "#000000",
        imagenes: [
            "/productos/iconos/treskandu2.png"
        ]
      }
    ]
  },
];