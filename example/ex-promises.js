const R = require('ramda');
const F = require('fantasy-utils');

// Promise way
const promiseDashrize = R.compose(
  F.promiseBind(R.join('-')),
  F.promiseBind(R.map(R.toLower)),
  F.promiseBind(R.split(' ')),
  F.promiseBind(R.replace(/\s{2,}/gi, ''))
);
promiseDashrize(F.promiseOf('Do you know our limit is sky?'))
  .then(console.log)
  .catch(console.error);
//=> do-you-know-our-limit-is-sky?

// Promise point-free style
const calc = R.compose(
  F.promiseReduce((x, y) => x + y, 0),
  F.promiseMap(x => x * 3),
  F.promiseFilter(x => x % 2 === 0)
);
calc(F.promiseOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  .then(console.log)
  .catch(console.error);
//=> 90
