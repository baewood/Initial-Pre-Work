// In this lesson, I learned how to replace If/Else chains with switch, continuing
// with what was being taught in the previous exercises. 

function chainToSwitch(val) {
 var answer = "";
 // Only change code below this line

 switch (val) {
   case "bob":
     return "Marley";
     break;
   case 42:
    return "The Answer";
     break;
   case 1:
     return "There is no #1";
     break;
   case 99:
     return "Missed me by this much!";
     break;
   case 7:
     return "Ate Nine";
   default:
     return "";
 }

 // Only change code above this line
 return answer;
}

// Change this value to test
chainToSwitch(7);
