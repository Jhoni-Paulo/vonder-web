import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 306px;
  left: 245px;
  position: absolute;
  top: 1597px;
  width: 950px;
`;

const GroupCard = styled.div`
  height: 306px;
  position: absolute;
  top: calc(50.00% - 153px);
  width: 26.74%;
`;

const Group30 = styled(GroupCard)`
  left: 0;
`;

const Group33 = styled(GroupCard)`
  left: 36.84%;
`;

const Group34 = styled.div`
  height: 100%;
  left: 73.68%;
  position: absolute;
  top: 0;
  width: 26.74%;
`;

const ServiceImage = styled.img`
  aspect-ratio: 1;
  height: 50px;
  left: 39.37%;
  position: absolute;
  top: calc(50.00% - 153px);
  width: 60.63%;
`;

const MessagingImage = styled.img`
  aspect-ratio: 1;
  height: 100%;
  left: 39.37%;
  position: absolute;
  top: 0;
  width: 60.63%;
`;

const Title = styled.div`
  color: #0e0e0e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 60px;
  width: 250px;
  left: calc(50% - 127px);
`;

const Description = styled.p<{ weight?: number }>`
  color: #0e0e0e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: ${({ weight }) => weight ?? 300};
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 148px;
  width: 250px;
  left: calc(50% - 127px);
`;

const LinkDescription = styled.p`
  color: #0e0e0e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 148px;
  width: 250px;
  left: calc(50% - 127px);
  margin: 0;
`;

const LightSpan = styled.span`
  font-weight: 300;
`;

const BoldSpan = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const ActionGroup = styled.div`
  display: flex;
  height: 40px;
  left: 0;
  position: absolute;
  top: 266px;
  width: 250px;
`;

const ActionGroupInner = styled.div`
  flex: 1;
  position: relative;
  width: 252px;
`;

const ActionBackground = styled.div`
  background-color: #000000;
  border-radius: 100px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 99.21%;
`;

const ActionText = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  left: calc(50% - 126px);
  position: absolute;
  text-align: center;
  top: calc(50% - 13px);
  width: 250px;
`;

export const Group1Subsection = (): React.JSX.Element => {
  return (
    <Section>
      <Group30>
        <ServiceImage
          className="img-2"
          alt="Service"
          src="https://c.animaapp.com/ywgOupuM/img/service@2x.png"
        />
        <Title>
          Assistência
          <br />
          técnica
        </Title>
        <Description>
          Encontre facilmente os centros de assistência autorizados para
          garantir o bom funcionamento de suas ferramentas VONDER
        </Description>
        <ActionGroup>
          <ActionGroupInner>
            <ActionBackground />
            <ActionText>Assistência técnica</ActionText>
          </ActionGroupInner>
        </ActionGroup>
      </Group30>
      <Group33>
        <ServiceImage
          className="img-2"
          alt="Shop"
          src="https://c.animaapp.com/ywgOupuM/img/shop@2x.png"
        />
        <Title>
          Sou lojista ou
          <br />
          revendedor
        </Title>
        <LinkDescription className="acesse-o-VONDER">
          <LightSpan className="text-wrapper-25">Acesse o </LightSpan>
          <BoldSpan className="text-wrapper-26">B2B VONDER</BoldSpan>
          <LightSpan className="text-wrapper-25">
            , nossa plataforma digital de vendas exclusiva para lojistas e
            revendedores, com soluções e condições especiais!
          </LightSpan>
        </LinkDescription>
        <ActionGroup>
          <ActionGroupInner>
            <ActionBackground />
            <ActionText>Acesso clientes</ActionText>
          </ActionGroupInner>
        </ActionGroup>
      </Group33>
      <Group34>
        <MessagingImage
          className="messaging"
          alt="Messaging"
          src="https://c.animaapp.com/ywgOupuM/img/messaging@2x.png"
        />
        <Title>
          Perguntas
          <br />
          frequentes
        </Title>
        <Description>
          Tire suas dúvidas rapidamente
          <br />
          com as respostas para as perguntas mais comuns sobre nossos
          <br />
          produtos e serviços.
        </Description>
        <ActionGroup>
          <ActionGroupInner>
            <ActionBackground />
            <ActionText>Acessar FAQ</ActionText>
          </ActionGroupInner>
        </ActionGroup>
      </Group34>
    </Section>
  );
};
