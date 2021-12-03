import React from 'react';
import OptionContents from './OptionContents';
import SearchBox from './SearchBox';
// import styled from 'styled-components';
// import { colors } from '../../styles/color';
import OptionLayout from './Option.Layout';
function Option() {
  return (
    <OptionLayout>
      <SearchBox />
      <OptionContents />
    </OptionLayout>
  );
}

export default Option;
