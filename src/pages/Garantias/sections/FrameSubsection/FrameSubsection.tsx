import React from "react";
import styled from "styled-components";

const FrameSubsectionSection = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
`;

const CardsContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  width: 100%;
  max-width: 1260px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const CardSlot = styled.div`
  display: flex;
  flex: 1 1 320px;
  min-width: 280px;
  max-width: 400px;

  @media (max-width: 620px) {
    flex: 1 1 100%;
    max-width: 100%;
    min-width: 0;
  }
`;

const InfoCard = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px #00000026;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
`;

const CardImageLarge = styled.img`
  height: 50px;
  width: 71px;
  flex-shrink: 0;
`;

const CardImageMedium = styled.img`
  height: 50px;
  width: 62px;
  flex-shrink: 0;
`;

const CardTextBlock = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
  margin: 0;
`;

const CardHeading = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;

const CardBody = styled.span`
  font-family: "Swis721 Cn BT-Regular", Helvetica;
`;

const AfterSalesSection = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px #00000026;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
`;

const RectangleWrapper = styled.div`
  display: none;
`;

const RectangleBackground = styled.div`
  display: none;
`;

const AfterSalesFrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

const AfterSalesContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

const AfterSalesImage = styled.img`
  height: 57px;
  width: 65px;
  flex-shrink: 0;
`;

const AfterSalesTitle = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
`;

const GreyRectangle = styled.div`
  background-color: #f2f2f2;
  border-radius: 15px;
  height: 8px;
  width: 100%;
`;

const AfterSalesDescription = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
  margin: 0;
`;

const ContactInfo = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.6;
  margin: 0;
`;

const ContactLabel = styled.span`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
`;

const ContactAnchor = styled.a`
  color: inherit;
  display: inline-block;
  text-decoration: none;
`;

const ContactLinkText = styled.span`
  text-decoration: underline;
`;

const AdditionalFrames = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  width: 100%;
  max-width: 1260px;
`;

const LeftFrameWrapper = styled.div`
  display: flex;
  flex: 1 1 280px;
  min-width: 260px;
  max-width: 620px;
`;

const FrameCard = styled.div`
  background-color: #f2f2f2;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 37px 29px;
  width: 100%;
  box-sizing: border-box;
`;

const FrameOverlay = styled.div`
  display: none;
`;

const GreyRectangleLarge = styled.div`
  display: none;
`;

const LossHeader = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 16px;
`;

const LossImage = styled.img`
  height: 60px;
  width: 57px;
  flex-shrink: 0;
`;

const LossTitle = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: clamp(18px, 2vw, 24px);
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
`;

const FrameContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ParagraphHeading = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
  margin: 0;
`;

const ParagraphBody = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.6;
  margin: 0;
`;

const RightFrameCard = styled.div`
  background-color: #f2f2f2;
  border-radius: 15px;
  align-items: flex-start;
  display: flex;
  flex: 1 1 280px;
  flex-direction: column;
  gap: 22px;
  min-width: 260px;
  max-width: 620px;
  padding: 40px;
  box-sizing: border-box;
`;

const ImportantHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const ImportantImage = styled.img`
  height: 59px;
  width: 68px;
  flex-shrink: 0;
`;

const ImportantTitle = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: clamp(18px, 2vw, 24px);
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
`;

const ImportantContent = styled(FrameContent)`
  width: 100%;
