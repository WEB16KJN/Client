import React from 'react';
import { layoutPropTypes } from '../../utils/layoutPropTypes';
import BaseLayout from '../common/Base.layout';
import styled from 'styled-components';
export default function IntroLayout({ children }) {
  return (
    <BaseLayout
      BigScreen={StyledDesktopWrapper}
      TabletOrDesktop={StyledTabletToDesktopWrapper}
      MobileOrTablet={StyledMobileToTabletWrapper}
      Mobile={StyledMobileWrapper}
    >
      {children}
    </BaseLayout>
  );
}

IntroLayout.propTypes = layoutPropTypes;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  box-sizing: border-box;
`;

const StyledDesktopWrapper = styled(StyledWrapper)`
  height: 414px;
  padding-top: 138px;
  padding-bottom: 99px;
`;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)`
  height: 289.5px;
  padding-top: 27px;
  padding-bottom: 85.5px;
`;

const StyledMobileToTabletWrapper = styled(StyledDesktopWrapper)`
  height: 254.5px;
  padding-top: 34px;
  padding-bottom: 94.5px;

  & > div {
    div:nth-child(2) {
      width: 250px;
      height: 45px;
      font-weight: 300;
      font-size: 40px;
      line-height: 45px;
      margin-top: 10px;
      margin-bottom: 27px;
    }
    div:nth-child(3) {
      width: 285px;
      height: 30px;
      font-size: 10px;
    }
  }
`;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)``;
