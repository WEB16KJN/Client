import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import OptionContent from './OptionContent';
function OptionContents() {
  return (
    <StyledOptionContents>
      <OptionContent title="group" />
      <OptionContent title="use" />
      <OptionContent title="certification" />
      <OptionContent title="baseWeight" />
      <OptionContent title="color" />
      <StyledSearchButton>Search Paper</StyledSearchButton>
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
const StyledSearchButton = styled.div`
  width: 276px;
  height: 57px;
  border: 2px solid ${colors.white};
  box-sizing: border-box;
  font-family: NanumSquareOTF;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 57px;
  text-align: center;
  letter-spacing: -0.05em;
  color: ${colors.white};
  margin-top: 52px;
  cursor: pointer;
`;
export default OptionContents;
