const _shallowCopy = xs => {
  return JSON.parse(JSON.stringify(xs));
};

//TODO: replace deepCopy
const _clone = xs => {
  return _shallowCopy(xs);
};

module.exports = _clone;
