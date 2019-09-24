const request = require('request');

const defaultOptions = {
  headers: {
    'User-Agent': 'request',
  },
};

const getHtml = url => {
  const options = { ...defaultOptions, url };

  return new Promise(res => {
    request(options, (error, response, body) => {
      res(body);
    });
  });
};

module.exports = getHtml;
