import React from 'react';
import styled from 'styled-components';
import Title from '../../components/question/Title';
import SideNav from '../../components/question/SideNav';
import { Outlet } from 'react-router-dom';
import ProfileScheduleBar from '../../components/question/ProfileScheduleBar';

export default function Question() {
  return (
    <StyledQuestion>
      <StyledProfileScheduleBarWrapper>
        <ProfileScheduleBar />
      </StyledProfileScheduleBarWrapper>
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

const StyledProfileScheduleBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 299px;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
