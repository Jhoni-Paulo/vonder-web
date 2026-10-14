import React from "react";
import styled from "styled-components";
import dif1 from "../../../assets/dif-1.png";
import dif2 from "../../../assets/dif-2.png";
import dif3 from "../../../assets/dif-3.png";
import {
  TripleSlider,
  type TripleSliderItem,
} from "../../../components/TripleSlider/TripleSlider";
import { ColunaTexto, Conteudo, DuasColunas } from "../styles";

const Titulo = styled.h2`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 40px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Texto = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
  text-align: justify;

  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

/* As prévias laterais do carrossel aparecem com 75% do tamanho do slide
   central, então a composição ocupa 1,75x esse valor. Para as setas ficarem
   fora do carrossel — e não por cima das prévias — a coluna recebe um pouco
   mais de largura que a do texto e o slide central cai para 270px:
   270 x 1,75 = 472, mais duas setas (44) e dois respiros (30) = 620px. */
const CarrosselWrap = styled.div`
  flex: 1.25 1 0;
  min-width: 0;
  width: 100%;
`;

const SlideImagem = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const slides: TripleSliderItem[] = [
  { id: 0, content: <SlideImagem alt="Equipe VONDER" src={dif1} /> },
  { id: 1, content: <SlideImagem alt="Equipe VONDER" src={dif2} /> },
  { id: 2, content: <SlideImagem alt="Equipe VONDER" src={dif3} /> },
];

export const GenteSection = (): React.JSX.Element => {
  return (
    <Conteudo as="section" aria-labelledby="gente-titulo">
      <DuasColunas>
        <CarrosselWrap>
          {/* As setas do bloco "2013" são #D9D9D9 e somem sobre o branco desta
              seção, então ficam as escuras padrão do componente — as mesmas do
              carrossel de lançamentos da home. */}
          <TripleSlider items={slides} showArrows size={270} />
        </CarrosselWrap>
        <ColunaTexto>
          <Titulo id="gente-titulo">Gente que faz acontecer.</Titulo>
          <Texto>
            Por trás de cada ferramenta há um dos maiores times do setor: mais
            de 3.000 colaboradores e centenas de representantes com um só
            propósito — entregar qualidade e confiança. Trabalhamos com
            integridade e respeito, e tratamos cada cliente com atendimento
            próximo e consultivo, do pequeno lojista ao grande revendedor.
            <br />
            <br />
            Time forte e apaixonado por ferramentas
            <br />
            Atendimento consultivo e personalizado
            <br />
            Suporte pós-venda de referência
          </Texto>
        </ColunaTexto>
      </DuasColunas>
    </Conteudo>
  );
};
