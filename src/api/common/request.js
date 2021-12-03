const getFetcher = async (url) => {
  const response = await fetch(url);

  const json = await response.json();
  return { json, status: response.status };
};

const postFetcher = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(body),
  });

  const json = await response.json();
  return { json, status: response.status };
};

const requestHandler = {
  get: getFetcher,
  post: postFetcher,
};

export default requestHandler;
