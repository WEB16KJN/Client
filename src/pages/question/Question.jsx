import React from 'react';
import styled from 'styled-components';
import Title from '../../components/question/Title';
import SideNav from '../../components/question/SideNav';
import ProfileCalendar from '../../components/question/ProfileCalendar';
import { Outlet } from 'react-router-dom';

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
