const _isNumber = require('./internal/_isNumber');
const _nothingFilter = require('./internal/_nothingFilter');

const numberToString = num => {
  if (!_isNumber(num)) {
    throw new TypeError('invalid arguments');
  }
  return _nothingFilter(num.toString(10));
};

module.exports = numberToString;
