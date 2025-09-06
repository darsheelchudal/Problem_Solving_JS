// Check if a string includes a substring.

// Algorithm
// 1. Take a mainString and hold it in a variable
// 2. Take a subString and hold it in a variable
// 3. Define a function with two parameters subString and mainString as an argument
// 4. check if mainString includes SubString
// 5. If a substring exists, it returns true  else false
// 6. Call the function with required arguments
// 7. Print or return the result

//Pseudocode
// function checkStringIncludesSubString(mainString,subString)
// checkString = mainString.includes(subString)
// print checkString (boolean)

// Source code
function checkStringIncludesSubString(mainString, subString) {
  const checkString = mainString.includes(subString);
  return checkString
    ? { result: true, message: "String includes a substring" }
    : { result: false, message: "String doesn't include a substring" };
}
console.log(checkStringIncludesSubString("Darsheel", "a"));
