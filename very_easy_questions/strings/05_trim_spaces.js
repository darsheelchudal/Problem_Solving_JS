//Trim spaces from a string. 

// Algorithm
// 1. Take a string and hold it in a variable
// 2. Define a function to trim the space of the string
// 3. use the javascript trim method
// 4. print or return the result

//Pseudocode
// function trimSpaces(string)
// trimSpace = string.trim()
// print trimSpace

// Source code
const myCollegeName = "   ORCHID International College    ";
function trimSpaces(collegeName) {
  const trimSpace = collegeName.trim();
  return trimSpace;
}
console.log(trimSpaces(myCollegeName));
