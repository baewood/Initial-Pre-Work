// In this lesson, I learned about the "greater than or equal to" operator >=.
// It will convert data types while comparing the values of two numbers.
// It returns Boolean values.

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
