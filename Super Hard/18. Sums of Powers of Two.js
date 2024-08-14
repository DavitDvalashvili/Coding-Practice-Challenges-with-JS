/*

Sums of Powers of Two
Every number can be expressed as the sum between unique powers of two. For example, the number 21 can be expressed as 1 + 4 + 16, which can also be written as 2^0 + 2^2 + 2^4.
Create a function that returns a sorted list of powers of two, which add together to make n.

Examples
sumsPowersTwo(21) ➞ [1, 4, 16]
sumsPowersTwo(8) ➞ [8]
sumsPowersTwo(63) ➞ [1, 2, 4, 8, 16, 32]

Notes
Tests will only include positive whole numbers.

*/

function sumsPowersTwo(n) {
  const result = [];

  // Helper function to find the largest power of two <= n
  function findLargestPowerOfTwo(n) {
    let power = 0;
    while (Math.pow(2, power) <= n) {
      power++;
    }
    return Math.pow(2, power - 1);
  }

  // Recursive function to decompose the number into powers of two
  function decompose(n) {
    if (n <= 0) return;

    const largestPower = findLargestPowerOfTwo(n);
    result.push(largestPower);
    decompose(n - largestPower);
  }

  decompose(n);
  return result.sort((a, b) => a - b); // Return sorted result
}

console.log(sumsPowersTwo(21));
