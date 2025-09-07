// Slice the last 5 characters of a string.

// Algorithm
// 1. Take a string and hold it in a variable
// 2. Define a function that takes the argument as a string
// 3. Take a string and slice last 5 characters
// 4. hold it in a variable callded slicedString
// 5. Print or return slicedString

// Pseudocode
// function lastFiveCharacterSliced(string)
// slicedString = string.slice(string.length - 5 , string.length)
// return slicedString

// Source code
const myName = "Darsheel";

function lastFiveCharacterSliced(name) {
  const slicedString = name.slice(name.length - 5, name.length);
  return slicedString;
}
console.log(lastFiveCharacterSliced(myName));

// alternative method using negative value
const myName1 = "Darsheel";
function lastFiveCharacterSliced(name) {
  const slicedString = name.slice(-5); //Here, .slice(-5) means "start 5 characters from the end and go till the end".
  return slicedString;
}
console.log(lastFiveCharacterSliced(myName1));
