// In this lesson, I learned how to remove the function keyword and write concise declarative
// functions with ES6. Instead of setGear: function(newGear), the line became setGear(newGear).
// This made setGear the function's name. 

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
