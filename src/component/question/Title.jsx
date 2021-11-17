import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';

function Title() {
  return <StyledTitle>1:1 문의</StyledTitle>;
}

const StyledTitle = styled.div`
  color: ${colors.gray8};
`;

export default Title;
