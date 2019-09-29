const { sources } = require('./sources');
const getData = require('./getData');
const logger = require('./logger');

const grab = async () => {
  logger.info('price grabber starts to work');
  const requests = sources.map(source => {
    return getData(source);
  });

  const result = await Promise.all(requests);

  logger.info('price grabber finished work');
  return result;
};

module.exports = grab;
