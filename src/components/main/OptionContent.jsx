import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';
import { colors } from '../../styles/color';
import InputSelf from './InputSelf';
export default function OptionContent({ content }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(content);
  }, []);

  const handleClick = (e) => {
    e.target.style.background = 'white';
    e.target.style.color = 'black';
  };

  const renderOptionCard = () => {
    return options.contents?.map((option, i) => {
      if (content.title === '색상별') {
        return <StyledOptionCard key={i} color={option} />;
      }
      return (
        <StyledOptionCard key={i} onClick={handleClick}>
          {option}
        </StyledOptionCard>
      );
    });
  };

  return (
    <StyledOptionContent>
      <StyledTitle>
        <li>
          <span>{options.title}</span>
        </li>
      </StyledTitle>
      <StyledOptionsWrapper title={options.title}>{renderOptionCard()}</StyledOptionsWrapper>
      {content.title === '평량별' && <InputSelf />}
    </StyledOptionContent>
  );
}
OptionContent.propTypes = {
  content: Proptypes.object.isRequired,
};
const StyledOptionContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 33px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    width: 95%;
    justify-content: flex-start;
  }
`;
const StyledTitle = styled.ul`
  height: 20px;
  list-style: inside;
  padding-left: 5px;

  li {
    width: 100px;
  }
  li > span {
    position: relative;
    left: -6px;
  }
  @media (max-width: 500px) {
    margin-bottom: 16px;
    padding-left: 5px;
  }
`;
const StyledOptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;

  @media (max-width: 768px) {
    width: ${({ title }) => {
      return title === '색상별' ? '400px' : null;
    }};
    flex-grow: 0;
    margin-right: auto;
  }
`;
const StyledOptionCard = styled.div`
  width: 110px;
  height: 47px;
  margin-left: 4px;
  margin-bottom: 8px;
  background: ${colors.gray9};
  font-family: NanumSquareOTF;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray1};
  cursor: pointer;
  box-sizing: border-box;
  ${({ color }) => {
    if (color)
      return css`
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: ${color};
      `;
  }};
`;
