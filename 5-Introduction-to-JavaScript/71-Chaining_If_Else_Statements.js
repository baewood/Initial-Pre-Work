// In this lesson, I learned how to chain if else statements.
// I also learned that the order goes: if, else if, else if, and so on until else at the end.

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge"
  }
}

// Change this value to test
testSize(7);
