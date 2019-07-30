// In this lesson, I learned about a queue. It's an abstract Data Structure where items are kept
// in order. New items can be added to the back and old items are taken off from the front of the queue.
// I pushed an item to the testArr and removed the first element of the array. Then the removed element is
// returned. The code is tested with the console.log.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 7)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
