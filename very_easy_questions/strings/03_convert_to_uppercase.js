// Convert a string to uppercase.

//Algorithm
//Steps
// 1 - Take a string and hold it in a variable
// 2 - Define function to convert the string to uppercase
// 3 - Use string default method in javascript
// 4 - print or Return uppercase string

// Pseudocode
// function convertToUpperCase(string)
// uppercase = string.toUpperCase()
// print uppercase

//Source code
const myName = "Darsheel";
function convertToUpperCase(name) {
  const upperCase = name.toUpperCase();
  return upperCase;
}
console.log(convertToUpperCase(myName));
