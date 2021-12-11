import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import { IcSearchBig } from '../common/Icon';
import { Context } from '../../pages/Main';
import createQuery from '../../utils/createQuery';
import { getPapers } from '../../api/paper';
function SearchBox() {
  const [searchInput, setSearchInput] = useState('');
  const { stateOptions, optionsDispatch, articlesDispatch } = useContext(Context);

  const changeInput = (e) => setSearchInput(e.target.value);

  const searchPaper = async (e) => {
    e.preventDefault();
    const query = createQuery(stateOptions);
    const result = await getPapers(query);

    articlesDispatch({ type: 'UPDATE_ARTICLES', result });
  };

  useEffect(() => {
    optionsDispatch({ type: 'UPDATE_KEYWORD', keyword: searchInput });
  }, [searchInput]);

  return (
    <StyledSearchBox onSubmit={searchPaper}>
      <input
        type="text"
        value={searchInput || ''}
        onChange={changeInput}
        placeholder="원하시는 검색어를 입력해보세요."
      />
      <input type="submit" style={{ display: 'none' }} />
      <IcSearchBig onClick={searchPaper} />
    </StyledSearchBox>
  );
}
const StyledSearchBox = styled.form`
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
    width: 80%;
    height: 15px;
    font-family: NanumSquareOTF;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    border: none;
    outline: none;
    color: ${colors.black};
    margin-left: 51px;
  }

  & > input::placeholder {
    color: ${colors.gray3};
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
