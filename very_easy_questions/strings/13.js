// Get the index of a character in a string.

// Algorithm
// 1. Take a string and hold it in a variable
// 2. Define a function which takes the argument as a string
// 3. take a string and find the index based on the element
// 4. hold it in a variable
// 5. Print or return the variable

// Pseudocode
// function getIndexOfCharacter(string, charIndex)
//  findIndex = string.charAt(charIndex)
//  print findIndex

// Source code
const myNiece = "Divyanshi";
function getIndexOfCharacter(niece, charIndex) {
  const findIndex = niece.indexOf(charIndex); // converted to array
  return findIndex;
}
console.log(getIndexOfCharacter(myNiece, "a"));
