// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

let arrNums = [1, 2, 2]

function squareSum(numbers){
  let sum = 0;
  for (const num of numbers) {
    sum += num**2;
  }
  return sum;
}

squareSum(arrNums);

//Top solutions

//1
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

//2
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

//3
function squareSum(numbers){
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
