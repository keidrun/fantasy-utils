const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isArray = require('./internal/_isArray');
const promiseBind = require('./promiseBind');
const find = require('./find');

const promiseFind = _curry2((callback, promise) => {
  return promiseBind(find(callback), promise);
});

module.exports = promiseFind;
