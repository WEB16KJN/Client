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
      </StyledWrapper>
    </StyledCalendarUnit>
  );
}

CalendarUnit.propTypes = {
  calendarContents: PropTypes.string,
  calendarNumber: PropTypes.string,
};

const StyledCalendarUnit = styled.div`
  flex-grow: 1;
  border-right: 1px solid #ededed;
  padding-left: 25px;
  & > *:first-child {
    margin-top: 33px;
  }
`;

const StyledContentsText = styled.div`
  width: 60px;
  height: 48px;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const StyledNumberText = styled.div`
  font-weight: 300;
  font-size: 40px;
  margin-top: 5px;
  &::after {
    content: '건';
    font-weight: 400;
    font-size: 15px;
    color: ${colors.gray5};
  }
`;
