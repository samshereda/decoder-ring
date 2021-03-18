// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const square = [
    ['a','b','c','d','e'],
    ['f','g','h','(i/j)','k'],
    ['l','m','n','o','p'],
    ['q','r','s','t','u'],
    ['v','w','x','y','z']
  ];
  function polybius(input, encode = true) {
    // your solution code here
    if (encode){
      return input.toLowerCase().split('').map(character => {
        if (character === character.toUpperCase()){
          return character;
        }
        let row;
        for (let i = 0; i < square.length; i++) {
          row = square[i];
          for (let j = 0; j < row.length; j++) {
            if (row[j].includes(character)) {
              return `${j+1}${i+1}`;
            }
          }
        }
      }).join('');
    }
    let words = input.split(' ');
    let encoded = '';
    for (const word of words) {
      if (word.length % 2 !== 0){
        return false;
      }
      for (let index = 0; index < word.length; index+=2) {
        encoded += square[word[index+1]-1][word[index]-1];
      }
      if (word !== words[words.length-1]){
        encoded += ' ';
      }
    }
    return encoded;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
