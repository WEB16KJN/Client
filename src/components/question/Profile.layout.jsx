import React from 'react';
import styled from 'styled-components';
import { layoutPropTypes } from '../../utils/layoutPropTypes';
import BaseLayout from '../common/Base.layout';
import { colors } from '../../styles/color';

export default function ProfileLayout({ children }) {
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

ProfileLayout.propTypes = layoutPropTypes;

const StyledDesktopWrapper = styled.div`
  width: 420px;
  margin-right: 22px;
  margin-bottom: 92px;
  display: flex;
  align-items: center;
  padding: 36px 0 46px 0;
  border-top: 1px solid ${colors.gray2};
  border-bottom: 1px solid ${colors.gray2};
  & > *:first-child {
    margin-right: 32px;
    & > *:last-child {
      visibility: hidden;
    }
  }
`;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)``;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)``;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)`
  width: 328px;
  padding: 0;
  margin: 0 16px;
  & > *:first-child {
    margin: 36px 19px 36px 0;
    width: 85px;
    height: 85px;
    & > *:first-child {
      display: none;
    }
    & > *:last-child {
      visibility: visible;
    }
  }
  & > *:nth-child(2) {
    font-size: 18px;
  }
`;
