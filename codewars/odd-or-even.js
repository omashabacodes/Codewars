// Odd or Even?

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  arrSum = array.reduce((a,c) => a += c, 0);
  return arrSum % 2 == 0 ? 'even' : 'odd';
}


// Top solutions

// just 1 line version of my solution, less readability
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

// Using iteration instead of .reduce()
function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++)
  {result+=array[i];}
  if (result%2 == 0)
  {return "even";}
  else{return "odd";}
}