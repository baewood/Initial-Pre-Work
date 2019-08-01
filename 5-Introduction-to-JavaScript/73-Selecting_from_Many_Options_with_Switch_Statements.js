// In this lesson, I learned about the switch statement. I learned that a switch statement
// tests a value and can have many case statements which deine various values.
// I also learned that case values are tested with strict equality, and the break tells JS to stop
// executing statements. If the break is omitted, the next statement is executed.

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
}

  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
