// Opposite number


// Description
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// My solution
function opposite(number) {
  return number * -1 === -number ? number * -1 : number;
}


// Refactoring


// Top Codewars Solutions
//1
function opposite(number) {
  return(-number);
}

//2
const opposite = number => -number;


//3
function opposite(number) {
  return number * (-1);
}