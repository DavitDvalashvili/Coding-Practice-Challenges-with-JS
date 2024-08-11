/*

Temperature Converter
Create a function that converts Celsius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"
convert("19°F") ➞ "-7°C"
convert("33") ➞ "Error"

Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
For the formulae to convert back and forth, check the Resources tab.

*/

function convert(deg) {
  if (deg.slice(-1) == "C") {
    return Math.round((+deg.slice(0, -2) * 9) / 5 + 32) + "°F";
  } else if (deg.slice(-1) == "F") {
    return Math.round(((+deg.slice(0, -2) - 32) * 5) / 9) + "°C";
  } else {
    return "Error";
  }
}
