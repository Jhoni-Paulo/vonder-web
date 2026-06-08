import React from "react";
import styled from "styled-components";
import { Group239 } from "../../components/Group239/Group239";

const StyledGroup239 = styled(Group239)`
  position: absolute !important;
`;

export const Group239WrapperSubsection = (): React.JSX.Element => {
  return <StyledGroup239 className="group-instance" />;
};
