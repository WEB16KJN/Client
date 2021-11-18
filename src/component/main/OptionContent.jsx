import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';
import axios from 'axios';
import { colors } from '../../styles/color';
export default function OptionContent({ title }) {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const getOptions = async () => {
      const { data } = await axios.get(`http://www.localhost:4000/${title}`);
      setOptions(data);
    };
    getOptions();
  }, []);

  const renderOptionCard = () => {
    return options.map((option, i) => {
      if (title === 'color') {
        return <StyledOptionCard key={i} color={option} />;
      }
      return <StyledOptionCard key={i}>{option}</StyledOptionCard>;
    });
  };
  return (
    <StyledOptionContent>
      <StyledTitle>
        <li>
          <span>{title}</span>
        </li>
      </StyledTitle>
      <StyledOptionsWrapper>{renderOptionCard()}</StyledOptionsWrapper>
    </StyledOptionContent>
  );
}
OptionContent.propTypes = {
  title: Proptypes.string.isRequired,
};
const StyledOptionContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 900px;
  margin-bottom: 33px;
`;
const StyledTitle = styled.ul`
  height: 20px;
  list-style: inside;

  li {
    width: 100px;
  }
  li > span {
    position: relative;
    left: -6px;
  }
`;
const StyledOptionsWrapper = styled.div`
  width: 908px;
  display: flex;
  flex-wrap: wrap;
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

  ${({ color }) => {
    if (color)
      return css`
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: ${color};
      `;
  }}
`;
