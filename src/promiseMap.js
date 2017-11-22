const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isArray = require('./internal/_isArray');
const promiseBind = require('./promiseBind');
const map = require('./map');

const promiseMap = _curry2((callback, promise) => {
  return promiseBind(map(callback), promise);
});

module.exports = promiseMap;
