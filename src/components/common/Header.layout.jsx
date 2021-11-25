import { checkPropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import useResponsive from '../../hooks/useResponsive';

export default function HeaderLayout({ children }) {
  const { isBigScreen, isTabletOrDesktop, isMobileOrTablet, isMobile } = useResponsive();
  if (isBigScreen) return <StyledDesktopWrapper>{children}</StyledDesktopWrapper>;
  if (isTabletOrDesktop)
    return <StyledTabletToDesktopWrapper>{children}</StyledTabletToDesktopWrapper>;
  if (isMobileOrTablet)
    return <StyledMobileToTabletWrapper>{children}</StyledMobileToTabletWrapper>;
  if (isMobile) return <StyledMobileWrapper>{children}</StyledMobileWrapper>;
  return <div>{children}</div>;
}

HeaderLayout.propTypes = {
  children: checkPropTypes.any,
};

const StyledWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  & > div {
    box-sizing: border-box;
  }
`;

const StyledDesktopWrapper = styled(StyledWrapper)`
  & > div {
    padding-left: max(calc(50% - 540px), 20px);
    padding-right: max(calc(50% - 540px), 20px);
  }
`;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)`
  &:nth-child(2) {
    & > div {
      grid-template-columns: 1fr 3fr auto;
      gap: 11px;
    }
  }
  & .hide-less-than-tablet {
    display: none;
  }
  & .reset-less-than-tablet {
    all: unset;
  }
`;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)`
  &:nth-child(2) {
    & > div {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding-bottom: 70px;
      & > div {
        gap: 13px;
      }
      & > div:nth-child(2) {
        position: absolute;
        top: 160px;
        left: 20px;
      }
      & > div:nth-child(3) {
        justify-content: flex-end;
      }
    }
  }
  & .hide-less-than-mobile {
    display: none;
  }
`;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)``;
