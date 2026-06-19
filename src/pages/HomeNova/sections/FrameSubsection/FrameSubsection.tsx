import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 1228px;
  padding: 0 24px;
  box-sizing: border-box;
`;

const Heading = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const TitleRow = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const TitleText = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const TitleImg = styled.img`
  width: 196px;
  max-width: 40vw;
`;

const Subtitle = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-align: center;
  max-width: 760px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Carousel = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: center;
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
  gap: 16px;
  overflow-x: auto;
  padding: 4px;
  scroll-snap-type: x mandatory;
  width: 100%;
  justify-content: center;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #00000022;
    border-radius: 10px;
  }

  @media (max-width: 1100px) {
    justify-content: flex-start;
  }
`;

const Card = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 200px;
  aspect-ratio: 286 / 480;
  border-radius: 16px;
  overflow: hidden;
  scroll-snap-align: center;

  @media (max-width: 600px) {
    width: 160px;
  }
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardLabel = styled.div`
  -webkit-backdrop-filter: blur(30px) brightness(100%);
  backdrop-filter: blur(30px) brightness(100%);
  background-color: #0e0e0e99;
  border-radius: 100px;
  bottom: 22px;
  color: #ffffff;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  left: 50%;
  padding: 12px 24px;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  white-space: nowrap;
  line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 10px 16px;
  }
`;

const categories = [
  { label: "EPI", img: "https://c.animaapp.com/F8lHzCc8/img/mask-group@2x.png" },
  { label: "Linha\nIntercambiável", img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-1@2x.png" },
  { label: "Abrasivos", img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-2.png" },
  { label: "Transporte e\nArmazenagem", img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-3.png" },
  { label: "Ferramentas\nElétricas", img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-4.png" },
];

export const FrameSubsection = (): React.JSX.Element => {
  return (
    <Container>
      <Heading>
        <TitleRow>
          <TitleText>Ferramenta é</TitleText>
          <TitleImg
            alt="VONDER"
            src="https://c.animaapp.com/F8lHzCc8/img/frame-69690.svg"
          />
        </TitleRow>
        <Subtitle>
          O melhor e mais completo mix de ferramentas profissionais e
          industriais do mercado
        </Subtitle>
      </Heading>
      <Carousel>
        <Arrow
          alt="Anterior"
          src="https://c.animaapp.com/F8lHzCc8/img/camada-1.svg"
        />
        <Track>
          {categories.map((cat) => (
            <Card key={cat.label}>
              <CardImage alt={cat.label} src={cat.img} />
              <CardLabel>
                {cat.label.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </CardLabel>
            </Card>
          ))}
        </Track>
        <Arrow
          alt="Próximo"
          src="https://c.animaapp.com/F8lHzCc8/img/camada-1-1.svg"
        />
      </Carousel>
    </Container>
  );
};
