const _curry2 = require('./internal/_curry2');
const promiseBind = require('./promiseBind');
const concat = require('./concat');

const promiseConcat = _curry2((ys, promise) => {
  return promiseBind(concat(ys), promise);
});

module.exports = promiseConcat;
