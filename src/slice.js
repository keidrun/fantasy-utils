const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isInteger = require('./internal/_isInteger');
const _isArray = require('./internal/_isInteger');
const _nothingFilter = require('./internal/_nothingFilter');

const slice = _curry3((begin, end, xs) => {
  if (!(_isInteger() && _isInteger() && _isArray(xs))) {
    throw new TypeError('invalid arguments');
  }
  return _nothingFilter(_clone(xs).slice(begin, end));
});

module.exports = slice;
