// Is it even?

function testEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    else return false;
}

// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};

// Removing elements
function removeEveryOther(arr) {
    for (i = arr.length - 1; i > 0; i--) {
        if (i % 2 != 0) {
            arr.splice(i, 1)
        }
    }
    return arr;
}

// Grasshopper - Summation
var summation = function (num) {
    sum = 0;
    for (i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum;
}

// Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages) {
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

// Filter out the Geese
function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    birds = birds.filter(item => !geese.includes(item));
    return birds;
};