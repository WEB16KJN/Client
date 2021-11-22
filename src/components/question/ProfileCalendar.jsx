import React from 'react';
import Calendar from './Calendar';
import Profile from './Profile';
import styled from 'styled-components';

export default function ProfileCalendar() {
  return (
    <StyledProfileCalendar>
      <Profile />
      <Calendar />
    </StyledProfileCalendar>
  );
}

const StyledProfileCalendar = styled.div`
  width: 1082px;
  display: flex;
  & > * {
    flex-grow: 1;
  }
`;
