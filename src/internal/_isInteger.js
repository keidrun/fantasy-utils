const _isInteger = n => {
  return n << 0 === n;
};

module.exports = Number.isInteger || _isInteger;
