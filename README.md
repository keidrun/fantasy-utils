# fantasy-utils [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Small utils for Functional Programming.

## Description

This provides small utilities to complement the lack of a functional library
like [ramda](https://github.com/ramda/ramda "ramda") or
[lodash](https://github.com/lodash/lodash "lodash"). It includes both pure and
impure functions and fullfills an easy point-free style programming. Of course,
all utilities are curried.

An example is below.

```javascript
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
```

Other examples is below.

```javascript
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
```

## Implementations

### Pure functions

* promiseOf :: Any -> Promise Any
* promiseBind :: (Function, Promise Any) -> Promise Any
* promiseMap :: (Function, Promise Array) -> Promise Array
* promiseFind :: (Function, Promise Array) -> Promise Any
* promiseFilter :: (Function, Promise Array) -> Promise Array
* promiseReduce :: (Function, Any, Promise Array) -> Promise Any
* promiseConcat :: (Array, Promise Array) -> Promise Array
* promiseSlice :: (Integer, Integer, Promise Array) -> Promise Array
* promiseSplice :: (Integer, Promise Array) -> Promise Array

### Impure functions

* trace :: (String, Any) -> Any

[npm-url]: https://npmjs.org/package/fantasy-utils
[npm-image]: https://badge.fury.io/js/fantasy-utils.svg
[travis-url]: http://travis-ci.org/keidrun/fantasy-utils
[travis-image]: https://secure.travis-ci.org/keidrun/fantasy-utils.svg?branch=master
[depstat-url]: https://david-dm.org/keidrun/fantasy-utils
[depstat-image]: https://david-dm.org/keidrun/fantasy-utils.svg
