import React from "react";
import styled from "styled-components";
import { Group } from "../../components/Group";

const StyledFrame3Subsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 24px;
  width: 100%;
  max-width: 1214px;
  box-sizing: border-box;
`;

export const Frame3Subsection = (): React.JSX.Element => {
  return (
    <StyledFrame3Subsection>
      <Group className="group-239" />
    </StyledFrame3Subsection>
  );
};