`;

export const FrameSubsection = (): React.JSX.Element => {
  return (
    <FrameSubsectionSection>
      <CardsContainer>
        <CardSlot>
          <InfoCard>
            <CardImageLarge
              alt="Group"
              src="https://c.animaapp.com/Qnwadh4r/img/group-69132@2x.png"
            />
            <CardTextBlock>
              <CardHeading>
                CONDIÇÕES DE GARANTIA
                <br />
              </CardHeading>
              <CardBody>
                {" "}
                Para oferecer ainda mais suporte, a VONDER disponibiliza a
                Entrega Técnica a Distância para as Máquinas de Pintura Airless
                MPA 120, MPA 1010, MPA 300, MPA 350B e MPA 540B.
                <br />
                Ao concluir a Entrega Técnica a Distância, o cliente garante: 
                <br />1 ano de garantia (90 dias de Garantia Legal + 9 meses de
                Garantia Contratual).
                <br />
                Caso a Entrega Técnica a Distância não seja realizada, a
                garantia será limitada a 90 dias, conforme previsto no Código de
                Defesa do Consumidor.
              </CardBody>
            </CardTextBlock>
          </InfoCard>
        </CardSlot>
        <CardSlot>
          <InfoCard>
            <CardImageMedium
              alt="Group"
              src="https://c.animaapp.com/Qnwadh4r/img/group-69132-1@2x.png"
            />
            <CardTextBlock>
            <CardHeading>
              COMO VALIDAR A GARANTIA CONTRATUAL
              <br />
            </CardHeading>
            <CardBody>
              {" "}
              Para ativar a Garantia Contratual, é necessário: 
              <br />
              Preencher o formulário com todos os dados solicitados; 
              <br />
              Ter em mãos a Nota Fiscal de compra; 
              <br />
              Assistir ao vídeo técnico completo e seguir as orientações; 
              <br />
              Concluir o aceite ao final do vídeo; 
              <br />
              Aguardar o e-mail de confirmação da garantia contratual.
            </CardBody>
          </CardTextBlock>
          </InfoCard>
        </CardSlot>
        <CardSlot>
        <AfterSalesSection>
          <RectangleWrapper>
            <RectangleBackground />
          </RectangleWrapper>
          <AfterSalesFrameWrapper>
            <AfterSalesContent>
              <AfterSalesImage
                alt="Group"
                src="https://c.animaapp.com/Qnwadh4r/img/group-69132-2@2x.png"
              />
              <AfterSalesTitle>
                <span>
                  PÓS VENDA E ASSISTÊNCIA TÉCNICA
                  <br />
                </span>
              </AfterSalesTitle>
              <GreyRectangle />
              <AfterSalesDescription>
                {" "}
                A VONDER conta com a maior rede de Assistências Técnicas
                Autorizadas do segmento, oferecendo ampla cobertura e
                atendimento especializado.
                <br />
                <br />
                Em caso de dúvidas ou para localizar uma assistência autorizada:
              </AfterSalesDescription>
              <ContactInfo>
                <ContactLabel>Acesse: </ContactLabel>
                <ContactAnchor
                  href="http://www.vonder.com.br"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ContactLinkText>
                    www.vonder.com.br
                    <br />
                  </ContactLinkText>
                </ContactAnchor>
                <ContactLabel>Ligue: 0800 723 4762 (opção 1)</ContactLabel>
              </ContactInfo>
            </AfterSalesContent>
          </AfterSalesFrameWrapper>
        </AfterSalesSection>
        </CardSlot>
      </CardsContainer>
      <AdditionalFrames>
        <LeftFrameWrapper>
          <FrameCard>
            <FrameOverlay>
              <GreyRectangleLarge />
            </FrameOverlay>
            <LossHeader>
              <LossImage
                alt="Group"
                src="https://c.animaapp.com/Qnwadh4r/img/group-69133@2x.png"
              />
              <LossTitle>
                PERDA DO DIREITO À GARANTIA <br />
                CONTRATUAL
              </LossTitle>
            </LossHeader>
            <FrameContent>
              <ParagraphHeading>
                A garantia contratual será invalidada nos seguintes casos:
              </ParagraphHeading>
              <ParagraphBody>
                Produto aberto ou consertado por pessoas não autorizadas;
                <br />
                Uso de peças não originais;
                <br />
                Falta de manutenção;
                <br />
                Quedas, impactos ou uso inadequado;
                <br />
                Ligação em tensão elétrica incorreta;
                <br />
                Instalação elétrica inadequada;
                <br />
                Desgaste natural de peças.
              </ParagraphBody>
            </FrameContent>
          </FrameCard>
        </LeftFrameWrapper>
        <RightFrameCard>
          <FrameOverlay>
            <GreyRectangleLarge />
          </FrameOverlay>
          <ImportantHeader>
            <ImportantImage
              alt="Group"
              src="https://c.animaapp.com/Qnwadh4r/img/group-69134@2x.png"
            />
            <ImportantTitle>IMPORTANTE!</ImportantTitle>
          </ImportantHeader>
          <ImportantContent>
            <ParagraphHeading>
              A garantia não cobre frete ou transporte até a assistência
              técnica;
            </ParagraphHeading>
            <ParagraphBody>
              Acessórios e componentes sujeitos a desgaste possuem apenas
              garantia legal de 90 dias contra defeitos de fabricação;
              <br />
              Acessórios vendidos separadamente seguem política própria de
              garantia;
              <br />
              Garantia válida para consumidores e indústria, exceto locadoras.
            </ParagraphBody>
          </ImportantContent>
        </RightFrameCard>
      </AdditionalFrames>
    </FrameSubsectionSection>
  );
};
