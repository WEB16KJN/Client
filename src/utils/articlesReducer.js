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

    case POST_LIKE:
      return (() => {
        const articles = state.articles.map((article) => {
          const temp = { ...article };
          if (temp.id === action.id) temp.like = !temp.like;
          return temp;
        });
        return {
          ...state,
          articles,
        };
      })();

    default:
      return state;
  }
};
