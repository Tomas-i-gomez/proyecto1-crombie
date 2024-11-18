import { categorias , CategoriaType } from "@/app/db/categorias";
import { productos, ProductoCalzado } from "@/app/db/productos";
import Link from "next/link";


export default async function Categoria ({
    params,
    }: {
    params: Promise <{ categoriaParams: string}>;
    }) {
        const categoria = (await params).categoriaParams;

        const listaCategoria: CategoriaType[] = categorias;

        const mostrarCategoria: CategoriaType | undefined = listaCategoria.find ((cat) => cat.name.toLowerCase() === categoria);


        if (!mostrarCategoria) {
            return <h1>La categoría no existe</h1>;
          }
    
          return (
            <>
              <h1 className="text-2xl font-bold">Categoría: {mostrarCategoria.name}</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {productos.filter((producto) => producto.categoria.toLowerCase() === mostrarCategoria.name.toLowerCase()).map((producto) => (
                <Link
                key={producto.titulo}
                href={`/${mostrarCategoria.name}/${producto.titulo}`}
                className="block p-4 border rounded-lg shadow hover:shadow-lg transition"
                >
                <h2 className="text-lg font-semibold">{producto.titulo}</h2>
                <p className="text-gray-600">{producto.descripcion}</p>
                <p className="text-blue-500 font-bold">${producto.precio}</p>
                </Link>
            ))}
                </div>
            </>
          );
    };

    