import * as React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  code: string;
  className?: string;
}

export function ProductCard({
  image,
  title,
  code,
  className = "",
}: ProductCardProps) {
  return (
    <article
      className={`flex flex-col items-center text-lg text-center ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="object-contain w-full aspect-square"
      />
      <h3 className="mt-8 font-bold text-black">{title}</h3>
      <p className="mt-5 font-semibold text-zinc-600">{code}</p>
    </article>
  );
}
