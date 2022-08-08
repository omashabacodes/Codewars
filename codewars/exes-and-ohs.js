// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution
function XO(str) {
  console.log(str);

  arr = str.toLowerCase().split('')

  let ex = 0;
  let oh = 0;

  arr.forEach(ele => {
    if (ele === 'x'){
      ex += 1;
    }else if(ele === 'o'){
      oh += 1;
    }
  });
  console.log(ex);
  console.log(oh);
  console.log(ex===oh);
  return ex === oh;

}

// Refactoring


// Top Codewars Solutions
//1
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

//2
function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//3
function XO(str) {
  var sum = 0;
  for(var i=0; i<str.length; i++){
    if(str[i].toLowerCase() == 'x') sum++;
    if(str[i].toLowerCase() == 'o') sum--;
  }
  return sum == 0;
}