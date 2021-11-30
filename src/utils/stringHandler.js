const createQueryString = (query) =>
  Object.keys(query)
    .map((key) => `${key}=${concatWord(query[key])}`)
    .join('&');

const concatWord = (words) => (Array.isArray(words) ? words.join(',') : words);

export { createQueryString, concatWord };
