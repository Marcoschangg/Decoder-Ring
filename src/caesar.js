// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(shift < -25 || shift > 25 || shift === 0) return false;
    const alpha = [...Array(26)].map((ele, i) => String.fromCharCode(i + 97));
    input = input.toLowerCase();
    shift = encode ? shift : shift * -1;
    
    let arr = [...input].map((c) => c = isValidLetter(c) ? convert(alpha, c, shift) : c);
    return arr.join('');
  }

  function convert(alpha, letter, shift){
    let index = alpha.findIndex((element) => element == letter) + shift;
    if(index < 0) index = index + 26;
    if(index > 25) index = index - 26;
    return alpha[index];
  }

  function isValidLetter(letter){
    return letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123 ? true : false;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
