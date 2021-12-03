import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/color';
import PropTypes from 'prop-types';

export default function CreateInput({ value, handleQuestionInput, type, placeholder }) {
  return (
    <StyledCreateInput
      type={type}
      onChange={(e) => handleQuestionInput(e, value)}
      placeholder={placeholder}
    />
  );
}

CreateInput.propTypes = {
  value: PropTypes.string,
  handleQuestionInput: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

const StyledCreateInput = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid ${colors.gray4};
  box-sizing: border-box;
  padding: 14px 16px;
`;
