const _curry1 = require('./_curry1');
const _curry2 = require('./_curry2');
const _isObject = require('./_isObject');

const _curry3 = f => {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isObject(a)
          ? f3
          : _curry2(function(_b, _c) {
              return f(a, _b, _c);
            });
      case 2:
        return _isObject(a) && _isObject(b)
          ? f3
          : _isObject(a)
            ? _curry2(function(_a, _c) {
                return f(_a, b, _c);
              })
            : _isObject(b)
              ? _curry2(function(_b, _c) {
                  return f(a, _b, _c);
                })
              : _curry1(function(_c) {
                  return f(a, b, _c);
                });
      default:
        return _isObject(a) && _isObject(b) && _isObject(c)
          ? f3
          : _isObject(a) && _isObject(b)
            ? _curry2(function(_a, _b) {
                return f(_a, _b, c);
              })
            : _isObject(a) && _isObject(c)
              ? _curry2(function(_a, _c) {
                  return f(_a, b, _c);
                })
              : _isObject(b) && _isObject(c)
                ? _curry2(function(_b, _c) {
                    return f(a, _b, _c);
                  })
                : _isObject(a)
                  ? _curry1(function(_a) {
                      return f(_a, b, c);
                    })
                  : _isObject(b)
                    ? _curry1(function(_b) {
                        return f(a, _b, c);
                      })
                    : _isObject(c)
                      ? _curry1(function(_c) {
                          return f(a, b, _c);
                        })
                      : f(a, b, c);
    }
  };
};

module.exports = _curry3;
