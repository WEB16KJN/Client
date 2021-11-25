import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/color';
import PropTypes from 'prop-types';

export default function CreateInput({ value, handleQuestionInput, type }) {
  return <StyledCreateInput type={type} onChange={(e) => handleQuestionInput(e, value)} />;
}

CreateInput.propTypes = {
  value: PropTypes.string,
  handleQuestionInput: PropTypes.func,
  type: PropTypes.string,
};

const StyledCreateInput = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid ${colors.gray4};
`;