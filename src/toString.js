const _clone = require('./internal/_clone');
const _isArray = require('./internal/_isArray');
const _nothingFilter = require('./internal/_nothingFilter');

const toString = xs => {
  if (!_isArray(xs)) {
    throw new TypeError('invalid arguments');
  }
  return _nothingFilter(_clone(xs).toString());
};

module.exports = toString;
