import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ScheduleUnit from './ScheduleUnit';
import { colors } from '../../styles/color';
import API_URL from '../../api/common/constants';
import requestHandler from '../../api/common/request';

export default function Schedule() {
  const [schedule, setSchedule] = useState({
    all: '-',
    planned: '-',
    completed: '-',
    canceled: '-',
  });
  useEffect(async () => {
    const response = await requestHandler.get(API_URL.GET.USER_SCHEDULE);
    const { json } = response;
    setSchedule(json.data);
  }, []);

  return (
    <StyledSchedule>
      <ScheduleUnit scheduleContents="전체일정" scheduleCount={schedule.all} />
      <ScheduleUnit scheduleContents="방문/상담 예정" scheduleCount={schedule.planned} />
      <ScheduleUnit scheduleContents="방문/상담 완료" scheduleCount={schedule.completed} />
      <ScheduleUnit scheduleContents="전체일정" scheduleCount={schedule.canceled} />
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
