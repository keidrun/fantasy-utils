const _isNumber = require('./internal/_isNumber');

const numberToString = num => {
  return _isNumber(num) ? num.toString(10) : null;
};

module.exports = numberToString;
