const _clone = require('./internal/_clone');
const _isArray = require('./internal/_isArray');

const toString = xs => {
  return _isArray(xs) ? _clone(xs).toString() : null;
};

module.exports = toString;
