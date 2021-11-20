import React from 'react';
import styled from 'styled-components';
import { IcHeart, IcLogout, IcSearch, IcUser, Logo } from './Icon';
import { colors } from '../../styles/color';

export default function Header() {
  return (
    <StyledWrapper>
      <StyledNotice>
        <div>[Notice] 쇼룸 고객을 위한 1:1 맞춤 고객상담 서비스를 소개합니다.</div>
        <div>
          <StyledCounselButton>상담신청하러 가기</StyledCounselButton>
        </div>
      </StyledNotice>
      <StyledBanner>
        <Logo />
        <StyledMiddleMenu>
          <div>SPACE</div>
          <div>PAPER</div>
          <div>CONTENTS</div>
          <div>ABOUT US</div>
        </StyledMiddleMenu>
        <StyledRightMenu>
          <StyledSearchBar>
            <input type="text" placeholder="상품검색" />
            <IcSearch width="40" height="40" />
          </StyledSearchBar>
          <IcHeart width="40" height="40" />
          <IcUser width="40" height="40" />
          <IcLogout width="40" height="40" />
          <div>ENGLISH</div>
        </StyledRightMenu>
      </StyledBanner>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  margin-bottom: 46px;
`;

const StyledNotice = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  gap: 39px;
  padding: 10px 0;
  align-items: center;
  background-color: ${colors.black};
  color: ${colors.white};

  & div:first-child {
    text-align: right;
  }
`;

const StyledCounselButton = styled.div`
  border-radius: 14px;
  padding: 8px 20px;
  border: 1px solid ${colors.gray4};
  width: 126px;
  font-size: 11px;
  box-sizing: border-box;
`;

const StyledBanner = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr auto;
  width: 100%;
  padding: 31px 0;
  background-color: ${colors.white};
`;

const StyledMiddleMenu = styled.div`
  display: flex;
  width: 100%;
  gap: 37px;
  align-items: center;
`;

const StyledRightMenu = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  align-items: center;
`;

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.black};

  & > input {
    border: none;
    font-size: 13px;
    &:focus {
      outline: none;
      border: none;
    }
  }
`;
