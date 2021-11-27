import React from 'react';
import styled from 'styled-components';
import ScheduleUnit from './ScheduleUnit';
import { colors } from '../../styles/color';

export default function Schedule() {
  return (
    <StyledSchedule>
      <ScheduleUnit scheduleContents="전체일정" scheduleCount="1" />
      <ScheduleUnit scheduleContents="방문/상담 예정" scheduleCount="0" />
      <ScheduleUnit scheduleContents="방문/상담 완료" scheduleCount="0" />
      <ScheduleUnit scheduleContents="전체일정" scheduleCount="0" />
    </StyledSchedule>
  );
}

const StyledSchedule = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 640px;
  height: 205px;
  line-height: 150%;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
  border-top: 5px solid ${colors.black};
`;
