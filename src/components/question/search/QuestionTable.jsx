import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../../styles/color';
import { DATE_TEMPLATE } from '../../../utils/dateSelector';

function QuestionTable({ questions }) {
  return (
    <StyledGridWrapper>
      <GridHeader>문의날짜</GridHeader>
      <GridHeader>제목</GridHeader>
      <GridHeader>문의 상태</GridHeader>
      {questions.length !== 0 ? (
        questions.map((question) => (
          <>
            <GridBody>{DATE_TEMPLATE(new Date(question.date))}</GridBody>
            <GridBody>{question.title}</GridBody>
            <GridBody>{question.status ? '접수' : '미접수'}</GridBody>
          </>
        ))
      ) : (
        <div>해당 기간 내에 문의 내역이 없습니다.</div>
      )}
    </StyledGridWrapper>
  );
}

QuestionTable.propTypes = {
  questions: PropTypes.array,
};

const GridHeader = styled.div`
  padding: 18px 0;
  color: ${colors.gray5};
  border-bottom: 1px solid ${colors.gray3};
  border-top: 2px solid ${colors.gray8};
  &:nth-child(3n - 1) {
    text-align: left;
  }
`;

const GridBody = styled.div`
  padding: 42px 0;
  color: ${colors.gray7};
  border-bottom: 1px solid ${colors.gray3};
  &:nth-child(3n - 1) {
    text-align: left;
  }
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px auto 120px;
  text-align: center;
  font-size: 13px;
`;

export default QuestionTable;
