import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../styles/color';

export default function BackOrSubmit() {
  return (
    <div>
      <StyledButton index={0}>이전</StyledButton>
      <StyledButton index={1}>문의하기</StyledButton>
    </div>
  );
}

const StyledButton = styled.button`
  width: 159px;
  height: 45px;
  font-size: 13px;
  border-color: ${colors.black};
  ${(props) =>
    props.index === 0 &&
    css`
      background-color: ${colors.white};
      color: ${colors.black};
      margin-right: 6px;
    `}
  ${(props) =>
    props.index === 1 &&
    css`
      background-color: ${colors.black};
      color: ${colors.white};
    `}
`;
