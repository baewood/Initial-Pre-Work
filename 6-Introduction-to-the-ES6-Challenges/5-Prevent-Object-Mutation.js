// I learned how to prevent object mutation. At first I was confused about how to write the code, thinking
// that object meant MATH_CONSTANTS and originally wrote it as MATH_CONSTANTS.freeze(PI), but I learned that
// the function itself is Object.freeze. I also learned that once the object is frozen, you can't add, update or delete
// properties from it.

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
