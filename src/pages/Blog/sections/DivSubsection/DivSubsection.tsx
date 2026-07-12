import React from "react";
import styled from "styled-components";
import {
  ExpandableCardCarousel,
  type ExpandableCardCarouselItem,
} from "../../../../components/ExpandableCardCarousel/ExpandableCardCarousel";

const StyledDivSubsection = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  max-width: 1228px;
  padding: 0 24px;
  position: relative;
  width: 100%;

  & .frame-21 {
    align-items: flex-end;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  & .frame-22 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 100%;
    position: relative;
    width: 452px;
  }

  & .conte-dos-mais {
    align-self: stretch;
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 45px;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;

    @media (max-width: 600px) {
      font-size: 32px;
    }
  }

  & .temas-e-artigos-mais {
    color: #333333;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: normal;
    max-width: 100%;
    position: relative;
    width: 289px;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  & .frame-23 {
    align-items: center;
    background-color: #000000;
    border-radius: 100px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    gap: 10px;
    height: 50px;
    justify-content: center;
    max-width: 100%;
    padding: 15px 78px;
    position: relative;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    width: 286px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px #00000040;
    }
  }

  & .text-wrapper-17 {
    color: #f6be00;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.34px;
    position: relative;
    text-align: center;
    width: 129.79px;
  }
`;

const posts: ExpandableCardCarouselItem[] = [
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-4.png",
    title:
      "Vou de bike – mas antes do passeio, confira algumas dicas de manutenção da sua bicicleta",
    desc: "Gosta de pedalar?! Antes do passeio, pense nisso… Nada melhor do que sair de bike para trabalhar, treinar ou simplesmente curtir o dia. Mas, antes de colocar o capacete...",
    linkText: "Ler Mais",
  },
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-5.png",
    title:
      "Carrinhos, painéis, caixas e armários: qual opção escolher na hora de...",
    linkText: "Ler Mais",
  },
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-6.png",
    title: "Como os organizadores plásticos aumentam sua produtividade...",
    linkText: "Ler Mais",
  },
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-7.png",
    title:
      "Produto 2 em 1: Lavadora e Aspirador LAV 1580 VONDER – Um Só...",
    linkText: "Ler Mais",
  },
];

export const DivSubsection = (): React.JSX.Element => {
  return (
    <StyledDivSubsection>
      <div className="frame-21">
        <div className="frame-22">
          <div className="conte-dos-mais">
            Conteúdos
            <br />
            mais populares
          </div>
          <p className="temas-e-artigos-mais">
            Temas e artigos mais acessados
            <br /> e comentados por aqui!
          </p>
        </div>
        <div className="frame-23">
          <div className="text-wrapper-17">Ver tudo</div>
        </div>
      </div>
      <ExpandableCardCarousel items={posts} showArrows={false} />
    </StyledDivSubsection>
  );
};
