import {  productos , ProductoCalzado } from "@/app/db/productos";


export default async function Productos ({
    params,
    }: {
    params: Promise <{ productoCalzadoParams: string}>;
    }) {
        const productoCalzado = (await params).productoCalzadoParams;

        const listaProductos: ProductoCalzado[] = productos;

        const mostrarProductoCalzado: ProductoCalzado | undefined = listaProductos.find ((prod) => prod.titulo === productoCalzado);

        return (
            <>
                {mostrarProductoCalzado} ? (
                    <h1>Estoy mostrando el producto : {mostrarProductoCalzado?.titulo }</h1>
                ) : (
                    <h1> El producto no existe </h1>
                )
            </>
        )
    };
