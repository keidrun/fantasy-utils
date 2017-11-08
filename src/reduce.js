const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');

const reduce = _curry3((accumulator, x, xs) => {
  return _clone(xs).reduce(accumulator, x);
});

module.exports = reduce;
