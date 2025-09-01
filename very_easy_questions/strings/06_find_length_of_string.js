//Find the length and index of a string.

// Algorithm
// 1. Take a string and hold it in a variable
// 2. Define a function to find the length of the string
// 3. Use the length property of javascript
// 4. Print or return the result

// Pseudo-code
// function findLengthOfString(string)
// lengthString = string.length
// print lengthString

// Source code
const myFirstName = "Darsheel";
function findLengthOfString(firstName) {
  const findLength = firstName.length;
  const findIndex = firstName.length - 1;
  return { findLength, findIndex };
}
console.log(findLengthOfString(myFirstName));
