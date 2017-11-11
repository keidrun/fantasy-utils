const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isArray = require('./internal/_isArray');

const map = _curry2((callback, xs) => {
  return _isFunction(callback) && _isArray(xs)
    ? _clone(xs).map(callback)
    : null;
});

module.exports = map;
