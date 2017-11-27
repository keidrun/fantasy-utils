const _curry2 = require('./internal/_curry2');
const promiseBind = require('./promiseBind');
const find = require('./find');

const promiseFind = _curry2((callback, promise) => {
  return promiseBind(find(callback), promise);
});

module.exports = promiseFind;
