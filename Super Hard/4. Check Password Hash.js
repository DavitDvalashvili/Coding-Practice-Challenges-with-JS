/*

Check Password Hash
Write a function that takes a username and password and checks the list userPassDb for a match. The list stores the passwords as a hash using the SHA1 algorithm. Return true for a match and false otherwise.

Examples
userPassDb = [{"username" : "myUsername", "pass_hash" : "5413ee24723bba2c5a6ba2d0196c78b3ee4628d1"}]
checkPass("myUsername", "myPassword") ➞ true
checkPass("myUsername", "wrongPassword") ➞ false

Notes
N/A

*/

const crypto = require("crypto");

function checkPass(username, password) {
  const hash = crypto.createHash("sha1").update(password).digest("hex");
  for (let db of userPassDb)
    if (db.username === username && db.pass_hash === hash) return true;
  return false;
}
