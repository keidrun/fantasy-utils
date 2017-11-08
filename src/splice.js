const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');

const splice = _curry3((start, deleteCount, xs) => {
  return _clone(xs).splice(start, deleteCount);
});

module.exports = splice;
