import * as React from "react";

interface BlogCardProps {
  image: string;
  category: string;
  description: string;
  readMoreText: string;
  date: string;
}

export function BlogCard({
  image,
  category,
  description,
  readMoreText,
  date,
}: BlogCardProps) {
  return (
    <article className="flex relative flex-col items-start px-5 pt-48 pb-10 w-full text-lg font-bold text-yellow-400 aspect-[0.974] max-md:px-5 max-md:pt-24 max-md:mt-10">
      <img
        src={image}
        alt={category}
        className="object-cover absolute inset-0 size-full"
      />
      <h3 className="relative">{category}</h3>
      <p className="relative mt-3.5 font-light text-white">{description}</p>
      <div className="flex relative gap-5 justify-between self-stretch mt-8">
        <span>{readMoreText}</span>
        <time>{date}</time>
      </div>
    </article>
  );
}
