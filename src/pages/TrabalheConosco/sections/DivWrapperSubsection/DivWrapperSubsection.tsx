import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1207px;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-align: center;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const PostsRow = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  justify-content: center;
  width: 100%;
`;

const PostCard = styled.div`
  display: flex;
  flex: 1 1 280px;
  flex-direction: column;
  max-width: 286px;
  min-width: 260px;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 286 / 351;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;

const PostBody = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 0 0 15px 15px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  padding: 16px 15px 20px;
`;

const PostHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  width: 100%;
`;

const PostIcon = styled.img`
  height: 28px;
  width: auto;
`;

const Handle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
`;

const ShareIcon = styled.img`
  height: 24px;
  width: auto;
  margin-left: auto;
`;

const PostText = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  color: #000000;
  display: -webkit-box;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CtaButton = styled.button`
  align-items: center;
  background-color: #000000;
  border: none;
  border-radius: 100px;
  color: #f6be00;
  cursor: pointer;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 58px;
  justify-content: center;
  padding: 17px 50px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const SHARE = "https://c.animaapp.com/fkOynynE/img/frame-69682.svg";

const posts = [
  {
    img: "https://c.animaapp.com/fkOynynE/img/mask-group@2x.png",
    icon: "https://c.animaapp.com/fkOynynE/img/frame-129.svg",
    text: "Temos vagas para Vendedor Interno(a), venha trabalhar conosco! 💼 Se você é comunicativo(a), tem perfil comercial e gosta de desafios, essa oportunidade é para você!",
  },
  {
    img: "https://c.animaapp.com/fkOynynE/img/mask-group-1@2x.png",
    icon: "https://c.animaapp.com/fkOynynE/img/frame-129-1.svg",
    text: "O Catálogo de Produtos VONDER 2026 já está disponível em nosso site! Apresentado durante a FEICON, o novo catálogo reúne uma das linhas mais completas",
  },
  {
    img: "https://c.animaapp.com/fkOynynE/img/mask-group-2@2x.png",
    icon: "https://c.animaapp.com/fkOynynE/img/frame-129-2.svg",
    text: "A VONDER está preparando um verdadeiro show de exposição para a FEICON 2026 🔧✨ Inúmeros lançamentos e best-sellers do nosso mix, reunidos na maior feira da construção na América Latina.",
  },
  {
    img: "https://c.animaapp.com/fkOynynE/img/mask-group-3@2x.png",
    icon: "https://c.animaapp.com/fkOynynE/img/frame-129-3.svg",
    text: "✨ No Dia do Carpinteiro e Marceneiro, celebramos quem transforma madeira em criatividade, técnica e arte. Profissionais que, com talento e dedicação, criam peças que fazem parte do nosso dia a dia.",
  },
];

export const DivWrapperSubsection = (): React.JSX.Element => {
  return (
    <Wrapper>
      <Title>
        Já conhece
        <br />
        nosso LinkedIn?
      </Title>
      <Subtitle>
        Acompanhe nossas novidades, inovações e oportunidades de carreira em
        tempo real!
      </Subtitle>
      <PostsRow>
        {posts.map((post, i) => (
          <PostCard key={i}>
            <PostImage alt="Publicação" src={post.img} />
            <PostBody>
              <PostHeader>
                <PostIcon alt="" src={post.icon} />
                <Handle>@grupoovd</Handle>
                <ShareIcon alt="" src={SHARE} />
              </PostHeader>
              <PostText>{post.text}</PostText>
            </PostBody>
          </PostCard>
        ))}
      </PostsRow>
      <ButtonRow>
        <CtaButton type="button">Clique e confira</CtaButton>
      </ButtonRow>
    </Wrapper>
  );
};
