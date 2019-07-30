// This lesson introduces else statements. Since an if statement runs if true, the attached else statement
// will run if that if statement is false.

function testElse(val) {
  var result = "";
  // Only change code below this line
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
