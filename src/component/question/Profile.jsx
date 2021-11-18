import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/color';
import { IcUser } from '../common/Icon';

export default function Profile() {
  return (
    <StyledProfile>
      <IcUser width="44px" height="37px" style="border-color" />
    </StyledProfile>
  );
}

const StyledProfile = styled.div`
  padding: 36px 0 46px 0;
  border-top: 1px solid ${colors.gray2};
  border-bottom: 1px solid ${colors.gray2};
`;
