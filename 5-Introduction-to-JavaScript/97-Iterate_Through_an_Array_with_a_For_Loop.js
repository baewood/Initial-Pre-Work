// In this exercise, I learned how to iterate through an array with a for loop. The condition stops as index -1
// when it goes through the loop. It then counts the numbers in the array and the final value is 20 in the console.log.

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
  console.log(total);
}
