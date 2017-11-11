const _curry1 = require('./_curry1');

const _curry2 = f => {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _curry1(function(_b) {
          return f(a, _b);
        });
      default:
        return f(a, b);
    }
  };
};

module.exports = _curry2;
