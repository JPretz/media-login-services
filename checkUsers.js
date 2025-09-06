import sqlite3 from "sqlite3";
import { open } from "sqlite";

const run = async () => {
  const db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  const users = await db.all("SELECT id, username, email, githubId FROM users");
  console.log("📂 Users in database:");
  console.table(users);

  await db.close();
};

run().catch(err => {
  console.error("❌ Error reading users:", err);
});
