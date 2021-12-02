import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FileInput from './FileInput';
import PropTypes from 'prop-types';

export default function FileInputs({ handleQuestionFileInput }) {
  const ADD = '추가 +';
  const DELETE = '- 삭제';
  const [fileInputInfo, setFileInputInfo] = useState([
    { id: Date.now(), fileName: '', filePath: '' },
  ]);

  const addFileInput = (e) => {
    e.target.innerText = DELETE;
    setFileInputInfo((fileInputInfo) => [
      ...fileInputInfo,
      { id: Date.now(), fileName: '', filePath: '' },
    ]);
  };

  const deleteFileInput = (id) => {
    setFileInputInfo((fileInputInfo) => fileInputInfo.filter((info) => info.id !== id));
  };

  const handleFileInputAction = (e, id) => {
    if (e.target.innerText === ADD) addFileInput(e);
    else if (e.target.innerText === DELETE) deleteFileInput(id);
  };

  const handleFileValue = (fileName, filePath, id) => {
    setFileInputInfo((fileInputInfo) =>
      fileInputInfo.map((info) => {
        if (info.id === id) {
          const newInfo = { id: info.id, fileName: fileName, filePath: filePath };
          return newInfo;
        }
        return { id: info.id, fileName: info.fileName, filePath: info.filePath };
      }),
    );
  };

  useEffect(() => {
    const files = fileInputInfo.map((info) => info.filePath);
    handleQuestionFileInput(files);
    console.log(fileInputInfo);
  }, [fileInputInfo]);

  return (
    <StyledFileInputs>
      {fileInputInfo.map((info) => (
        <FileInput
          key={info.id}
          id={info.id}
          handleFileInputAction={handleFileInputAction}
          handleFileValue={handleFileValue}
          fileName={info.fileName}
        />
      ))}
    </StyledFileInputs>
  );
}

FileInputs.propTypes = {
  handleQuestionFileInput: PropTypes.func,
};

const StyledFileInputs = styled.div`
  & > *:not(:first-child) {
    margin-top: 12px;
  }
`;
