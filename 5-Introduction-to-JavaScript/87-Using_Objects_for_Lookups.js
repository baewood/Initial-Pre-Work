// This exercise was a little challenging. We're using objects for lookups, so converting the original
// code to what I have now was simple enough, but I didn't understand why it wasn't running correctly at first.
// I then noticed it was because I didn't have result = lookup[val]. Without that, the associated string wasn't
// being assigned to the result variable in the return statement.

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };

  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
