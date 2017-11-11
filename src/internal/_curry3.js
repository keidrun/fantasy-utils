const _curry1 = require('./_curry1');
const _curry2 = require('./_curry2');

const _curry3 = f => {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _curry2(function(_b, _c) {
          return f(a, _b, _c);
        });
      case 2:
        return _curry1(function(_c) {
          return f(a, b, _c);
        });
      default:
        return f(a, b, c);
    }
  };
};

module.exports = _curry3;
