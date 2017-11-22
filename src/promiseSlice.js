const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isInteger = require('./internal/_isInteger');
const _isArray = require('./internal/_isInteger');
const slice = require('./slice');

const promiseSlice = _curry3((begin, end, promise) => {
  return promise
    .then(xs => {
      return slice(begin, end, xs);
    })
    .catch(error => {
      return error;
    });
});

module.exports = promiseSlice;
