import React from 'react';
import styled from 'styled-components';
import { layoutPropTypes } from '../../../utils/layoutPropTypes';
import BaseLayout from '../../common/Base.layout';
import Checked from '../../../assets/ic_check_true.svg';
import Unchecked from '../../../assets/ic_check_false.svg';
import { colors } from '../../../styles/color';

export default function CreateFormTableLayout({ children }) {
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

CreateFormTableLayout.propTypes = layoutPropTypes;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 120px;
  border-bottom: 1px solid ${colors.gray3};
  margin-bottom: 26px;
  border-top: 2px solid ${colors.gray8};
  * {
    font-weight: 700;
    font-size: 15px;
  }
  & > * {
    margin: 23px 0 23px 0;
  }
  & > *:nth-child(3) {
    input[type='checkbox'] {
      display: none;
    }
    input[type='checkbox'] + label {
      cursor: pointer;
      padding-left: 23px;
      background-repeat: no-repeat;
      background-image: ${`url(${Unchecked})`};
    }
    input[type='checkbox']:checked + label {
      background-image: ${`url(${Checked})`};
    }
  }
`;

const StyledDesktopWrapper = styled(StyledWrapper)``;

const StyledTabletToDesktopWrapper = styled(StyledDesktopWrapper)``;

const StyledMobileToTabletWrapper = styled(StyledTabletToDesktopWrapper)``;

const StyledMobileWrapper = styled(StyledMobileToTabletWrapper)`
  & > *:nth-child(2),
  & > *:nth-child(5),
  & > *:nth-child(6) {
    flex-direction: column;
    & > *:first-child {
      width: 100%;
      margin-bottom: 12px;
    }
    & > *:last-child {
      width: 100%;
    }
  }
  & > *:nth-child(4) {
    & > *:first-child {
      flex-direction: column;
      & > *:first-child {
        width: 100%;
        margin-bottom: 12px;
      }
      & > *:last-child {
        width: 100%;
      }
    }
    & > *:last-child {
      flex-direction: column;
      & > *:first-child {
        width: 100%;
        margin-bottom: 12px;
      }
      & > *:last-child {
        width: 100%;
        margin-top: 0;
      }
    }
  }
`;
