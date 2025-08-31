//Print the first character of a string

//Algorithm
// 1. Take a string and hold it in a variable
// 2. Access the first character using index 0
// 3. Print or return that character

//PseudoCode
// function printFirstCharacter(string)
//           firstChar = string[0]
//           print firstChar

//Source Code
// Method 1
// const myString = "Darsheel Chudal";
// function printFirstCharacter(name) {
//   const firstChar = name[0];
//   return firstChar;
// }
// console.log(printFirstCharacter(myString));
//You cannot assign a character like name[0] = "X" (strings are immutable).
//But you can read name[0], name[1], etc.

// Method 2
const myName = "Darsheel Chudal";
function printFirstCharacter(name) {
  const firstChar = name;
  return firstChar;
}
console.log(printFirstCharacter(myName.charAt(0)));
