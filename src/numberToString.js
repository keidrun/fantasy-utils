const _isNumber = require('./internal/_isNumber');
const _nothingFilter = require('./internal/_nothingFilter');

const numberToString = num => {
  return _isNumber(num) ? _nothingFilter(num.toString(10)) : null;
};

module.exports = numberToString;
