import API_URL from './common/constants';
import requestHandler from './common/request';

export const getQuestions = async (startDate, endDate) => {
  const response = await requestHandler.get(
    API_URL.GET.QUESTION_SEARCH({ query: { start: startDate, end: endDate } }),
  );
  const { status, json } = response;

  if (status === 200) return json.data;
  throw response.json.message;
};

// export const postQuestion = ...
