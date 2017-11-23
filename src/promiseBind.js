const _curry2 = require('./internal/_curry2');

const promiseBind = _curry2((f, promise) => {
  return promise.then((onFulfilled, onRejected) => {
    if (onFulfilled === undefined) {
      return Promise.reject(onRejected);
    } else {
      return Promise.resolve(f(onFulfilled));
    }
  });
});

module.exports = promiseBind;
