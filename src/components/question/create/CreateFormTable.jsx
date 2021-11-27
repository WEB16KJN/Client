import React from 'react';
import styled from 'styled-components';
import TableCell from './TableCell';
import { colors } from '../../../styles/color';
import CreateInput from './CreateInput';
import FileInput from './FileInput';
import PropTypes from 'prop-types';
import Checked from '../../../assets/ic_check_true.svg';
import Unchecked from '../../../assets/ic_check_false.svg';

const userName = '이수연';

export default function CreateFormTable({ handleQuestionInput }) {
  return (
    <StyledFormTable>
      <TableCell label="작성자">
        <StyledUserName>{userName}</StyledUserName>
      </TableCell>
      <TableCell label="제목">
        <CreateInput type="text" handleQuestionInput={handleQuestionInput} value={'title'} />
      </TableCell>
      <TableCell label="비밀글 여부">
        <StyledSecretCheckBox
          id="isSecret"
          type="checkbox"
          onChange={(e) => handleQuestionInput(e, 'isSecret')}
        />
        <label htmlFor="isSecret">비밀글</label>
      </TableCell>
      <StyledTableRow>
        <TableCell label="성명">
          <CreateInput type="text" handleQuestionInput={handleQuestionInput} value={'name'} />
        </TableCell>
        <TableCell label="핸드폰 번호">
          <CreateInput handleQuestionInput={handleQuestionInput} value={'phoneNumber'} type="tel" />
          <div>* 자세한 설명을 위한 것으로, 기재하지 않으실 경우 원활한 상담이 어렵습니다. </div>
        </TableCell>
      </StyledTableRow>
      <TableCell label="문의 내용">
        <StyledTextarea onChange={(e) => handleQuestionInput(e, 'contents')} />
      </TableCell>
      <TableCell label="첨부파일">
        <StyledFileInputs>
          <FileInput
            addOrDelete="추가 +"
            handleQuestionInput={handleQuestionInput}
            value={'files'}
          />
          <FileInput
            addOrDelete="- 삭제"
            handleQuestionInput={handleQuestionInput}
            value={'files'}
          />
        </StyledFileInputs>
      </TableCell>
    </StyledFormTable>
  );
}

CreateFormTable.propTypes = {
  handleQuestionInput: PropTypes.func,
};

const StyledFormTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 120px;
  border-bottom: 1px solid ${colors.gray3};
  margin-bottom: 26px;
  border-top: 2px solid ${colors.gray8};
  * {
    font-weight: 700;
    font-size: 15px;
  }
  & > * {
    margin: 23px 0 23px 0;
  }
  & > *:nth-child(3) {
    input[type='checkbox'] {
      display: none;
    }
    input[type='checkbox'] + label {
      cursor: pointer;
      padding-left: 23px;
      background-repeat: no-repeat;
      background-image: ${`url(${Unchecked})`};
    }
    input[type='checkbox']:checked + label {
      background-image: ${`url(${Checked})`};
    }
  }
`;

const StyledUserName = styled.div`
  color: ${colors.gray9};
`;

const StyledSecretCheckBox = styled.input``;

const StyledTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  & > *:first-child {
    width: 35%;
  }
  & > *:last-child {
    width: 65%;
    margin-left: 51px;
    div:last-child {
      color: ${colors.gray6};
      font-size: 12px;
      margin-top: 6px;
    }
  }
`;

const StyledFileInputs = styled.div`
  & > *:first-child {
    margin-bottom: 12px;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 136px;
  resize: none;
  border: 1px solid ${colors.gray4};
`;
