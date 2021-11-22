import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../styles/color';
import PropTypes from 'prop-types';

export default function BackOrSubmit({ questionInfo }) {
  return (
    <div>
      <StyledButton index={0}>이전</StyledButton>
      <StyledButton index={1} onClick={() => console.log(questionInfo)}>
        문의하기
      </StyledButton>
    </div>
  );
}

BackOrSubmit.propTypes = {
  questionInfo: PropTypes.object,
};

const StyledButton = styled.button`
  width: 159px;
  height: 45px;
  font-size: 13px;
  border-color: ${colors.black};
  ${(props) =>
    props.index === 0 &&
    css`
      background-color: ${colors.white};
      color: ${colors.black};
      margin-right: 6px;
    `}
  ${(props) =>
    props.index === 1 &&
    css`
      background-color: ${colors.black};
      color: ${colors.white};
    `}
`;
