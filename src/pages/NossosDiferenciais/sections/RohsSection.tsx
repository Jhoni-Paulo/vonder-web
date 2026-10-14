import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ColunaTexto,
  Conteudo,
  DuasColunas,
  ImagemColuna,
  Paragrafo,
  Titulo,
} from "../styles";

/** Botão amarelo do layout, no mesmo formato dos CTAs do site. */
const BotaoAmarelo = styled(Link)`
  align-items: center;
  align-self: flex-start;
  background-color: #f6be00;
  border-radius: 100px;
  box-sizing: border-box;
  display: inline-flex;
  gap: 10px;
  height: 47px;
  padding: 0 28px;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const BotaoIcone = styled.img`
  height: 25px;
  width: 25px;
`;

const BotaoTexto = styled.span`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const TextoJustificado = styled(Paragrafo)`
  text-align: justify;
`;

export const RohsSection = (): React.JSX.Element => {
  return (
    <Conteudo as="section" aria-labelledby="rohs-titulo">
      <DuasColunas>
        <ImagemColuna
          alt="Planta representando o compromisso ambiental da VONDER"
          src="https://c.animaapp.com/GpZzux2v/img/03-3.png"
        />
        <ColunaTexto>
          <Titulo id="rohs-titulo">RoHS e Compromisso Ambiental</Titulo>
          <TextoJustificado>
            Na VONDER, a conformidade com RoHS é parte do nosso padrão de
            qualidade e segurança.
            <br />
            <br />
            Restringe o uso de substâncias perigosas em componentes elétricos e
            eletrônicos.
            <br />
            Garante produtos mais seguros para instalação, uso e descarte.
            <br />É um diferencial para quem busca soluções confiáveis e
            sustentáveis.
            <br />
            <br />
            Nossa linha é desenvolvida para atender à norma RoHS, reforçando o
            compromisso com clientes, instaladores e o meio ambiente.
          </TextoJustificado>
          <BotaoAmarelo to="/categorias-e-produtos" aria-label="Acessar produtos RoHS">
            <BotaoIcone
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/GpZzux2v/img/vector.svg"
            />
            <BotaoTexto>Acessar produtos RoHS</BotaoTexto>
          </BotaoAmarelo>
        </ColunaTexto>
      </DuasColunas>
    </Conteudo>
  );
};
