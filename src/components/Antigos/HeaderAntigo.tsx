"use client";
import * as React from "react";

export function HeaderAntigo() {
  return (
    <header className="flex z-10 flex-col pb-5 w-full text-lg font-bold bg-yellow-500 rounded-none max-md:max-w-full">
      <div className="flex z-10 flex-col items-center pt-6 pb-14 -mt-14 w-full bg-black rounded-none max-md:max-w-full">
        <nav className="flex flex-wrap gap-5 justify-between w-full text-yellow-500 max-w-[1091px] max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/73f062f03cd54cd2ecc6362de0eb6d1c9d73ab3a?placeholderIfAbsent=true"
            alt="Vonder Logo"
            className="object-contain shrink-0 max-w-full aspect-[5.56] w-[205px]"
          />
          <div className="flex flex-wrap gap-10 my-auto max-md:max-w-full">
            <div className="flex flex-auto gap-10 self-start">
              <a href="#" className="basis-auto">
                Assistência Técnica
              </a>
              <a href="#" className="">
                Garantias
              </a>
              <a href="#" className="basis-auto">
                Atendimento
              </a>
            </div>
            <div className="flex gap-1 whitespace-nowrap">
              <img
                src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/a7d64756466c27628268505044b2888b81cbcfd4?placeholderIfAbsent=true"
                alt="Language flag"
                className="object-contain shrink-0 aspect-square w-[22px]"
              />
              <span>PT</span>
            </div>
          </div>
        </nav>

        <img
          src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/fe784c534bc5e93fc100384bbb4269b06dbd1c16?placeholderIfAbsent=true"
          alt="Decorative line"
          className="object-contain self-stretch mt-3.5 w-full aspect-[1000] max-md:max-w-full"
        />

        <div className="flex gap-5 justify-between mt-9 w-full max-w-[1092px] max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/2f105d97eba6ad8482e40045495f52d710ca98e0?placeholderIfAbsent=true"
            alt="Secondary logo"
            className="object-contain shrink-0 my-auto w-44 max-w-full aspect-[3.6]"
          />

          <button className="flex gap-4 px-6 py-5 text-black whitespace-nowrap bg-yellow-500 rounded-[100px] max-md:px-5">
            <img
              src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/1c7fba390a895d12e6f01cd17843cf0c17ab07c6?placeholderIfAbsent=true"
              alt="Categories icon"
              className="object-contain shrink-0 my-auto aspect-[1.12] w-[19px]"
            />
            <span className="basis-auto">Categorias</span>
          </button>

          <div className="flex gap-10 px-6 py-5 text-gray-400 bg-white rounded-[100px] max-md:px-5">
            <span>Olá, o que você procura hoje?</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/723ba818bf9bec64a0eaa1a937388c5473d8629e?placeholderIfAbsent=true"
              alt="Search icon"
              className="object-contain shrink-0 aspect-square w-[22px]"
            />
          </div>

          <img
            src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/4bf46f9066486c4ccd4ae9774964b826f732d698?placeholderIfAbsent=true"
            alt="Additional logo"
            className="object-contain shrink-0 my-auto max-w-full aspect-[5.43] w-[158px]"
          />
        </div>
      </div>

      <nav className="flex flex-wrap gap-10 self-center mt-4 w-full text-black max-w-[1064px] max-md:max-w-full">
        <a href="#" className="grow">
          Conheça a Vonder
        </a>
        <a href="#" className="grow shrink w-[223px]">
          Seja um revendedor VONDER
        </a>
        <a href="#" className="grow shrink w-44">
          Onde comprar VONDER
        </a>
        <a href="#" className="">
          Nosso Blog
        </a>
        <a href="#" className="grow shrink w-[133px]">
          Trabalhe Conosco
        </a>
      </nav>
    </header>
  );
}
