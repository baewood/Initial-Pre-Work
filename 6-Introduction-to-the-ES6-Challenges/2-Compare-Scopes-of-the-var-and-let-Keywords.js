// This exercises expanded on the let keyword. I learned that the let keyword is similar to var with extra features.
// When a variable is declared with let inside a block, statement, or expression, its scope is limited to that block,
// statement, or expression. 

function checkScope() {
"use strict";
  let i = "function scope";  // Changed code here
  if (true) {
    let i = "block scope"; // Changes code here
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
