const _clone = require('./internal/_clone');

const toString = xs => {
  return _clone(xs).toString();
};

module.exports = toString;
