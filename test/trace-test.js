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

  it('should return boolean for argument boolean', () => {
    expect(trace('trace', true)).to.eql(true);
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

  it('should return function for argument object', () => {
    expect(typeof trace('trace', { name: 'Keid' })).to.eql('function');
  });
});
