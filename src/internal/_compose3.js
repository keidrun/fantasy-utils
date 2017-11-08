const _curry3 = require('./_curry3');

const _compose3 = _curry3((f, g, z) => {
  return x => {
    return f(g(z(x)));
  };
});

module.exports = _compose3;
