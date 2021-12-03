import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../../styles/color';

export default function TableCell({ label, children }) {
  return (
    <StyledTableCell>
      <StyledLabel>{label}</StyledLabel>
      <StyledChildren>{children}</StyledChildren>
    </StyledTableCell>
  );
}

TableCell.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

const StyledTableCell = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.span`
  width: 130px;
  color: ${colors.gray6};
  flex-basis: 130px;
  flex-shrink: 0;
`;

const StyledChildren = styled.div`
  width: 100%;
`;
