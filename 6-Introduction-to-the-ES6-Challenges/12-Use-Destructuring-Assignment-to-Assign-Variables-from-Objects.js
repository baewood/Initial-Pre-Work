// I learned how to use destructuring assignment to assign variables from objects.
// I also learned that destructuring assignment is special syntax for neatly assigning values taken
// directly from an object to variables.

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow: tempOfTomorrow } = avgTemperatures; // changed this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
