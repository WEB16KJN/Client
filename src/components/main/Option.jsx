import React from 'react';
import OptionContents from './OptionContents';
import SearchBox from './SearchBox';
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
