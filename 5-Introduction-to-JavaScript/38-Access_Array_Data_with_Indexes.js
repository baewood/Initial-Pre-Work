// This lesson showed how to access multi-dimentional arrays with indexes.
// Each set of brackets is its own index. [1,2,3] was 0 so to find 8, the first index in
// the bracket needed to be 2, then the second bracket held the index 1 because 7 is at index 0.
// I learned that there shouldn't be any spaces between the array name and the square brackets.
// I also learned that JS can read it correctly, but it would confuse others reading the code.

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];
