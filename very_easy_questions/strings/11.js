// Slice the first 5 characters of a string.

// Algorithm
// 1. Take a string and hold it in a variable
// 2. Define a function which takes the string
// 3. Take a string , slice the first character and hold it in a variable
// 4. Return or print the result

// Pseudo-code
// function sliceFirstFiveString(string)
// slicedString = string.slice(1,6)
// return slice

// Source code
const myName = "Darsheel";
function sliceFirstFiveString(name) {
  const slicedString = name.slice(0, 5); // last index is not taken in slice() but taken in substring()
  return slicedString;
}
console.log(sliceFirstFiveString(myName));
