// In this lesson, I learned about the comparison operator "greater than" >. It compares the values
// of two numbers. It will convert data types of values while comparing and returns Boolean values.

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);
