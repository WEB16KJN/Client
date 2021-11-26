import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
  const isBigScreen = useMediaQuery({ minWidth: 1920 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768, maxWidth: 1920 });
  const isMobileOrTablet = useMediaQuery({ minWidth: 360, maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 360 });

  return { isBigScreen, isTabletOrDesktop, isMobileOrTablet, isMobile };
}
