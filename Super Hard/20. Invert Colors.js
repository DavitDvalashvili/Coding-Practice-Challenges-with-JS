/*

Invert Colors
Create a function that inverts the rgb values of a given tuple.

Examples
colorInvert([255, 255, 255]) ➞ [0, 0, 0]
// (255, 255, 255) is the color white.
// The opposite is (0, 0, 0), which is black.
colorInvert([0, 0, 0]) ➞ [255, 255, 255]
colorInvert([165, 170, 221]) ➞ [90, 85, 34]

Notes
255 is the max value of a single color channel.

*/

function colorInvert(rgb) {
  return [255 - rgb[0], 255 - rgb[1], 255 - rgb[2]];
}
