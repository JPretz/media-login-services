import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = await open({
  filename: "./database.sqlite",
  driver: sqlite3.Database,
});

// Create users table
await db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT,
    password TEXT,
    githubId TEXT
  )
`);

console.log("📂 Database ready");

export default db;

