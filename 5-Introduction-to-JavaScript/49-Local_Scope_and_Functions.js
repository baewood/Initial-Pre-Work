// In this lesson, I learned about local scope in functions.
// Varaibles declared within a function have local scope which means they're only visible
// within that function. There were comments in this exercise to show this, along with an extra
// console.log. It didn't run without removing the extra console.log because it
// was ran outside of the function where myVar wasn't defined.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 1;
  console.log(myVar);
}
myLocalScope();
