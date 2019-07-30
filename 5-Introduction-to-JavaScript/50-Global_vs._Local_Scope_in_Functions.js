// This exercise showed that it is possible to have both local and global variables with the same name.
// I learned that when this is done, the local variable takes priority over the global variable.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

myOutfit();
