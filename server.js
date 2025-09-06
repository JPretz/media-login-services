import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Strategy as LocalStrategy } from "passport-local";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import db from "./db.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Passport serialization
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.get("SELECT * FROM users WHERE id = ?", id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// GitHub OAuth Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let email =
          profile.emails && profile.emails.length > 0
            ? profile.emails[0].value
            : null;

        let user = await db.get(
          "SELECT * FROM users WHERE githubId = ?",
          profile.id
        );

        if (!user) {
          const result = await db.run(
            "INSERT INTO users (username, email, githubId) VALUES (?, ?, ?)",
            profile.username,
            email,
            profile.id
          );
          user = {
            id: result.lastID,
            username: profile.username,
            email,
          };
        }
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

// Local Username/Password Strategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.get(
        "SELECT * FROM users WHERE username = ? OR email = ?",
        username,
        username
      );
      if (!user) return done(null, false, { message: "Invalid credentials" });

      const match = await bcrypt.compare(password, user.password || "");
      if (!match) return done(null, false, { message: "Invalid credentials" });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// Root route (login + error handling + welcome)
app.get("/", (req, res) => {
  const error = req.query.error;
  let msg = "";
  if (error === "local") msg = "⚠️ Invalid username or password";
  if (error === "github") msg = "⚠️ GitHub login failed. Please try again.";

  if (req.isAuthenticated()) {
    // Logged-in view
    res.send(`
      <div style="max-width:500px; margin:80px auto; font-family:sans-serif; text-align:center;">
        <h1 style="margin-bottom:10px;">Welcome ${req.user.username}</h1>
        <p style="margin-bottom:20px;">Email: ${req.user.email || "N/A"}</p>
        <a href="/logout">
          <button style="padding:10px 20px; background:#f44336; color:#fff; border:none; border-radius:5px; cursor:pointer;">
            Logout
          </button>
        </a>
      </div>
    `);
  } else {
    // Login view
    res.send(`
      <div style="max-width:400px; margin:80px auto; font-family:sans-serif; text-align:center; padding:25px; border:1px solid #ddd; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
        <h1 style="margin-bottom:20px;">Welcome to the Media Login</h1>
        ${
          msg
            ? `<div style="background:#f8d7da; color:#721c24; padding:10px; border-radius:5px; margin-bottom:20px; font-weight:bold;">
                ${msg}
               </div>`
            : ""
        }
        <div style="margin-bottom:15px;">
          <a href="/auth/github">
            <button style="width:100%; padding:12px; background:#24292f; color:#fff; border:none; border-radius:5px; cursor:pointer; font-size:15px;">
              Login with GitHub
            </button>
          </a>
        </div>
        <p style="margin:15px 0; color:#666;">— or login with username/email —</p>
        <form method="POST" action="/login" style="margin-bottom:20px;">
          <input type="text" name="username" placeholder="Username or Email" required
            style="display:block; width:100%; margin-bottom:12px; padding:12px; border:1px solid #ccc; border-radius:5px;"/>
          <input type="password" name="password" placeholder="Password" required
            style="display:block; width:100%; margin-bottom:12px; padding:12px; border:1px solid #ccc; border-radius:5px;"/>
          <button type="submit" style="width:100%; padding:12px; background:#007bff; color:#fff; border:none; border-radius:5px; cursor:pointer; font-size:15px;">
            Login
          </button>
        </form>
        <div>
          <a href="/signup">
            <button style="width:100%; padding:12px; background:#28a745; color:#fff; border:none; border-radius:5px; cursor:pointer; font-size:15px;">
              Signup
            </button>
          </a>
        </div>
      </div>
    `);
  }
});

// Signup page
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});

// Handle signup form
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existing = await db.get(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      username,
      email
    );
    if (existing) {
      return res.send("⚠️ Username or email already exists. Try again.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.run(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      username,
      email,
      hashedPassword
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong!");
  }
});

// Local login
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/?error=local" }),
  (req, res) => {
    res.redirect("/");
  }
);

// GitHub login
app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// ✅ GitHub callback with proper error handling
app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/?error=github", // Deny/cancel → back to login with banner
  }),
  (req, res) => {
    res.redirect("/github-welcome"); // Success → GitHub Welcome Page
  }
);

// GitHub welcome page
app.get("/github-welcome", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.send(`
    <div style="max-width:500px; margin:80px auto; font-family:sans-serif; text-align:center;">
      <h1 style="color:#333;">GitHub Welcome Page</h1>
      <h2>Welcome ${req.user.username}</h2>
      <p>Email: ${req.user.email || "N/A"}</p>
      <a href="/logout">
        <button style="padding:10px 20px; background:#f44336; color:#fff; border:none; border-radius:5px; cursor:pointer;">
          Logout
        </button>
      </a>
    </div>
  `);
});

// Logout
app.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/");
  });
});

// Start server
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
