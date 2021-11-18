import React from 'react';
import ArticleContents from './ArticleContents';
import ArticleNav from './ArticleNav';
import styled from 'styled-components';
import { colors } from '../../styles/color';
function Article() {
  return (
    <StyledArticle>
      <ArticleNav />
      <ArticleContents />
      <ArticleContents />
    </StyledArticle>
  );
}
const StyledArticle = styled.div`
  width: 100vw;
  height: 1210px;
  background: ${colors.gray1};
  position: relative;
`;
export default Article;
