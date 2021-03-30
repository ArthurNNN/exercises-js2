Complete the following CodeWars on JavaScript concepts you learned in previous weeks.

# CodeWars

- [Is it even?](https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript)
- [Will you make it?](https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript)
- [Removing elements](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript)
- [Grasshopper - Summation](https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript)
- [Find the Difference in Age between Oldest and Youngest Family Members](https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript)
- [Filter out the Geese](https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript)

- [Is it even?]

function testEven(n) {
   if ( n % 2 === 0 ){
     return true;
   }
   else return false;
}

- [Will you make it?]
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg*fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

- [Removing elements]
function removeEveryOther(arr){
  for (i = arr.length-1; i > 0; i--) {
    if (i % 2 != 0) {
      arr.splice(i, 1)
    }
  }
  return arr;
}

- [Grasshopper - Summation]
var summation = function (num) {
    sum = 0;
    for (i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum;
}

- [Find the Difference in Age between Oldest and Youngest Family Members]
function differenceInAges(ages){
  oldest = 0;
  youngest = 200;
  for (item of ages) {
    if (item > oldest) {
      oldest = item
    }
    if (item < youngest) {
      youngest = item
    }
  }
  return [youngest, oldest, oldest - youngest]
}

- [Filter out the Geese]
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  birds = birds.filter(item => !geese.includes(item));
  return birds;
};

