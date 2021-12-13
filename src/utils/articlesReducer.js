const UPDATE_ARTICLES = 'UPDATE_ARTICLES';
const POST_LIKE = 'POST_LIKE';

export const articlesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ARTICLES:
      return {
        ...state,
        articles: action.result.data,
        resultCount: action.result.resultCount,
      };

    case POST_LIKE: {
      const articles = state.articles.map((article) => {
        if (article.id !== action.id) return { ...article };
        return { ...article, like: !article.like };
      });
      return {
        ...state,
        articles,
      };
    }
    default:
      return state;
  }
};
