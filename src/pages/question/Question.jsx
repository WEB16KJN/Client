import React from 'react';
import styled from 'styled-components';
import Title from '../../components/question/Title';
import SideNav from '../../components/question/SideNav';
import { Outlet } from 'react-router-dom';
import ProfileScheduleWrapper from '../../components/question/ProfileScheduleWrapper';

export default function Question() {
  return (
    <StyledQuestion>
      <ProfileScheduleWrapper />
      <StyledWrapper>
        <SideNav />
        <div>
          <Title />
          <Outlet />
        </div>
      </StyledWrapper>
    </StyledQuestion>
  );
}

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    width: 1084px;
  }
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
