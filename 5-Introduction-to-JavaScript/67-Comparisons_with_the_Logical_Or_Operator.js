// This exercise introduces the logical "or" operator ||. It returns true if either of the
// operands are true, otherwise it returns false.

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
