import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../../styles/color';

export default function FormCell({ label, children }) {
  return (
    <StyledFormCell>
      <StyledLabel>{label}</StyledLabel>
      <StyledChildren>{children}</StyledChildren>
    </StyledFormCell>
  );
}

FormCell.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

const StyledFormCell = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.span`
  width: 130px;
  color: ${colors.gray6};
`;

const StyledChildren = styled.div`
  width: calc(100% - 130px);
`;
