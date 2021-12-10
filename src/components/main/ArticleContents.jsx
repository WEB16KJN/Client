import React, { useContext } from 'react';
import styled from 'styled-components';
import PageNav from './PageNav';
import { colors } from '../../styles/color';
import ArticleContent from './ArticleContent';
import { Context } from '../../pages/Main';
function ArticleContents() {
  const {
    stateArticles: { articles, resultCount },
  } = useContext(Context);

  const renderResultCounts = () =>
    typeof resultCount === 'string'
      ? resultCount
      : `검색한 결과 총 ${resultCount}개의 상품이 있습니다.`;

  return (
    <StyledArticleContents>
      <StyledSearchResult>{renderResultCounts()}</StyledSearchResult>
      <StyledArticlesWrapper>
        {articles.map((article) => (
          <ArticleContent article={article} key={article.id} />
        ))}
      </StyledArticlesWrapper>
      <PageNav />
    </StyledArticleContents>
  );
}
const StyledArticleContents = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1108px;
  margin: 0 auto;
  margin-top: 104px;
`;
const StyledSearchResult = styled.div`
  width: 100%;
  height: 20px;
  font-family: NanumSquareOTF;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.gray5};
  margin-bottom: 49px;
  span {
    color: ${colors.black};
    font-weight: 800;
  }
`;
const StyledArticlesWrapper = styled.div`
  width: 100%;
  height: 842px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 8px;
  align-content: space-between;
  justify-content: space-between;
`;
export default ArticleContents;
