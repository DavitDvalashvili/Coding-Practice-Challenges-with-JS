/*

Pile of Cubes
Mubashir needs your help to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
Given the total volume m of the building, can you find the number of cubes n required for the building?
In other words, you have to return an integer n such that:
n^3 + (n-1)^3 + ... + 1^3 == m
Return null if there is no such number.

Examples
pileCubes(1071225) ➞ 45
pileCubes(4183059834009) ➞ 2022
pileCubes(16) ➞ null

Notes
N/A

*/

function pileCubes(m) {
  let n = 0;
  let accumulator = 0;

  while (true) {
    accumulator += n * n * n;
    if (m == accumulator) {
      return n;
    } else if (m < accumulator) {
      return null;
    }
    n++;
  }
}
