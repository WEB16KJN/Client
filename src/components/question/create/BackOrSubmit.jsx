import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../styles/color';
import PropTypes from 'prop-types';
import BackOrSubmitLayout from './BackOrSubmit.layout';

export default function BackOrSubmit({ questionInfo }) {
  return (
    <BackOrSubmitLayout>
      <StyledButton index={0}>이전</StyledButton>
      <StyledButton index={1} onClick={() => console.log(questionInfo)}>
        문의하기
      </StyledButton>
    </BackOrSubmitLayout>
  );
}

BackOrSubmit.propTypes = {
  questionInfo: PropTypes.object,
};

const StyledButton = styled.button`
  width: 240px;
  height: 60px;
  font-size: 15px;
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
