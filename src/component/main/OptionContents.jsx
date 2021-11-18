import React from 'react';
import styled from 'styled-components';
import OptionContent from './OptionContent';
function OptionContents() {
  return (
    <StyledOptionContents>
      <OptionContent title="group" />
      <OptionContent title="use" />
      <OptionContent title="certification" />
      <OptionContent title="baseWeight" />
      <OptionContent title="color" />
    </StyledOptionContents>
  );
}
const StyledOptionContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default OptionContents;
