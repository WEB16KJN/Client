import React from 'react';
import styled from 'styled-components';
import Intro from '../component/main/Intro';
import Option from '../component/main/Option';
import Article from '../component/main/Article';
export default function Main() {
  return (
    <StyledMain>
      <Intro title="hi" />
      <Option />
      <Article />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
