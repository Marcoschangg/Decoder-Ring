// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const setAlpha = new Set(alphabet);
    if(!alphabet || setAlpha.size != 26 || setAlpha.size != alphabet.length) return false;
    const alphabetTwo = [...Array(26)].map((ele, i) => String.fromCharCode(i + 97));
    const subAlpha = encode ? [...alphabet] : alphabetTwo;
    const alpha =  encode ? alphabetTwo : [...alphabet];
    input = input.toLowerCase();
    let arr = [...input].map((c) => c = isValidLetter(c) ? subAlpha[alpha.findIndex((element) => element == c)] : c);
    return arr.join('');
  }

  function isValidLetter(letter){
    return letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123 || letter.charCodeAt(0) > 32 && letter.charCodeAt(0) < 48 ? true : false;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
