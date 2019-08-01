// I learned how to generate random whole numbers with JS using Math.floor() to round the number down to its nearest
// whole number.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  var num = 0;
  while (num === 0){
    num = Math.floor(Math.random() * 10);
  }
  return num;
}
