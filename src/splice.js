const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isInteger = require('./internal/_isInteger');
const _isArray = require('./internal/_isArray');
const _nothingFilter = require('./internal/_nothingFilter');

const splice = _curry3((index, deleteCount, xs) => {
  if (!(_isInteger(index) && _isInteger(deleteCount) && _isArray(xs))) {
    throw new TypeError('invalid arguments');
  }
  return _nothingFilter(_clone(xs).splice(index, deleteCount));
});

module.exports = splice;
