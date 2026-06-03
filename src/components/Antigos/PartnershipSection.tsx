import * as React from "react";

export function PartnershipSection() {
  return (
    <section className="flex flex-col items-center px-20 pt-16 pb-32 mt-20 w-full bg-zinc-100 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1092px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="self-center text-5xl font-bold text-black max-md:max-w-full max-md:text-4xl">
          Parceria que gera confiança
        </h2>

        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow justify-center items-end px-20 py-52 min-h-[547px] max-md:px-5 max-md:py-24 max-md:mt-7 max-md:max-w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/ec491fc2d9fa568e4c66fec34f96d32186bf7da8?placeholderIfAbsent=true"
                  alt="Partnership background"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/30da5dd7bb17de10f41127e0c900975030732de4?placeholderIfAbsent=true"
                  alt="Partner logo"
                  className="object-contain max-w-full aspect-[2.26] w-[305px]"
                />
              </div>
            </div>

            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-7 max-md:max-w-full">
                <div className="flex relative flex-col items-start px-14 pt-11 pb-24 w-full min-h-[269px] max-md:px-5 max-md:max-w-full">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/272faad7d79da1bc7ac064ee783774c9eb87b938?placeholderIfAbsent=true"
                    alt="Partnership background 2"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/a7b5c4f99dcc0b349fb51b7e12033c8bb098dcb3?placeholderIfAbsent=true"
                    alt="Partner logo 2"
                    className="object-contain max-w-full aspect-[2.44] w-[330px]"
                  />
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/c3072b690f8ff58af8040f070d50f3b85d9cd094?placeholderIfAbsent=true"
                  alt="Additional partnership content"
                  className="object-contain mt-2.5 w-full aspect-[1.98] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
