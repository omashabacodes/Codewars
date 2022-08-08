// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
  return array.map(e => e * -1);
}


// top solutions
function invert(array) {
  return array.map( x => x === 0 ? x : -x);
}

const invert = array => array.map(num => -num);

function invert(array) {
  return array.map(i => 0 - i);
}

function invert(array) {
  var newArr = [];
  for(var i = 0; i < array.length; i++){
    newArr.push(-array[i]);
  }
   return newArr;
}