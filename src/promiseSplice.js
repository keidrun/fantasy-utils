const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isInteger = require('./internal/_isInteger');
const _isArray = require('./internal/_isArray');
const promiseBind = require('./promiseBind');
const splice = require('./splice');

const promiseSplice = _curry3((index, deleteCount, promise) => {
  return promiseBind(splice(index, deleteCount), promise);
});

module.exports = promiseSplice;
