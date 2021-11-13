import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/common/Footer';
import Header from './component/common/Header';
import Main from './pages/Main';
import CreateQuestion from './pages/question/CreateQuestion';
import Question from './pages/question/Question';
import SearchQuestion from './pages/question/SearchQuestion';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="main" element={<Main />} />
          <Route path="question/*" element={<Question />}>
            <Route path="create" element={<CreateQuestion />} />
            <Route path="search" element={<SearchQuestion />} />
            <Route path="" element={<SearchQuestion />} />
          </Route>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
