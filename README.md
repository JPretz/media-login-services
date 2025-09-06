# Media Login Services

This project demonstrates integration of multiple login methods using **OAuth 2.0 (GitHub & Google)**, **local username/password authentication**, and **session persistence** with SQLite.

---

## 🚀 Features
- GitHub login with OAuth 2.0
- Google login with OAuth 2.0
- Local login (username/password, hashed with bcrypt)
- Secure session persistence with `express-session`
- Error handling for failed logins
- Responsive login interface
- SQLite database integration

---

## ⚙️ Setup

### 1. Clone repo & install dependencies
```bash
git clone https://github.com/JPretz/media-login-services.git
cd media-login-services
npm install


2. Install Dependencies
bash
Copy code
npm install

3. Configure environment variables

Copy .env.example → .env and add your credentials:

SESSION_SECRET=your-secret-key

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GITHUB_CALLBACK=http://localhost:3000/auth/github/callback

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK=http://localhost:3000/auth/google/callback

4. Run database migration
node migrate.js

5. Start the server
npm start

Your app will run at: http://localhost:3000


6. 🧪 Testing Authentication
🔹 Local Login

Invalid credentials →

🔹 GitHub Login

Denied access →

Successful login →

🔹 Google Login

OAuth consent screen →

Account chooser →

Invalid credentials →

Successful login →

Welcome page before logout →

After logout →

🔒 Security Features

Session persistence with express-session

Secure token handling using Passport strategies

Database storage for GitHub & Google IDs

Error messages for denied or failed logins

Environment variables (.env) used for client secrets

📄 Project URL

GitHub Repository: https://github.com/JPretz/media-login-services



🖼️ Screenshots
🔐 Local Login

Invalid username/password


🐙 GitHub OAuth

GitHub Login Denied


GitHub Login Success


🌐 Google OAuth

Google Consent Screen


Google Account Selection


Alternate Google Account Selection


Google Login Success


Google Login Denied


Google Login Error (Invalid Credentials)


Google Welcome After Choosing Account


Google Welcome Before Logout


Google Welcome Before Logout (Alternate)


Google Welcome After Logout


📌 Session & Logout

Session Persistence


Logout (Before)


Logout (After)


📦 Submission Details

Project Repo URL: https://github.com/JPretz/media-login-services

Included: Source code, .env.example, screenshots, README

Implements: Local + GitHub + Google OAuth login, session persistence, error handling