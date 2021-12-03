import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseLayout from '../common/Base.layout';

export default function ProfileScheduleBarLayout({ children, StyledMobileToTabletWrapper }) {
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

ProfileScheduleBarLayout.propTypes = {
  children: PropTypes.element,
  StyledMobileToTabletWrapper: PropTypes.element,
};

const StyledDesktopWrapper = styled.div`
  padding: 0 20px;
  width: 1082px;
  display: flex;
`;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)``;

const StyledMobileWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:first-child {
    margin-bottom: 30px;
  }
  & > *:nth-child(2) {
    grid-template-columns: 1fr 1fr;
    width: 320px;
    height: 410px;
  }
`;
