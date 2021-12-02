import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserProfile } from '../../api/user';
import { colors } from '../../styles/color';
import ErrorComponent from '../common/Error';
import { IcMember } from '../common/Icon';

export default function Profile() {
  useEffect(() => {
    (async () => {
      try {
        const userProfiles = await getUserProfile();
        const user = userProfiles[0];
        setUserName(user.name);
        setGetUserNameError(false);
      } catch (error) {
        setGetUserNameError(true);
        console.log(error);
      }
    })();
  }, []);
  const [userName, setUserName] = useState('');
  const [getUserNameError, setGetUserNameError] = useState(false);

  return (
    <StyledProfile>
      <IcMember />
      <StyledGreeting>
        <StyledHelloText>안녕하세요:)</StyledHelloText>
        <StyledNameText>{userName} 님,</StyledNameText>
        <div>두성종이를 즐겨주세요.</div>
        {getUserNameError && <ErrorComponent type="request" />}
      </StyledGreeting>
    </StyledProfile>
  );
}

const StyledProfile = styled.div`
  width: 420px;
  margin-right: 22px;
  margin-bottom: 92px;
  display: flex;
  align-items: center;
  padding: 36px 0 46px 0;
  border-top: 1px solid ${colors.gray2};
  border-bottom: 1px solid ${colors.gray2};
  & > *:first-child {
    margin-right: 32px;
  }
`;

const StyledGreeting = styled.div`
  font-size: 26px;
  font-weight: 700;
  & > *:first-child {
    font-weight: 300;
  }
  & > *:last-child {
    font-weight: 300;
  }
`;

const StyledHelloText = styled.div`
  margin-bottom: 11px;
`;

const StyledNameText = styled.div`
  margin-bottom: 7px;
`;
