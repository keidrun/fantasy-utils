const _curry3 = require('./internal/_curry3');
const _clone = require('./internal/_clone');

const slice = _curry3((begin, end, xs) => {
  return _clone(xs).slice(begin, end);
});

module.exports = slice;
