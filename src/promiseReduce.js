const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isArray = require('./internal/_isArray');
const promiseBind = require('./promiseBind');
const reduce = require('./reduce');

const promiseReduce = _curry3((callback, initValue, promise) => {
  return promiseBind(reduce(callback, initValue), promise);
});

module.exports = promiseReduce;
