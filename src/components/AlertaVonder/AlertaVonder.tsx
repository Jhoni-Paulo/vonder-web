import React, { useState } from "react";
import styled from "styled-components";
import alertaImage from "../../assets/alerta-image.png";

interface AlertaVonderProps {
  /** Imagem do mini-banner que abre para baixo ao clicar na faixa. */
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

/* Faixa clicável — full width, conteúdo centralizado (horizontal + vertical).
   O padding-top extra compensa os -34px com que a Home "encaixa" sob o header
   sticky, para que o cinza preencha o recorte arredondado do header sem cortar
   o conteúdo. */
const Strip = styled.button`
  width: 100%;
  border: none;
  background-color: #f2f2f2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 24px 14px;
  box-sizing: border-box;
  font: inherit;

  @media (max-width: 600px) {
    gap: 10px;
    padding: 44px 16px 12px;
  }
`;

const Content = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 10px;
  justify-content: center;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1.2;
  height: 44px;
  width: 53px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 600px) {
    height: 34px;
    width: 41px;
  }
`;

const TitleText = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 25px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const MessageText = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 15px;
    white-space: normal;
  }
`;

const Arrow = styled.img<{ $open: boolean }>`
  flex-shrink: 0;
  transition: transform 0.35s ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
`;

/* Painel que abre "para baixo" — anima o max-height de 0 até o conteúdo. */
const Panel = styled.div<{ $open: boolean }>`
  width: 100%;
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? "80vh" : "0")};
  transition: max-height 0.45s ease;
`;

const PanelImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const AlertaVonder = ({
  imageSrc = alertaImage,
  imageAlt = "Alerta VONDER",
  className,
}: AlertaVonderProps): React.JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper className={className}>
      <Strip
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Content>
          <Icon
            alt=""
            src="https://c.animaapp.com/CNY3PV74/img/group-69367-1@2x.png"
          />
          <TitleText>ALERTA VONDER!</TitleText>
          <MessageText>Cuidado com sites e perfis falsos!</MessageText>
        </Content>
        <Arrow
          $open={open}
          alt=""
          src="https://c.animaapp.com/CNY3PV74/img/frame-407.svg"
        />
      </Strip>
      <Panel $open={open} aria-hidden={!open}>
        <PanelImg alt={imageAlt} src={imageSrc} />
      </Panel>
    </Wrapper>
  );
};

export default AlertaVonder;
