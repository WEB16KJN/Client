import React from 'react';
import styled from 'styled-components';
import CalendarUnit from './CalendarUnit';

export default function Calendar() {
  return (
    <StyledCalendar>
      <CalendarUnit />
      <CalendarUnit />
      <CalendarUnit />
      <CalendarUnit />
    </StyledCalendar>
  );
}

const StyledCalendar = styled.div`
  width: 640px;
  height: 205px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
`;
