import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';

function SideNav() {
  return (
    <StyledWrapper>
      <StyledTitle>마이페이지 홈</StyledTitle>
      <StyledTitle>찜 리스트</StyledTitle>
      <StyledSub>종이</StyledSub>
      <StyledSub>제작물</StyledSub>
      <StyledTitle>예약관리</StyledTitle>
      <StyledSub>대관신청</StyledSub>
      <StyledSub>예약 신청목록</StyledSub>
      <StyledTitle>최근 본 컨텐츠</StyledTitle>
      <StyledTitle>고객센터</StyledTitle>
      <StyledSub>1:1 문의</StyledSub>
      <StyledTitle>회원정보</StyledTitle>
      <StyledSub>회원정보 변경</StyledSub>
      <StyledSub>회원 탈퇴</StyledSub>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 150px;
`;

const StyledTitle = styled.h1`
  color: ${colors.gray8};
  font-size: 19px;
  margin-top: 45px;
`;

const StyledSub = styled.div`
  color: ${colors.gray5};
  font-size: 15px;
  margin-top: 10px;
`;
export default SideNav;
