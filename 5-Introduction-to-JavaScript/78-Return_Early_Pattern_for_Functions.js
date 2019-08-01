// This lesson goes over returning early patterns for functions. The example explains
// anything after the return statement is ignored because the function exits at the statement.
// I learned in this exercise how to negate the second return, which was intially the only return statement
// and now the function runs with an output of undefined.

// Setup
function abTest(a, b) {
  // Only change code below this line

  if (a < 0 || b < 0 ){
  return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
