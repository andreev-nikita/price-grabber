const request = require('request-promise-native');
const { requestOptions, attemptsCount } = require('../config/main.json');
const logger = require('./logger');

const getHtml = async (url, id) => {
  const options = { ...requestOptions, url };
  let counter = 0;
  let makeAttempt = true;

  let result;

  while (makeAttempt) {
    makeAttempt = false;

    try {
      result = await request(options); // eslint-disable-line no-await-in-loop
    } catch (err) {
      const { cause } = err;

      if (cause) {
        if (cause.code === 'ETIMEDOUT' || cause.code === 'ESOCKETTIMEDOUT') {
          logger.error(
            `id ${id}: request ${
              cause.connect ? 'connection' : 'read'
            } timeout`,
          );
        }
      } else {
        logger.error(`id ${id}: request error: ${err.statusCode}`);
      }

      counter += 1;
      if (counter < attemptsCount) {
        makeAttempt = true;
      }
    }
  }

  if (typeof result === 'object' && result.body) {
    return result.body;
  }

  return result;
};

module.exports = getHtml;
