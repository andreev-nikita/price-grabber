const { JSDOM } = require('jsdom');
const getHtml = require('./getHtml');
const parsers = require('./parsers');

const getData = async ({ url, selectors, parser, name }) => {
  // select parser function
  const parseContent = parsers[parser.price];

  // make request
  const html = await getHtml(url);

  // parse DOM
  const dom = new JSDOM(html);
  const { document } = dom.window;

  // get price
  const price = parseContent(document.querySelector(selectors.price).innerHTML);

  // get Date
  const now = new Date();
  const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;

  return { name, price, date };
};

module.exports = getData;
