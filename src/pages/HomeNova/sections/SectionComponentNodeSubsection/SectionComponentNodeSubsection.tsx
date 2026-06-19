import React from "react";
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

const Carousel = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  width: 100%;
`;

const Arrow = styled.img`
  flex-shrink: 0;
  cursor: pointer;
  width: 33px;
  height: auto;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Track = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 4px;
  scroll-snap-type: x mandatory;
  width: 100%;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #00000022;
    border-radius: 10px;
  }
`;

const Card = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 286px;
  height: 351px;
  border-radius: 15px;
  overflow: hidden;
  scroll-snap-align: center;

  @media (max-width: 600px) {
    width: 240px;
    height: 320px;
  }
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 35%,
    rgba(0, 0, 0, 0.85) 100%
  );
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
`;

const CardTitle = styled.p`
  color: #ffffff;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.25;
  margin: 0;
`;

const CardLink = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const posts = [
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-9.png",
    title: "Carrinhos, painéis, caixas e armários: qual opção escolher na hora de...",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-10.png",
    title: "Vou de bike – mas antes do passeio, confira algumas dicas de manutenção da sua bicicleta",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-11.png",
    title: "Como os organizadores plásticos aumentam sua produtividade...",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-12.png",
    title: "Produto 2 em 1: Lavadora e Aspirador LAV 1580 VONDER – Um Só...",
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
        <BlogButton type="button">Acessar o Blog</BlogButton>
      </Header>
      <Carousel>
        <Arrow
          alt="Anterior"
          src="https://c.animaapp.com/F8lHzCc8/img/camada-1-4.svg"
        />
        <Track>
          {posts.map((post, i) => (
            <Card key={i}>
              <CardImage alt={post.title} src={post.img} />
              <CardOverlay />
              <CardContent>
                <CardTitle>{post.title}</CardTitle>
                <CardLink>Ler Mais</CardLink>
              </CardContent>
            </Card>
          ))}
        </Track>
        <Arrow
          alt="Próximo"
          src="https://c.animaapp.com/F8lHzCc8/img/camada-1-5.svg"
        />
      </Carousel>
    </Container>
  );
};
