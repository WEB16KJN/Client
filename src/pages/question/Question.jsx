import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Title from '../../component/question/Title';
import SideNav from '../../component/question/SideNav';
import ProfileCalendar from '../../component/question/ProfileCalendar';

export default function Question() {
  return (
    <StyledWrapper>
      <ProfileCalendar />
      <SideNav />
      <div>
        <Title />
        <Outlet />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  & > *:first-child {
    grid-column: 1 / span 2;
  }
`;
