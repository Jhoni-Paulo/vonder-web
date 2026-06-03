import * as React from "react";

export function HeroBanner() {
  return (
    <section>
      <img
        src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/f17ce19f230fec15cf20aca5fca7dbd64e631db0?placeholderIfAbsent=true"
        alt="Hero banner"
        className="object-contain mt-0 w-full aspect-[2.4] max-md:max-w-full"
      />

      <div className="text-center mt-20 max-md:mt-10">
        <h1 className="self-center text-5xl font-bold text-black max-md:max-w-full max-md:text-4xl">
          Ferramentas VONDER
        </h1>
        <p className="self-center mt-4 text-3xl font-light text-black max-md:max-w-full">
          O melhor e mais completo mix de ferramentas profissionais do mercado.
        </p>
      </div>

      <div className="self-center mt-16 w-full max-w-[1094px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/95a3c851-4139-4350-b8be-f99f4162ce2d?placeholderIfAbsent=true"
              alt="Tool category 1"
              className="object-contain grow w-full aspect-[1.56] max-md:mt-6"
            />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/089e793c-5725-4427-8ebb-99fcfbb71119?placeholderIfAbsent=true"
              alt="Tool category 2"
              className="object-contain grow w-full aspect-[1.56] max-md:mt-6"
            />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/7947c26c-2ced-482e-9256-aa1b52e0ed2d?placeholderIfAbsent=true"
              alt="Tool category 3"
              className="object-contain grow w-full aspect-[1.56] max-md:mt-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
