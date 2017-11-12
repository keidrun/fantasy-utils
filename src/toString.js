const _clone = require('./internal/_clone');
const _isArray = require('./internal/_isArray');
const _nothingFilter = require('./internal/_nothingFilter');

const toString = xs => {
  return _isArray(xs) ? _nothingFilter(_clone(xs).toString()) : null;
};

module.exports = toString;
