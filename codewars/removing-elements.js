// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  return arr.filter((ele, idx) => idx % 2 === 0);
}


// Top solutions

// better readability?
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

// build new array using For loop
function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}

// using splice and a For loop
function removeEveryOther(arr){
  for (var i = 1; i < arr.length;i++){
      arr.splice(i,1);
  }
  return arr;
}

// hiding 1st param of filter
const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));

