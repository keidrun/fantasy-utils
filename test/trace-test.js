const expect = require('chai').expect;
const trace = require('../src/trace');

describe('trace-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return string for argument string', () => {
    expect(trace('trace', 'something')).to.eql('something');
  });

  it('should return number for argument number', () => {
    expect(trace('trace', 777)).to.eql(777);
  });

  it('should return true for argument true', () => {
    expect(trace('trace', true)).to.eql(true);
  });

  it('should return false for argument false', () => {
    expect(trace('trace', false)).to.eql(false);
  });

  it('should return empty for argument empty', () => {
    expect(trace('trace', '')).to.eql('');
  });

  it('should return undefined for argument undefined', () => {
    expect(trace('trace', undefined)).to.eql(undefined);
  });

  it('should return null for argument null', () => {
    expect(trace('trace', null)).to.eql(null);
  });

  it('should return object for argument object', () => {
    expect(
      Object.prototype.toString.call(trace('trace', { name: 'Keid' }))
    ).to.eql('[object Object]');
  });

  it('should return name property for argument object.name', () => {
    expect(trace('trace', { name: 'Keid' }).name).to.eql('Keid');
  });

  it('should return array for argument array', () => {
    const call = trace('trace', [1, 2, 3]);
    expect(call.length).to.eql(3);
    expect(call[0]).to.eql(1);
    expect(call[1]).to.eql(2);
    expect(call[2]).to.eql(3);
  });

  it('should return empty array for argument empty array', () => {
    const call = trace('trace', []);
    expect(call.length).to.eql(0);
    expect(call[0]).to.eql(undefined);
  });
});
