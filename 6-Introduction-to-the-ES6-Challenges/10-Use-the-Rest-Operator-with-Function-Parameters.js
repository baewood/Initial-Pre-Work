// I learned how to use the rest operator with function parameters. I learned that the rest operator was
// introduced to create function sthat take a variable number of arguments and they're stored in an array that
// can be accessed later from inside the function.


const sum = (function() {
  "use strict";
  return function sum(...args ) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
