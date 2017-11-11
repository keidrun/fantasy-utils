const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isNumber = require('./internal/_isNumber');
const _isArray = require('./internal/_isArray');

const reduce = _curry3((callback, accumulator, xs) => {
  return _isFunction(callback) && _isNumber(accumulator) && _isArray(xs)
    ? _clone(xs).reduce(callback, accumulator)
    : null;
});

module.exports = reduce;
