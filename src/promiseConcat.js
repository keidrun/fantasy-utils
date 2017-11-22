const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');
const _isArray = require('./internal/_isArray');
const concat = require('./concat');

const promiseConcat = _curry2((ys, promise) => {
  return promise
    .then(xs => {
      return concat(ys, xs);
    })
    .catch(error => {
      return error;
    });
});

module.exports = promiseConcat;
