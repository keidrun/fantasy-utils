const R = require('ramda');
const F = require('fantasy-utils');

// Promise way
const calc = R.compose(
  F.promiseReduce((x, y) => x + y, 0),
  F.promiseMap(x => x * 3),
  F.promiseFilter(x => x % 2 === 0)
);

calc(promiseOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  .then(console.log)
  .catch(console.error);
