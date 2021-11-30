import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/color';

function ErrorComponent({ type }) {
  return (
    <StyledError>
      {type === 'request' ? '서버 요청에 실패했습니다. 다시 시도해주세요' : '다시 시도해주세요'}
    </StyledError>
  );
}

ErrorComponent.propTypes = {
  type: PropTypes.oneOf(['request']),
};

const StyledError = styled.div`
  color: ${colors.red};
`;

export default ErrorComponent;
