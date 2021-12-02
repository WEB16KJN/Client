import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
function ArticleNav() {
  const renderNav = () => {
    return ['ALL', '조회순', '이름순', '인기순'].map((nav, i) => (
      <StyledEachNav key={i}>{nav}</StyledEachNav>
    ));
  };
  return <StyledArticleNav>{renderNav()}</StyledArticleNav>;
}
const StyledArticleNav = styled.div`
  display: flex;
  position: absolute;
  max-width: 1212px;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
`;
const StyledEachNav = styled.div`
  width: 303px;
  height: 50px;
  background: ${colors.gray9};
  border: 1px solid #343434;
  box-sizing: border-box;
  border-radius: 9px 10px 0px 0px;
  font-family: NanumSquareOTF;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 50px;
  text-align: center;
  color: ${colors.gray3};
  opacity: 0.4;

  &:nth-child(1) {
    background: ${colors.white};
    color: ${colors.black};
    opacity: 1;
  }
`;
export default ArticleNav;
