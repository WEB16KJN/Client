export const SEARCH_PAPER = 'SEARCH_PAPER';
export const UPDATE_SEARCH_OPTIONS = 'UPDATE_SEARCH_OPTIONS';

export const initialState = {
  keyword: null,
  category: [],
  weight: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_OPTIONS:
      return (() => {
        const { api, selected } = action.option;
        if (state[api].includes(selected)) {
          const newOptions = state[api].filter((option) => option !== selected);
          return {
            ...state,
            [api]: newOptions,
          };
        } else {
          const newOptions = state[api].concat(selected);
          return {
            ...state,
            [api]: newOptions,
          };
        }
      })();

    case SEARCH_PAPER:
      return state;
    default:
      return state;
  }
};
