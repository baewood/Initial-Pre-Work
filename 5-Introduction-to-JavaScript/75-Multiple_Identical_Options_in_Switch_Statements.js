// In this lesson, I learned that if the break statement is omitted, the following case
// statements are executed until a break happens, so multiple inputs have the same output
// represented in a swich statement. 

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
