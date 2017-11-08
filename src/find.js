const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');

const find = _curry2((callback, xs) => {
  return _clone(xs).find(callback);
});

module.exports = reduce;
