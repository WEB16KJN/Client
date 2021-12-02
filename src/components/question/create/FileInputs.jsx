import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FileInput from './FileInput';

export default function FileInputs() {
  const ADD = '추가 +';
  const DELETE = '- 삭제';
  const [fileInputInfo, setFileInputInfo] = useState([{ id: Date.now() }]);
  const [fileInputs, setFileInputs] = useState([]);

  const addFileInput = (e) => {
    e.target.innerText = DELETE;
    setFileInputInfo((fileInputInfo) => [...fileInputInfo, { id: Date.now() }]);
  };

  const deleteFileInput = (id) => {
    setFileInputInfo((fileInputInfo) => fileInputInfo.filter((info) => info.id !== id));
    console.log('delete');
    console.log('id', id);
  };

  const handleFileInputAction = (e, id) => {
    if (e.target.innerText === ADD) addFileInput(e);
    else if (e.target.innerText === DELETE) deleteFileInput(id);
  };

  useEffect(() => {
    setFileInputs(
      fileInputInfo.map((input) => (
        <FileInput key={input.id} id={input.id} handleFileInputAction={handleFileInputAction} />
      )),
    );
  }, []);
  useEffect(() => {
    setFileInputs(
      fileInputInfo.map((input) => (
        <FileInput key={input.id} id={input.id} handleFileInputAction={handleFileInputAction} />
      )),
    );
    console.log('fileInputInfo', fileInputInfo);
  }, [fileInputInfo]);
  return <StyledFileInputs>{fileInputs}</StyledFileInputs>;
}

const StyledFileInputs = styled.div`
  & > *:not(:first-child) {
    margin-top: 12px;
  }
`;
