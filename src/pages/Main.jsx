import React from 'react';
import styled from 'styled-components';
import Intro from '../components/main/Intro';
import Option from '../components/main/Option';
import Article from '../components/main/Article';
export default function Main() {
  return (
    <StyledMain>
      <Intro />
      <Option />
      <Article />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
