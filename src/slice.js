const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isInteger = require('./internal/_isInteger');
const _isArray = require('./internal/_isInteger');

const slice = _curry3((begin, end, xs) => {
  return _isInteger() && _isInteger() && _isArray(xs)
    ? _clone(xs).slice(begin, end)
    : null;
});

module.exports = slice;
