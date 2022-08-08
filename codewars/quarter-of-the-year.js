// Quarter of the year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if(month <= 3){
    return 1;
  }else if(month <= 6){
    return 2;
  }else if(month <= 9){
    return 3;
  }else{
    return 4;
  }
}

// Top solutions

// elegant: it takes the month number and divide by 3 because there are 3 months in each quarter. December (12/3) is in 4th quarter.
const quarterOf = m => Math.ceil(m/3);