// I learned how to set default paraments for functions. In this exercise, it wanted to add 1 to the
// number variable so I set the value as one.

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) { // Changed this line.
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
