// Convert a number to a string and print it.

// Algorithm
// 1. Take a number and hold it in a variable
// 2. Define a function that takes an argument as a number
// 3. Declare a variable and assign  the number to it.
// 4. Use the javascript method to convert it to String
// 5. print or return the string

// Pseudo-code
// function convertNumberToString(number)
// const toString = number.toString()
// return the string

// Source code
const randomNumber = 14;
function convertToString(randomNumber) {
  const toString = randomNumber.toString();
  console.log(typeof toString);
  return toString;
}
console.log(convertToString(randomNumber));
