import React, { createContext, useReducer } from 'react';
import styled from 'styled-components';
import Intro from '../components/main/Intro';
import Option from '../components/main/Option';
import Article from '../components/main/Article';
import mockArticles from '../data/main/articles.json';
import { initialOptions, mainReducer } from '../utils/mainReducer';
import { articlesReducer } from '../utils/articlesReducer';
export const Context = createContext(null);
export default function Main() {
  const [stateOptions, optionsDispatch] = useReducer(mainReducer, initialOptions);
  const [stateArticles, articlesDispatch] = useReducer(articlesReducer, mockArticles);
  return (
    <StyledMain>
      <Intro />
      <Context.Provider value={{ stateOptions, optionsDispatch, stateArticles, articlesDispatch }}>
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
