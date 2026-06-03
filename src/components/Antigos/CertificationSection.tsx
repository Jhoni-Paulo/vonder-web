import * as React from "react";

export function CertificationSection() {
  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-14 w-full min-h-[417px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/00c5f505dbd06a88f67148c9e1154a4869368ee6?placeholderIfAbsent=true"
        alt="Certification background"
        className="object-cover absolute inset-0 size-full"
      />

      <div className="relative w-full max-w-[1074px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow max-md:mt-7 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/da63d19ff606d2bcf882c9c682a844a463df8e05?placeholderIfAbsent=true"
                alt="Certification logo"
                className="object-contain self-center max-w-full aspect-[2.28] w-[326px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/8c333d365377757ed8ae4b4812213ef279839f4f?placeholderIfAbsent=true"
                alt="Additional certification content"
                className="object-contain mt-2.5 w-full aspect-[3.1] max-md:max-w-full"
              />
            </div>
          </div>

          <div className="ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/942800cc086def826a7aba60b1f42ee5aded9596?placeholderIfAbsent=true"
              alt="Main certification image"
              className="object-contain self-stretch my-auto w-full aspect-[2.31] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
