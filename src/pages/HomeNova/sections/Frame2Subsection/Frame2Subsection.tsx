import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  padding: 70px 24px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 48px 20px;
    gap: 32px;
  }
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

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Buttons = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const InstagramButton = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 50px;
  justify-content: center;
  padding: 0 28px;
`;

const InstagramText = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
`;

const InstagramIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const SocialButton = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const PostsRow = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  justify-content: center;
  width: 100%;
  max-width: 1212px;
`;

const PostCard = styled.div`
  display: flex;
  flex: 1 1 280px;
  flex-direction: column;
  max-width: 286px;
  min-width: 260px;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const PostBody = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  padding: 16px 14px 18px;
`;

const PostHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;
  width: 100%;
`;

const PostAvatar = styled.img`
  height: 28px;
  width: auto;
`;

const PostHandle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
`;

const PostShare = styled.img`
  height: 20px;
  width: auto;
`;

const PostText = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
  text-align: center;
`;

const AVATAR = "https://c.animaapp.com/F8lHzCc8/img/frame-129.svg";
const SHARE = "https://c.animaapp.com/F8lHzCc8/img/frame-69733.svg";

const posts = [
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-13@2x.png",
    text: "Muita gente usa, mas poucos conhecem os segredos para manter a precisão e a durabilidade dessa ferramenta. Confira...",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-14@2x.png",
    text: "Por trás de toda grande obra existe um processo. No cinema, são meses de produção. No trabalho diário, são as...",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-15@2x.png",
    text: "Muita gente usa, mas poucos conhecem os segredos para manter a precisão e a durabilidade dessa ferramenta. Confira...",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-16@2x.png",
    text: "👑 A rainha dos cortes retos em madeira e derivados chegou! A Serra Circular SCV 1400 VONDER entrega potência, precisão...",
  },
];

const socialButtons = [
  "https://c.animaapp.com/F8lHzCc8/img/frame-142.svg",
  "https://c.animaapp.com/F8lHzCc8/img/frame-144.svg",
  "https://c.animaapp.com/F8lHzCc8/img/frame-143.svg",
];

export const Frame2Subsection = (): React.JSX.Element => {
  return (
    <Container>
      <Title>Confira nossas redes sociais</Title>
      <Buttons>
        <InstagramButton>
          <InstagramText>Instagram</InstagramText>
          <InstagramIcon
            alt="Instagram"
            src="https://c.animaapp.com/F8lHzCc8/img/frame-69721.svg"
          />
        </InstagramButton>
        {socialButtons.map((src, i) => (
          <SocialButton key={i} alt="Rede social" src={src} />
        ))}
      </Buttons>
      <PostsRow>
        {posts.map((post, i) => (
          <PostCard key={i}>
            <PostImage alt="Publicação" src={post.img} />
            <PostBody>
              <PostHeader>
                <PostAvatar alt="" src={AVATAR} />
                <PostHandle>@vonderferramentas</PostHandle>
                <PostShare alt="" src={SHARE} />
              </PostHeader>
              <PostText>{post.text}</PostText>
            </PostBody>
          </PostCard>
        ))}
      </PostsRow>
    </Container>
  );
};
