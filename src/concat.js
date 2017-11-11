const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');
const _isArray = require('./internal/_isArray');

const concat = _curry2((ys, xs) => {
  return _isArray(ys) && _isArray(xs) ? _clone(xs).concat(_clone(ys)) : null;
});

module.exports = concat;
