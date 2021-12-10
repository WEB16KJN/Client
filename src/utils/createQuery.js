const createQuery = (state) => {
  const query = { ...state };
  query.weight.push(query.inputSelf);

  Object.keys(query).forEach((key) => {
    query[key].length <= 0 && delete query[key];
    key === 'inputSelf' && delete query[key];
  });

  return query;
};

export default createQuery;
