// Concatenate two strings

// Algorithn
// 1. take the first string and hold it in a variable
// 2. take the second string and hold it in a variable
// 3. define a function to replace the string that takes two arguments
// 4. concatenate the two strngs and hold it in a variable
// 5. print the result

// Pseudocode
// function concatenateTwoStrings(str1, str2)
// concatString = str1.concat(" ", str2)
// return concatString

// Source code
const str1 = "Darsheel";
const str2 = "Chudal";
function concatenateTwoStrings(str1, str2) {
  const concatString = str1.concat(" ", str2);
  return concatString;
}
console.log(concatenateTwoStrings(str1, str2));
