const _curry1 = f => {
  // eslint-disable-next-line no-unused-vars
  return function f1(a) {
    return arguments.length === 0 ? f1 : f.apply(this, arguments);
  };
};

module.exports = _curry1;
