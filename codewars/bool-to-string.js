// Convert a Boolean to a String


// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


// My solution
function booleanToString(b){
  return String(b);
}

// Refactoring


// Top Codewars Solutions
//1
function booleanToString(b){
  return b.toString();
}

//2
function booleanToString(b){
  return b ? 'true' : 'false';
}

//3
function booleanToString(b){
  return String(b);
}