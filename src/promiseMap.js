const _curry2 = require('./internal/_curry2');
const promiseBind = require('./promiseBind');
const map = require('./map');

const promiseMap = _curry2((callback, promise) => {
  return promiseBind(map(callback), promise);
});

module.exports = promiseMap;
