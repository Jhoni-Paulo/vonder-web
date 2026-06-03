import styled from "styled-components";
import GroupWrapperSubsection from "./sections/GroupWrapperSubsection";

const StyledFaleConosco = styled.div`
  background-color: #ffffff;
  padding: 3% 0 8% 0!important;
  overflow: hidden;
  position: relative;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0;
`;

export function FaleConosco(){
  return (
    <StyledFaleConosco className="FALE-CONOSCO" data-model-id="354:1770">
      <GroupWrapperSubsection />
    </StyledFaleConosco>
  );
};
