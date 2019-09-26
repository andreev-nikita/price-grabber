const { sources } = require('./sources');
const getData = require('./getData');

const grab = async () => {
  const requests = sources.map(source => {
    return getData(source);
  });

  const result = await Promise.all(requests);

  return result;
};

module.exports = grab;
