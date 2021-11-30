import React from 'react';
import Profile from './Profile';
import styled from 'styled-components';
import Schedule from './Schedule';

export default function ProfileScheduleWrapper() {
  return (
    <StyledProfileScheduleWrapper>
      <Profile />
      <Schedule />
    </StyledProfileScheduleWrapper>
  );
}

const StyledProfileScheduleWrapper = styled.div`
  width: 1082px;
  display: flex;
  & > * {
    flex-grow: 1;
  }
`;
