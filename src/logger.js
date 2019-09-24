const { createLogger, format, transports } = require('winston');
const path = require('path');
const config = require('../config/main.json');

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.File({
      filename: path.resolve(__dirname, config.log),
      handleExceptions: true,
    }),
  ],
  exitOnError: false,
});

module.exports = logger;
