import { createQueryString } from '../../utils/stringHandler';

const BASE_API_URL = 'https://asia-northeast3-doosungpaper-1bf1e.cloudfunctions.net/api';

const API_URL = {
  GET: {
    USER_PROFILE: BASE_API_URL + '/inquiry/profile',
    USER_SCHEDULE: BASE_API_URL + '/inquiry/schedule',
    // query: {keyword:'aaa', category:['코티드', '언코티드']} => ?keyword=aaa&category=코티드,언코티드
    PAPER_SEARCH: ({ query }) => BASE_API_URL + `/search?${createQueryString(query)}`,
    QUESTION_SEARCH: ({ query }) => BASE_API_URL + `/inquiry/list?${createQueryString(query)}`,
  },
  POST: {
    // id: 2 => /search/2/like
    PAPER_LIKE: ({ id }) => BASE_API_URL + `/search/${id}/like`,
    QUESTION_CREATE: BASE_API_URL + '/inquiry/create',
  },
};

export default API_URL;
