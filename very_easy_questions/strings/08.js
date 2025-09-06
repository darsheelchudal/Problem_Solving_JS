// Replace a string with another string

// Algorithm
// 1. Take an original string and hold it in a variable
// 2. Take the word you want to replace and hold it in a variable
// 3. Take the word you want it to be replaced with and hold it in a variable
// 4. Define the function to replace the string taking three arguments
// 5. Check if the original string includes the substring you want to replace
// 6. if step 5 is true
// 7.       use the javascript replace method and replace the word and hold it in a variable
// 8.      return the result or output
// 9. else return null
// 10. Print the output

// Pseudocode
// function replaceStringWithAnother(originalStr, str1, str2 )
// if(originalStr.includes(str1)) replacedString = originalStr.replace(str1,str2)
// else return null
// print replacedString

// Source Code
const originalStr = "My favourite language is python";
const str1 = "python";
const str2 = "javascript";
function replaceStringWithAnother(originalStr, str1, str2) {
  if (originalStr.includes(str1)) {
    const replacedString = originalStr.replace(str1, str2);
    return replacedString;
  } else {
    return null;
  }
}

console.log(replaceStringWithAnother(originalStr, str1, str2));
