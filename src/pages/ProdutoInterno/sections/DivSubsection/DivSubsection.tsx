import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 564px;
  left: calc(50.00% - 667px);
  position: absolute;
  top: 1725px;
  width: 1338px;
`;

const Title = styled.div`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  height: 108px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -760px;
  width: 452px;
`;

const Description = styled.p`
  align-self: center;
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  height: 53px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -808px;
  width: 404px;
`;

const Group19 = styled.div`
  height: 363.29px;
  position: relative;
  width: 1334px;
`;

const Group20 = styled.div`
  display: flex;
  height: 363px;
  left: 63px;
  position: absolute;
  top: 0;
  width: 1209px;
`;

const Group21 = styled.div`
  height: 363px;
  margin-top: 0.3px;
  position: relative;
  width: 223px;
`;

const DivWrapper = styled.div`
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

const ImageWrapperThree = styled.div`
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

const ImageWrapperFour = styled.div`
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

const ImageWrapperFive = styled.div`
  align-items: center;
  aspect-ratio: 1;
  display: flex;
  height: 190px;
  justify-content: center;
  margin-left: 17px;
  margin-top: 23.5px;
  width: 190px;
`;

const ImageWrapperSix = styled.div`
  align-items: center;
  display: flex;
  height: 193px;
  justify-content: center;
  margin-left: 15px;
  margin-top: 23px;
  width: 193px;
`;

const ProductImageFive = styled.img`
  aspect-ratio: 1.34;
  height: 134px;
  margin-top: -0.5px;
  object-fit: cover;
  width: 180px;
`;

const ProductImageSix = styled.img`
  aspect-ratio: 1.33;
  height: 135px;
  margin-top: 1px;
  object-fit: cover;
  width: 180px;
`;

const ProductImageSeven = styled.img`
  aspect-ratio: 1.65;
  height: 109px;
  margin-top: -0.5px;
  object-fit: cover;
  width: 180px;
`;

const ProductImageEight = styled.img`
  aspect-ratio: 1.33;
  height: 136px;
  margin-left: 1px;
  margin-top: 0.4px;
  object-fit: cover;
  width: 180px;
`;

const ProductImageNine = styled.img`
  aspect-ratio: 1.31;
  height: 137px;
  margin-left: 1px;
  margin-top: -0.6px;
  object-fit: cover;
  width: 180px;
`;

const ProductTitle = styled.p`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 72px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  width: 200px;
`;

const ProductCode = styled.div`
  color: #555a57;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 200px;
`;

const ProductCodeCompact = styled(ProductCode)`
  margin-left: 5.3px;
  width: 190.48px;
`;

const Group22 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 103px;
  left: calc(50.00% - 100px);
  position: absolute;
  top: 240px;
  width: 204px;
`;

const Group25 = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 103px;
  margin-left: 5px;
  width: 204px;
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

const Group23 = styled(ProductCard)`
  margin-left: 24px;
`;

const ProductCardColumn = styled(ProductCard)`
  display: flex;
  flex-direction: column;
`;

const Group24 = styled(ProductCardColumn)`
  gap: 26.3px;
  margin-left: 23px;
  margin-top: 0.3px;
`;

const Group26 = styled(ProductCardColumn)`
  gap: 23.7px;
  margin-left: 24px;
  margin-top: 0.3px;
`;

const Group27 = styled(ProductCardColumn)`
  gap: 23.7px;
  margin-left: 23px;
  margin-top: 0.3px;
`;

const Group28 = styled.img`
  height: 33px;
  left: 0;
  position: absolute;
  top: 165px;
  width: 1334px;
`;

export const DivSubsection = (): React.JSX.Element => {
  return (
    <Container>
      <Title>
        Produtos
        <br />
        Relacionados
      </Title>
      <Description>
        Confira outros itens e acessórios essenciais para potencializar suas
        ferramentas
      </Description>
      <Group19>
        <Group20>
          <Group21>
            <DivWrapper>
              <ImageWrapperThree>
                <ProductImageFive
                  alt="Image"
                  src="https://c.animaapp.com/C1uOODCl/img/image-120@2x.png"
                />
              </ImageWrapperThree>
            </DivWrapper>
            <Group22>
              <ProductTitle>
                Bateria 12,0 V, íons de lítio, para parafusadeira, furadeira,
                PFV 012...
              </ProductTitle>
              <ProductCode>93.06.012.038</ProductCode>
            </Group22>
          </Group21>
          <Group23>
            <ImageWrapperFour>
              <ProductImageSix
                alt="Image"
                src="https://c.animaapp.com/C1uOODCl/img/image-121@2x.png"
              />
            </ImageWrapperFour>
            <Group22>
              <ProductTitle>
                Fonte de carregamento 12 V, para PFV010, PFV012 e PFD 012...
              </ProductTitle>
              <ProductCode>93.06.010.035</ProductCode>
            </Group22>
          </Group23>
          <Group24>
            <ImageWrapperFive>
              <ProductImageSeven
                alt="Image"
                src="https://c.animaapp.com/C1uOODCl/img/image-122@2x.png"
              />
            </ImageWrapperFive>
            <Group25>
              <ProductTitle>
                Eixo flexível para furadeira e parafusadeira...
              </ProductTitle>
              <ProductCodeCompact>35.99.024.110</ProductCodeCompact>
            </Group25>
          </Group24>
          <Group26>
            <ImageWrapperSix>
              <ProductImageEight
                alt="Image"
                src="https://c.animaapp.com/C1uOODCl/img/image-123@2x.png"
              />
            </ImageWrapperSix>
            <Group25>
              <ProductTitle>
                Broca 3 pontas para madeira, 13 mm, VONDER
              </ProductTitle>
              <ProductCode>53.01.130.000</ProductCode>
            </Group25>
          </Group26>
          <Group27>
            <ImageWrapperSix>
              <ProductImageNine
                alt="Image"
                src="https://c.animaapp.com/C1uOODCl/img/image-124@2x.png"
              />
            </ImageWrapperSix>
            <Group25>
              <ProductTitle>
                Mandril de aperto rápido, 0,8 mm - 10,0 mm, 3/8" x 24 fios...
              </ProductTitle>
              <ProductCode>66.70.210.380</ProductCode>
            </Group25>
          </Group27>
        </Group20>
        <Group28
          alt="Group"
          src="https://c.animaapp.com/C1uOODCl/img/group-71-1.png"
        />
      </Group19>
    </Container>
  );
};
