const expect = require('chai').expect;
const promiseOf = require('../src/promiseOf');
const promiseBind = require('../src/promiseBind');

describe('promiseBind-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return Promise for argument add1() and Promise(10)', () => {
    const call = promiseBind(x => x + 1, promiseOf(10));
    expect(Object.prototype.toString.call(call)).to.eql('[object Promise]');
    return call.then(value => {
      expect(value).to.eql(11);
    });
  });
});
