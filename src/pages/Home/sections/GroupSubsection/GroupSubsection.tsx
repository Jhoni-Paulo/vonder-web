import React from "react";
import styled from "styled-components";

export const GroupSubsection = (): React.JSX.Element => {
  return (
    <GroupSubsectionWrapper>
      <Group>
        <SpecialSelection>
          Seleção
          <br />
          Especial VONDER
        </SpecialSelection>
        <DiscoverText>
          Conheça e surpreenda-se com
          <br />
          os best-sellers da VONDER
        </DiscoverText>
        <ContentContainer>
          <FrameWrapper>
            <Frame>
              <PrimaryProduct>
                <IsolationWrapper>
                  <ModeIsolation>
                    <PrimaryImage
                      alt="Image"
                      src="https://c.animaapp.com/ea7M9uhj/img/image-115@2x.png"
                    />
                  </ModeIsolation>
                </IsolationWrapper>
                <CardText>
                  <CardTitle>
                    Parafusadeira/furadeira a bateria, 12 V, fonte de
                    carregamento bivolt...
                  </CardTitle>
                  <ProductCode>60.01.112.000</ProductCode>
                </CardText>
              </PrimaryProduct>
              <ProductCard>
                <CardImageWrapper>
                  <CardImage
                    alt="Image"
                    src="https://c.animaapp.com/ea7M9uhj/img/image-116@2x.png"
                  />
                </CardImageWrapper>
                <CardText>
                  <CardTitle>
                    Parafusadeira/furadeira de impacto a bateria, 20 V, fonte
                    de...
                  </CardTitle>
                  <ProductCode>60.01.200.200</ProductCode>
                </CardText>
              </ProductCard>
              <ProductCard>
                <ImageWrapperVariant>
                  <CardImageVariant
                    alt="Image"
                    src="https://c.animaapp.com/ea7M9uhj/img/image-117@2x.png"
                  />
                </ImageWrapperVariant>
                <CardText>
                  <CardTitle>
                    Parafusadeira furadeira a bateria, 18 V, com bateria e
                    com...
                  </CardTitle>
                  <ProductCodeSpecial>60.04.185.200</ProductCodeSpecial>
                </CardText>
              </ProductCard>
              <ProductCard>
                <ModeIsolationVariant>
                  <ModeIsolationImage
                    alt="Image"
                    src="https://c.animaapp.com/ea7M9uhj/img/image-118@2x.png"
                  />
                </ModeIsolationVariant>
                <CardText>
                  <CardTitle>
                    Parafusadeira/furadeira a bateria, 12 V, fonte de
                    carregamento bivolt...
                  </CardTitle>
                  <ProductCode>60.01.100.120</ProductCode>
                </CardText>
              </ProductCard>
              <ProductCard>
                <TOkWrapper>
                  <TOk>
                    <TOkImage
                      alt="Image"
                      src="https://c.animaapp.com/ea7M9uhj/img/image-119@2x.png"
                    />
                  </TOk>
                </TOkWrapper>
                <CardText>
                  <CardTitle>
                    Parafusadeira/furadeira de impacto, bateria intercambiável
                    de 18 V...
                  </CardTitle>
                  <ProductCode>60.04.181.900</ProductCode>
                </CardText>
              </ProductCard>
            </Frame>
          </FrameWrapper>
          <Camada
            alt="Camada"
            src="https://c.animaapp.com/ea7M9uhj/img/camada-1.svg"
          />
          <CamadaTwo
            alt="Camada"
            src="https://c.animaapp.com/ea7M9uhj/img/camada-1-1.svg"
          />
        </ContentContainer>
      </Group>
    </GroupSubsectionWrapper>
  );
};

const GroupSubsectionWrapper = styled.div`
  display: flex;
  height: 584px;
  justify-content: center;
  left: 53px;
  position: absolute;
  top: 1520px;
  width: 1334px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  height: 584.29px;
  margin-left: 4px;
  width: 1338px;
`;

const SpecialSelection = styled.div`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  height: 108px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -764px;
  width: 452px;
`;

const DiscoverText = styled.p`
  align-self: center;
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  height: 53.28px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -790.1px;
  margin-top: 20px;
  width: 429.89px;
`;

