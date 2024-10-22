/*

Remove Repeated Characters
Create a function that will remove any repeated character(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.

Examples
unrepeated("hello") ➞ "helo"
unrepeated("aaaaa") ➞ "a"
unrepeated("WWE!!!") ➞ "WE!"
unrepeated("call 911") ➞ "cal 91"

Notes
No more than two words will be passed.
Try to use new data type introduced in ES6.
Notice that a string is iterable.

*/

function unrepeated(str) {
  let newStr = "";
  for (char of str) {
    if (!newStr.includes(char)) {
      newStr += char;
    }
  }

  return newStr;
}
