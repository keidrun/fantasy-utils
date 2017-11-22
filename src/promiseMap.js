const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isArray = require('./internal/_isArray');
const map = require('./map');

const promiseMap = _curry2((callback, promise) => {
  return promise
    .then(xs => {
      return map(callback, xs);
    })
    .catch(error => {
      return error;
    });
});

module.exports = promiseMap;
