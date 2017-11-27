const _curry3 = require('./internal/_curry3');
const promiseBind = require('./promiseBind');
const reduce = require('./reduce');

const promiseReduce = _curry3((callback, initValue, promise) => {
  return promiseBind(reduce(callback, initValue), promise);
});

module.exports = promiseReduce;
