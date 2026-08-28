import React from "react";
import styled from "styled-components";
import {
  ExpandableCardCarousel,
  type ExpandableCardCarouselItem,
} from "../../../../components/ExpandableCardCarousel/ExpandableCardCarousel";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1292px;
  padding: 0 24px;
  box-sizing: border-box;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const BlogButton = styled.button`
  align-items: center;
  background-color: #000000;
  border: none;
  border-radius: 100px;
  color: #f6be00;
  cursor: pointer;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 50px;
  justify-content: center;
  padding: 15px 48px;
  white-space: nowrap;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const DESC =
  "Gosta de pedalar?! Antes do passeio, pense nisso… Nada melhor do que sair de bike para trabalhar, treinar ou simplesmente curtir o dia. Mas, antes de colocar o capacete...";

const posts: ExpandableCardCarouselItem[] = [
  {
    img: "https://c.animaapp.com/xLq2ckgk/img/mask-group.png",
    title: "Carrinhos, painéis, caixas e armários: qual opção escolher na hora de...",
    desc: DESC,
    linkText: "Ler Mais",
  },
  {
    img: "https://c.animaapp.com/xLq2ckgk/img/mask-group-1.png",
    title: "Vou de bike – mas antes do passeio, confira algumas dicas de manutenção da sua bicicleta",
    desc: DESC,
    linkText: "Ler Mais",
  },
  {
    img: "https://c.animaapp.com/xLq2ckgk/img/mask-group-2.png",
    title: "Como os organizadores plásticos aumentam sua produtividade...",
    desc: DESC,
    linkText: "Ler Mais",
  },
  {
    img: "https://c.animaapp.com/xLq2ckgk/img/mask-group-3.png",
    title: "Produto 2 em 1: Lavadora e Aspirador LAV 1580 VONDER – Um Só...",
    desc: DESC,
    linkText: "Ler Mais",
  },
];

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  return (
    <Container>
      <Header>
        <Title>
          Confira
          <br />
          nosso Blog
        </Title>
        <BlogButton type="button">Ver Tudo</BlogButton>
      </Header>
      <ExpandableCardCarousel items={posts} gap={24} balancedActive />
    </Container>
  );
};
