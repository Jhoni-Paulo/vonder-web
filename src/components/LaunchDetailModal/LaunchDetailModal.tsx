import React, { useEffect } from "react";
import styled from "styled-components";

export interface LaunchDetailModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  /** Promotional images stacked vertically inside the popup. */
  images: string[];
  downloadUrl?: string;
  onShare?: () => void;
}

const Overlay = styled.div`
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  display: flex;
  inset: 0;
  justify-content: center;
  overflow-y: auto;
  padding: 40px 20px;
  position: fixed;
  z-index: 1000;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Dialog = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin: auto;
  max-width: 1228px;
  padding: 40px 50px 47px;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    gap: 24px;
    padding: 24px 20px 32px;
  }
`;

const Header = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
`;

const ProductDetails = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const TextContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Title = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Actions = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ActionButton = styled.a<{ $variant: "download" | "share" }>`
  align-items: center;
  background-color: ${({ $variant }) =>
    $variant === "download" ? "#f6be00" : "#000000"};
  border-radius: 100px;
  color: ${({ $variant }) => ($variant === "download" ? "#000000" : "#f6be00")};
  cursor: pointer;
  display: inline-flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  gap: 8px;
  height: 50px;
  justify-content: center;
  padding: 0 40px;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const ActionIcon = styled.img`
  height: 26px;
  width: 26px;
`;

const CloseButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  height: 32px;
  justify-content: center;
  padding: 0;
  transition: transform 0.2s ease;
  width: 32px;

  &:hover {
    transform: scale(1.1);
  }
`;

const CloseIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const ProductImage = styled.img`
  border-radius: 8px;
  display: block;
  height: auto;
  width: 100%;
`;

export const LaunchDetailModal = ({
  open,
  onClose,
  title,
  description,
  images,
  downloadUrl,
  onShare,
}: LaunchDetailModalProps): React.JSX.Element | null => {
  // Close on Escape and lock body scroll while the modal is open
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          <ProductDetails>
            <TextContainer>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </TextContainer>
            <Actions>
              <ActionButton
                $variant="download"
                href={downloadUrl}
                download={downloadUrl ? "" : undefined}
                target={downloadUrl ? "_blank" : undefined}
                rel={downloadUrl ? "noopener noreferrer" : undefined}
              >
                <ActionIcon
                  alt=""
                  src="https://c.animaapp.com/Ll7qOVax/img/get-app.svg"
                />
                Fazer download
              </ActionButton>
              <ActionButton
                as="button"
                type="button"
                $variant="share"
                onClick={onShare}
              >
                <ActionIcon
                  alt=""
                  src="https://c.animaapp.com/Ll7qOVax/img/share-1.svg"
                />
                Compartilhar
              </ActionButton>
            </Actions>
          </ProductDetails>
          <CloseButton type="button" aria-label="Fechar" onClick={onClose}>
            <CloseIcon
              alt=""
              src="https://c.animaapp.com/Ll7qOVax/img/close-1.svg"
            />
          </CloseButton>
        </Header>
        <ProductImages>
          {images.map((src, i) => (
            <ProductImage key={i} alt={`${title} — imagem ${i + 1}`} src={src} />
          ))}
        </ProductImages>
      </Dialog>
    </Overlay>
  );
};
