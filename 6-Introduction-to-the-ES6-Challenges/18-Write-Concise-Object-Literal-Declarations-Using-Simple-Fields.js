// In this lesson, I learned how to write concice object literal declarations using simple
// fields. I wrote a simple function that returns the objects containing those fields.
// This eliminates the reduncancy of having to write x: x. 

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
