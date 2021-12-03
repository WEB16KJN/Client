import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TableCellLayout from './TableCell.layout';

export default function TableCell({ label, children }) {
  return (
    <TableCellLayout>
      <StyledLabel>{label}</StyledLabel>
      <StyledChildren>{children}</StyledChildren>
    </TableCellLayout>
  );
}

TableCell.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

const StyledLabel = styled.span``;

const StyledChildren = styled.div`
  width: 100%;
`;
