// Get mean of an array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  let sum = marks.reduce((acc, c) => acc += c, 0);
  return Math.floor(sum / marks.length);
}

// top solutions

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

function getAverage(marks){

  // calculates total number of marks
  var total = 0;
  for(var i = 0; i < marks.length; i++){
    total += marks[i];
  }

  /* returns total number of marks divided by number of marks
     rounded down to nearest integer */
  return Math.floor(total / marks.length);
}

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);