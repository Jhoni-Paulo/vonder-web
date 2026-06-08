import React from "react";
import styled from "styled-components";

const DivSubsectionWrapper = styled.div`
  height: 306px;
  margin-left: 245px;
  margin-top: 60px;
  position: relative;
  width: 950px;
`;

const Group14 = styled.div`
  display: flex;
  flex-direction: column;
  height: 306px;
  left: calc(50.00% - 475px);
  position: absolute;
  top: 0;
  width: 254px;
`;

const ShopLocation = styled.img`
  aspect-ratio: 1;
  height: 50px;
  margin-left: 100px;
  width: 50px;
`;

const OndeComprar = styled.div`
  align-self: center;
  color: #0e0e0e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  height: 68px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  margin-top: 10px;
  text-align: center;
  width: 250px;
`;

const TextWrapper13 = styled.p`
  align-self: center;
  color: #0e0e0e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  height: 88px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  margin-top: 20px;
  text-align: center;
  width: 250px;
`;

const Group15 = styled.div`
  display: flex;
  height: 40px;
  margin-top: 30px;
  width: 250px;
`;

const Group16 = styled.div`
  flex: 1;
  position: relative;
  width: 252px;
`;

const Rectangle = styled.div`
  background-color: #000000;
  border-radius: 100px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 99.21%;
`;

const ButtonText = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  left: calc(50.00% - 126px);
  position: absolute;
  text-align: center;
  top: calc(50.00% - 13px);
  width: 250px;
`;

const Group17 = styled.div`
  height: 306px;
  left: 36.84%;
  position: absolute;
  top: calc(50.00% - 153px);
  width: 26.74%;
`;

const Shop = styled.img`
  aspect-ratio: 1;
  height: 50px;
  left: 39.37%;
  position: absolute;
  top: calc(50.00% - 153px);
  width: 60.63%;
`;

const SectionTitle = styled.div`
  color: #0e0e0e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  left: calc(50.00% - 127px);
  position: absolute;
  text-align: center;
  top: 60px;
  width: 250px;
`;

const AcesseParagraph = styled.p`
  color: #0e0e0e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  left: calc(50.00% - 127px);
  position: absolute;
  text-align: center;
  top: 148px;
  width: 250px;
`;

const SpanLight = styled.span`
  font-weight: 300;
`;

const SpanBold = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const Group18 = styled.div`
  display: flex;
  height: 40px;
  left: 0;
  position: absolute;
  top: 266px;
  width: 250px;
`;

const Group19 = styled.div`
  height: 100%;
  left: 73.68%;
  position: absolute;
  top: 0;
  width: 26.74%;
`;

const Messaging = styled.img`
  aspect-ratio: 1;
  height: 100%;
  left: 39.37%;
  position: absolute;
  top: 0;
  width: 60.63%;
`;

const TireParagraph = styled.p`
  color: #0e0e0e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  left: calc(50.00% - 127px);
  position: absolute;
  text-align: center;
  top: 148px;
  width: 250px;
`;

export const DivSubsection = (): React.JSX.Element => {
  return (
    <DivSubsectionWrapper>
      <Group14>
        <ShopLocation
          alt="Shop location"
          src="https://c.animaapp.com/uUmb9Vky/img/shop-location@2x.png"
        />
        <OndeComprar>
          Onde
          <br />
          comprar
        </OndeComprar>
        <TextWrapper13>
          Encontre facilmente um revendedor indicado VONDER mais próximo a sua
          localidade para garantir a sua próxima ferramenta VONDER!
        </TextWrapper13>
        <Group15>
          <Group16>
            <Rectangle />
            <ButtonText>Assistência técnica</ButtonText>
          </Group16>
        </Group15>
      </Group14>
      <Group17>
        <Shop
          alt="Shop"
          src="https://c.animaapp.com/uUmb9Vky/img/shop@2x.png"
        />
        <SectionTitle>
          Sou lojista ou
          <br />
          revendedor
        </SectionTitle>
        <AcesseParagraph>
          <SpanLight>Acesse o </SpanLight>
          <SpanBold>B2B VONDER</SpanBold>
          <SpanLight>
            , nossa plataforma digital de vendas exclusiva para lojistas e
            revendedores, com soluções e condições especiais!
          </SpanLight>
        </AcesseParagraph>
        <Group18>
          <Group16>
            <Rectangle />
            <ButtonText>Acesso clientes</ButtonText>
          </Group16>
        </Group18>
      </Group17>
      <Group19>
        <Messaging
          alt="Messaging"
          src="https://c.animaapp.com/uUmb9Vky/img/messaging@2x.png"
        />
        <SectionTitle>
          Perguntas
          <br />
          frequentes
        </SectionTitle>
        <TireParagraph>
          Tire suas dúvidas rapidamente
          <br />
          com as respostas para as perguntas mais comuns sobre nossos
          <br />
          produtos e serviços.
        </TireParagraph>
        <Group18>
          <Group16>
            <Rectangle />
            <ButtonText>Acessar FAQ</ButtonText>
          </Group16>
        </Group18>
      </Group19>
    </DivSubsectionWrapper>
  );
};
