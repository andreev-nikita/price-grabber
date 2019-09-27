const { JSDOM } = require('jsdom');
const getHtml = require('./getHtml');
const parsers = require('./parsers');
const logger = require('./logger');

const getData = async ({ url, selectors, parser, name, shop, id }) => {
  // select parser function
  const parseContent = parsers[parser.price];

  // make request
  const html = await getHtml(url);

  // parse DOM
  const dom = new JSDOM(html);
  const { document } = dom.window;

  // get price
  let price;

  try {
    logger.info(`id ${id}: trying to find the price tag...`);
    price = parseContent(document.querySelector(selectors.price).innerHTML);
    logger.info(`id ${id}: price tag was successfully founded`);
  } catch (err) {
    logger.error(`id ${id}: error ocured when finding the price tag...`);
    price = 'error';
  }

  // get Date
  const now = new Date();
  const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;

  return { date, id, shop, name, price };
};

module.exports = getData;
