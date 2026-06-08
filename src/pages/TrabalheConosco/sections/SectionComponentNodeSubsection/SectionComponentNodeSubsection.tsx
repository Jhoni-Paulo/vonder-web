import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  height: 783px;
  margin-left: 106px;
  margin-top: 60px;
  position: relative;
  width: 1232px;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
`;

const Subtitle = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 128px;
  width: 507px;
`;

const CardsWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 28px;
  height: 489px;
  left: 0;
  min-width: 1228px;
  position: absolute;
  top: 206px;
`;

const Card = styled.div`
  height: 489px;
  position: relative;
  width: 286px;
`;

const CardOverlay = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  height: 246px;
  left: 0;
  position: absolute;
  top: 243px;
  width: 286px;
`;

const JobTextWrapper = styled.div`
  display: flex;
  height: 23.17%;
  justify-content: center;
  left: calc(50% - 128px);
  position: relative;
  top: 68.7%;
  width: 258px;
`;

const JobText = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #000000;
  display: -webkit-box;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -2px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 256px;
`;

const MaskImage = styled.img`
  height: 351px;
  left: 0;
  position: absolute;
  top: 0;
  width: 286px;
`;

const SocialBadgeBottom = styled.div`
  height: 6.54%;
  left: 5.24%;
  position: absolute;
  top: 74.64%;
  width: 58.74%;
`;

const SocialImage = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const SocialName = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 75%;
  left: 25%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 13.62%;
  white-space: nowrap;
  width: 55.95%;
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  height: 20px;
  left: 86.9%;
  position: absolute;
  top: calc(50% - 11px);
  width: 13.1%;
`;

const NewsContent = styled.div`
  height: 42.42%;
  left: calc(50% - 128px);
  position: relative;
  top: 49.45%;
  width: 258px;
`;

const NewsSocialWrapper = styled.div`
  height: 30.66%;
  left: 0;
  position: absolute;
  top: 0;
  width: 65.12%;
`;

const NewsText = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #000000;
  display: -webkit-box;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  height: 54.62%;
  left: calc(50% - 129px);
  letter-spacing: 0;
  line-height: normal;
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  top: 45.38%;
  width: 256px;
`;

const CTAWrapper = styled.div`
  height: 7.41%;
  left: 37.66%;
  position: absolute;
  top: 92.59%;
  width: 24.51%;
`;

const CTAButton = styled.div`
  background-color: #000000;
  border-radius: 100px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 99.34%;
`;

const CTAButtonText = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 41.38%;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 29.31%;
  width: 99.34%;
`;

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  return (
    <SectionContainer>
      <Title>
        Já conhece
        <br />
        nosso LinkedIn?
      </Title>
      <Subtitle>
        Acompanhe nossas novidades, inovações e <br />
        oportunidades de carreira em tempo real!
      </Subtitle>
      <CardsWrapper>
        <Card>
          <CardOverlay>
            <JobTextWrapper>
              <JobText>
                Temos vagas para Vendedor Interno(a), venha trabalhar conosco!
                <br />💼 Se você é comunicativo(a), tem perfil comercial e gosta
                de desafios, essa oportunidade é para você!
              </JobText>
            </JobTextWrapper>
          </CardOverlay>
          <MaskImage
            alt="Mask group"
            src="https://c.animaapp.com/jIsSRIVa/img/mask-group@2x.png"
          />
          <SocialBadgeBottom>
            <SocialImage
              alt="Group"
              src="https://c.animaapp.com/jIsSRIVa/img/group-129-3@2x.png"
            />
            <SocialName>@grupoovd</SocialName>
            <SocialIcon
              alt="Vector"
              src="https://c.animaapp.com/jIsSRIVa/img/vector-3.svg"
            />
          </SocialBadgeBottom>
        </Card>
        <Card>
          <CardOverlay>
            <NewsContent>
              <NewsSocialWrapper>
                <SocialImage
                  alt="Group"
                  src="https://c.animaapp.com/jIsSRIVa/img/group-129-3@2x.png"
                />
                <SocialName>@grupoovd</SocialName>
                <SocialIcon
                  alt="Vector"
                  src="https://c.animaapp.com/jIsSRIVa/img/vector-3.svg"
                />
              </NewsSocialWrapper>
              <NewsText>
                O Catálogo de Produtos VONDER 2026 já está disponível em nosso
                site!
                <br />
                Apresentado durante a FEICON, o novo catálogo reúne uma das
                linhas mais completas
              </NewsText>
            </NewsContent>
          </CardOverlay>
          <MaskImage
            alt="Mask group"
            src="https://c.animaapp.com/jIsSRIVa/img/mask-group-1@2x.png"
          />
        </Card>
        <Card>
          <CardOverlay>
            <NewsContent>
              <NewsSocialWrapper>
                <SocialImage
                  alt="Group"
                  src="https://c.animaapp.com/jIsSRIVa/img/group-129-3@2x.png"
                />
                <SocialName>@grupoovd</SocialName>
                <SocialIcon
                  alt="Vector"
                  src="https://c.animaapp.com/jIsSRIVa/img/vector-3.svg"
                />
              </NewsSocialWrapper>
              <NewsText>
                A VONDER está preparando um verdadeiro show de exposição para a
                FEICON 2026 🔧✨ Inúmeros lançamentos e best-sellers do nosso
                mix, reunidos na maior feira da construção na América Latina.
              </NewsText>
            </NewsContent>
          </CardOverlay>
          <MaskImage
            alt="Mask group"
            src="https://c.animaapp.com/jIsSRIVa/img/mask-group-2@2x.png"
          />
        </Card>
        <Card>
          <CardOverlay>
            <NewsContent>
              <NewsSocialWrapper>
                <SocialImage
                  alt="Group"
                  src="https://c.animaapp.com/jIsSRIVa/img/group-129-3@2x.png"
                />
                <SocialName>@grupoovd</SocialName>
                <SocialIcon
                  alt="Vector"
                  src="https://c.animaapp.com/jIsSRIVa/img/vector-3.svg"
                />
              </NewsSocialWrapper>
              <NewsText>
                ✨ No Dia do Carpinteiro e Marceneiro, celebramos quem
                transforma madeira em criatividade, técnica e arte.
                Profissionais que, com talento e dedicação, criam peças que
                fazem parte do nosso dia a dia - de móveis a projetos únicos
                cheios de personalidade.
              </NewsText>
            </NewsContent>
          </CardOverlay>
          <MaskImage
            alt="Mask group"
            src="https://c.animaapp.com/jIsSRIVa/img/mask-group-3@2x.png"
          />
        </Card>
      </CardsWrapper>
      <CTAWrapper>
        <CTAButton />
        <CTAButtonText>Clique e confira</CTAButtonText>
      </CTAWrapper>
    </SectionContainer>
  );
};
