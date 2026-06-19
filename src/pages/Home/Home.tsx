import React from "react";
import styled from "styled-components";
import { AutoSubsection } from "./sections/AutoSubsection/AutoSubsection";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { ConfiraRedesSociais } from "../../components/ConfiraRedesSociais";
import { Group1Subsection } from "./sections/Group1Subsection";
import { Group239WrapperSubsection } from "./sections/Group239WrapperSubsection";
import { GroupSubsection } from "./sections/GroupSubsection/GroupSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

const StyledHOME = styled.div`
  margin-top: -173px;
  background-color: #ffffff;
  min-height: 7981px;
  min-width: 1440px;
  overflow: hidden;
  position: relative;
  width: 100%;

  & .element-banner-principal-2 {
    aspect-ratio: 3.25;
    height: 414px;
    left: 66px;
    position: absolute;
    top: 7597px;
    width: 1273px;
  }

  & .banner-institucional {
    aspect-ratio: 2.55;
    height: 565px;
    left: calc(50.00% - 720px);
    object-fit: cover;
    position: absolute;
    top: 151px;
    width: 1440px;
  }

  & .group-66 {
    height: 104px;
    left: calc(50.00% - 452px);
    position: absolute;
    top: 766px;
    width: 907px;
  }

  & .group-67 {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 12px;
    height: 57.69%;
    left: 25.91%;
    position: absolute;
    top: 0;
    width: 47.19%;
  }

  & .vector-3 {
    align-self: center;
    display: block;
    height: auto;
    max-height: 100%;
    width: 41.59%;
    flex-shrink: 0;
  }

  & .text-wrapper-38 {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 45px;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }

  & .text-wrapper-39 {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 24px;
    font-weight: 300;
    left: calc(50.00% - 454px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 75px;
    width: 905px;
  }

  & .group-68 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 79px;
    left: calc(50.00% - 591px);
    position: absolute;
    top: 2002px;
    width: 184px;
  }

  & .removedor-de-grampos {
    align-self: center;
    color: #000000;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    height: 48px;
    letter-spacing: 0;
    line-height: normal;
    margin-left: -4px;
    text-align: center;
    width: 180px;
  }

  & .text-wrapper-40 {
    color: #555a57;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 18px;
    font-weight: 700;
    height: 21px;
    letter-spacing: 0;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
    width: 180px;
  }

  & .sem-titulo {
    aspect-ratio: 1.04;
    height: 488px;
    left: -2344px;
    object-fit: cover;
    position: absolute;
    top: -22023px;
    width: 507px;
  }

  & .group-69 {
    height: 445px;
    left: calc(50.00% + 892px);
    position: absolute;
    top: 3335px;
    width: 292px;
  }

  & .mask-group-4 {
    height: 445px;
    left: -3080px;
    position: absolute;
    top: -24232px;
    width: 286px;
  }

  & .text-wrapper-41 {
    color: #ffffff;
    font-family: "Inter", Helvetica;
    font-size: 18px;
    font-weight: 300;
    left: calc(50.00% - 130px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 284px;
    width: 237px;
  }

  & .text-wrapper-42 {
    color: #ffc600;
    font-family: "Inter", Helvetica;
    font-size: 18px;
    font-weight: 700;
    height: 5.05%;
    left: 5.48%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 86.74%;
    width: 26.22%;
  }

  & .text-wrapper-43 {
    color: #ffc600;
    font-family: "Inter", Helvetica;
    font-size: 21px;
    font-weight: 700;
    left: calc(50.00% - 130px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 248px;
    width: 219px;
  }

  & .group-70 {
    display: flex;
    flex-direction: column;
    gap: 36px;
    height: 544px;
    left: calc(50.00% - 744px);
    position: absolute;
    top: 4249px;
    width: 1490px;
  }

  & .vitrine-VONDER {
    align-self: center;
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 45px;
    font-style: italic;
    font-weight: 700;
    height: 108px;
    letter-spacing: 0;
    line-height: normal;
    margin-left: -882px;
    width: 332.35px;
  }

  & .group-71 {
    height: 400px;
    margin-left: 24px;
    width: 1440px;
  }
`;

export const Home = (): React.JSX.Element => {
  return (
    <StyledHOME className="HOME" data-model-id="1:4693">
      <img
        className="element-banner-principal-2"
        alt="Element banner principal"
        src="https://c.animaapp.com/ea7M9uhj/img/03-banner-principal-1920x480-px-aspiradores-2-1.png"
      />
      <img
        className="banner-institucional"
        alt="Banner institucional"
        src="https://c.animaapp.com/ea7M9uhj/img/banner-institucional-site-1.png"
      />
      <div className="group-66">
        <div className="group-67">
          <div className="text-wrapper-38">Ferramenta é</div>
          <img
            className="vector-3"
            alt="Vector"
            src="https://c.animaapp.com/ea7M9uhj/img/vector.svg"
          />
        </div>
        <p className="text-wrapper-39">
          O melhor e mais completo mix de ferramentas profissionais e
          industriais do mercado
        </p>
      </div>
      <div className="group-68">
        <div className="removedor-de-grampos">
          Removedor de
          <br />
          grampos plásticos
        </div>
        <div className="text-wrapper-40">35.99.000.240</div>
      </div>
      <GroupSubsection />
      <img
        className="sem-titulo"
        alt="Sem titulo"
        src="https://c.animaapp.com/ea7M9uhj/img/sem-ti-tulo-1-1.png"
      />
      <GroupWrapperSubsection />
      <AutoSubsection />
      <ConfiraRedesSociais />
      <Group239WrapperSubsection />
      <DivSubsection />
      <div className="group-69">
        <img
          className="mask-group-4"
          alt="Mask group"
          src="https://c.animaapp.com/ea7M9uhj/img/mask-group-8@2x.png"
        />
        <p className="text-wrapper-41">
          O melhor e mais completo mix de ferramentas profissionais...
        </p>
        <div className="text-wrapper-42">Ler Mais</div>
        <div className="text-wrapper-43">Título de Blog</div>
      </div>
      <SectionComponentNodeSubsection />
      <Group1Subsection />
      <div className="group-70">
        <div className="vitrine-VONDER">
          Vitrine
          <br />
          VONDER
        </div>
        <img
          className="group-71"
          alt="Group"
          src="https://c.animaapp.com/ea7M9uhj/img/group-235.png"
        />
      </div>
    </StyledHOME>
  );
};
