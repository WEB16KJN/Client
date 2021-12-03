import React from 'react';
import styled from 'styled-components';
import TableCell from './TableCell';
import { colors } from '../../../styles/color';
import CreateInput from './CreateInput';
import PropTypes from 'prop-types';
import FileInputs from './FileInputs';
import TableRowLayout from './TableRow.layout';
import CreateFormTableLayout from './CreateFormTable.layout';

export default function CreateFormTable({ handleQuestionInput, handleQuestionFileInput }) {
  const userName = '이수연';

  return (
    <CreateFormTableLayout>
      <TableCell label="작성자">
        <StyledUserName>{userName}</StyledUserName>
      </TableCell>
      <TableCell label="제목">
        <CreateInput
          type="text"
          handleQuestionInput={handleQuestionInput}
          value={'title'}
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
            type="text"
            handleQuestionInput={handleQuestionInput}
            value={'name'}
            placeholder="성명을 입력해 주세요."
          />
        </TableCell>
        <TableCell label="핸드폰 번호">
          <CreateInput
            handleQuestionInput={handleQuestionInput}
            value={'phone'}
            type="tel"
            placeholder="ex) 010-1234-1234"
          />
          <div>* 자세한 설명을 위한 것으로, 기재하지 않으실 경우 원활한 상담이 어렵습니다. </div>
        </TableCell>
      </TableRowLayout>
      <TableCell label="문의 내용">
        <StyledTextarea
          onChange={(e) => handleQuestionInput(e, 'content')}
          placeholder="문의하실 내용을 입력해 주세요."
        />
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
};

const StyledUserName = styled.div`
  color: ${colors.gray9};
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 136px;
  resize: none;
  border: 1px solid ${colors.gray4};
  padding: 20px 16px;
  box-sizing: border-box;
`;
