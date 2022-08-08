// Total amount of points

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let score = 0;

  for(let i = 0; i < games.length; i++){
    let eachGame = games[i].split(':');
    let x = Number(eachGame[0]);
    let y = Number(eachGame[1]);

    if(x > y){
      score += 3;
    }else if (x === y){
      score += 1;
    }else{
      score;
    }
  }

  return score;
}


// Top solutions
const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

function points(games) {
  var sum=0;
  for (var i=0; i<games.length; ++i)
  {
    if (games[i][0]>games[i][2])
      sum+=3;
    if (games[i][0]==games[i][2])
      sum+=1;
  }
  return sum;
}

const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)

function points(games) {
  // totalPoints will store the accumulated points
  let totalPoints = 0;

    // loop through the games array to get the scores
    for(i=0; i<games.length; i++) {

     // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
      let xScore = Number(games[i].charAt(0));
      let yScore = Number(games[i].charAt(2));

      // Add points depending on the values of xScore compared to yScore
      if (xScore > yScore) { totalPoints += 3; }
      if (xScore < yScore) { totalPoints += 0; }
      if (xScore === yScore) { totalPoints += 1; }
    }

    return totalPoints;
}

const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)

function points(games) {
  return games.reduce((current, element) => {
    let arraySplit = element.split(':');
    return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
  }, 0);
}
