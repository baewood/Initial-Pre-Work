// This lesson introduces logical order in if else statements.
// I learned that the first statement works better when it is the smaller value because
// the function is executred from top to bottom.

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(4);
