import React from "react";
import styled from "styled-components";

const storePlatforms = [
  { platform: "MERCADO LIVRE", left: "calc(50% - 821px)" },
  { platform: "SHOPEE", left: "calc(50% - 407px)" },
  { platform: "AMAZON", left: "calc(50% + 7px)" },
];

const Container = styled.div`
  height: 116px;
  left: 106px;
  position: absolute;
  top: 1212px;
  width: 1642px;
`;

const Card = styled.div`
  background-color: #f2f2f2;
  border-radius: 15px;
  display: flex;
  height: 116px;
  position: absolute;
  top: 0;
  width: 400px;
`;

const ShopCard = styled(Card)<{ $left: string }>`
  left: ${(props) => props.$left};
`;

const InfoGroup = styled.div`
  flex: 1;
  height: 66px;
  margin-left: 25px;
  margin-right: 21px;
  margin-top: 25px;
  position: relative;
`;

const BusinessLabel = styled.div`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: calc(100% - 4px);
`;

const PlatformName = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 26px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 34px;
  width: calc(100% - 4px);
`;

const AccessButton = styled.div`
  align-items: center;
  background-color: #f6be00;
  border-radius: 100px;
  display: flex;
  height: 32px;
  justify-content: center;
  left: calc(50% + 39px);
  position: absolute;
  top: 34px;
  width: 134px;
`;

const AccessContent = styled.div`
  height: 19px;
  margin-left: 2px;
  margin-top: 1px;
  position: relative;
  width: 106px;
`;

const AccessIcon = styled.img`
  aspect-ratio: 1;
  height: 16px;
  left: calc(50% - 53px);
  position: absolute;
  top: calc(50% - 8px);
  width: 16px;
`;

const AccessText = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  left: calc(50% - 27px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
`;

const FourthCard = styled.div`
  height: 116px;
  left: calc(50% + 397px);
  position: absolute;
  top: 0;
  width: 424px;
`;

const Rectangle = styled.div`
  background-color: #f2f2f2;
  border-radius: 15px;
  height: 116px;
  left: calc(50% - 188px);
  position: absolute;
  top: 0;
  width: 400px;
`;

const FourthInfo = styled.div`
  height: 66px;
  left: 49px;
  position: absolute;
  top: 25px;
  width: calc(100% - 70px);
`;

const FourthButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 2px;
  margin-top: 1px;
  width: 106px;
`;

const FourthButtonText = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  height: 19px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 24px;
  white-space: nowrap;
  width: 78px;
`;

const Vector3 = styled.img`
  height: 63.79%;
  left: 0;
  position: absolute;
  top: 36.21%;
  width: 100%;
`;

export const DivWrapperSubsection = (): React.JSX.Element => {
  return (
    <Container>
      {storePlatforms.map(({ platform, left }) => (
        <ShopCard key={platform} $left={left}>
          <InfoGroup>
            <BusinessLabel>LOJA OFICIAL VONDER</BusinessLabel>
            <PlatformName>{platform}</PlatformName>
            <AccessButton>
              <AccessContent>
                <AccessIcon
                  alt="Vector"
                  src="https://c.animaapp.com/ywgOupuM/img/vector-2.svg"
                />
                <AccessText>Acessar site</AccessText>
              </AccessContent>
            </AccessButton>
          </InfoGroup>
        </ShopCard>
      ))}
      <FourthCard>
        <Rectangle />
        <FourthInfo>
          <BusinessLabel>REVENDEDOR AUTORIZADO</BusinessLabel>
          <PlatformName>FG.COM.BR</PlatformName>
          <FourthButtonWrapper>
            <FourthButtonText>Acessar site</FourthButtonText>
          </FourthButtonWrapper>
        </FourthInfo>
        <Vector3
          alt="Vector"
          src="https://c.animaapp.com/ywgOupuM/img/vector-3.svg"
        />
      </FourthCard>
    </Container>
  );
};
