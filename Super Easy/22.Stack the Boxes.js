/*

Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...
Stack the Boxes
Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

Examples
stackBoxes(1) ➞ 1
stackBoxes(2) ➞ 4
stackBoxes(0) ➞ 0

Notes
Step n is a positive integer.

*/

function stackBoxes(n) {
  return Math.pow(n, 2);
}
