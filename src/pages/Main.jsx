import React, { createContext, useReducer } from 'react';
import styled from 'styled-components';
import Intro from '../components/main/Intro';
import Option from '../components/main/Option';
import Article from '../components/main/Article';
import { initialState, reducer } from '../utils/mainReducer';

export const Context = createContext(null);
export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StyledMain>
      <Intro />
      <Context.Provider value={{ state, dispatch }}>
        <Option />
        <Article />
      </Context.Provider>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
