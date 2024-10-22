/*

Sum of Odd and Even Numbers
Write a function that takes an array of numbers and returns an array with two elements:
The first element should be the sum of all even numbers in the array.
The second element should be the sum of all odd numbers in the array.

Example
sumOddAndEven([1, 2, 3, 4, 5, 6]) ➞ [12, 9]
// 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9
sumOddAndEven([-1, -2, -3, -4, -5, -6]) ➞ [-12, -9])
sumOddAndEven([0, 0]) ➞ [0, 0])

Notes
Count 0 as an even number.

*/

function sumOddAndEven(arr) {
  const even = arr.filter((num) => num % 2 == 0);
  const odd = arr.filter((num) => num % 2 != 0);

  let sumEven = even.reduce((accum, value) => {
    return accum + value;
  }, 0);

  let sumOdd = odd.reduce((accum, value) => {
    return accum + value;
  }, 0);

  return [sumEven, sumOdd];
}
