import db from "./db.js";

const runMigration = async () => {
  try {
    // Add githubId column if it doesn't exist
    await db.run("ALTER TABLE users ADD COLUMN githubId TEXT;").catch(err => {
      if (!err.message.includes("duplicate column")) throw err;
      console.log("⚠️ Column githubId already exists.");
    });

    // Add googleId column if it doesn't exist
    await db.run("ALTER TABLE users ADD COLUMN googleId TEXT;").catch(err => {
      if (!err.message.includes("duplicate column")) throw err;
      console.log("⚠️ Column googleId already exists.");
    });

    console.log("✅ Migration complete: githubId & googleId columns ensured.");
  } catch (err) {
    console.error("❌ Migration failed:", err.message);
  } finally {
    process.exit();
  }
};

runMigration();
