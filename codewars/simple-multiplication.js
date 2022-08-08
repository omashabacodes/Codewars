/// Simple multiplication


// Description
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My solution
function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}


// Refactoring


// Top Codewars Solutions
//1
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

//2
function simpleMultiplication(n){
  return n % 2 == 0 ? n * 8 : n * 9
}

//3
function simpleMultiplication(value){

  if(value%2===0 ){
   return value *8
  }
  else{
  return value* 9;
  }
}
