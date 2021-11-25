import React from 'react';
import styled from 'styled-components';
import { IcHeart, IcLogout, IcSearch, IcUser, Logo } from './Icon';
import { colors } from '../../styles/color';
import HeaderLayout from './Header.layout';

export default function Header() {
  return (
    <StyledWrapper>
      <HeaderLayout>
        <StyledNotice>
          <div>
            <span className="hide-less-than-mobile">[Notice] 쇼룸 고객을 위한 </span>
            <span>1:1 맞춤 고객상담 서비스</span>
            <span className="hide-less-than-mobile">를 소개합니다.</span>
          </div>
          <div>
            <StyledCounselButton>상담신청하러 가기</StyledCounselButton>
          </div>
        </StyledNotice>
      </HeaderLayout>
      <HeaderLayout>
        <StyledBanner>
          <Logo />
          <StyledMiddleMenu>
            <div>SPACE</div>
            <div>PAPER</div>
            <div>CONTENTS</div>
            <div>ABOUT US</div>
          </StyledMiddleMenu>
          <StyledRightMenu>
            <StyledSearchBar className="reset-less-than-tablet">
              <input type="text" placeholder="상품검색" className="hide-less-than-tablet" />
              <IcSearch width="40" height="40" />
            </StyledSearchBar>
            <IcHeart width="40" height="40" />
            <IcUser width="40" height="40" />
            <IcLogout width="40" height="40" />
            <div className="hide-less-than-mobile">ENGLISH</div>
          </StyledRightMenu>
        </StyledBanner>
      </HeaderLayout>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
