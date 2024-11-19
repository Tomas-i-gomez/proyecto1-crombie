export type TypeProductos = {
  titulo: string;
  urlImagen: string;
  precio: number;
  descripcion: string;
  categoria: string;
  }
  
  
  export const productosDb: TypeProductos[] = [
      {
        titulo: "Zapatos",
        urlImagen: "/images/zapatos.jpg",
        precio: 149.99,
        descripcion: "Zapatos de Alta calidad ideal para fiestas de gala.",
        categoria: "calzado",
      },
      {
        titulo: "Borcegos",
        urlImagen: "/images/borcegos.jpg",
        precio: 129.99,
        descripcion: "Borcegos de Cuero excelente para toda ocasion.",
        categoria: "calzado",
      },
      {
        titulo: "Nauticas",
        urlImagen: "/images/nauticas.jpg",
        precio: 69.99,
        descripcion: "Opcion ideal para toda ocasion.",
        categoria: "calzado",
      },
      {
        titulo: "Sandalias",
        urlImagen: "/images/sandalias.jpg",
        precio: 89.99,
        descripcion: "Sandalia monocolor ligera. Fabricada en espuma EVA ligera. Cuenta con dos tiras anchas en el empeine. Suela con volumen.",
        categoria: "calzado",
      },
      {
        titulo: "Bamba",
        urlImagen: "/images/zapatillas.jpg",
        precio: 79.99,
        descripcion: "Zapatilla deportiva tipo bamba. Corte liso. Cordonera con siete pasados. Piso uniforme con ligero volumen.",
        categoria: "calzado",
      },
      {
          titulo: "Remera",
          urlImagen: "/images/remera.jpg",
          precio: 69.99,
          descripcion: "Opcion ideal para toda ocasion.",
          categoria: "ropa",
        },
        {
          titulo: "Camisa",
          urlImagen: "/images/camisa.jpg",
          precio: 89.99,
          descripcion: "Camisa Slim Fit",
          categoria: "Ropa",
        },
        {
          titulo: "Pantalon",
          urlImagen: "/images/pantalon.jpg",
          precio: 79.99,
          descripcion: "Pantalon de vestir",
          categoria: "ropa",
        },
        {
          titulo: "Reloj",
          urlImagen: "/images/reloj.webp",
          precio: 69.99,
          descripcion: "Opcion ideal para toda ocasion.",
          categoria: "accesorios",
        },
        {
          titulo: "Cadenitas",
          urlImagen: "/images/cadenita.webp",
          precio: 89.99,
          descripcion: "Para uso diario",
          categoria: "accesorios",
        },
        {
          titulo: "Perfume Dior",
          urlImagen: "/images/dior.webp",
          precio: 79.99,
          descripcion: "Uso diario",
          categoria: "perfumes",
        },
        {
          titulo: "Perfume Invictus",
          urlImagen: "/images/invictus.webp",
          precio: 79.99,
          descripcion: "Uso diario",
          categoria: "perfumes",
        },
        {
          titulo: "Perfume One Million",
          urlImagen: "/images/one.webp",
          precio: 79.99,
          descripcion: "Uso diario",
          categoria: "perfumes",
        },
    ];
    
  
  