const _curry3 = require('./internal/_curry3');
const promiseBind = require('./promiseBind');
const splice = require('./splice');

const promiseSplice = _curry3((index, deleteCount, promise) => {
  return promiseBind(splice(index, deleteCount), promise);
});

module.exports = promiseSplice;
