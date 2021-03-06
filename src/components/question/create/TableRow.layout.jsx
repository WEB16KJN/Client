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
    width: 40%;
  }
  & > *:last-child {
    width: 60%;
    margin-left: 51px;
    & > *:last-child {
      margin-top: 18px;
      & > *:last-child {
        color: ${colors.gray6};
        font-size: 12px;
        margin-top: 6px;
        width: 100%;
        text-align: center;
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
    & > *:last-child {
      & > *:last-child {
        line-height: 15px;
        text-align: left;
      }
    }
  }
`;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)`
  & > *:last-child {
    & > *:last-child {
      & > *:last-child {
        line-height: 15px;
      }
    }
  }
`;
