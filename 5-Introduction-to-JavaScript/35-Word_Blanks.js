// This exercise mimicked Mad Libs. I changed some of the provided strings so the
// strings, when concatenated, made a sentence. I switched the order so myAdjective went
// before myNoun because with the words being used, it made more sense. 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result+= "My "+ myAdjective + " " + myNoun + " " + myVerb + " very " + myAdverb + ".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("cat", "fat", "ran", "slowly");
