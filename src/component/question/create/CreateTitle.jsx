import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/color';

export default function CreateTitle() {
  return <StyledCreateTitle>1:1문의</StyledCreateTitle>;
}

const StyledCreateTitle = styled.div`
  font-weight: 700;
  font-size: 26px;
  padding-bottom: 50px;
  border-bottom: 2px solid ${colors.gray8};
  margin-bottom: 57px;
  width: 100%;
`;
