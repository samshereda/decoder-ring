// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift < -25 || shift > 25 || shift === 0){
      return false;
    }
    return input.toLowerCase().split('').map(character => {
      //check if character is a letter
      if (character !== character.toUpperCase()){
        if (encode){
          return String.fromCharCode((character.charCodeAt(0) + shift - 19) % 26 + 97);
        } else {
          return String.fromCharCode((character.charCodeAt(0) - shift - 19) % 26 + 97);
        }
        
      } else {
        return character;
      }
    }).join('');
  }
  return {
    caesar
  };
})();

module.exports = caesarModule.caesar;
