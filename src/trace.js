const _curry2 = require('./internal/_curry2');

const trace = _curry2((msg, x) => {
  console.log(msg, x);
  return x;
});

module.exports = trace;
