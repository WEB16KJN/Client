import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import { IcMember } from '../common/Icon';

export default function Profile() {
  const userName = '이수연';
  return (
    <StyledProfile>
      <IcMember />
      <StyledGreeting>
        <StyledHelloText>안녕하세요:)</StyledHelloText>
        <StyledNameText>{userName} 님,</StyledNameText>
        <div>두성종이를 즐겨주세요</div>
      </StyledGreeting>
    </StyledProfile>
  );
}

const StyledProfile = styled.div`
  margin-right: 22px;
  margin-bottom: 92px;
  display: flex;
  align-items: center;
  padding: 36px 0 46px 0;
  border-top: 1px solid ${colors.gray2};
  border-bottom: 1px solid ${colors.gray2};
  & > *:first-child {
    margin-right: 32px;
  }
`;

const StyledGreeting = styled.div`
  font-size: 26px;
  font-weight: 400;
  & > *:first-child {
    font-weight: 700;
  }
  & > *:last-child {
    font-weight: 700;
  }
`;

const StyledHelloText = styled.div`
  margin-bottom: 11px;
`;

const StyledNameText = styled.div`
  margin-bottom: 7px;
`;
