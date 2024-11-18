import Link from "next/link";
import Image from "next/image";
import React from 'react'


function Page() {
  return (
    <div className="flex flex-wrap justify-center gap-8 font-serif my-8">
  {[
    {
      src: "/images/calzado.webp",
      alt: "Calzado",
      link: "/calzado",
      label: "Calzado",
    },
    {
      src: "/images/ropa.webp",
      alt: "Ropa",
      link: "/ropa",
      label: "Ropa",
    },
    {
      src: "/images/accesorios.webp",
      alt: "Accesorios",
      link: "/accesorios",
      label: "Accesorios",
    },
    {
      src: "/images/perfumes.webp",
      alt: "Perfumes",
      link: "/perfumes",
      label: "Perfumes",
    },
  ].map((category, index) => (
    <div
      key={index}
      className="flex flex-col items-center transition duration-300 transform hover:scale-105"
    >
      <Image
        width={300}
        height={150}
        src={category.src}
        alt={category.alt}
        className="rounded-lg shadow-md hover:shadow-lg hover:opacity-90"
      />
      <Link
        href={category.link}
        className="mt-2 text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
      >
        {category.label}
      </Link>
    </div>
    ))}
    </div>
  );
}

export default Page;

