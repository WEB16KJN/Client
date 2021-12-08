import React, { useState } from 'react';
import styled from 'styled-components';
import TableCell from './TableCell';
import { colors } from '../../../styles/color';
import CreateInput from './CreateInput';
import PropTypes from 'prop-types';
import FileInputs from './FileInputs';
import TableRowLayout from './TableRow.layout';
import CreateFormTableLayout from './CreateFormTable.layout';
import TelInput from './TelInput';

export default function CreateFormTable({
  handleQuestionInput,
  handleQuestionFileInput,
  handleQuestionTelInput,
}) {
  const userName = '이수연';
  const [isCorrectContent, setIsCorrectContent] = useState(true);
  const checkContentLength = (content) => {
    if (content.length > 200) {
      setIsCorrectContent(false);
    } else {
      setIsCorrectContent(true);
    }
  };

  return (
    <CreateFormTableLayout>
      <TableCell label="작성자">
        <StyledUserName>{userName}</StyledUserName>
      </TableCell>
      <TableCell label="제목">
        <CreateInput
          inputType="text"
          handleQuestionInput={handleQuestionInput}
          value="title"
          placeholder="제목을 입력해 주세요."
        />
      </TableCell>
      <TableCell label="비밀글 여부">
        <input id="isSecret" type="checkbox" onChange={(e) => handleQuestionInput(e, 'secret')} />
        <label htmlFor="isSecret">비밀글</label>
      </TableCell>
      <TableRowLayout>
        <TableCell label="성명">
          <CreateInput
            inputType="text"
            handleQuestionInput={handleQuestionInput}
            value="name"
            placeholder="성명을 입력해 주세요."
          />
        </TableCell>
        <TableCell label="핸드폰 번호">
          <TelInput
            handleQuestionTelInput={handleQuestionTelInput}
            value="phone"
            inputType="tel"
            placeholder="ex) 010-1234-1234"
          />
          <div>* 자세한 설명을 위한 것으로, 기재하지 않으실 경우 원활한 상담이 어렵습니다. </div>
        </TableCell>
      </TableRowLayout>
      <TableCell label="문의 내용">
        <StyledTextareaWrapper isCorrectContent={isCorrectContent}>
          <StyledTextarea
            onChange={(e) => {
              checkContentLength(e.target.value);
              handleQuestionInput(e, 'content');
            }}
            placeholder="문의하실 내용을 입력해 주세요."
          />
          <div>200자 내로 작성해 주세요.</div>
        </StyledTextareaWrapper>
      </TableCell>
      <TableCell label="첨부파일">
        <FileInputs handleQuestionFileInput={handleQuestionFileInput} />
      </TableCell>
    </CreateFormTableLayout>
  );
}

CreateFormTable.propTypes = {
  handleQuestionInput: PropTypes.func,
  handleQuestionFileInput: PropTypes.func,
  handleQuestionTelInput: PropTypes.func,
};

const StyledUserName = styled.div`
  color: ${colors.gray9};
`;

const StyledTextareaWrapper = styled.div`
  position: relative;
  & > *:last-child {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: ${colors.red};
    position: absolute;
    display: ${(props) => (props.isCorrectContent ? 'none' : 'block')};
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 136px;
  resize: none;
  border: 1px solid ${colors.gray4};
  padding: 20px 16px;
  box-sizing: border-box;
`;
