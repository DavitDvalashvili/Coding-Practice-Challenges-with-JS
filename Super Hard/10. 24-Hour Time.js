/*

24-Hour Time
Write a function that receives the time in 12-hour AM/PM format and returns a string representation of the time in military (24-hour) format.

Examples
convertTime(“07:05:45PM”) ➞ “19:05:45”
convertTime(“12:40:22AM”) ➞ “00:40:22”
convertTime(“12:45:54PM”) ➞ “12:45:54”

Notes
Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

*/

function convertTime(str) {
  let newTime = str.slice(0, -2).split(":");
  if (str.slice(-2) == "PM" && str.slice(0, -2).split(":")[0] == "12") {
    newTime[0] = "12";
  } else if (str.slice(-2) == "PM") {
    newTime[0] = String(parseInt(str.slice(0, -2).split(":")[0]) + 12);
    newTime.join(": ");
  } else if (str.slice(-2) == "AM" && str.slice(0, -2).split(":")[0] == "12") {
    newTime[0] = "00";
  } else {
    return str.slice(0, -2);
  }
  return newTime.join(":");
}
convertTime("12:40:22PM");
