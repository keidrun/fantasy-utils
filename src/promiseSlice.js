const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isInteger = require('./internal/_isInteger');
const _isArray = require('./internal/_isInteger');
const promiseBind = require('./promiseBind');
const slice = require('./slice');

const promiseSlice = _curry3((begin, end, promise) => {
  return promiseBind(slice(begin, end), promise);
});

module.exports = promiseSlice;
