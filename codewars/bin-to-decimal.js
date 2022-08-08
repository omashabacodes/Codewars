// Bin to Decimal


// Complete the function which converts a binary number (given as a string) to a decimal number.


// My solution
function binToDec(bin){
  return Number.parseInt(bin, 2);
}

// Refactoring


// Top Codewars Solutions
//1
function binToDec(bin){
  return parseInt(bin,2);
}


//2
const binToDec = bin => parseInt(bin,2);

//3

const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);
