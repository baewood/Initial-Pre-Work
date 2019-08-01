// In this lesson, I learned how to access object properties with variables. The property is stored as a value
// of a variable and then bracket notation is used to access the property. I learned that it is important
// to note that quotes aren't used around the variable name when using it to access the property because
// the value of the variable is being used, not the name.

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Changed this Line
var player = testObj[playerNumber];   // Changed this Line
