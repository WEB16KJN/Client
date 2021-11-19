import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SideNav from '../../component/question/SideNav';

export default function Question() {
  return (
    <StyledWrapper>
      <SideNav />
      <Outlet />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
`;
