// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  for (let i = 0; i < str.length; i++) {
    let delta = str.charCodeAt(0);
    if (str.charCodeAt(i) != (i + delta)) {
      return String.fromCharCode(i + delta)
    }
  }
  return "no missing letters";
}






// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
  for (let y = 0; y < arr.length; y++) {
    for (let z = 0; z < arr.length; z++) {
      if (y == z) {
        continue;
      } else if (arr[y] + arr[z] == target) {
        return true;
      }
    }
  }
  return false;
}

// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
  let sorted = [];
  let odds = [];
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] % 2 == 0) {
      sorted.push(arr[x]);
    } else {
      odds.push(arr[x]);
      sorted.push('x');
    }
  }
  odds = odds.sort(function (a, b) {
    return a - b;
  });
  let z = 0;
  for (let y = 0; y < sorted.length; y++) {
    if (sorted[y] == 'x') {
      sorted.splice(y, 1, odds[z]);
      console.log(odds[z]);
      z++;
    } else {
      continue;
    }
  }
  return sorted;
}


