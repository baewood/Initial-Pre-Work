// I learned what scope is in Js. Scope refers to the visibility of variables.
// I also learned that variables defined outside of a function have Global scope and can be seen everywhere in
// a JS code. Variables used without var are created in the global scope. The exercise stresses that you should
// always declare your variables with var.

// Declare your variable here
var myGlobal = 10;
oopsGlobal = 5;

function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
