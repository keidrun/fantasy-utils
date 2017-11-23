const expect = require('chai').expect;
const { shouldFulfilled, shouldRejected } = require('./test-helpers');
const promiseOf = require('../src/promiseOf');
const promiseBind = require('../src/promiseBind');

describe('promiseBind-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should be fullfilled and return Promise(11) for argument add1() and Promise(10)', () => {
    const call = promiseBind(x => x + 1, promiseOf(10));
    expect(Object.prototype.toString.call(call)).to.eql('[object Promise]');
    return shouldFulfilled(call).then(value => {
      expect(value).to.eql(11);
    });
  });

  it('should be rejected for argument Error and Promise(10)', () => {
    const func = () => {
      throw new Error('any error');
    };
    const call = promiseBind(func, promiseOf(10));
    expect(Object.prototype.toString.call(call)).to.eql('[object Promise]');
    return shouldRejected(call).catch(error => {
      expect(error.message).to.eql('any error');
    });
  });

  it('should be rejected for argument add1() and Promise(Error)', () => {
    const promise = Promise.reject(new Error('any error'));
    const call = promiseBind(x => x + 1, promise);
    expect(Object.prototype.toString.call(call)).to.eql('[object Promise]');
    return shouldRejected(call).catch(error => {
      expect(error.message).to.eql('any error');
    });
  });
});
