import React from "react";
import styled from "styled-components";
import {
  ExpandableCardCarousel,
  type ExpandableCardCarouselItem,
} from "../../../../components/ExpandableCardCarousel/ExpandableCardCarousel";

const StyledDivWrapperSubsection = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  max-width: 1228px;
  padding: 0 24px;
  position: relative;
  width: 100%;
`;

const PublicaEsMaisWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  position: relative;
`;

const PublicaEsMais = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  max-width: 100%;
  position: relative;
  width: 451.63px;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Frame7 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const Frame8 = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
`;

const TextWrapper7 = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  max-width: 100%;
  position: relative;
  width: 399.67px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Frame9 = styled.div`
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
  width: 285.77px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const TextWrapper8 = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 20.69px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.34px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 129.69px;
`;

const posts: ExpandableCardCarouselItem[] = [
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group.png",
    title: "Dicas que facilitam sua rotina na cozinha",
    desc: "Confira algumas dicas que preparamos para facilitar seu dia a dia na cozinha. Cozinhar é uma atividade. Nada melhor do que sair de...",
    linkText: "Ler Mais",
  },
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-1.png",
    title:
      "Limpeza e manutenção de painéis fotovoltaicos: como impactam positivamente na eficiência?",
    desc: "Saiba quais fatores devem ser considerados na manutenção de seu painel solar. A tecnologia para geração...",
    linkText: "Ler Mais",
  },
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-2.png",
    title:
      "Atomizador, Soprador e Pulverizador Agrícola: Quais as principais características",
    desc: "A mecanização agrícola revolucionou os processos de plantio e manutenção das culturas, proporcionando ganhos...",
    linkText: "Ler Mais",
  },
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-3.png",
    title:
      "Botas e calçados de segurança: inovação e características que fazem a diferença",
    desc: "Confira a seguir os principais atributos deste importante EPI, os calçados de segurança! No ambiente...",
    linkText: "Ler Mais",
  },
];

export const DivWrapperSubsection = (): React.JSX.Element => {
  return (
    <StyledDivWrapperSubsection>
      <PublicaEsMaisWrapper>
        <PublicaEsMais>
          Publicações
          <br />
          mais recentes
        </PublicaEsMais>
      </PublicaEsMaisWrapper>
      <Frame7>
        <Frame8>
          <TextWrapper7>
            Explore as últimas publicações e não perca nenhum detalhe do que
            acabou de chegar!
          </TextWrapper7>
        </Frame8>
        <Frame9>
          <TextWrapper8>Ver tudo</TextWrapper8>
        </Frame9>
      </Frame7>
      <ExpandableCardCarousel items={posts} showArrows={false} />
    </StyledDivWrapperSubsection>
  );
};
