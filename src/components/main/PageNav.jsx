import React from 'react';
import styled from 'styled-components';
import Proptype from 'prop-types';
import { colors } from '../../styles/color';
import { IcMoveLast, IcMoveNext } from '../common/Icon';
export default function PageNav({ resultCount }) {
  const renderPagination = () => {
    return Array(typeof resultCount === 'number' ? resultCount : 1)
      .fill()
      .map((e, i) => <li key={i}>{i + 1}</li>);
  };
  return (
    <StyledPageNav>
      <StyledPaginationWrapper>
        <ul>{renderPagination()}</ul>
        <StyledButtonWrapper>
          <IcMoveNext />
          <IcMoveLast />
        </StyledButtonWrapper>
      </StyledPaginationWrapper>
    </StyledPageNav>
  );
}

PageNav.propTypes = {
  resultCount: Proptype.any.isRequired,
};

const StyledPageNav = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 78px;
  ul {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  li {
    width: 22px;
    height: 20px;
    font-family: NanumSquareOTF;
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    color: ${colors.gray5};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  li:first-child {
    border-bottom: 2px solid ${colors.black};
    color: ${colors.black};
  }
`;
const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 10px;
  }
`;
