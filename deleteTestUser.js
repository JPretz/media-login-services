import sqlite3 from "sqlite3";
import { open } from "sqlite";

const run = async () => {
  const db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  await db.run("DELETE FROM users WHERE username = ?", "testuser");
  console.log("✅ testuser deleted");

  await db.close();
};

run().catch(err => console.error("❌ Error:", err));
