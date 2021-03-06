import API_URL from './common/constants';
import requestHandler from './common/request';

export const getPapers = async (options) => {
  const url = API_URL.GET.PAPER_SEARCH({ query: options });
  const { json } = await requestHandler.get(url);

  return {
    data: json.data,
    resultCount: json.status === 200 ? json.data.length : json.message,
  };
};

export const postPaperLike = async (id) => {
  const url = API_URL.POST.PAPER_LIKE({ id });
  const { json } = await requestHandler.post(url, { id });

  return json.success;
};
