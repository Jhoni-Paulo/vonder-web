import React, { useState } from "react";
import styled from "styled-components";

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

const CarouselRow = styled.div`
  position: relative;
  width: 100%;
`;

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  cursor: pointer;
  z-index: 2;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &.arrow-left {
    left: -62px;
  }

  &.arrow-right {
    right: -62px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Track = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  align-items: stretch;
`;

const Card = styled.div<{ $active?: boolean }>`
  position: relative;
  height: 480px;
  border-radius: 15px;
  overflow: hidden;
  flex-shrink: 0;
  flex: ${({ $active }) => ($active ? "1 1 auto" : "0 0 160px")};
  width: ${({ $active }) => ($active ? "auto" : "160px")};
  cursor: ${({ $active }) => ($active ? "default" : "pointer")};
  will-change: flex, width;
  transition:
    flex 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.65s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 600px) {
    height: 360px;
    flex: ${({ $active }) => ($active ? "1 1 auto" : "0 0 90px")};
    width: ${({ $active }) => ($active ? "auto" : "90px")};
  }
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.82) 100%);
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 22px 18px;
  box-sizing: border-box;
`;

const CardTitle = styled.p`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0;
`;

const CardDesc = styled.p<{ $active?: boolean }>`
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  max-height: ${({ $active }) => ($active ? "200px" : "0px")};
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition:
    max-height 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.4s ease;
`;

const CardLink = styled.span`
  color: #ffffff;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
`;

const DESC =
  "Gosta de pedalar?! Antes do passeio, pense nisso… Nada melhor do que sair de bike para trabalhar, treinar ou simplesmente curtir o dia. Mas, antes de colocar o capacete...";

const posts = [
  {
    img: "https://c.animaapp.com/xLq2ckgk/img/mask-group.png",
    title: "Carrinhos, painéis, caixas e armários: qual opção escolher na hora de...",
    desc: DESC,
  },
  {
    img: "https://c.animaapp.com/xLq2ckgk/img/mask-group-1.png",
    title: "Vou de bike – mas antes do passeio, confira algumas dicas de manutenção da sua bicicleta",
    desc: DESC,
  },
  {
    img: "https://c.animaapp.com/xLq2ckgk/img/mask-group-2.png",
    title: "Como os organizadores plásticos aumentam sua produtividade...",
    desc: DESC,
  },
  {
    img: "https://c.animaapp.com/xLq2ckgk/img/mask-group-3.png",
    title: "Produto 2 em 1: Lavadora e Aspirador LAV 1580 VONDER – Um Só...",
    desc: DESC,
  },
];

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  // second from right = index 2 (0-based, 4 cards total)
  const [activeIdx, setActiveIdx] = useState(2);

  const goLeft = () => setActiveIdx((prev) => (prev + 1) % posts.length);
  const goRight = () => setActiveIdx((prev) => (prev - 1 + posts.length) % posts.length);

  return (
    <Container>
      <Header>
        <Title>
          Confira
          <br />
          nosso Blog
        </Title>
        <BlogButton type="button">Acessar o Blog</BlogButton>
      </Header>
      <CarouselRow>
        <Arrow
          className="arrow-left"
          alt="Anterior"
          src="https://c.animaapp.com/F8lHzCc8/img/camada-1-4.svg"
          onClick={goLeft}
        />
        <Track>
          {posts.map((post, i) => {
            const isActive = i === activeIdx;
            return (
              <Card
                key={i}
                $active={isActive}
                onClick={!isActive ? () => setActiveIdx(i) : undefined}
              >
                <CardImage alt={post.title} src={post.img} />
                <CardOverlay />
                <CardContent>
                  <CardTitle>{post.title}</CardTitle>
                  {post.desc && (
                    <CardDesc $active={isActive}>{post.desc}</CardDesc>
                  )}
                  <CardLink>Ler Mais</CardLink>
                </CardContent>
              </Card>
            );
          })}
        </Track>
        <Arrow
          className="arrow-right"
          alt="Próximo"
          src="https://c.animaapp.com/F8lHzCc8/img/camada-1-5.svg"
          onClick={goRight}
        />
      </CarouselRow>
    </Container>
  );
};
