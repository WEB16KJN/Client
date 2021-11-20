import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import { IcSearchBig } from '../common/Icon';
function SearchBox() {
  return (
    <StyledSearchBox>
      <input type="text" placeholder="원하시는 검색어를 입력해보세요." />
      <input type="submit" style={{ display: 'none' }} />
      <IcSearchBig />
    </StyledSearchBox>
  );
}
const StyledSearchBox = styled.div`
  position: absolute;
  left: 50%;
  max-width: 1091px;
  width: 90%;
  height: 75px;
  border-radius: 37px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  background: ${colors.white};
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;

  & > input {
    width: 176px;
    height: 15px;
    font-family: NanumSquareOTF;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    border: none;
    outline: none;
    color: ${colors.gray3};
    margin-left: 51px;
  }
  &:nth-child(2) {
    display: none;
  }
  & > svg {
    width: 65px;
    height: 65px;
    margin-right: 5px;
    margin-left: auto;
    cursor: pointer;
  }
`;
export default SearchBox;
