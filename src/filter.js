const _curry2 = require('./internal/_curry2');
const _clone = require('./internal/_clone');

const filter = _curry2((callback, xs) => {
  return _clone(xs).filter(callback);
});

module.exports = filter;
