# fantasy-utils [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]
Small utils for Functional Programming.

## Description

This provides small utilities to complement the lack of a functional library like  [ramda](https://github.com/ramda/ramda "ramda") or  [lodash](https://github.com/lodash/lodash "lodash"). It includes both pure and impure functions and fullfill a easy point-free style programming. Of cource, all utilities are curried.

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
```

## Implementations

### Pure functions

- map
- find
- filter
- reduce
- concat
- slice
- splice
- toString
- numberToString

### Impure functions

- trace

[npm-url]: https://npmjs.org/package/fantasy-utils
[npm-image]: https://badge.fury.io/js/fantasy-utils.svg

[travis-url]: http://travis-ci.org/keidrun/fantasy-utils
[travis-image]: https://secure.travis-ci.org/keidrun/fantasy-utils.svg?branch=master

[depstat-url]: https://david-dm.org/keidrun/fantasy-utils
[depstat-image]: https://david-dm.org/keidrun/fantasy-utils.svg
