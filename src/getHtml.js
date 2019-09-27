const request = require('request');

const defaultOptions = {
  headers: {
    'User-Agent': 'request',
  },
};

const getHtml = url => {
  const options = { ...defaultOptions, url };

  return new Promise(res => {
    try {
      request(options, (error, response, body) => {
        // console.log(error);
        res(body);
      });
    } catch (err) {
      // console.log(err);
    }
  });
};

module.exports = getHtml;
