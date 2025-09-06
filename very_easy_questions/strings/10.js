//Split a string by a space into an array

// Algorithm
// 1. Take a string with multiple spaces and hold it in a variable
// 2. Define a function to Split a string to array by space
// 3. Convert the string to array by using javascript split method and add space by " "
// 4. Hold it in result variable
// 5. Print the result

// Pseudocode
// function spaceOfStringToArray(str)
// resultArr = str.split(" ")
// return resultArr

// Source code
const str1 = "My name is darsheel Chudal and i live in lokanthali bhaktapur";
function spaceOfStringToArray(str1) {
  const convertToArr = str1.split(" ");
  return convertToArr;
}
console.log(spaceOfStringToArray(str1));
