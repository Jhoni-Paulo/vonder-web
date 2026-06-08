"use client";
import * as React from "react";
import {  
  NewsletterSectionContainer,
  Input,
  Button,
  Terms
} from "./style";

export function NewsletterSection() {
  return (
    <NewsletterSectionContainer className="flex flex-col items-center px-16 pt-16 pb-28 w-full rounded-none bg-zinc-600 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="mb-0 w-full max-w-[1071px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[23%] max-md:ml-0 max-md:w-full">
            <h2 className="text-2xl font-bold text-yellow-400 max-md:mt-10">
              Cadastre-se e receba as novidades em primeira mão!
            </h2>
          </div>

          <div className="ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full font-bold max-md:mt-10 max-md:max-w-full">
              <form className="flex flex-wrap gap-3 text-lg text-neutral-700 max-md:max-w-full">
                <Input
                  type="text"
                  placeholder="Seu nome"
                  className="flex flex-col justify-center items-start px-9 py-6 bg-white rounded-[100px] max-md:px-5"
                />
                <Input
                  type="email"
                  placeholder="Seu emaill"
                  className="flex flex-col justify-center items-start px-8 py-6 bg-white rounded-[100px] max-md:px-5"
                />
                <Button
                  type="submit"
                  className="flex flex-col justify-center px-14 py-6 text-center whitespace-nowrap bg-yellow-400 rounded-[100px] max-md:px-5"
                >
                  Cadastrar
                </Button>
              </form>

              <Terms className="flex flex-wrap gap-2 self-start mt-6 text-lg text-white">
                  <input type="checkbox" name="termos" id="termo" />
                  <p className="flex-auto max-md:max-w-full">
                    Ao se cadastrar, você concorda com{" "}
                    <span className="text-yellow-400">nossos termos de uso</span>{" "}
                    e{" "}
                    <span className="text-yellow-400">
                      políticas de privacidade
                    </span>
                  </p>
              </Terms>
            </div>
          </div>
        </div>
      </div>
    </NewsletterSectionContainer>
  );
}
