const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isFunction = require('./internal/_isFunction');
const _isArray = require('./internal/_isArray');
const reduce = require('./reduce');

const promiseReduce = _curry3((callback, initValue, promise) => {
  return promise
    .then(xs => {
      return reduce(callback, initValue, xs);
    })
    .catch(error => {
      return error;
    });
});

module.exports = promiseReduce;
