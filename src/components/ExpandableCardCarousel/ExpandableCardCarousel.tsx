import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export interface ExpandableCardCarouselItem {
  img: string;
  title: string;
  desc?: string;
  linkText?: string;
  onLinkClick?: () => void;
}

interface ExpandableCardCarouselProps {
  items: ExpandableCardCarouselItem[];
  showArrows?: boolean;
  /** Espaço (px) entre os cards no desktop. Default: 12. */
  gap?: number;
  /** Quando true, o card aberto fica ~20% mais estreito e a largura que sobra
   *  é distribuída proporcionalmente entre os demais cards (em vez de eles
   *  encolherem para uma miniatura fixa). Default: false. */
  balancedActive?: boolean;
}

const CarouselRow = styled.div`
  position: relative;
  width: 100%;
`;

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  cursor: pointer;
  z-index: 2;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &.arrow-left {
    left: -62px;
  }

  &.arrow-right {
    right: -62px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Track = styled.div<{ $gap: number }>`
  display: flex;
  gap: ${({ $gap }) => $gap}px;
  width: 100%;
  align-items: stretch;

  @media (max-width: 600px) {
    gap: 0;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Card = styled.div<{ $active?: boolean; $hasActive?: boolean; $balanced?: boolean }>`
  position: relative;
  height: 480px;
  border-radius: 15px;
  overflow: hidden;
  flex-shrink: 0;
  flex: ${({ $active, $hasActive, $balanced }) =>
    $balanced
      ? !$hasActive
        ? "1 1 0"
        : $active
        ? "8 1 0"
        : "3 1 0"
      : $active
      ? "1 1 auto"
      : $hasActive
      ? "0 0 160px"
      : "1 1 0"};
  width: ${({ $active, $hasActive, $balanced }) =>
    $balanced ? "auto" : $active || !$hasActive ? "auto" : "160px"};
  cursor: ${({ $active }) => ($active ? "default" : "pointer")};
  will-change: flex, width;
  transition:
    flex 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.65s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 600px) {
    flex: 0 0 100%;
    width: 100%;
    height: 420px;
    scroll-snap-align: start;
    cursor: default;
    opacity: 1;
  }
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.82) 100%);
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 22px 18px;
  box-sizing: border-box;
`;

const CardTitle = styled.p<{ $active?: boolean }>`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0;
  ${({ $active }) =>
    !$active &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}

  @media (max-width: 600px) {
    display: block;
    -webkit-line-clamp: unset;
    overflow: visible;
  }
`;

const CardDesc = styled.p`
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  max-height: 200px;
  opacity: 1;

  @media (max-width: 600px) {
    max-height: 200px;
    opacity: 1;
  }
`;

const CardLink = styled.span`
  color: #ffffff;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
`;

export const ExpandableCardCarousel = ({
  items,
  showArrows = true,
  gap = 12,
  balancedActive = false,
}: ExpandableCardCarouselProps): React.JSX.Element => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const goLeft = () =>
    setActiveIdx((prev) => (prev === null ? 0 : (prev + 1) % items.length));
  const goRight = () =>
    setActiveIdx((prev) =>
      prev === null ? items.length - 1 : (prev - 1 + items.length) % items.length
    );

  // Scroll track to activeIdx on desktop state change (mobile ignores this via snap)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (activeIdx === null) return;
    if (window.innerWidth > 600) return;
    isScrolling.current = true;
    track.scrollTo({ left: track.clientWidth * activeIdx, behavior: "smooth" });
    const t = setTimeout(() => {
      isScrolling.current = false;
    }, 600);
    return () => clearTimeout(t);
  }, [activeIdx]);

  const handleScroll = useCallback(() => {
    if (isScrolling.current) return;
    const track = trackRef.current;
    if (!track) return;
    const idx = Math.round(track.scrollLeft / track.clientWidth);
    if (idx !== activeIdx) setActiveIdx(idx);
  }, [activeIdx]);

  return (
    <CarouselRow>
      {showArrows && (
        <Arrow
          className="arrow-left"
          alt="Anterior"
          src="https://c.animaapp.com/F8lHzCc8/img/camada-1-4.svg"
          onClick={goLeft}
        />
      )}
      <Track ref={trackRef} onScroll={handleScroll} $gap={gap}>
        {items.map((item, i) => {
          const isActive = i === activeIdx;
          return (
            <Card
              key={i}
              $active={isActive}
              $hasActive={activeIdx !== null}
              $balanced={balancedActive}
              onClick={!isActive ? () => setActiveIdx(i) : undefined}
            >
              <CardImage alt={item.title} src={item.img} />
              <CardOverlay />
              <CardContent>
                <CardTitle $active={isActive}>{item.title}</CardTitle>
                {item.desc && <CardDesc>{item.desc}</CardDesc>}
                {item.linkText && (
                  <CardLink onClick={item.onLinkClick}>{item.linkText}</CardLink>
                )}
              </CardContent>
            </Card>
          );
        })}
      </Track>
      {showArrows && (
        <Arrow
          className="arrow-right"
          alt="Próximo"
          src="https://c.animaapp.com/F8lHzCc8/img/camada-1-5.svg"
          onClick={goRight}
        />
      )}
    </CarouselRow>
  );
};
