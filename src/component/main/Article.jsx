import React from 'react';
import ArticleContents from './ArticleContents';
import ArticleNav from './ArticleNav';

function Article() {
  return (
    <div>
      <ArticleNav />
      <ArticleContents />
      <ArticleContents />
    </div>
  );
}

export default Article;
