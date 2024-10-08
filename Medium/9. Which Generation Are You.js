/*

Which Generation Are You?
Try finding your ancestors and offspring with code.
Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".

Examples
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"

Notes
Check the Resources tab for helpful hints.
Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter

*/

function generation(x, y) {
  const argsArray = Array.from(arguments).toString();
  switch (argsArray) {
    case "-3,m":
      return "great grandfather";
    case "-3,f":
      return "great grandmother";
    case "-2,m":
      return "grandfather";
    case "-2,f":
      return "grandmother";
    case "-1,m":
      return "father";
    case "-1,f":
      return "mother";
    case "0,f":
      return "me!";
    case "0,m":
      return "me!";
    case "1,f":
      return "daughter";
    case "1,m":
      return "son";
    case "2,f":
      return "granddaughter";
    case "2,m":
      return "grandson";
    case "3,m":
      return "great grandson";
    case "3,f":
      return "great granddaughter";
    default:
      return "unknown";
  }
}

console.log(generation(2, "m"));
