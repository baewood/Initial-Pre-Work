// I learned how to use destructuring assignment to assign variables from arrays.
// You state the array, then assign it in the order you want it so the values are swapped.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
