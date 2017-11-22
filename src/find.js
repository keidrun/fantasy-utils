const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isArray = require('./internal/_isArray');
const _nothingFilter = require('./internal/_nothingFilter');

const find = _curry2((callback, xs) => {
  if (!(_isFunction(callback) && _isArray(xs))) {
    throw new TypeError('invalid arguments');
  }
  return _nothingFilter(_clone(xs).find(callback));
});

module.exports = find;
