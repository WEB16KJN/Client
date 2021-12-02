import React, { useState } from 'react';
import styled from 'styled-components';
import CreateFormTable from '../../components/question/create/CreateFormTable';
import BackOrSubmit from '../../components/question/create/BackOrSubmit';
import PropTypes from 'prop-types';

export default function CreateQuestion() {
  const [questionInfo, setQuestionInfo] = useState({});
  const handleQuestionInput = (e, value) => {
    if (value === 'isSecret') {
      setQuestionInfo((questionInfo) => ({ ...questionInfo, [value]: e.target.checked }));
    } else {
      setQuestionInfo((questionInfo) => ({ ...questionInfo, [value]: e.target.value }));
    }
  };
  const handleQuestionFileInput = (files) => {
    setQuestionInfo((questionInfo) => ({ ...questionInfo, files: files }));
  };
  return (
    <StyledCreateQuestion>
      <CreateFormTable
        handleQuestionInput={handleQuestionInput}
        handleQuestionFileInput={handleQuestionFileInput}
      />
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
  width: 917px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
