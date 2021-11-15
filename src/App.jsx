import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/common/Footer';
import Header from './component/common/Header';
import Main from './pages/Main';
import CreateQuestion from './pages/question/CreateQuestion';
import Question from './pages/question/Question';
import SearchQuestion from './pages/question/SearchQuestion';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="main" element={<Main />} />
        <Route path="question/*" element={<Question />}>
          <Route path="create" element={<CreateQuestion />} />
          <Route path="search" element={<SearchQuestion />} />
          <Route path="" element={<SearchQuestion />} />
        </Route>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
