import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DateSelector from '../../components/question/search/DateSelector';
import QuestionTable from '../../components/question/search/QuestionTable';
import { colors } from '../../styles/color';
import { DATE_TEMPLATE } from '../../utils/dateSelector';

export default function SearchQuestion() {
  const [startDate, setStartDate] = useState(DATE_TEMPLATE(new Date()));
  const [endDate, setEndDate] = useState(DATE_TEMPLATE(new Date()));
  return (
    <StyledSearchQuestion>
      <DateSelector
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <StyledSection>
        <div>
          <b>
            {startDate}~{endDate}
          </b>{' '}
          까지의 문의 내역
        </div>
        <StyledLink to="/question/create">1:1 문의하기</StyledLink>
      </StyledSection>
      <QuestionTable />
    </StyledSearchQuestion>
  );
}

const StyledSearchQuestion = styled.div`
  width: 917px;
`;

const StyledSection = styled.div`
  margin-top: 54px;
  margin-bottom: 8px;
  color: ${colors.gray5};
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & b {
    color: ${colors.black};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  font-size: 13px;
  padding: 16px 61px;
  border: 2px solid ${colors.gray5};
`;
