// In this lesson, I gained an understanding of undefined values returned from functions.
// I learned that a function does not have to have a return statement. This creates the
// undefined value.

var sum = 8;
function addFive(num) {
  sum = sum + 5;
}

var returnedValue = addFive();
