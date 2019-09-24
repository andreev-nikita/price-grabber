const defaultParser = source => {
  const test = /[^\d]/g;
  const result = source.replace(test, '');
  return result;
};

module.exports = {
  default: defaultParser,
};
