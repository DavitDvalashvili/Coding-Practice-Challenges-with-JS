/*

Algebra Sequence — Boxes
Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
Step 0: Start with 0
Step 1: Add 3
Step 2: Subtract 1
Repeat Step 1 & 2 ...

Examples
boxSeq(0) ➞ 0
boxSeq(1) ➞ 3
boxSeq(2) ➞ 2

Notes
Step (the input) is always a positive integer (or zero).
For an odd step add 3, for an even step subtract 1.

*/

function boxSeq(step) {
  let boxes = 0;
  for (let i = 1; i <= step; i++) {
    if (i % 2 === 1 && i) {
      boxes += 3;
    } else {
      boxes -= 1;
    }
  }
  return boxes;
}
