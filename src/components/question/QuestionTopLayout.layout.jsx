import React from 'react';
import styled from 'styled-components';
import { layoutPropTypes } from '../../utils/layoutPropTypes';
import BaseLayout from '../common/Base.layout';

export default function QuestionTopLayout({ children }) {
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

QuestionTopLayout.propTypes = layoutPropTypes;

const StyledDesktopWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 299px;
`;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)``;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)``;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)`
  height: 653px;
`;
