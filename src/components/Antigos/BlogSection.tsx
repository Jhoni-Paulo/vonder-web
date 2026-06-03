import * as React from "react";
import { BlogCard } from "./BlogCard";

export function BlogSection() {
  const blogPosts = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/e9361313fd28dde72796287d310281e9dfa82965?placeholderIfAbsent=true",
      category: "Construção Civil",
      description:
        "O melhor e mais completo mixde ferramentas profissionais...",
      readMoreText: "Ler Mais",
      date: "10 Dez",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/e9361313fd28dde72796287d310281e9dfa82965?placeholderIfAbsent=true",
      category: "Construção Civil",
      description:
        "O melhor e mais completo mixde ferramentas profissionais...",
      readMoreText: "Ler Mais",
      date: "10 Dez",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/e9361313fd28dde72796287d310281e9dfa82965?placeholderIfAbsent=true",
      category: "Construção Civil",
      description:
        "O melhor e mais completo mixde ferramentas profissionais...",
      readMoreText: "Ler Mais",
      date: "10 Dez",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center px-20 py-20 bg-zinc-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
        <h2 className="self-start text-5xl font-bold text-black max-md:text-4xl">
          Confira <br />
          nosso Blog
        </h2>

        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {blogPosts.map((post, index) => (
              <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>

        <button className="flex flex-col justify-center self-center px-16 py-5 mt-14 max-w-full text-lg font-bold text-white bg-black rounded-[100px] w-[249px] max-md:px-5 max-md:mt-10">
          <span>Acessar o Blog</span>
        </button>
      </div>
    </section>
  );
}
