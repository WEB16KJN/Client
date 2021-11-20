import React from 'react';
import OptionContents from './OptionContents';
import SearchBox from './SearchBox';
import styled from 'styled-components';
import { colors } from '../../styles/color';
function Option() {
  return (
    <StyledOption>
      <SearchBox />
      <OptionContents />
    </StyledOption>
  );
}
const StyledOption = styled.div`
  width: 100%;
  height: 922px;
  background: ${colors.black};
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;
export default Option;
