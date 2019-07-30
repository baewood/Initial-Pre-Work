// In this lesson, I learned the difference between the equality operator and the strict
// equality operator ===. I also learned that it does not perform a type conversion.
// If the values have different types, they're considered unequal and will return false.

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
