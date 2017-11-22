const R = require('ramda');
const F = require('fantasy-utils');

const dashrize = R.compose(
  R.join('-'),
  R.map(R.toLower),
  F.trace('debug:'), // print middle data for debugging
  R.split(' '),
  R.replace(/\s{2,}/gi, '')
);

console.log('result:', dashrize('Do you know our world is small?'));
//=> debug: [ 'Do', 'you', 'know', 'our', 'world', 'is', 'small?' ]
//=> result: do-you-know-our-world-is-small?
