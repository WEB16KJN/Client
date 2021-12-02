import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseLayout from '../common/Base.layout';

export default function SliderLayout({ children, StyledMobileToTabletWrapper }) {
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

SliderLayout.propTypes = {
  children: PropTypes.element,
  StyledMobileToTabletWrapper: PropTypes.element,
};

const StyledDesktopWrapper = styled.div`
  width: 100%;
  height: 205px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  & > *:first-child {
    visibility: hidden;
  }
  & > *:last-child {
    visibility: hidden;
  }
`;

const StyledTabletToDesktopWrapper = styled.div`
  width: 100%;
  height: 205px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  & > *:first-child {
    visibility: hidden;
  }
  & > *:last-child {
    visibility: hidden;
  }
`;

const StyledMobileWrapper = styled.div``;
