// In this lesson, I learned about the logical "and" operator &&.
// It only returns true if AND ONLY IF the operands to its left and right are true. 

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
