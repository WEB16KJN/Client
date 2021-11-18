import React from 'react';
import CreateInput from './CreateInput';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../../styles/color';

export default function FileInput({ addOrDelete }) {
  return (
    <StyledFileInput>
      <CreateInput />
      <StyledButton index={0}>찾아보기</StyledButton>
      <StyledButton index={1}>{addOrDelete}</StyledButton>
    </StyledFileInput>
  );
}

FileInput.propTypes = {
  addOrDelete: PropTypes.string,
};

const StyledFileInput = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  width: 159px;
  height: 45px;
  font-size: 13px;
  border-color: ${colors.black};
  ${(props) =>
    props.index === 0 &&
    css`
      background-color: ${colors.black};
      color: ${colors.white};
    `}
  ${(props) =>
    props.index === 1 &&
    css`
      background-color: ${colors.white};
      color: ${colors.black};
    `}
`;
