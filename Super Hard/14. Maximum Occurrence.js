/*

Maximum Occurrence
Given a string text. Write a function that returns the character with the highest frequency. If more than 1 character has the same highest frequency, return all those characters as an array. If there is no repetition in characters, return "No Repetition".

Examples
maxOccur("Computer Science") ➞ ['e']
maxOccur("Edabit") ➞ "No Repetition"
maxOccur("system admin") ➞ ['m', 's']
maxOccur("the quick brown fox jumps over the lazy dog") ➞ [' ']

Notes
Try to make use of the concept used in counting sort.

*/

function maxOccur(text) {
  // Create an object to store the frequency of each character
  const frequency = {};

  // Iterate over each character in the text
  for (let char of text) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Find the maximum frequency
  const maxFreq = Math.max(...Object.values(frequency));

  // Check if the maximum frequency is 1 (no repetition)
  if (maxFreq === 1) {
    return "No Repetition";
  }

  // Find all characters with the maximum frequency in the order of their first appearance
  const maxChars = [];
  for (let char of text) {
    if (frequency[char] === maxFreq && !maxChars.includes(char)) {
      maxChars.unshift(char);
    }
  }

  // Return the result
  return maxChars.length > 1 ? maxChars : [maxChars[0]];
}
