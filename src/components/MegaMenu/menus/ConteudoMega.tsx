import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 5%;
`;

const ColumnsWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 44px;
  justify-content: center;
  position: relative;

  @media (max-width: 1280px) {
    gap: 28px;
  }
`;

const Column = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 1 320px;
  flex-direction: column;
  gap: 18px;
  position: relative;
  max-width: 380px;
`;

const Element = styled.img`
  align-self: stretch;
  height: 150px;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
`;

const TitleText = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const DescriptionText = styled.p`
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
`;

const ButtonBase = `
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  display: flex;
  gap: 10px;
  height: 40px;
  justify-content: center;
  padding: 8px 16px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  margin-top: auto;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000059;
  }
`;

const ButtonLink = styled(Link)`
  ${ButtonBase}
`;

const ButtonExternal = styled.a`
  ${ButtonBase}
`;

const ButtonText = styled.div`
  color: #ffc600;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  text-align: center;
  white-space: nowrap;
`;

export function ConteudoMega(): React.JSX.Element {
  return (
    <Root>
      <ColumnsWrapper>
        <Column>
          <Element
            alt="Blog VONDER"
            src="https://c.animaapp.com/OOXM068j/img/05-1@2x.png"
          />
          <TitleText>Blog VONDER</TitleText>
          <DescriptionText>
            Dicas, novidades e conteúdos sobre a VONDER, uso eficiente das
            ferramentas e inovações do setor. Mergulhe conosco nesse universo de
            ferramentas!
          </DescriptionText>
          <ButtonLink to="/blog">
            <ButtonText>Acessar o Blog</ButtonText>
          </ButtonLink>
        </Column>
        <Column>
          <Element
            alt="VONDER.tv"
            src="https://c.animaapp.com/OOXM068j/img/05-2@2x.png"
          />
          <TitleText>VONDER.tv</TitleText>
          <DescriptionText>
            Assista a vídeos, tutoriais e demonstrações, com tudo o que você
            precisa saber sobre os produtos e a marca VONDER. Fique por dentro de
            todas as novidades!
          </DescriptionText>
          <ButtonExternal
            href="https://www.youtube.com/@vonderferramentas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonText>Assistir agora</ButtonText>
          </ButtonExternal>
        </Column>
      </ColumnsWrapper>
    </Root>
  );
}

export default ConteudoMega;
