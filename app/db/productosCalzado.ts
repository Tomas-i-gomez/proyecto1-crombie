export type ProductoCalzado = {
titulo: string;
urlImagen: string;
precio: number;
descripcion: string;
categoria: string;
}


export const productos: ProductoCalzado[] = [
    {
      titulo: "zapatos",
      urlImagen: "https://example.com/pelota-futbol.jpg",
      precio: 149.99,
      descripcion: "Zapatos de Alta calidad ideal para fiestas de gala.",
      categoria: "Calzado",
    },
    {
      titulo: "borcegos",
      urlImagen: "https://example.com/raqueta-tenis.jpg",
      precio: 129.99,
      descripcion: "Borcegos de Cuero excelente para toda ocasion.",
      categoria: "Calzado",
    },
    {
      titulo: "nauticas",
      urlImagen: "https://example.com/guantes-boxeo.jpg",
      precio: 69.99,
      descripcion: "Opcion ideal para toda ocasion.",
      categoria: "Calzado",
    },
    {
      titulo: "sandalias",
      urlImagen: "https://example.com/zapatillas-running.jpg",
      precio: 89.99,
      descripcion: "Sandalia monocolor ligera. Fabricada en espuma EVA ligera. Cuenta con dos tiras anchas en el empeine. Suela con volumen.",
      categoria: "Calzado",
    },
    {
      titulo: "bamba",
      urlImagen: "https://example.com/mancuernas.jpg",
      precio: 79.99,
      descripcion: "Zapatilla deportiva tipo bamba. Corte liso. Cordonera con siete pasados. Piso uniforme con ligero volumen.",
      categoria: "Calzado",
    }
  ];
  

