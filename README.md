📖 Project Summary
📝 Overview

Media Login Services is a Node.js + Express web app that demonstrates authentication using both local login (username/email & password) and GitHub OAuth login. It uses Passport.js for authentication, SQLite for user storage, and session persistence for keeping users logged in.

⚡ Features

🔐 Local login with username/email + password (with bcrypt hashing)

🐙 GitHub OAuth login (Authorize/Deny flow)

🚪 Logout and session persistence

⚠️ Error banners for wrong credentials or denied GitHub authorization

🎨 Clean, centered, professional login UI

🚀 Quick Start

Clone repo

git clone https://github.com/JPretz/media-login-services.git
cd media-login-services


Install dependencies

npm install


Configure .env

PORT=3000
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret


Run server

node server.js


Open http://localhost:3000
 in your browser

✅ Testing Scenarios

Wrong local login → shows Invalid username or password banner

GitHub login approved → Welcome page with username/email

GitHub login denied → GitHub login failed banner

Refresh → stays logged in

Logout → back to login page

📌 Media Login Services (Detailed Docs)
🚀 Setup Instructions
1. Clone Repository
git clone https://github.com/JPretz/media-login-services.git
cd media-login-services

2. Install Dependencies
npm install

3. Configure Environment Variables

Create a .env file in the root directory (not committed to GitHub). Use the .env.example as a template:

PORT=3000
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

Create a GitHub OAuth App:

Go to GitHub → Settings → Developer settings → OAuth Apps
.

Click New OAuth App.

Homepage URL: http://localhost:3000

Authorization callback URL: http://localhost:3000/auth/github/callback

Copy your Client ID and Client Secret into your .env.

4. Run the Server
node server.js


App will run at:
👉 http://localhost:3000

🧪 Testing Scenarios (Expanded)

Local Login (Wrong Credentials)

Enter wrong username/password → see banner ⚠️ Invalid username or password.

GitHub Login (Authorize)

Login with GitHub → redirected to Welcome Page with your username/email.

GitHub Login (Deny Authorization)

On GitHub OAuth screen → click Cancel/Deny → redirected back with banner ⚠️ GitHub login failed. Please try again.

Session Persistence

Login → refresh → still logged in.

Logout

Click Logout → redirected to login page.

📸 Screenshots / Recordings

✅ Login page (with GitHub + local login)

✅ Wrong credentials error banner

✅ GitHub Welcome page (with username & email)

✅ GitHub login failed banner

✅ Logout screen

🔧 Troubleshooting

Error: Invalid Client ID/Secret → Check .env matches your GitHub OAuth App keys.

Error: Cannot find module 'sqlite3' → Run npm install sqlite3.

Still logged out after refresh → Ensure express-session middleware is working correctly.

Accidentally pushed .env → Remove with git rm --cached .env, regenerate your GitHub secret, commit, and push again.

🌐 Project Repository

🔗 https://github.com/JPretz/media-login-services
