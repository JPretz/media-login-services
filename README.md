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
![Local Login Error](https://github.com/JPretz/media-login-services/blob/main/screenshots/local-login-error.png?raw=true)

🐙 GitHub OAuth  
GitHub Login Denied  
![GitHub Deny](https://github.com/JPretz/media-login-services/blob/main/screenshots/github-deny.png?raw=true)  

GitHub Login Success  
![GitHub Success](https://github.com/JPretz/media-login-services/blob/main/screenshots/github-success.png?raw=true)

🌐 Google OAuth  
Google Consent Screen  
![Google Consent Screen](https://github.com/JPretz/media-login-services/blob/main/screenshots/Google%20OAuth%202.0%20Consent%20Screen%20Chooser.png?raw=true)  

Google Account Selection  
![Google Account Selection](https://github.com/JPretz/media-login-services/blob/main/screenshots/chossen%20account.png?raw=true)  

Alternate Google Account Selection  
![Google Account Alternate](https://github.com/JPretz/media-login-services/blob/main/screenshots/Google_chossen%20account.png?raw=true)  

Google Login Success  
![Google Success](https://github.com/JPretz/media-login-services/blob/main/screenshots/google-success.png?raw=true)  

Google Login Denied  
![Google Deny](https://github.com/JPretz/media-login-services/blob/main/screenshots/google-deny.png?raw=true)  

Google Login Error (Invalid Credentials)  
![Google Error Credentials](https://github.com/JPretz/media-login-services/blob/main/screenshots/error%20username%20passwrod%20google.png?raw=true)  

Google Welcome After Choosing Account  
![Google Welcome After Choosing Account](https://github.com/JPretz/media-login-services/blob/main/screenshots/Welcome%20account%20after%20choosen%20account.png?raw=true)  

Google Welcome Before Logout  
![Google Welcome Before Logout](https://github.com/JPretz/media-login-services/blob/main/screenshots/welcome%20page%20befoe%20logout%20google.png?raw=true)  

Google Welcome Before Logout (Alternate)  
![Google Welcome Before Logout Alternate](https://github.com/JPretz/media-login-services/blob/main/screenshots/welcome%20page%20before%20logout%20_google.png?raw=true)  

Google Welcome After Logout  
![Google Welcome After Logout](https://github.com/JPretz/media-login-services/blob/main/screenshots/Welcomepage%20after%20logout.png?raw=true)  

📌 Session & Logout  
Session Persistence  
![Session Persistence](https://github.com/JPretz/media-login-services/blob/main/screenshots/session-persistence.png?raw=true)  

Logout (Before)  
![Logout Before](https://github.com/JPretz/media-login-services/blob/main/screenshots/logout-before.png?raw=true)  

Logout (After)  
![Logout After](https://github.com/JPretz/media-login-services/blob/main/screenshots/logout-after.png?raw=true)


📦 Submission Details

Project Repo URL: https://github.com/JPretz/media-login-services

Included: Source code, .env.example, screenshots, README

Implements: Local + GitHub + Google OAuth login, session persistence, error handling