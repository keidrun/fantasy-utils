const expect = require('chai').expect;
const promiseOf = require('../src/promiseOf');
const promiseMap = require('../src/promiseMap');

describe('promiseMap-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return Promise([2, 3, 4]) for argument add1() and Promise([1, 2, 3])', () => {
    const call = promiseMap(x => x + 1, promiseOf([1, 2, 3]));
    expect(Object.prototype.toString.call(call)).to.eql('[object Promise]');
    return call.then(value => {
      expect(value.length).to.eql(3);
      expect(value[0]).to.eql(2);
      expect(value[1]).to.eql(3);
      expect(value[2]).to.eql(4);
    });
  });
});
