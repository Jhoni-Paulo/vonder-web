import * as React from "react";
import { 
  LogoFooter ,
  FooterContainer,
  OvdLogoFooter,
  ColumnFooter,
  ColumnFooter2,
  ColumnFooter3,
  ColumnFooter4,
  HorarioAtendimento,
  FooterBottom,
} from "./style";

export function Footer() {
  return (
    <footer className="flex z-10 flex-col justify-center items-center px-20 py-6 mt-0 bg-black rounded-none max-md:px-5 max-md:max-w-full" style={{paddingTop: '6%'}}>
      <FooterContainer className="flex flex-col w-full max-w-[1086px] max-md:max-w-full">
        <LogoFooter
          src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/4464735f9f59f78367a9654b54b2c70c3e5a7797?placeholderIfAbsent=true"
          alt="Vonder footer logo"
          className="object-contain self-center w-52 max-w-full aspect-[3.58]"
        />

        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-12 max-md:flex-col">
            <ColumnFooter className="w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <h3 className="self-start text-lg font-bold text-yellow-400">
                  Institucional
                </h3>
                <nav className="mt-6 text-base font-light leading-8 text-white">
                  <p>
                    Sobre a Vonder Blog Vonder Política de Privacidade
                    Institucional ESG-Ambiental Social e Governança Sitemap
                    Trabalhe ConoscoAcesso Cliente
                  </p>
                </nav>
              </div>
            </ColumnFooter>

            <ColumnFooter2 className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10">
                <h3 className="self-start text-lg font-bold text-yellow-400">
                  Suporte e Segurança
                </h3>
                <nav className="mt-5 text-base font-light leading-8 text-white">
                  <p>
                    Dúvidas FrequentesPolítica de Pivacidade
                    <br />
                    Termos de Uso
                    <br />
                    Manuais e Garantias
                    <br />
                    Onde Comprar
                    <br />
                    Localizar Assistência TécnicaCuidado com Sites
                    FalsosDownload do Catálogo 2026
                  </p>
                </nav>
              </div>
            </ColumnFooter2>

            <ColumnFooter3 className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-lg font-bold text-yellow-400 max-md:mt-10">
                <h3 className="self-start">Contato</h3>
                <div className="mt-6 text-base font-light leading-8 text-white max-md:mr-1">
                  <p>
                    Assistência ao consumidor:{" "}
                    <span className="font-medium">0800 723 4762</span>
                    <br />
                    Atendimento comercial:{" "}
                    <span className="font-medium">41 2101-0550</span>
                  </p>
                </div>

                <HorarioAtendimento className="mt-14 max-md:mt-10">Horário de atendimento</HorarioAtendimento>
                <p className="mt-5 text-base font-light leading-8 text-white max-md:mr-1">
                  Segunda a sexta das 08:00 às 18:00(Exceto Feriados)
                </p>
              </div>
            </ColumnFooter3>

            <ColumnFooter4 className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-lg font-bold text-yellow-400 max-md:mt-10">
                <h3 className="self-start">Redes Sociais</h3>
                <img
                  src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/c2c6b7bcca1eec60b789e8962f4ac1a303085092?placeholderIfAbsent=true"
                  alt="Social media icons"
                  className="object-contain mt-6 aspect-[5.35] w-[230px]"
                />
                <OvdLogoFooter
                  src="https://api.builder.io/api/v1/image/assets/97eac47059e74e63a3095e32b4db8f3b/831f56d552f9ad7b37be8b65c0d7a778f013ac7d?placeholderIfAbsent=true"
                  alt="Additional footer logo"
                  className="object-contain self-center mt-16 max-w-full aspect-[1.89] w-[142px] max-md:mt-10"
                />
              </div>
            </ColumnFooter4>
          </div>
        </div>
      </FooterContainer>

      <FooterBottom className="flex flex-col justify-center items-center px-16 py-6 text-lg font-bold text-center text-black bg-yellow-400 max-md:px-5 max-md:max-w-full w-full mt-8">
        <p>2026 © Grupo OVD. Todos os direitos reservados.</p>
      </FooterBottom>
    </footer>
  );
}
