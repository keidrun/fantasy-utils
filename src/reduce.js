const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isArray = require('./internal/_isArray');
const _nothingFilter = require('./internal/_nothingFilter');

const reduce = _curry3((callback, initValue, xs) => {
  return _isFunction(callback) && initValue != null && _isArray(xs)
    ? _nothingFilter(_clone(xs).reduce(callback, initValue))
    : null;
});

module.exports = reduce;
