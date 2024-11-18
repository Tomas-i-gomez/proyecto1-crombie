export type CategoriaType = {
name: string;
image: string;
path: string;
};

export const categorias: CategoriaType[] = [
  {
    name: "ropa",
    image: "/images/ropa.webp", // Cambia esta URL por la de tu imagen
    path: "/categorias/ropa",
  },
  {
    name: "calzado",
    image: "/images/calzado.webp", // Cambia esta URL por la de tu imagen
    path: "/categorias/calzado",
  },
  {
    name: "accesorios",
    image: "/images/accesorios.webp", // Cambia esta URL por la de tu imagen
    path: "/categorias/accesorios",
  },
  {
    name: "perfumes",
    image: "/images/perfumes.webp", // Cambia esta URL por la de tu imagen
    path: "/categorias/perfumes",
  },
];