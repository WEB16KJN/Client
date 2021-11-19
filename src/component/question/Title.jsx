import React from 'react';
import styled from 'styled-components';

function Title() {
  return <StyledTitle>1:1 문의</StyledTitle>;
}

const StyledTitle = styled.div`
  font-weight: 700;
  font-size: 26px;
  padding-bottom: 50px;
  margin-top: 45px;
  width: 100%;
`;

export default Title;
