const expect = require('chai').expect;
const promiseOf = require('../src/promiseOf');

describe('promiseOfmap-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return Promise for argument number', () => {
    const call = promiseOf(11);
    expect(Object.prototype.toString.call(call)).to.eql('[object Promise]');
    return call.then(value => {
      expect(value).to.eql(11);
    });
  });

  it('should return Promise for argument string', () => {
    const call = promiseOf('Hello world');
    expect(Object.prototype.toString.call(call)).to.eql('[object Promise]');
    return call.then(value => {
      expect(value).to.eql('Hello world');
    });
  });

  it('should return Promise for argument array', () => {
    const call = promiseOf([1, 2, '3', 4, 5, '6']);
    expect(Object.prototype.toString.call(call)).to.eql('[object Promise]');
    return call.then(value => {
      expect(value.length).to.eql(6);
      expect(value[0]).to.eql(1);
      expect(value[1]).to.eql(2);
      expect(value[2]).to.eql('3');
      expect(value[3]).to.eql(4);
      expect(value[4]).to.eql(5);
      expect(value[5]).to.eql('6');
    });
  });

  it('should return Promise for argument object', () => {
    const call = promiseOf({ name: 'Super Man', power: 200 });
    expect(Object.prototype.toString.call(call)).to.eql('[object Promise]');
    return call.then(value => {
      expect(value.name).to.eql('Super Man');
      expect(value.power).to.eql(200);
    });
  });
});
