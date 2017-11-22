const _curry2 = require('./internal/_curry2');

const promiseBind = _curry2((callback, promise) => {
  return promise
    .then(any => {
      return callback(any);
    })
    .catch(error => {
      return error;
    });
});

module.exports = promiseBind;
