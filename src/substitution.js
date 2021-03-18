// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (alphabet === undefined || alphabet.length !== 26){
      return false;
    }
    for (const character of alphabet) {
      if (alphabet.indexOf(character) !== alphabet.lastIndexOf(character)){
        return false;
      }
    }
    return input.split('').map(character => {
      
      if (encode){
        if (originalAlphabet.includes(character)){
          return alphabet[originalAlphabet.indexOf(character)];
        }
        return ' ';
      }
      if (alphabet.includes(character)){
        return originalAlphabet[alphabet.indexOf(character)];
      }
      return ' ';

      
    }).join('');
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
