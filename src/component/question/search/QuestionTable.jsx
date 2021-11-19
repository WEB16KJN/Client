import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/color';

function QuestionTable() {
  const questions = [
    { date: '2019-03-12', title: '제목', status: '접수' },
    { date: '2019-03-12', title: '제목', status: '접수' },
  ];

  return (
    <StyledGridWrapper>
      <GridHeader>문의날짜</GridHeader>
      <GridHeader>제목</GridHeader>
      <GridHeader>문의 상태</GridHeader>
      {questions.map((question) => (
        <>
          <GridBody>{question.date}</GridBody>
          <GridBody>{question.title}</GridBody>
          <GridBody>{question.status}</GridBody>
        </>
      ))}
    </StyledGridWrapper>
  );
}

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
