const _curry2 = require('./internal/_curry2');
const _isString = require('./internal/_isString');

const trace = _curry2((msg, x) => {
  if (!_isString(msg)) {
    throw new TypeError('invalid arguments');
  }
  // eslint-disable-next-line no-console
  console.log(msg, x);
  return x;
});

module.exports = trace;
