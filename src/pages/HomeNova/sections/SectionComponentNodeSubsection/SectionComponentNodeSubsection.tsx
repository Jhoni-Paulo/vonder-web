import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  ExpandableCardCarousel,
  type ExpandableCardCarouselItem,
} from "../../../../components/ExpandableCardCarousel/ExpandableCardCarousel";
import { useHomeData } from "../../../../hooks/useHomeData";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1292px;
  padding: 0 24px;
  box-sizing: border-box;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const BlogButton = styled.button`
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
  height: 50px;
  justify-content: center;
  padding: 15px 48px;
  white-space: nowrap;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

export const SectionComponentNodeSubsection = (): React.JSX.Element | null => {
  const navigate = useNavigate();
  const { blogs } = useHomeData().dados;

  const posts = useMemo<ExpandableCardCarouselItem[]>(
    () =>
      blogs.map((post) => ({
        img: post.imagemUrl,
        title: post.titulo,
        desc: post.descricao,
        // Sem destino cadastrado, o card fica sem o "Ler Mais".
        linkText: post.redirecionamentoUrl ? "Ler Mais" : undefined,
        onLinkClick: post.redirecionamentoUrl
          ? () => window.open(post.redirecionamentoUrl, "_blank", "noopener,noreferrer")
          : undefined,
      })),
    [blogs],
  );

  /* Sem publicações não há o que mostrar: esconde título e carrossel. */
  if (posts.length === 0) return null;

  return (
    <Container>
      <Header>
        <Title>
          Confira
          <br />
          nosso Blog
        </Title>
        <BlogButton type="button" onClick={() => navigate("/blog")}>
          Ver Tudo
        </BlogButton>
      </Header>
      <ExpandableCardCarousel items={posts} gap={24} balancedActive />
    </Container>
  );
};
