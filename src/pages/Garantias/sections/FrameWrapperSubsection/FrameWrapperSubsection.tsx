import React from "react";
import styled from "styled-components";

const FrameWrapperSubsectionContainer = styled.div`
  align-items: stretch;
  align-self: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
`;

const Card = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 220px;
  flex-direction: column;
  gap: 16px;
  max-width: 280px;
  min-width: 200px;
`;

const Icon = styled.img`
  flex-shrink: 0;
  height: 50px;
  width: 50px;
`;

const Title = styled.div`
  color: #0e0e0e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 100%;
`;

const Text = styled.p`
  color: #0e0e0e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const ButtonRow = styled.div`
  display: flex;
  margin-top: auto;
  padding-top: 4px;
  width: 100%;
`;

const Button = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  height: 40px;
  justify-content: center;
  padding: 7px 16px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonLabel = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
`;

const LightSpan = styled.span`
  font-weight: 300;
`;

const BoldSpan = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

export const FrameWrapperSubsection = (): React.JSX.Element => {
  return (
    <FrameWrapperSubsectionContainer>
      <Card>
        <Icon
          alt="Shop location"
          src="https://c.animaapp.com/Qnwadh4r/img/shop-location@2x.png"
        />
        <Title>
          Onde
          <br />
          comprar
        </Title>
        <Text>
          Encontre facilmente um revendedor indicado VONDER mais próximo a sua
          localidade para garantir a sua próxima ferramenta VONDER!
        </Text>
        <ButtonRow>
          <Button>
            <ButtonLabel>Assistência técnica</ButtonLabel>
          </Button>
        </ButtonRow>
      </Card>
      <Card>
        <Icon
          alt="Shop"
          src="https://c.animaapp.com/Qnwadh4r/img/shop@2x.png"
        />
        <Title>
          Sou lojista ou
          <br />
          revendedor
        </Title>
        <Text>
          <LightSpan>Acesse o </LightSpan>
          <BoldSpan>B2B VONDER</BoldSpan>
          <LightSpan>
            , nossa plataforma digital de vendas exclusiva para lojistas e
            revendedores, com soluções e condições especiais!
          </LightSpan>
        </Text>
        <ButtonRow>
          <Button>
            <ButtonLabel>Acesso clientes</ButtonLabel>
          </Button>
        </ButtonRow>
      </Card>
      <Card>
        <Icon
          alt="Messaging"
          src="https://c.animaapp.com/Qnwadh4r/img/messaging@2x.png"
        />
        <Title>
          Perguntas
          <br />
          frequentes
        </Title>
        <Text>
          Tire suas dúvidas rapidamente com as respostas para as perguntas mais
          comuns sobre nossos produtos e serviços.
        </Text>
        <ButtonRow>
          <Button>
            <ButtonLabel>Acessar FAQ</ButtonLabel>
          </Button>
        </ButtonRow>
      </Card>
    </FrameWrapperSubsectionContainer>
  );
};
