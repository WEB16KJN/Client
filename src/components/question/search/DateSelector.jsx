import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../styles/color';
import { DATE_INTERVAL, DATE_TEMPLATE } from '../../../utils/dateSelector';
import { IcSearchBig } from '../../common/Icon';
import DateSelectorLayout from './DateSelector.layout';

function DateSelector({ startDate, setStartDate, endDate, setEndDate }) {
  const [selectedOption, setSelectedOption] = useState(DATE_INTERVAL[0].index);

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    if (new Date(newStartDate) > new Date(endDate)) return;
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    if (new Date(startDate) > new Date(newEndDate)) return;
    setEndDate(e.target.value);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option.index);
    const tempDate = new Date(endDate);
    tempDate.setDate(tempDate.getDate() - option.interval);
    setStartDate(DATE_TEMPLATE(tempDate));
  };

  return (
    <DateSelectorLayout>
      <StyledGridWrapper>
        {DATE_INTERVAL.map((option) => (
          <StyledOption
            key={option.index}
            onClick={() => {
              handleOptionChange(option);
            }}
            selected={option.index === selectedOption}
          >
            {option.display}
          </StyledOption>
        ))}
        <div></div>
        <StyledDateInput type="date" value={startDate} onChange={handleStartDateChange} />
        <StyledDateInput type="date" value={endDate} onChange={handleEndDateChange} />
        <IcSearchBig width="46" />
      </StyledGridWrapper>
    </DateSelectorLayout>
  );
}

DateSelector.propTypes = {
  startDate: PropTypes.string,
  setStartDate: PropTypes.func,
  endDate: PropTypes.string,
  setEndDate: PropTypes.func,
};

const StyledDateInput = styled.input`
  font-size: 14px;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.black};
`;

const StyledOption = styled.div`
  font-size: 14px;
  padding: 10px 0;
  color: ${(props) => (props.selected ? colors.black : colors.gray6)};
  border-bottom: ${(props) => (props.selected ? `1px solid ${colors.black}` : 'none')};
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

const StyledGridWrapper = styled.div`
  background-color: ${colors.gray1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0 60px;
  flex-wrap: wrap;
  gap: 26px;
`;

export default DateSelector;
