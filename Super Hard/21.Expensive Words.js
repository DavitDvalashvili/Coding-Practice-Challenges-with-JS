/*

Each letter in a sentence is worth its position in the alphabet (i.e. a = 1, b = 2, c = 3, etc...). However, if a word is all in UPPERCASE, the value of that word is doubled.
Create a function which returns the value of a sentence.

getSentenceValue("abc ABC Abc") ➞ 24
// a = 1, b = 2, c = 3
// abc = 1 + 2 + 3 = 6
// ABC = (1+2+3) * 2 = 12 (ALL letters are in uppercase)
// Abc = 1 + 2 + 3 = 6 (NOT ALL letters are in uppercase)
// 6 + 12 + 6 = 24

Examples
getSentenceValue("HELLO world") ➞ 176
getSentenceValue("Edabit is LEGENDARY") ➞ 251
getSentenceValue("Her seaside sea-shelling business is really booming!") ➞ 488

Notes
Ignore spaces and punctuation.
Remember that the value of a word isn't doubled unless all the letters in it are uppercase.

*/

function getSentenceValue(str) {
  let Lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let Uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let result = 0;
  let arrText = str.split(" ");

  for (let word of arrText) {
    if (word == word.toUpperCase()) {
      for (char of word) {
        result += 2 * (Uppercase.indexOf(char) + 1);
      }
    } else {
      for (char of word) {
        if (Lowercase.includes(char)) {
          result += Lowercase.indexOf(char) + 1;
        } else {
          result += Uppercase.indexOf(char) + 1;
        }
      }
    }
  }
  return result;
}
