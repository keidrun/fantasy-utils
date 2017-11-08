const expect = require('chai').expect;
const trace = require('../src/trace');

describe('trace-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return string for argument string', () => {
    expect(trace('trace', 'something')).eqls('something');
  });

  it('should return number for argument number', () => {
    expect(trace('trace', 777)).eqls(777);
  });

  it('should return boolean for argument boolean', () => {
    expect(trace('trace', true)).eqls(true);
  });

  it('should return object for argument object', () => {
    expect(trace('trace', { name: 'Jon' })).eqls({ name: 'Jon' });
  });

  it('should return empty for argument empty', () => {
    expect(trace('trace', '')).eqls('');
  });

  it('should return undefined for argument undefined', () => {
    expect(trace('trace', undefined)).eqls(undefined);
  });

  it('should return null for argument null', () => {
    expect(trace('trace', null)).eqls(null);
  });
});
