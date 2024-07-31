/*

Get Notes Distribution
Create a function that takes an array of students and returns an object representing their notes distribution. Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5

Example
getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
] ➞ {
  5: 3,
  3: 2,
  2: 1
})

Notes
Try doing that with filter + reduce.

*/

function getNotesDistribution(students) {
  const distribution = {};
  let notes = students
    .map((student) => student.notes.filter((n) => n > 0 && n <= 5))
    .flat();

  notes.forEach((e) => {
    if (!distribution[e]) {
      distribution[e] = 0;
    }
    distribution[e]++;
  });

  return distribution;
}
