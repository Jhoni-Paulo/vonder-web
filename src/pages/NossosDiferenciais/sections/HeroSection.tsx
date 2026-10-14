import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Conteudo } from "../styles";

const Hero = styled.section`
  align-items: center;
  background-image: url("https://c.animaapp.com/GpZzux2v/img/frame-69347.png");
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 0 0 15px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 662px;
  padding: 120px 0 56px;
  width: 100%;

  @media (max-width: 900px) {
    min-height: 480px;
    padding: 72px 0 40px;
  }
`;

const Interno = styled(Conteudo)`
  display: flex;
  flex-direction: column;
  gap: 61px;

  @media (max-width: 900px) {
    gap: 32px;
  }
`;

const Breadcrumb = styled.p`
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .atual {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Texto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  max-width: 452px;
`;

const Titulo = styled.h1`
  color: #ffffff;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 60px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

const Descricao = styled.p`
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 38px;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const HeroSection = (): React.JSX.Element => {
  return (
    <Hero>
      <Interno>
        <Breadcrumb>
          <Link to="/">Página inicial</Link> &gt;{" "}
          <span className="atual">Nossos diferenciais</span>
        </Breadcrumb>
        <Texto>
          <Titulo>
            NOSSOS
            <br />
            DIFERENCIAIS
          </Titulo>
          <Descricao>
            Respaldada pela tradição de mais de 55 anos do Grupo OVD, a VONDER
            oferece um dos mix mais completos e premiados do mercado. Mas o
            nosso diferencial vai além dos produtos: está nas pessoas, na
            responsabilidade com o planeta e no rigor técnico de cada item.
          </Descricao>
        </Texto>
      </Interno>
    </Hero>
  );
};
