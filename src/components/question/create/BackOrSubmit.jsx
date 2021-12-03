import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/color';
import PropTypes from 'prop-types';
import BackOrSubmitLayout from './BackOrSubmit.layout';
import { postQuestion } from '../../../api/question';
import { Link, useNavigate } from 'react-router-dom';

export default function BackOrSubmit({ questionInfo }) {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      await postQuestion(questionInfo);
      navigate('/question');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BackOrSubmitLayout>
      <StyledBackButton to="/question">이전</StyledBackButton>
      <StyledSubmitButton onClick={handleSubmit}>문의하기</StyledSubmitButton>
    </BackOrSubmitLayout>
  );
}

BackOrSubmit.propTypes = {
  questionInfo: PropTypes.object,
};

const StyledBackButton = styled(Link)`
  width: 240px;
  height: 60px;
  line-height: 60px;
  font-size: 15px;
  display: block;
  border: 2px solid ${colors.black};
  box-sizing: border-box;
  text-align: center;
  background-color: ${colors.white};
  color: ${colors.black};
  margin-right: 6px;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const StyledSubmitButton = styled.button`
  width: 240px;
  height: 60px;
  font-size: 15px;
  display: block;
  border: 2px solid ${colors.black};
  box-sizing: border-box;
  text-align: center;
  background-color: ${colors.black};
  color: ${colors.white};
  margin-right: 6px;
  cursor: pointer;
`;
