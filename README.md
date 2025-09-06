# Media Login Services

This project demonstrates integrating multiple authentication methods:
- **Local login** with username & password  
- **GitHub login (OAuth)**  
- **Google login (OAuth)**  

It includes session management, error handling, secure handling of OAuth tokens, and a responsive login interface.

---

 🚀 Setup Instructions

 1. Clone repository
```bash
git clone https://github.com/JPretz/media-login-services.git
cd media-login-services

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

### Local Login
- Local login error: ![Local Login Error](./screenshots/local-login-error.png)
- Session persistence after login: ![Session Persistence](./screenshots/session-persistence.png)
- Logout before action: ![Logout Before](./screenshots/logout-before.png)
- Logout after action: ![Logout After](./screenshots/logout-after.png)

---

### GitHub Login
- GitHub login denied: ![GitHub Deny](./screenshots/github-deny.png)
- GitHub login successful: ![GitHub Success](./screenshots/github-success.png)

---

### Google Login
- Google login denied/cancelled: ![Google Deny](./screenshots/google-deny.png)
- Google login successful: ![Google Success](./screenshots/google-success.png)
- Google account chooser: ![Google Account Chooser](./screenshots/Google_chossen account.png)
- Google OAuth 2.0 consent screen: ![Google Consent Screen](./screenshots/Google OAuth 2.0 Consent Screen Chooser.png)
- Google welcome page before logout: ![Google Welcome](./screenshots/welcome page before logout _google.png)
- Welcome page after logout: ![Welcome After Logout](./screenshots/Welcomepage after logout.png)


📦 Submission Details

Project Repo URL: https://github.com/JPretz/media-login-services

Included: Source code, .env.example, screenshots, README

Implements: Local + GitHub + Google OAuth login, session persistence, error handling