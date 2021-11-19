import React from 'react';
import CreateInput from './CreateInput';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../styles/color';

export default function FileInput({ addOrDelete }) {
  return (
    <StyledFileInput>
      <CreateInput />
      <StyledBlackButton>찾아보기</StyledBlackButton>
      <StyledWhiteButton>{addOrDelete}</StyledWhiteButton>
    </StyledFileInput>
  );
}

FileInput.propTypes = {
  addOrDelete: PropTypes.string,
};

const StyledFileInput = styled.div`
  display: flex;
`;

const StyledBlackButton = styled.button`
  width: 159px;
  height: 45px;
  font-size: 13px;
  border-color: ${colors.black};
  background-color: ${colors.black};
  color: ${colors.white};
  margin-left: 6px;
`;

const StyledWhiteButton = styled.button`
  width: 159px;
  height: 45px;
  font-size: 13px;
  border-color: ${colors.black};
  background-color: ${colors.white};
  color: ${colors.black};
  margin-left: 6px;
`;
