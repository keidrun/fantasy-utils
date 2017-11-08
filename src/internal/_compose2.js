const _curry2 = require('./_curry2');

const _compose2 = _curry2((f, g) => {
  return x => {
    return f(g(x));
  };
});

module.exports = _compose2;
