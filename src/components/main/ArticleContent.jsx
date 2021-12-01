import React, { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { colors } from '../../styles/color';
import { IcLooks, IcLikeFalse, IcLikeTrue } from '../common/Icon';
export default function ArticleContent({ article }) {
  const [isLiked, setIsLiked] = useState(localStorage.getItem(`like/${article.id}`));

  const likeHandler = () => {
    if (!isLiked) {
      localStorage.setItem(`like/${article.id}`, true);
    } else {
      localStorage.removeItem(`like/${article.id}`);
    }
    setIsLiked((state) => !state);
  };

  return (
    <StyledArticleContent>
      <StyledThumbnail url={article.thumbnail}>
        <StyledWatching>
          <IcLooks />
          <span>{article.watching}</span>
        </StyledWatching>
        {isLiked ? <IcLikeTrue onClick={likeHandler} /> : <IcLikeFalse onClick={likeHandler} />}
      </StyledThumbnail>
      <StyledTitle>{article.title}</StyledTitle>
    </StyledArticleContent>
  );
}
const StyledArticleContent = styled.div`
  max-width: 271px;
  height: 395px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const StyledThumbnail = styled.div`
  width: 100%;
  height: 296px;
  position: relative;
  /* padding-top: 80%; */
  background-image: ${(props) => `url(${props?.url})`};
  background-repeat: no-repeat;

  svg:last-child {
    position: absolute;
    width: 43px;
    height: 43px;
    bottom: 13px;
    right: 13px;
  }
`;
const StyledTitle = styled.div`
  width: 100%;
  flex-grow: 1;
  font-family: NanumSquareOTF;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 160%;
  color: ${colors.black};
  background: ${colors.white};
  box-sizing: border-box;
  padding: 10%;
`;
const StyledWatching = styled.div`
  width: 55px;
  height: 15px;
  left: 20px;
  top: 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 26px;
  }
  span {
    font-family: NanumSquareOTF;
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: ${colors.black};
  }
`;
ArticleContent.propTypes = {
  article: Proptypes.object.isRequired,
};
