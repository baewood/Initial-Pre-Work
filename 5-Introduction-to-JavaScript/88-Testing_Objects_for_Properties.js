// In this lesson, I learned how to test objects for properties by using the .hasOwnProperty(propname) method.
// This determines if an object has the given property name. It will return Boolean values if the property is
// found or not. 

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
      return "Not Found"
  }
}

// Test your code by modifying these values
checkObj("gift");
