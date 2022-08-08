// Reversed Sequence


// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


// My solution
const reverseSeq = n => {
  let arr = [];

  for(let i = n; i > 0; i--){
    arr.push(i);
  }

  return arr;
};

reverseSeq(5);

// Refactoring


// Top Codewars Solutions
//1
const reverseSeq = n => {
  let arr = [];
    for (let i=n; i>0; i--) {
      arr.push(i);
      } return arr;
  };

//2
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

//3
const reverseSeq = length => Array.from({length}, () => length--)

//4
const reverseSeq = num => {
  return new Array(num)
      .fill()
      .map((d, i) => i + 1)
      .reverse()
};