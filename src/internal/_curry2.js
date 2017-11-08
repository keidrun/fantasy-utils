const _curry1 = require('./_curry1');
const _isObject = require('./_isObject');

const _curry2 = f => {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isObject(a)
          ? f2
          : _curry1(function(_b) {
              return f(a, _b);
            });
      default:
        return _isObject(a) && _isObject(b)
          ? f2
          : _isObject(a)
            ? _curry1(function(_a) {
                return f(_a, b);
              })
            : _isObject(b)
              ? _curry1(function(_b) {
                  return f(a, _b);
                })
              : f(a, b);
    }
  };
};

module.exports = _curry2;
