import React from 'react';
import { IcCalendar } from '../common/Icon';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../styles/color';

export default function CalendarUnit({ calendarContents, calendarNumber }) {
  return (
    <StyledCalendarUnit>
      <IcCalendar />
      <StyledContentsText>{calendarContents}</StyledContentsText>
      <StyledWrapper>
        <StyledNumberText>{calendarNumber}</StyledNumberText>
        <span>건</span>
      </StyledWrapper>
    </StyledCalendarUnit>
  );
}

CalendarUnit.propTypes = {
  calendarContents: PropTypes.string,
  calendarNumber: PropTypes.string,
};

const StyledCalendarUnit = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ededed;
  padding-left: 25px;
  & > *:first-child {
    margin-top: 33px;
  }
`;

const StyledContentsText = styled.div`
  width: 60px;
  height: 48px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
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

const StyledNumberText = styled.div`
  font-weight: 300;
  font-size: 40px;
`;
