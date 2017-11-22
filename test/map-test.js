const expect = require('chai').expect;
const map = require('../src/map');

describe('map-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return [2, 3, 4] for argument add1() and [1, 2, 3]', () => {
    const call = map(x => x + 1, [1, 2, 3]);
    expect(call.length).to.eql(3);
    expect(call[0]).to.eql(2);
    expect(call[1]).to.eql(3);
    expect(call[2]).to.eql(4);
  });

  it('should return [2, 3, 4] for argument add1() then [1, 2, 3]', () => {
    const add1 = map(x => x + 1);
    const call = add1([1, 2, 3]);
    expect(call.length).to.eql(3);
    expect(call[0]).to.eql(2);
    expect(call[1]).to.eql(3);
    expect(call[2]).to.eql(4);
  });

  it('should return [] for argument add1() and []', () => {
    const call = map(x => x + 1, []);
    expect(call.length).to.eql(0);
    expect(call[0]).to.eql(undefined);
  });

  it('should return [] for argument add1() then []', () => {
    const add1 = map(x => x + 1);
    const call = add1([]);
    expect(call.length).to.eql(0);
    expect(call[0]).to.eql(undefined);
  });

  it('should return TypeError for argument add1() and null', () => {
    const call = () => {
      return map(x => x + 1, null);
    };
    expect(call).to.throw(TypeError, 'invalid arguments');
  });

  it('should return TypeError for argument null and [1,2,3]]', () => {
    const call = () => {
      return map(null, [1, 2, 3]);
    };
    expect(call).to.throw(TypeError, 'invalid arguments');
  });

  it('should return TypeError for argument number and [1, 2, 3]', () => {
    const call = () => {
      return map(777, [1, 2, 3]);
    };
    expect(call).to.throw(TypeError, 'invalid arguments');
  });

  it('should return TypeError for argument add1() and number]', () => {
    const call = () => {
      return map(x => x + 1, 777);
    };
    expect(call).to.throw(TypeError, 'invalid arguments');
  });
});
