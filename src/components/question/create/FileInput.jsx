import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../styles/color';

export default function FileInput({ handleFileInputAction, id }) {
  const [file, setFile] = useState('');

  return (
    <StyledFileInput>
      <StyledFakeFileInput type="text" value={file} />
      <StyledFileButton htmlFor="file">찾아보기</StyledFileButton>
      <StyledRealFileInput
        type="file"
        id="file"
        value={file}
        onChange={(e) => {
          setFile(e.target.value);
        }}
      />
      <StyledActionButton onClick={(e) => handleFileInputAction(e, id)}>추가 +</StyledActionButton>
    </StyledFileInput>
  );
}

FileInput.propTypes = {
  actionType: PropTypes.string,
  handleFileInputAction: PropTypes.func,
  id: PropTypes.string,
};

const StyledFileInput = styled.div`
  display: flex;
`;

const StyledFakeFileInput = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid ${colors.gray4};
  box-sizing: border-box;
`;

const StyledFileButton = styled.label`
  width: 159px;
  height: 45px;
  font-size: 13px;
  border-color: ${colors.black};
  background-color: ${colors.black};
  color: ${colors.white};
  margin-left: 6px;
  cursor: pointer;
  text-align: center;
  line-height: 45px;
`;

const StyledRealFileInput = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const StyledActionButton = styled.button`
  width: 159px;
  height: 45px;
  font-size: 13px;
  border-color: ${colors.black};
  background-color: ${colors.white};
  color: ${colors.black};
  margin-left: 6px;
  cursor: pointer;
`;
