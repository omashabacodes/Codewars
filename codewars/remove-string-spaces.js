//Remove String Spaces
//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.split(' ').join('');
}

//top solutions
function noSpace(x){
  return x.replace(/\s/g, '');
}

function noSpace(x){return x.split(' ').join('')}

function noSpace(x){
  var result = ""
  for(var index = 0; index < x.length; index++){
    if(x[index] !== " "){
      result += x[index];
    }
  }
  return result;
}