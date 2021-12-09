import API_URL from './common/constants';
import requestHandler from './common/request';

export const getPapers = async (options) => {
  const url = API_URL.GET.PAPER_SEARCH({ query: options });

  const { json, status } = await requestHandler.get(url);

  if (status === 200) return json.data;
  throw json.message;
};

// export const postPaperLike = ...
