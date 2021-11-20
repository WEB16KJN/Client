import React, { useState } from 'react';
import styled from 'styled-components';
import CreateFormTable from '../../component/question/create/CreateFormTable';
import BackOrSubmit from '../../component/question/create/BackOrSubmit';
import PropTypes from 'prop-types';

export default function CreateQuestion() {
  const [questionInfo, setQuestionInfo] = useState({});
  const handleQuestionInput = (e, value) => {
    setQuestionInfo((questionInfo) => {
      const newQuestionInfo = { ...questionInfo };
      newQuestionInfo[value] = e.target.value;
      return newQuestionInfo;
    });
  };
  return (
    <StyledCreateQuestion>
      <CreateFormTable handleQuestionInput={handleQuestionInput} />
      <BackOrSubmit questionInfo={questionInfo} />
    </StyledCreateQuestion>
  );
}

CreateQuestion.propTypes = {
  questionInfo: PropTypes.object,
  handleQuestionInput: PropTypes.func,
};

const StyledCreateQuestion = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
