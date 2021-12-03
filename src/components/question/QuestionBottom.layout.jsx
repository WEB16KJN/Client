import React from 'react';
import styled from 'styled-components';
import { layoutPropTypes } from '../../utils/layoutPropTypes';
import BaseLayout from '../common/Base.layout';

export default function QuestionBottomLayout({ children }) {
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

QuestionBottomLayout.propTypes = layoutPropTypes;

const StyledDesktopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)``;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)`
  width: 100vw;
  & > *:first-child {
    display: none;
  }
  & > *:last-child {
    box-sizing: border-box;
    padding: 0 20px;
    width: 100vw;
    & > *:last-child {
      width: 100%;
    }
  }
`;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)``;
