const fs = require('fs');
const path = require('path');
const config = require('../config/main.json');

const sources = fs.readFileSync(
  path.resolve(__dirname, config.sources),
  'utf-8',
);

const json = JSON.parse(sources);

module.exports = json;
