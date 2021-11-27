import React from 'react';
import { IcCalendar } from '../common/Icon';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../styles/color';

export default function ScheduleUnit({ scheduleContents, scheduleCount }) {
  return (
    <StyledScheduleUnit>
      <IcCalendar />
      <StyledContents>{scheduleContents}</StyledContents>
      <StyledWrapper>
        <StyledCount>{scheduleCount}</StyledCount>
        <span>건</span>
      </StyledWrapper>
    </StyledScheduleUnit>
  );
}

ScheduleUnit.propTypes = {
  scheduleContents: PropTypes.string,
  scheduleCount: PropTypes.string,
};

const StyledScheduleUnit = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ededed;
  padding-left: 25px;
  & > *:first-child {
    margin-top: 33px;
  }
`;

const StyledContents = styled.div`
  width: 60px;
  height: 48px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 300;
`;

const StyledWrapper = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: center;
  height: 45px;
  & > span {
    font-weight: 400;
    font-size: 15px;
    color: ${colors.gray5};
    position: relative;
    bottom: -5px;
  }
`;

const StyledCount = styled.div`
  font-weight: 300;
  font-size: 40px;
  width: 25px;
`;
