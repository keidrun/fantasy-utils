const _isArray = xs => {
  return (
    xs != null &&
    xs.length >= 0 &&
    Object.prototype.toString.call(xs) === '[object Array]'
  );
};

module.exports = Array.isArray || _isArray;
