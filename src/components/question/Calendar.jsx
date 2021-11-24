import React from 'react';
import styled from 'styled-components';
import CalendarUnit from './CalendarUnit';
import { colors } from '../../styles/color';

export default function Calendar() {
  return (
    <StyledCalendar>
      <CalendarUnit calendarContents="전체일정" calendarNumber="1" />
      <CalendarUnit calendarContents="방문/상담 예정" calendarNumber="0" />
      <CalendarUnit calendarContents="방문/상담 완료" calendarNumber="0" />
      <CalendarUnit calendarContents="전체일정" calendarNumber="0" />
    </StyledCalendar>
  );
}

const StyledCalendar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 640px;
  height: 205px;
  line-height: 150%;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
  border-top: 5px solid ${colors.black};
`;
