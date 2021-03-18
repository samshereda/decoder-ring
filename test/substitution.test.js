// Write your tests here!
const expect = require('chai').expect;
const substitution = require('../src/substitution');

describe('substitution', () => {
  it('should encode a one word string', () => {
    expect(substitution('thinkful','xoyqmcgrukswaflnthdjpzibev')).to.equal('jrufscpw');
  });
  it('should encode a multi word string', () => {
    expect(substitution('you are an excellent spy','xoyqmcgrukswaflnthdjpzibev')).to.equal('elp xhm xf mbymwwmfj dne');
  });
  it('should decode a one word string', () => {
    expect(substitution('jrufscpw','xoyqmcgrukswaflnthdjpzibev', false)).to.equal('thinkful');
  });
  it('should decode a multi word string', () => {
    expect(substitution('elp xhm xf mbymwwmfj dne','xoyqmcgrukswaflnthdjpzibev', false)).to.equal('you are an excellent spy');
  });
  it('should return false if the alphabet is too short', () => {
    expect(substitution('elp xhm xf mbymwwmfj dne','short', false)).to.be.false;
  });
  it('should return false if the alphabet is not provided', () => {
    expect(substitution('elp xhm xf mbymwwmfj dne')).to.be.false;
  });
  it('should return false if the alphabet is not all unique characters', () => {
    expect(substitution('thinkful','abcabcabcabcabcabcabcabcyz')).to.be.false;
  });
});