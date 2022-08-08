//Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
  //convert str to an arr of chars
    let strArr = str.split('');

  // remove 1st char
    strArr.shift();

  //remove last char
    strArr.pop();

  //rejoin string and return
    return strArr.join("");
};



// Top Codewars
function removeChar(str) {
  return str.slice(1, -1);  // argument -1 is the same as 'str.length -1'
}


const removeChar = str => str.slice(1,-1)  // argument -1 is the same as 'str.length -1'


function removeChar(str){
  return str.substring(1, str.length-1);
}
