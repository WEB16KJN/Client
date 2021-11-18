import React from 'react';
import DateSelector from '../../component/question/search/DateSelector';
import QuestionTable from '../../component/question/search/QuestionTable';

export default function SearchQuestion() {
  return (
    <div>
      <DateSelector />
      <QuestionTable />
    </div>
  );
}
