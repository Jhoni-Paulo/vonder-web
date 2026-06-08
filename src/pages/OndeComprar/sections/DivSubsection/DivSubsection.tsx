import React from "react";
import styled from "styled-components";

export const DivSubsection = (): React.JSX.Element => {
  return (
    <StyledDivSubsection>
      <Group26>
        <TextWrapper19>Lojas online e marketplaces</TextWrapper19>
        <Encontre>
          Encontre a VONDER com facilidade também <br />
          nos principais marketplaces e plataformas online.
        </Encontre>
      </Group26>
    </StyledDivSubsection>
  );
};

const StyledDivSubsection = styled.div`
  display: flex;
  height: 132px;
  justify-content: center;
  left: 106px;
  position: absolute;
  top: 1020px;
  width: 507px;
`;

const Group26 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 132px;
  margin-left: 4px;
  width: 511px;
`;

const TextWrapper19 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  height: 54px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -3px;
  white-space: nowrap;
  width: 506px;
`;

const Encontre = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  height: 58px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  width: 507px;
`;
