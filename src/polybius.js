// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let alpha = [...Array(26)].map((ele, i) => String.fromCharCode(i + 97));
    alpha[8] = "(i/j)";
    alpha.splice(9, 1);
    input = input.toLowerCase();
    let message = encode ? encoder(input, alpha) : decoder(input, alpha);
    return message;
  }
  
  function decoder(input, alpha){
    if(input.replace(/(\s+)/g, "").length % 2 != 0) return false;
    input = input.split(/(\s+)/).reverse();
    let message = "";
    input.forEach(element => {
      element = parseInt(element);
      let flag = false
      const elementMessage = element ? decodeConvert(alpha, element) : " ";
      if(!elementMessage) flag = true;
      message = flag ? false : elementMessage + message;
    });
    return message;
  }

  function decodeConvert(alpha, element){
    if(element.toString().length % 2 != 0) return false;
    let message = "";
    while(element > 0){
      const row = element % 10;
      const col = Math.floor((element % 100)/10);
      element = Math.floor(element / 100);
      const index = (row - 1) * 5 + col - 1;
      message = alpha[index] + message;
    }
    return message;
  }

  function encoder(input, alpha){
    return [...input].reduce((accumulator, currentVal) =>{
      if(currentVal == "i" || currentVal == "j") currentVal = "(i/j)";
      const encode = isValidLetter(currentVal) ? convert(alpha, currentVal) : currentVal;
      return accumulator + encode;
    },"");
  }

  function convert(alpha, currentVal){
    const index = alpha.findIndex((element) => element == currentVal);
    const row = (Math.floor(index/5) + 1).toString();
    const col = (index % 5 + 1).toString();
    return col + row;
  }

  function isValidLetter(letter){
    return letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123 || letter == "(i/j)";
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
