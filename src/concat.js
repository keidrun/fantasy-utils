const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');

const concat = _curry2((ys, xs) => {
  return _clone(xs).concat(ys);
});

module.exports = concat;
