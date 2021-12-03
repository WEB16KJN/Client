import React from 'react';
import styled from 'styled-components';
import { layoutPropTypes } from '../../../utils/layoutPropTypes';
import BaseLayout from '../../common/Base.layout';
import { colors } from '../../../styles/color';

export default function TableCellLayout({ children }) {
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

TableCellLayout.propTypes = layoutPropTypes;

const StyledDesktopWrapper = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    width: 130px;
    color: ${colors.gray6};
    flex-basis: 130px;
    flex-shrink: 0;
  }
`;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)``;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)``;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)`
  & > *:first-child {
    flex-basis: auto;
    flex-shrink: 1;
  }
`;
