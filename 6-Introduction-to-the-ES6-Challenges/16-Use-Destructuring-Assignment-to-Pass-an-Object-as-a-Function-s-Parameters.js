// This lesson continues to expand on destructuring. I learned how to use it to pass an object
// as a functions paracters. I deleted states in the changes lines and added {max, min} in its place at the
// return function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line


  return function half({max, min}) { //changed line here

    return (max + min) / 2.0; //changed line here.
  };


})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
