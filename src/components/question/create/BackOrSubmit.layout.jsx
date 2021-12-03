import React from 'react';
import styled from 'styled-components';
import { layoutPropTypes } from '../../../utils/layoutPropTypes';
import BaseLayout from '../../common/Base.layout';

export default function BackOrSubmitLayout({ children }) {
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

BackOrSubmitLayout.propTypes = layoutPropTypes;

const StyledDesktopWrapper = styled.div``;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)``;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)``;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)`
  display: flex;
  width: 100%;
  margin: 80px 16px 0 16px;

  & > * {
    flex-grow: 1;
  }
`;
