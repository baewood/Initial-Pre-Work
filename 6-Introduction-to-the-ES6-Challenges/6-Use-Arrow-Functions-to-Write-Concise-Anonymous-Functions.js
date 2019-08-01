// I learned how to use arrow function to write concise anonymous functions.
// The exercise states that in JS, you often don't need to name function, especially when passing one as
// an argument to another function. Instead, inline functions are created and aren't reused.
// This is used with arrow function syntax. 

const magic = () => {
  "use strict";
  return new Date();
};