const ContentContainer = styled.div`
  height: 363px;
  margin-top: 40px;
  position: relative;
  width: 1334px;
`;

const FrameWrapper = styled.div`
  display: flex;
  height: 363px;
  justify-content: center;
  left: calc(50.00% - 608px);
  position: absolute;
  top: 0;
  width: 1215px;
`;

const Frame = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 25px;
  height: 363px;
  position: relative;
  width: 1215px;
`;

const PrimaryProduct = styled.div`
  height: 363px;
  position: relative;
  width: 223px;
`;

const IsolationWrapper = styled.div`
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  display: flex;
  height: 363px;
  left: 0;
  position: absolute;
  top: 0;
  width: 223px;

  &::before {
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.01) 0%,
      rgba(102, 102, 102, 1) 100%
    );
    border-radius: 15px;
    content: "";
    inset: 0;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }
`;

const ModeIsolation = styled.div`
  align-items: center;
  aspect-ratio: 1.01;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  height: 189px;
  justify-content: center;
  margin-left: 16px;
  margin-top: 23.5px;
  width: 190px;
`;

const PrimaryImage = styled.img`
  aspect-ratio: 0.86;
  height: 180px;
  margin-left: 1px;
  margin-top: -0.5px;
  object-fit: cover;
  width: 155px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  left: calc(50.00% - 100px);
  position: absolute;
  top: 210px;
  width: 204px;
`;

const CardTitle = styled.p`
  align-self: center;
  color: #000000;
  display: -webkit-box;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.3;
  margin-left: 0;
  max-height: 78px;
  overflow: hidden;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  width: 100%;
  word-break: break-word;
`;

const ProductCode = styled.div`
  color: #555a57;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 100%;
`;

const ProductCodeSpecial = styled(ProductCode)`
  margin-left: 5.3px;
  width: 190.48px;
`;

const ProductCard = styled.div`
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  height: 363px;
  position: relative;
  width: 223px;

  &::before {
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.01) 0%,
      rgba(102, 102, 102, 1) 100%
    );
    border-radius: 15px;
    content: "";
    inset: 0;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }
`;

const CardImageWrapper = styled.div`
  align-items: center;
  aspect-ratio: 1;
  display: flex;
  height: 190px;
  justify-content: center;
  left: calc(50.00% - 94px);
  position: absolute;
  top: calc(50.00% - 164px);
  width: 190px;
`;

const CardImage = styled.img`
  aspect-ratio: 0.83;
  height: 180px;
  width: 150px;
`;

const ImageWrapperVariant = styled.div`
  align-items: center;
  aspect-ratio: 1;
  display: flex;
  height: 190px;
  justify-content: center;
  left: 17px;
  position: absolute;
  top: 23px;
  width: 190px;
`;

const CardImageVariant = styled.img`
  aspect-ratio: 0.78;
  height: 180px;
  margin-top: 0.5px;
  object-fit: cover;
  width: 140px;
`;

const ModeIsolationVariant = styled.div`
  align-items: center;
  display: flex;
  height: 193px;
  justify-content: center;
  left: 15px;
  position: absolute;
  top: 23px;
  width: 193px;
`;

const ModeIsolationImage = styled.img`
  aspect-ratio: 0.85;
  height: 180px;
  margin-top: 0.4px;
  object-fit: cover;
  width: 153px;
`;

const TOkWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 193px;
  justify-content: center;
  left: 15px;
  overflow: hidden;
  position: absolute;
  top: 23px;
  width: 193px;
`;

const TOk = styled.div`
  align-items: center;
  aspect-ratio: 1.09;
  display: flex;
  justify-content: center;
  margin-left: -2px;
  margin-top: -3.6px;
  width: 197px;
`;

const TOkImage = styled.img`
  aspect-ratio: 1.1;
  height: 180px;
  margin-left: 2px;
  object-fit: cover;
  width: 193px;
`;

const Camada = styled.img`
  height: 33px;
  left: 0;
  position: absolute;
  top: 165px;
  width: 33px;
`;

const CamadaTwo = styled.img`
  height: 33px;
  left: 1301px;
  position: absolute;
  top: 165px;
  width: 33px;
`;
