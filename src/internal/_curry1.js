const _curry1 = f => {
  return function f1(a) {
    return arguments.length === 0 ? f1 : f.apply(this, arguments);
  };
};

module.exports = _curry1;
