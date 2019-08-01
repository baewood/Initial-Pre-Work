// I learned the difference between var and let. Let was intoduced in ES6 to solve potential issues with the var
// keyword. This stops variables from being overwritten.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
