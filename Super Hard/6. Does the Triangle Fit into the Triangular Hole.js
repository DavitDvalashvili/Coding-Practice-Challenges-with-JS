/*

Does the Triangle Fit into the Triangular Hole?
Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

Examples
doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

Notes
Triangle fits if it has the same or smaller size as the hole.
The function should return false if the triangle with that dimensions is not possible.

*/
function doesTriangleFit(brick, hole) {
  brick.sort((a, b) => a - b);
  hole.sort((a, b) => a - b);

  let pBrick = (brick[0] + brick[1] + brick[2]) / 2;
  let areaBrick = Math.sqrt(
    pBrick * (pBrick - brick[0]) * (pBrick - brick[1]) * (pBrick - brick[2])
  );
  let pHole = (hole[0] + hole[1] + hole[2]) / 2;
  let areaHole = Math.sqrt(
    pHole * (pHole - hole[0]) * (pHole - hole[1]) * (pHole - hole[2])
  );

  if (
    areaHole < areaBrick ||
    brick[0] + brick[1] < brick[2] ||
    hole[0] + hole[1] < hole[2]
  ) {
    return false;
  } else {
    return true;
  }
}
