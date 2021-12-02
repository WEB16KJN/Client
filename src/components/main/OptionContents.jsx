import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import OptionContent from './OptionContent';
import mockOptions from '../../data/main/options.json';
function OptionContents() {
  const { color } = mockOptions;
  return (
    <StyledOptionContents>
      {/* <OptionContent content={group} /> */}
      {/* <OptionContent content={use} />
      <OptionContent content={certification} />
      <OptionContent content={baseWeight} /> */}
      <OptionContent content={color} />
      <StyledSearchButton>Search Paper</StyledSearchButton>
    </StyledOptionContents>
  );
}
const StyledOptionContents = styled.div`
  max-width: 1300px;
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
  margin-top: 19px;
  cursor: pointer;
`;
export default OptionContents;
