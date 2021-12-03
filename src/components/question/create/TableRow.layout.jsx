import React from 'react';
import styled from 'styled-components';
import { layoutPropTypes } from '../../../utils/layoutPropTypes';
import BaseLayout from '../../common/Base.layout';
import { colors } from '../../../styles/color';

export default function TableRowLayout({ children }) {
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

TableRowLayout.propTypes = layoutPropTypes;

const StyledDesktopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > *:first-child {
    width: 35%;
  }
  & > *:last-child {
    width: 65%;
    margin-left: 51px;
    & > *:last-child {
      margin-top: 18px;
      & > *:last-child {
        color: ${colors.gray6};
        font-size: 12px;
        margin-top: 6px;
      }
    }
  }
`;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)``;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)`
  flex-direction: column;
  & > *:first-child {
    width: 100%;
    margin-left: 0;
    margin-bottom: 23px;
  }
  & > *:last-child {
    width: 100%;
    margin-left: 0;
    margin-top: 23px;
  }
`;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)``;
