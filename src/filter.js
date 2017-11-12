const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isArray = require('./internal/_isArray');
const _nothingFilter = require('./internal/_nothingFilter');

const filter = _curry2((callback, xs) => {
  return _isFunction(callback) && _isArray(xs)
    ? _nothingFilter(_clone(xs).filter(callback))
    : null;
});

module.exports = filter;
