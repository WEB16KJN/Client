import React from 'react';
import styled from 'styled-components';
import { layoutPropTypes } from '../../../utils/layoutPropTypes';
import BaseLayout from '../../common/Base.layout';
export default function FileInputLayout({ children }) {
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

FileInputLayout.propTypes = layoutPropTypes;

const StyledDesktopWrapper = styled.div`
  display: flex;
`;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)``;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)`
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    & > *:first-child {
      grid-column: 1 / span 2;
      margin-bottom: 8px;
    }
    & > *:nth-child(2) {
      width: 100%;
      margin-left: 0;
      margin-right: 3px;
      justify-self: center;
    }
    & > *:nth-child(4) {
      font-size: 13px;
      width: 100%;
      margin-left: 3px;
      justify-self: center;
    }
  }
`;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > *:first-child {
    grid-column: 1 / span 2;
    margin-bottom: 8px;
  }
  & > *:nth-child(2) {
    margin-left: 0;
    font-size: 13px;
  }
  & > *:nth-child(4) {
    font-size: 13px;
  }
`;
