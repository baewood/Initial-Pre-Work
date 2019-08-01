// At first I put, myStorage.inside["glove box"] but quickly realized that was wrong.
// I learned that objects can be nested and you can chain dot and bracket notation to find sub-properties.

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Changed this line
