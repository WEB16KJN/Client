import API_URL from './common/constants';
import requestHandler from './common/request';

export const getUserProfile = async () => {
  const response = await requestHandler.get(API_URL.GET.USER_PROFILE);
  const { status, json } = response;

  if (status === 200) return json.data;
  throw response.json.message;
};

// export const getUserSchedule = ...
