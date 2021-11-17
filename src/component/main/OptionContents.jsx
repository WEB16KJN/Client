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
const StyledOptionContents = styled.div``;
export default OptionContents;
