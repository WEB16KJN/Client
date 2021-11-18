import React from 'react';
import styled from 'styled-components';
import CreateTitle from '../../component/question/create/CreateTitle';
import CreateFormTable from '../../component/question/create/CreateFormTable';
import BackOrSubmit from '../../component/question/create/BackOrSubmit';

export default function CreateQuestion() {
  return (
    <StyledCreateQuestion>
      <CreateTitle />
      <CreateFormTable />
      <BackOrSubmit />
    </StyledCreateQuestion>
  );
}

const StyledCreateQuestion = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
