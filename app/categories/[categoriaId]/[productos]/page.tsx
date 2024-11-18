import {  productosDb , TypeProductos } from "@/app/db/productos";


export default async function Productos ({
    params,
    }: {
    params: Promise <{ productos: string}>;
    }) {
        const productoCalzado = (await params).productos;

        const listaProductos: TypeProductos[] = productosDb;

        const mostrarProductoCalzado: TypeProductos | undefined = listaProductos.find ((prod) => prod.titulo === productoCalzado);

        return (
            <>
                {mostrarProductoCalzado ? (
                    <h1>Estoy mostrando el producto : {mostrarProductoCalzado?.titulo }</h1>
                ) : (
                    <h1> El producto no existe </h1>
                )
                }
            </>
        )
    };