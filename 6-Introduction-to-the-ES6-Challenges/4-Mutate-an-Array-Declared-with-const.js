// I learned how to mutate an array declared with const. Since const means a constant variable and cannot be changed
// I used the variable and indexes to change the order of the array.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace();
