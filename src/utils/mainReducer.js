export const SEARCH_PAPER = 'SEARCH_PAPER';
export const UPDATE_SEARCH_OPTIONS = 'UPDATE_SEARCH_OPTIONS';
export const ADD_INPUT_SELF = 'ADD_INPUT_SELF';

export const initialOptions = {
  keyword: '',
  category: [],
  weight: [],
  inputSelf: '',
};

export const mainReducer = (state = initialOptions, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_OPTIONS:
      return (() => {
        const { api, selected } = action.option;
        if (!api) return state;
        if (state[api].includes(selected)) {
          const newOptions = state[api].filter((option) => option !== selected);
          return {
            ...state,
            [api]: newOptions,
          };
        } else {
          const newOptions = state[api].concat(selected.replaceAll(' ', ''));
          return {
            ...state,
            [api]: newOptions,
          };
        }
      })();
    case ADD_INPUT_SELF:
      return {
        ...state,
        inputSelf: action.option,
      };

    case SEARCH_PAPER:
      return state;
    default:
      return state;
  }
};
