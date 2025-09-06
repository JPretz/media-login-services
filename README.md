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


📸 Screenshots / Testing Evidence

## Screenshots

### Local Login (Invalid Credentials)
[![Local Login Error](screenshots/local-login-error.png)](screenshots/local-login-error.png)

### GitHub OAuth
- **Deny**  
[![GitHub Deny](screenshots/github-deny.png)](screenshots/github-deny.png)

- **Success**  
[![GitHub Success](screenshots/github-success.png)](screenshots/github-success.png)

### Google OAuth
- **Consent Screen / Account Chooser**  
[![Google OAuth Consent Screen Chooser](screenshots/Google%20OAuth%202.0%20Consent%20Screen%20Chooser.png)](screenshots/Google%20OAuth%202.0%20Consent%20Screen%20Chooser.png)

- **Account Chosen**  
[![Google Account Chosen](screenshots/Google_chossen%20account.png)](screenshots/Google_chossen%20account.png)

- **Deny**  
[![Google Deny](screenshots/google-deny.png)](screenshots/google-deny.png)

- **Success**  
[![Google Success](screenshots/google-success.png)](screenshots/google-success.png)

### Welcome Page
- **Before Logout (Google)**  
[![Welcome Page Before Logout Google](screenshots/welcome%20page%20befoe%20logout%20google.png)](screenshots/welcome%20page%20befoe%20logout%20google.png)

- **After Logout**  
[![Welcome Page After Logout](screenshots/Welcomepage%20after%20logout.png)](screenshots/Welcomepage%20after%20logout.png)

### Session Persistence
[![Session Persistence](screenshots/session-persistence.png)](screenshots/session-persistence.png)

### Logout Flow
- **Before Logout**  
[![Logout Before](screenshots/logout-before.png)](screenshots/logout-before.png)

- **After Logout**  
[![Logout After](screenshots/logout-after.png)](screenshots/logout-after.png)


📦 Submission Details

Project Repo URL: https://github.com/JPretz/media-login-services

Included: Source code, .env.example, screenshots, README

Implements: Local + GitHub + Google OAuth login, session persistence, error handling