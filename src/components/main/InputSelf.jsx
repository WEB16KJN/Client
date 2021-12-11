import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import { IcCheckRoundTrue } from '../common/Icon';
import { Context } from '../../pages/Main';
export default function InputSelf() {
  const { optionsDispatch } = useContext(Context);
  const [inputSelf, setInputSelf] = useState({
    low: '',
    high: '',
  });

  const changeInput = (e, input) => {
    setInputSelf({
      ...inputSelf,
      [input]: e.target.value,
    });
  };

  useEffect(() => {
    const option = inputSelf.low && inputSelf.high ? `${inputSelf.low}g~${inputSelf.high}g` : '';

    optionsDispatch({ type: 'ADD_INPUT_SELF', option });
  }, [inputSelf]);

  return (
    <StyledInputSelf>
      <div>
        <IcCheckRoundTrue />
        <span>직접입력</span>
        <StyledInputRange>
          <input type="number" value={inputSelf.low} onChange={(e) => changeInput(e, 'low')} />g
        </StyledInputRange>
      </div>

      <div>
        <StyledInputRange>
          <div>~</div>
          <input type="number" value={inputSelf.high} onChange={(e) => changeInput(e, 'high')} />g
        </StyledInputRange>
      </div>
    </StyledInputSelf>
  );
}
const StyledInputSelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  color: ${colors.gray5};
  width: 350px;
  height: 100%;
  box-sizing: border-box;
  flex-grow: 1;

  div {
    display: flex;
    align-items: center;
    max-height: 56px;
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
  @media (max-width: 1150px) {
    margin-right: 10px;
    max-height: 112px;
    & > div {
      width: 250px;
      justify-content: flex-end;
    }
  }
  @media (max-width: 500px) {
    height: 100px;
    justify-content: flex-start;
    flex-grow: 0;

    & > div:first-child,
    & > div:last-child {
      width: 250px;
      justify-content: flex-end;
    }
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
