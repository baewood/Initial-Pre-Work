//  In this lesson, I learned about adding a default option in switch statements.
// The default statement is executed if no matching case statement is found.
// The exercise tells you to think of it as a final else statement in an if/else chain,
// which tells the coder to put default as the last case.

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;

    default:
      return "stuff"
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
