// resetUsers.js
import bcrypt from "bcrypt";
import db from "./db.js";

const password = "mypassword123"; // you can change this
const hashedPassword = await bcrypt.hash(password, 10);

// Delete old test user with same email
await db.run("DELETE FROM users WHERE email = ?", ["jjp6846@psu.edu"]);

// Insert a new local user
await db.run(
  `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
  ["jjp6846@psu.edu", "jjp6846@psu.edu", hashedPassword]
);

console.log("✅ Local user created:");
console.log("   Username/Email: jjp6846@psu.edu");
console.log("   Password: mypassword123");

process.exit();
