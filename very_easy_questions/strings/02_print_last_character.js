//Print the last character of a string

//Algorithm
// 1. Assign the string to a variable
// 2. Access the last element of the string, string[string.length - 1]
// 3. Print or return the last element

//PseudoCode
//   function printLastCharacter(string);
//   lastChar = string[string.length - 1]
//   print lastChar

//Source Code
// Method 1
// const myString = "Darsheel Chudal";
// function printLastCharacter(name) {
//   const lastChar = name[name.length - 1];
//   return lastChar;
// }
// console.log(printLastCharacter(myString));

//Method 2
const myName = "Darsheels Chudal";
function printLastCharacter(name) {
  const lastChar = name;
  return lastChar;
}
console.log(printLastCharacter(myName.charAt(myName.length - 1)));
