import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import { IcCheckRoundTrue } from '../common/Icon';
export default function InputSelf() {
  return (
    <StyledInputSelf>
      <div>
        <IcCheckRoundTrue />
        <span>직접입력</span>
        <StyledInputRange>
          <input type="number" />g
        </StyledInputRange>
      </div>

      <StyledInputRange>
        <div>~</div>
        <input type="number" />g
      </StyledInputRange>
    </StyledInputSelf>
  );
}
const StyledInputSelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: ${colors.gray5};
  width: 350px;
  height: 100%;
  box-sizing: border-box;
  flex-grow: 1;

  div {
    display: flex;
    align-items: center;
  }
  svg {
    width: 27px;
    height: 27px;
    flex-shrink: 0;
  }
  span {
    margin-left: 10px;
    margin-right: 20px;
    flex-basis: 59px;
    flex-shrink: 0;
  }
  @media (max-width: 1100px) {
    justify-content: flex-end;
    margin-right: 10px;
  }
`;
const StyledInputRange = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  div {
    width: 9px;
    margin-left: 12px;
    margin-right: 15px;
  }
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
