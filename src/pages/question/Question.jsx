import React from 'react';
import { Outlet } from 'react-router-dom';
import Title from '../../component/question/Title';

export default function Question() {
  return (
    <>
      <Title />
      <Outlet />
    </>
  );
}
