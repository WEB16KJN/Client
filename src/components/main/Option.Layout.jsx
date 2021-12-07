import React from 'react';
import { layoutPropTypes } from '../../utils/layoutPropTypes';
import BaseLayout from '../common/Base.layout';
import styled from 'styled-components';
import { colors } from '../../styles/color';
export default function OptionLayout({ children }) {
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

OptionLayout.propTypes = layoutPropTypes;

const StyledWrapper = styled.div`
  width: 100%;
  background: ${colors.black};
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;
const StyledDesktopWrapper = styled(StyledWrapper)`
  height: 922px;
`;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)`
  height: 1275px;
`;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)`
  height: 1886px;
`;
const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)``;
