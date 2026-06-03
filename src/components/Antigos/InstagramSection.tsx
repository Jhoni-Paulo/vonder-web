import * as React from "react";

export function InstagramSection() {
  const instagramImages = [
    "https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/1b07c4708208b07842afec34f5ae18849607978a?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/a51f5361-04af-4fbd-b9b0-b0cdfe376a55?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/d6ffcdda-669d-4e52-83c7-ed846356efdd?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/c7fd81d1-7ec4-482b-90e0-f4778ea0854b?placeholderIfAbsent=true",
  ];

  return (
    <section className="mt-24 max-md:mt-10">
      <h2 className="self-center text-5xl font-bold text-black max-md:max-w-full max-md:text-4xl text-center">
        Siga a Vonder no Instagram
      </h2>

      <div className="self-center mt-11 w-full max-w-[1096px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col pt-52 w-full aspect-[0.751] max-md:pt-24 max-md:mt-2.5">
              <img
                src={instagramImages[0]}
                alt="Instagram post"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative gap-3 items-start px-14 pt-24 pb-6 max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/2445854bf979d6fa892b008562dfa1c1c3d31f73?placeholderIfAbsent=true"
                  alt="Instagram icon"
                  className="object-contain shrink-0 w-7 aspect-[0.85]"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/043985f277d4073a4922b5499a6d63aa1ce05482?placeholderIfAbsent=true"
                  alt="Instagram handle"
                  className="object-contain shrink-0 max-w-full aspect-[3.6] w-[115px]"
                />
              </div>
            </div>
          </div>

          {instagramImages.slice(1).map((image, index) => (
            <div key={index} className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                src={image}
                alt={`Instagram post ${index + 2}`}
                className="object-contain shrink-0 max-w-full aspect-[0.75] w-[265px] max-md:mt-3"
              />
            </div>
          ))}
        </div>
      </div>

      <button className="flex flex-col justify-center self-center px-16 py-5 mt-10 max-w-full text-lg font-bold text-white bg-black rounded-[100px] w-[249px] max-md:px-5 mx-auto">
        <span>Ir para página</span>
      </button>
    </section>
  );
}
