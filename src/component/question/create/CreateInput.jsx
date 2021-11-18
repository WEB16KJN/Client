import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/color';

export default function CreateInput() {
  return <StyledCreateInput />;
}

const StyledCreateInput = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid ${colors.gray4};
`;
