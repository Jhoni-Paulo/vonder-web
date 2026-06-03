import * as React from "react";
import { ProductCard } from "./ProductCard";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonStyle?: "yellow" | "black";
  backgroundImage?: string;
  products: Array<{
    image: string;
    title: string;
    code: string;
  }>;
  className?: string;
}

export function ProductSection({
  title,
  subtitle,
  buttonText,
  buttonStyle = "yellow",
  backgroundImage,
  products,
  className = "",
}: ProductSectionProps) {
  const sectionContent = (
    <>
      <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1094px] max-md:max-w-full">
        <div className="flex flex-col text-black">
          <h2 className="self-start text-5xl font-bold max-md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-xl font-light">{subtitle}</p>
        </div>
        <div className="flex flex-col self-start text-lg font-bold text-neutral-700">
          <img
            src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/ddacf3ed89e2f234c2e7ed9d30966d9dcd9b83ac?placeholderIfAbsent=true"
            alt="Navigation arrows"
            className="object-contain self-end max-w-full aspect-[2.19] w-[105px] max-md:mr-1"
          />
          <button
            className={`flex flex-col justify-center px-7 py-5 mt-16 rounded-[100px] max-md:px-5 max-md:mt-10 ${
              buttonStyle === "yellow" ? "bg-yellow-500" : "bg-black text-white"
            }`}
          >
            <span>{buttonText}</span>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-between self-center mt-9 w-full text-lg text-center max-w-[1086px] max-md:max-w-full">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            code={product.code}
            className="max-w-full w-[178px]"
          />
        ))}
      </div>
    </>
  );

  if (backgroundImage) {
    return (
      <section
        className={`flex relative flex-col justify-center items-center px-20 py-24 w-full min-h-[789px] max-md:px-5 max-md:pb-24 max-md:max-w-full ${className}`}
      >
        <img
          src={backgroundImage}
          alt="Section background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative -mb-6 w-full max-w-[1102px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between max-md:mr-1.5 max-md:max-w-full">
            <div className="text-black">
              <h2 className="text-5xl font-bold max-md:text-4xl">{title}</h2>
              <p className="mt-5 text-xl font-light">{subtitle}</p>
            </div>
            <div className="flex flex-col self-start text-lg font-bold text-white">
              <img
                src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/2199866741e5ca88a5be849fa51335fac8dd58b6?placeholderIfAbsent=true"
                alt="Navigation arrows"
                className="object-contain self-end max-w-full aspect-[2.19] w-[105px] max-md:mr-1"
              />
              <button className="flex flex-col justify-center px-9 py-5 mt-16 bg-black rounded-[100px] max-md:px-5 max-md:mt-10">
                <span>{buttonText}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-16 text-lg text-center max-md:mt-10">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                code={product.code}
                className="flex-1 px-4 pt-5 pb-14 bg-white rounded-2xl min-w-[212px]"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`mt-24 max-md:mt-10 ${className}`}>
      {sectionContent}
    </section>
  );
}
