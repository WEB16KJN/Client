import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import OptionContent from './OptionContent';
import mockOptions from '../../data/main/options.json';
import { Context } from '../../pages/Main';
import { getPapers } from '../../api/paper';
import createQuery from '../../utils/createQuery';
function OptionContents() {
  const { group, use, certification, baseWeight, color } = mockOptions;
  const { stateOptions, articlesDispatch } = useContext(Context);

  const searchPaper = async () => {
    const query = createQuery(stateOptions);
    const result = await getPapers(query);

    articlesDispatch({ type: 'UPDATE_ARTICLES', result });
  };

  return (
    <StyledOptionContents>
      <OptionContent content={group} />
      <OptionContent content={use} />
      <OptionContent content={certification} />
      <OptionContent content={baseWeight} />
      <OptionContent content={color} />
      <StyledSearchButton onClick={searchPaper}>Search Paper</StyledSearchButton>
    </StyledOptionContents>
  );
}
const StyledOptionContents = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledSearchButton = styled.div`
  width: 276px;
  height: 57px;
  border: 2px solid ${colors.white};
  box-sizing: border-box;
  font-family: NanumSquareOTF;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 57px;
  text-align: center;
  letter-spacing: -0.05em;
  color: ${colors.white};
  margin-top: 19px;
  cursor: pointer;
`;
export default OptionContents;
