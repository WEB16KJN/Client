import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SideNav from '../../component/question/SideNav';
import ProfileCalendar from '../../component/question/ProfileCalendar';

export default function Question() {
  // const [userName, setUserName] = useState("이수연");
  return (
    <StyledWrapper>
      <ProfileCalendar />
      <SideNav />
      <Outlet />
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
