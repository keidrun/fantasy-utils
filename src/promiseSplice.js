const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');
const _isInteger = require('./internal/_isInteger');
const _isArray = require('./internal/_isArray');
const splice = require('./splice');

const promiseSplice = _curry3((index, deleteCount, promise) => {
  return promise
    .then(xs => {
      return splice(index, deleteCount, xs);
    })
    .catch(error => {
      return error;
    });
});

module.exports = promiseSplice;
