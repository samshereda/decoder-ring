// Write your tests here!
const expect = require('chai').expect;
const caesar = require('../src/caesar');

describe('caesar', () => {
  it('should caesar shift a one word string forward', () => {
    expect(caesar('thinkful', 3)).to.equal('wklqnixo');
  });
  it('should caesar shift a one word string backward', () => {
    expect(caesar('thinkful', -3)).to.equal('qefkhcri');
  });
  it('should decode an encoded string', () => {
    expect(caesar('wklqnixo', 3, false)).to.equal('thinkful');
  });
  it('should return the same result regardless of capitalization', () => {
    expect(caesar('tHiNkFuL', 3)).to.equal(caesar('thinkful', 3));
  });
  it('should caesar shift a multi word string', () => {
    expect(caesar('This is a secret message!', 8)).to.equal('bpqa qa i amkzmb umaaiom!');
  });
  it('should decode a shifted a multi word string', () => {
    expect(caesar('BPQA qa i amkzmb umaaiom!', 8, false)).to.equal('this is a secret message!');
  });
  it('should return false with an invalid number of parameters', () => {
    expect(caesar('thinkful')).to.be.false;
  });
  it('should return false when the shift is too high', () => {
    expect(caesar('thinkful', 99)).to.be.false;
  });
  it('should return false when the shift is too low', () => {
    expect(caesar('thinkful', -26)).to.be.false;
  });
  it('should return false when the shift is zero', () => {
    expect(caesar('thinkful', 0)).to.be.false;
  });
});