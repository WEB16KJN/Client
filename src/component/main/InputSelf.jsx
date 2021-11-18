import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import { IcCheckRoundTrue } from '../common/Icon/index';
export default function InputSelf() {
  return (
    <StyledInputSelf>
      <IcCheckRoundTrue />
      <span>직접입력</span>
      <StyledInputRange>
        <input type="number" />g
      </StyledInputRange>
      ~
      <StyledInputRange>
        <input type="number" />g
      </StyledInputRange>
    </StyledInputSelf>
  );
}
const StyledInputSelf = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray5};
  flex-grow: 1;
  height: 55px;
  box-sizing: border-box;
  svg {
    width: 27px;
    height: 27px;
    flex-shrink: 0;
  }
  span {
    margin-left: 10px;
    flex-basis: 59px;
    flex-shrink: 0;
  }
`;
const StyledInputRange = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  input {
    width: 110px;
    height: 47px;
    border: none;
    outline: none;
    background: ${colors.gray9};
    margin-right: 4px;
    color: ${colors.white};
    text-align: center;
    font-size: 15px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
