// This lesson is a counting cards game. I took what I previously learned and applied it here.
// The cases 2-6 count positively while case 10, J, Q, K, and A count negatively. The if statement
// sets it up to hold or bet depending on the count. For example, a card sequence of 2, 3, 4, 5, 6
// returns 5 and since it is a high number, the if statement tells you to bet in the output.

var count = 0;

function cc(card) {
  // Only change code below this line
    switch(card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
    if (count > 0){
      return count + " Bet";
    } else {
      return count + " Hold";
    }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
