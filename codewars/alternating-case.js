// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"


String.prototype.toAlternatingCase = function () {
  // declare a results variable
  let newStr = ''

  //iterate over each char of string using idx
  for(let i = 0; i < this.length; i++){

    let currentChar = this[i];

    //if currentChar is lowercase, then upcase
    if(currentChar === currentChar.toLowerCase()){
      newStr += currentChar.toUpperCase();

    //else if currentChar is uppercase, then downcase
    }else if(currentChar === currentChar.toUpperCase()){
      newStr += currentChar.toLowerCase();

    //else continue
    }else{
      newStr += currentChar;

    }
  }

  //return string
  return newStr;
}

// refactor
String.prototype.toAlternatingCase = function () {
  let newStr = ''

  for(let i = 0; i < this.length; i++){
    let currentChar = this[i];

    if(currentChar === currentChar.toLowerCase()){
      newStr += currentChar.toUpperCase();
    }else if(currentChar === currentChar.toUpperCase()){
      newStr += currentChar.toLowerCase();
    }else{
      newStr += currentChar;
    }
  }

  return newStr;
}



// Top Solutions

// this is a clever solution that chains .split().map().join() , while using (an arrow function with a ternary operator) as the transformation criteria for the map method.
String.prototype.toAlternatingCase = function () {
   //split into array   //transform //ternary condition  //if true         //if false     //rejoin
  return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

// this one seems to use arrow functions as variable values, then passed to .map() as an argument/transform criteria, and rejoined
// I'm currently unfamiliar with how the "spread operator" works in this solution.
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};

// this one is basically my solution without saving this[i] into a new variable
String.prototype.toAlternatingCase = function () {
  new_str = "";
  for(var i = 0; i < this.length; i++) {
    if(this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase();
    }
    else {
      new_str += this[i].toUpperCase();
    }
  }
  return new_str;
}