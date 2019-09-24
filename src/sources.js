const fs = require('fs');
const path = require('path');
const config = require('../config/main.json');
const logger = require('./logger');

logger.info('reading sources...');
const sources = fs.readFileSync(
  path.resolve(__dirname, config.sources),
  'utf-8',
);
logger.info('sources were successfully readed');

logger.info('parsing sources...');
const json = JSON.parse(sources);
logger.info('succesfully parsed');

module.exports = json;
