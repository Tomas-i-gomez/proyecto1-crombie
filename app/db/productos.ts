export type Productos = {
  titulo: string;
  urlImagen: string;
  precio: number;
  descripcion: string;
  categoria: string;
  }
  
  
  export const productosDb: Productos[] = [
      {
        titulo: "zapatos",
        urlImagen: "https://example.com/pelota-futbol.jpg",
        precio: 149.99,
        descripcion: "Zapatos de Alta calidad ideal para fiestas de gala.",
        categoria: "calzado",
      },
      {
        titulo: "borcegos",
        urlImagen: "https://example.com/raqueta-tenis.jpg",
        precio: 129.99,
        descripcion: "Borcegos de Cuero excelente para toda ocasion.",
        categoria: "calzado",
      },
      {
        titulo: "nauticas",
        urlImagen: "https://example.com/guantes-boxeo.jpg",
        precio: 69.99,
        descripcion: "Opcion ideal para toda ocasion.",
        categoria: "calzado",
      },
      {
        titulo: "sandalias",
        urlImagen: "https://example.com/zapatillas-running.jpg",
        precio: 89.99,
        descripcion: "Sandalia monocolor ligera. Fabricada en espuma EVA ligera. Cuenta con dos tiras anchas en el empeine. Suela con volumen.",
        categoria: "calzado",
      },
      {
        titulo: "bamba",
        urlImagen: "https://example.com/mancuernas.jpg",
        precio: 79.99,
        descripcion: "Zapatilla deportiva tipo bamba. Corte liso. Cordonera con siete pasados. Piso uniforme con ligero volumen.",
        categoria: "calzado",
      },
      {
          titulo: "remera",
          urlImagen: "https://example.com/guantes-boxeo.jpg",
          precio: 69.99,
          descripcion: "Opcion ideal para toda ocasion.",
          categoria: "ropa",
        },
        {
          titulo: "camisa",
          urlImagen: "https://example.com/zapatillas-running.jpg",
          precio: 89.99,
          descripcion: "Camisa Slim Fit",
          categoria: "Ropa",
        },
        {
          titulo: "pantalon",
          urlImagen: "https://example.com/mancuernas.jpg",
          precio: 79.99,
          descripcion: "Pantalon de vestir",
          categoria: "ropa",
        },
        {
          titulo: "reloj",
          urlImagen: "https://example.com/guantes-boxeo.jpg",
          precio: 69.99,
          descripcion: "Opcion ideal para toda ocasion.",
          categoria: "accesorios",
        },
        {
          titulo: "cadenitas",
          urlImagen: "https://example.com/zapatillas-running.jpg",
          precio: 89.99,
          descripcion: "Para uso diario",
          categoria: "accesorios",
        },
        {
          titulo: "dior",
          urlImagen: "https://example.com/mancuernas.jpg",
          precio: 79.99,
          descripcion: "Uso diario",
          categoria: "perfumes",
        },
        {
          titulo: "invictus",
          urlImagen: "https://example.com/mancuernas.jpg",
          precio: 79.99,
          descripcion: "Uso diario",
          categoria: "perfumes",
        },
        {
          titulo: "savage",
          urlImagen: "https://example.com/mancuernas.jpg",
          precio: 79.99,
          descripcion: "Uso diario",
          categoria: "perfumes",
        },
    ];
    
  
  