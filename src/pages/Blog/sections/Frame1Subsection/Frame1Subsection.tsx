import React from "react";
import styled from "styled-components";
import {
  ExpandableCardCarousel,
  type ExpandableCardCarouselItem,
} from "../../../../components/ExpandableCardCarousel/ExpandableCardCarousel";

const StyledFrame1Subsection = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 15px;
  max-width: 1248px;
  padding: 0 24px;
  position: relative;
  width: 100%;
`;

const Frame34 = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  padding: 10px;
  position: relative;
  width: 488.71px;
`;

const Frame35 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  position: relative;
  width: 100%;
`;

const TextWrapper25 = styled.div`
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
  width: 448.71px;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Frame36 = styled.div`
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

const TudoOQueVocWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
`;

const TudoOQueVoc = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  max-width: 100%;
  position: relative;
  width: 401.06px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Frame37 = styled.div`
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
`;

const TextWrapper26 = styled.div`
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
  width: 129.79px;
`;

const posts: ExpandableCardCarouselItem[] = [
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-11.png",
    title:
      "Calçados de segurança: por que esse EPI é essencial para profissionais de diversas áreas? – Parte I",
    desc: "No ambiente profissional, segurança e produtividade caminham lado a lado. Entre os diversos Equipamentos de Proteção...",
    linkText: "Ler Mais",
    onLinkClick: () =>
      window.open(
        "https://conecta.fg.com.br/calcados-de-seguranca-essenciais-para-profissionais/",
        "_blank",
        "noopener,noreferrer"
      ),
  },
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-12.png",
    title:
      "A importância dos equipamentos na construção civil: compactadores, cortadores de asfalto e cortadores de revestimentos",
    desc: "A construção civil exige precisão, produtividade e segurança em todas as etapas da obra — desde a preparação do solo até o acabamento final. Para isso, contar com equipamentos adequados não é apenas...",
    linkText: "Ler Mais",
    onLinkClick: () =>
      window.open(
        "https://conecta.fg.com.br/equipamentos-na-construcao-civil/",
        "_blank",
        "noopener,noreferrer"
      ),
  },
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-13.png",
    title:
      "Você conhece os tipos de chanfros de acabamento que existem na madeira?",
    desc: "Confira a seguir as opções de acabamento que valorizam seu projeto. Você já reparou como um...",
    linkText: "Ler Mais",
  },
  {
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-14.png",
    title: "4 vantagens de usar o aspirador na limpeza doméstica",
    desc: "Existem inúmeras razões para se utilizar o aspirador na limpeza doméstica, confira! O setor...",
    linkText: "Ler Mais",
  },
];

export const Frame1Subsection = (): React.JSX.Element => {
  return (
    <StyledFrame1Subsection>
      <Frame34>
        <Frame35>
          <TextWrapper25>#DicaVONDER</TextWrapper25>
        </Frame35>
      </Frame34>
      <Frame36>
        <TudoOQueVocWrapper>
          <TudoOQueVoc>
            Tudo o que você precisa saber sobre
            <br />
            as funcionalidades e vantagens desse item
          </TudoOQueVoc>
        </TudoOQueVocWrapper>
        <Frame37>
          <TextWrapper26>Ver tudo</TextWrapper26>
        </Frame37>
      </Frame36>
      <ExpandableCardCarousel items={posts} gap={24} balancedActive />
    </StyledFrame1Subsection>
  );
};
