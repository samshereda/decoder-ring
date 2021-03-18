// Write your tests here!
const expect = require('chai').expect;
const polybius = require('../src/polybius');

describe('polybius', () => {
  it('should encode a one word string', () => {
    expect(polybius('thinkful')).to.equal('4432423352125413');
  });
  it('should encode a multi-word string', () => {
    expect(polybius('hello world')).to.equal('3251131343 2543241341');
  });
  it('should decode a one word string', () => {
    expect(polybius('3251131343', false)).to.equal('hello');
  });
  it('should decode a multi word string', () => {
    expect(polybius('3251131343 2543241341', false)).to.equal('hello world');
  });
  it('should decode 42 as (i/j)', () => {
    expect(polybius('4432423352125413', false)).to.equal('th(i/j)nkful');
  });
  it('should return false if a word has an odd number of characters', () => {
    expect(polybius('3421 523', false)).to.be.false;
  });
  it('should encode the same regardless of capitalization', () => {
    expect(polybius('Hello world')).to.equal(polybius('hello world'));
  });
});