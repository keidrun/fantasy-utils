const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isArray = require('./internal/_isArray');
const find = require('./find');

const promiseFind = _curry2((callback, promise) => {
  return promise
    .then(xs => {
      return find(callback, xs);
    })
    .catch(error => {
      return error;
    });
});

module.exports = promiseFind;
