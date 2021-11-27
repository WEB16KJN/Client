import React from 'react';
import { PropTypes } from 'prop-types';
import useResponsive from '../../hooks/useResponsive';

export default function BaseLayout({
  children,
  BigScreen,
  TabletOrDesktop,
  MobileOrTablet,
  Mobile,
}) {
  const { isBigScreen, isTabletOrDesktop, isMobileOrTablet, isMobile } = useResponsive();

  if (isBigScreen) return <BigScreen>{children}</BigScreen>;
  if (isTabletOrDesktop) return <TabletOrDesktop>{children}</TabletOrDesktop>;
  if (isMobileOrTablet) return <MobileOrTablet>{children}</MobileOrTablet>;
  if (isMobile) return <Mobile>{children}</Mobile>;
  return <>{children}</>;
}

BaseLayout.propTypes = {
  children: PropTypes.element,
  BigScreen: PropTypes.elementType,
  TabletOrDesktop: PropTypes.elementType,
  MobileOrTablet: PropTypes.elementType,
  Mobile: PropTypes.elementType,
};
