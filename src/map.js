const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');

const map = _curry2((x, xs) => {
  return _clone(xs).map(x);
});

module.exports = map;
