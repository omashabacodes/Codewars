// Convert a Number to a String!

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"

function numberToString(num) {
  return num.toString();
}

const numberToString = num => num.toString()

// Top solutions
function numberToString(num) {
  return String(num);
}

function numberToString(num) {
  return ''+num;
}

const numberToString = num => `${num}`;

// Explanation
numberToString = String;
// Like all Javascript functions, String is a first class member, so if you assign it to a variable without applying it (i.e. not placing any parentheses behind it), calling that variable using parentheses and arguments will call the function assigned to it.
// A more useful property of this can be seen when using functions like map, e.g. [1,2,3].map(x => String(x)) can be shortened to just [1,2,3].map(String)
