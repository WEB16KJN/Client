import React from 'react';
import styled from 'styled-components';
import { layoutPropTypes } from '../../../utils/layoutPropTypes';
import BaseLayout from '../../common/Base.layout';

export default function DateSelectorLayout({ children }) {
  return (
    <BaseLayout
      BigScreen={StyledDesktopWrapper}
      TabletOrDesktop={StyledTabletToDesktopWrapper}
      MobileOrTablet={StyledMobileToTabletWrapper}
      Mobile={StyledMobileToTabletWrapper}
    >
      {children}
    </BaseLayout>
  );
}

DateSelectorLayout.propTypes = layoutPropTypes;

const StyledDesktopWrapper = styled.div``;

const StyledTabletToDesktopWrapper = styled.div`
  & > div {
    & > div {
      display: none;
    }
  }
`;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)`
  & > div {
    padding: 20px;
    justify-content: flex-end;
    position: relative;
    & > input {
      width: 100%;
      margin-right: 60px;
    }
    & > svg {
      position: absolute;
      bottom: 16px;
    }
  }
`;
