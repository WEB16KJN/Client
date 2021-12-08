import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/color';
import PropTypes from 'prop-types';

export default function TelInput({ handleQuestionTelInput, inputType, placeholder }) {
  const [telValue, setTelValue] = useState('');
  const handleChange = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setTelValue(e.target.value);
    }
  };

  useEffect(() => {
    if (telValue.length === 10) {
      setTelValue(telValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
      handleQuestionTelInput(telValue);
    }
    if (telValue.length === 13) {
      setTelValue(telValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
      handleQuestionTelInput(telValue);
    }
  }, [telValue]);

  return (
    <StyledTelInput
      type={inputType}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      value={telValue}
      maxLength="13"
    />
  );
}

TelInput.propTypes = {
  handleQuestionTelInput: PropTypes.func,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
};

const StyledTelInput = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid ${colors.gray4};
  box-sizing: border-box;
  padding: 14px 16px;
`;
