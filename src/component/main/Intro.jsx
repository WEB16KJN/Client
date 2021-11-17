import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
function Intro() {
  return (
    <StyledIntro>
      <StyledContentWrapper>
        <StyledSubTitle>Smart Search</StyledSubTitle>
        <StyledMainTitle>종이 맞춤 검색</StyledMainTitle>
        <StyledDescription>
          원하시는 종이를 좀 더 쉽고 빠르게 검색할 수 있습니다.
          <br />
          검색 결과로 각 종이별 다양한 평량과 멀러 및 제작물 샘플을 볼 수 있습니다.
        </StyledDescription>
      </StyledContentWrapper>
    </StyledIntro>
  );
}
const StyledIntro = styled.div`
  width: 100vw;
  height: 414px;
  display: flex;
  justify-content: center;
  padding-top: 138px;
  padding-bottom: 99px;
  box-sizing: border-box;
`;
const StyledContentWrapper = styled.div`
  width: 513px;
  height: 177px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledSubTitle = styled.div`
  width: 80px;
  height: 14px;
  font-family: NanumSquareOTF;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: ${colors.black};
`;
const StyledMainTitle = styled.div`
  width: 362px;
  height: 66px;
  font-family: NanumSquareOTF;
  font-style: normal;
  font-weight: normal;
  font-size: 58px;
  line-height: 66px;
  color: ${colors.gray9};
  letter-spacing: 0.04em;
  margin-top: 18px;
  margin-bottom: 25px;
`;
const StyledDescription = styled.div`
  width: 513px;
  height: 54px;
  font-family: NanumSquareOTF;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.05em;
  color: ${colors.gray4};
`;
export default Intro;
