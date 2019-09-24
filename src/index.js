const sources = require('./sources');
const getData = require('./getData');

getData(sources.data[0]).then(res => {
  console.log(res);
});
