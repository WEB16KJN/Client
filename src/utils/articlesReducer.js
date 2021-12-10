export const UPDATE_ARTICLES = 'UPDATE_ARTICLES';

export const articlesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ARTICLES:
      return {
        ...state,
        articles: action.result.data,
        resultCount: action.result.resultCount,
      };

    default:
      return state;
  }
};
