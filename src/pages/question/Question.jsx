import React from 'react';
import styled from 'styled-components';
import Title from '../../components/question/Title';
import SideNav from '../../components/question/SideNav';
import { Outlet } from 'react-router-dom';
import ProfileScheduleBar from '../../components/question/ProfileScheduleBar';
import QuestionTopLayout from '../../components/question/QuestionTopLayout.layout';
import QuestionBottomLayout from '../../components/question/QuestionBottom.layout';

export default function Question() {
  return (
    <StyledQuestion>
      <QuestionTopLayout>
        <ProfileScheduleBar />
      </QuestionTopLayout>
      <QuestionBottomLayout>
        <SideNav />
        <div>
          <Title />
          <Outlet />
        </div>
      </QuestionBottomLayout>
    </StyledQuestion>
  );
}

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
