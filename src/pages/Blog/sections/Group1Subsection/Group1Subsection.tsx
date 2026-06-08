import React from "react";
import styled from "styled-components";

export const Group1Subsection = (): React.JSX.Element => {
  return (
    <Section>
      <LeftGroup>
        <QuemApoia>
          Quem apoia
          <br />a VONDER
        </QuemApoia>
        <Influenciadores>
          Influenciadores e profissionais renomados
          <br />
          que confiam, usam e recomendam VONDER
        </Influenciadores>
      </LeftGroup>
      <RightGroup>
        <LayerImage
          alt="Camada"
          src="https://c.animaapp.com/w4wnBid1/img/camada-1-2.svg"
        />
        <OverlapWrapper>
          <OverlapGroup>
            <Group33>
              <Group34>
                <Rectangle />
                <InfluencerLabel>
                  <BoldItalicSpan>Sylvio Guisard </BoldItalicSpan>
                  <ItalicSpan>do</ItalicSpan>
                  <BoldItalicSpan> @plantascomalegria_</BoldItalicSpan>
                </InfluencerLabel>
              </Group34>
            </Group33>
            <Group35>
              <Group34>
                <Rectangle />
                <InfluencerLabel>
                  <BoldItalicSpan>Alexsandra </BoldItalicSpan>
                  <ItalicSpan>do</ItalicSpan>
                  <BoldItalicSpan> @umagurianamarcenaria</BoldItalicSpan>
                </InfluencerLabel>
              </Group34>
            </Group35>
            <Group36>
              <Group37>
                <Rectangle />
                <MariPavanLabel>
                  <BoldItalicSpan>Mari Pavan </BoldItalicSpan>
                  <ItalicSpan>do</ItalicSpan>
                  <BoldItalicSpan> @agilizalab</BoldItalicSpan>
                </MariPavanLabel>
              </Group37>
            </Group36>
          </OverlapGroup>
        </OverlapWrapper>
        <LayerImage
          alt="Camada"
          src="https://c.animaapp.com/w4wnBid1/img/camada-1-1.svg"
        />
      </RightGroup>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 726px;
  left: 106px;
  position: absolute;
  top: 3532px;
  width: 1228px;
`;

const LeftGroup = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 186px;
  margin-left: -772px;
  width: 456px;
`;

const QuemApoia = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  height: 108px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  width: 452px;
`;

const Influenciadores = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  height: 58px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -56px;
  width: 400px;
`;

const RightGroup = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 20px;
  width: 1228px;
`;

const LayerImage = styled.img`
  height: 33px;
  margin-top: 234px;
  width: 33px;
`;

const OverlapWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  min-width: 1118px;
`;

const OverlapGroup = styled.div`
  height: 500px;
  position: relative;
  width: 1118px;
`;

const Group33 = styled.div`
  aspect-ratio: 1;
  background-image: url(https://c.animaapp.com/w4wnBid1/img/mask-group-8@2x.png);
  background-size: 100% 100%;
  display: flex;
  height: 450px;
  left: 668px;
  opacity: 0.3;
  position: absolute;
  top: 25px;
  width: 450px;
`;

const Group34 = styled.div`
  height: 60px;
  margin-left: 25px;
  margin-top: 350px;
  position: relative;
  width: 402px;
`;

const Rectangle = styled.div`
  -webkit-backdrop-filter: blur(30px) brightness(100%);
  backdrop-filter: blur(30px) brightness(100%);
  background-color: #0e0e0e99;
  border-radius: 100px;
  height: 60px;
  left: 0;
  position: absolute;
  top: 0;
  width: 400px;
`;

const InfluencerLabel = styled.p`
  color: #ffffff;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 22px;
  font-weight: 400;
  left: calc(50.00% - 201px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: calc(50.00% - 15px);
  width: 400px;
`;

const BoldItalicSpan = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;

const ItalicSpan = styled.span`
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-style: italic;
`;

const Group35 = styled.div`
  aspect-ratio: 1;
  background-image: url(https://c.animaapp.com/w4wnBid1/img/mask-group-9@2x.png);
  background-size: 100% 100%;
  display: flex;
  height: 450px;
  left: 0;
  opacity: 0.6;
  position: absolute;
  top: 25px;
  width: 450px;
`;

const Group36 = styled.div`
  background-image: url(https://c.animaapp.com/w4wnBid1/img/mask-group-10.png);
  background-size: 100% 100%;
  display: flex;
  height: 500px;
  left: 309px;
  position: absolute;
  top: 0;
  width: 500px;
`;

const Group37 = styled.div`
  height: 60px;
  margin-left: 50px;
  margin-top: 400px;
  position: relative;
  width: 402px;
`;

const MariPavanLabel = styled.p`
  color: #ffffff;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: calc(50.00% - 201px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: calc(50.00% - 15px);
  width: 400px;
`;
