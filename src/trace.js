const _curry2 = require('./internal/_curry2');
const _isString = require('./internal/_isString');

const trace = _curry2((msg, x) => {
  if (_isString(msg)) {
    console.log(msg, x);
    return x;
  } else {
    return null;
  }
});

module.exports = trace;
