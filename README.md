# 📖 Media Login Services

A Node.js + Express app that supports **local authentication** (username/email + password) and **GitHub OAuth login** using Passport.js.

---

## 🚀 Quick Test Guide for Professor

Follow these steps to test the login services quickly:

1. **Start the server**
   ```bash
   node server.js
Server runs at: http://localhost:3000

Test Local Login

Go to the home page.

Enter a valid username/email + password → redirects to welcome page.

Enter wrong credentials → shows red banner: ⚠️ Invalid username or password.

Test Signup

Visit /signup from the homepage.

Create a new account with username, email, and password.

Login using the new credentials.

Test GitHub Login

Click Login with GitHub.

If approved → redirects to GitHub Welcome Page showing your GitHub username/email.

If authorization denied → redirects back to / with red banner:
⚠️ GitHub login failed. Please try again.

Logout

Click Logout on either welcome page.

You’ll be redirected back to the login screen.

📌 Features

Local signup & login with bcrypt password hashing

GitHub OAuth login (passport-github2)

Session persistence with express-session

Error banners:

⚠️ Invalid username or password

⚠️ GitHub login failed. Please try again.

Logout functionality

⚙️ Setup Instructions
1. Clone Repository
git clone https://github.com/JPretz/media-login-services.git
cd media-login-services

2. Install Dependencies
npm install

3. Configure Environment Variables

Create a .env file in the root folder:

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
SESSION_SECRET=supersecret

4. Run the App
node server.js


Then visit: http://localhost:3000

🛠 Troubleshooting

GitHub Login Denied

If you cancel/deny GitHub authorization → redirected to / with banner:
⚠️ GitHub login failed. Please try again.

Invalid Local Login

Wrong username/password → red banner on homepage.

Session Issues

If you get logged out after refresh, check your SESSION_SECRET in .env.

OAuth Redirect URI

Make sure your GitHub OAuth app callback is set to:

http://localhost:3000/auth/github/callback

🌐 Project URL

GitHub Repository: https://github.com/JPretz/media-login-services

---

## 📸 Screenshots

### Test Local Login (Wrong Credentials)
![Invalid login error](screenshots/local-login-error.png)

### Test GitHub Login (Success)
![GitHub success](screenshots/github-success.png)

### Test GitHub Login (Deny Authorization)
![GitHub deny](screenshots/github-deny.png)

### Test Session Persistence
![Session persistence](screenshots/session-persistence.png)

### Test Logout
**Before Logout (Welcome Page)**  
![Logout before](screenshots/logout-before.png)

**After Logout (Login Page)**  
![Logout after](screenshots/logout-after.png)
