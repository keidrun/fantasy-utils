const _curry2 = require('./internal/_curry2');
const promiseBind = require('./promiseBind');
const filter = require('./filter');

const promiseFilter = _curry2((callback, promise) => {
  return promiseBind(filter(callback), promise);
});

module.exports = promiseFilter;
