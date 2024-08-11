/*

WordRank Scoring System
Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.

Examples
wordRank("The quick brown fox.") ➞ "brown"
wordRank("Nancy is very pretty.") ➞ "pretty"
wordRank("Check back tomorrow, man!") ➞ "tomorrow"
wordRank("Wednesday is hump day.") ➞ "Wednesday"

Notes
If two words score the same, return the word that appears first in the original string.
The returned string should only contain alphabetic characters (a-z).
Preserve case in the returned string (see 4th example above).

*/

let ranking = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function wordRank(str) {
  let rankArr = [];
  let stringArr = str
    .toLowerCase()
    .replace(/[^a-zA-Z\s]/g, "")
    .split(" ");
  stringArr.map((word) => {
    let rank = word.split("").reduce((accumulator, current) => {
      return (accumulator += ranking[current]);
    }, 0);

    rankArr.push(rank);
  });
  let index = rankArr.indexOf(Math.max(...rankArr));
  return str.replace(/[^a-zA-Z\s]/g, "").split(" ")[index];
}
