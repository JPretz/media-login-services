Media Login Services

This project demonstrates secure multi-login authentication using:

Local login (username/password)

GitHub OAuth 2.0

Google OAuth 2.0

It uses Node.js, Express, Passport.js, and SQLite with proper session management and password hashing.

🚀 Features

Local login with hashed passwords (bcrypt)

GitHub login via OAuth 2.0

Google login via OAuth 2.0

Session persistence across logins

Error handling with friendly messages

Secure token + data handling

Screenshots of successful logins

⚙️  Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/JPretz/media-login-services.git
cd media-login-services
2. Install Dependencies
bash
Copy code
npm install
3. Environment Variables
Copy .env.example into a new .env file and update with your credentials:

bash
Copy code
cp .env.example .env
GitHub OAuth Setup
Go to GitHub Developer Settings → OAuth Apps.

Click New OAuth App.

Set the Authorization callback URL to:

bash
Copy code
http://localhost:3000/auth/github/callback
Copy your Client ID and Client Secret.

Add them to your .env file:

ini
Copy code
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
Google OAuth Setup
Go to the Google Cloud Console.

Navigate to APIs & Services > Credentials.

Click Create Credentials → OAuth client ID.

Choose Web Application and set the redirect URI to:

bash
Copy code
http://localhost:3000/auth/google/callback
Copy your Client ID and Client Secret.

Add them to your .env file:

ini
Copy code
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

▶️ Run the App
npm start


Visit:
👉 http://localhost:3000

🧪 Testing Login Flows
Local Login

Signup with username/email/password

Login with those credentials

See Welcome screen with user info

GitHub Login

Click Login with GitHub

Authorize app

Redirects to GitHub Welcome Page with username + email

Google Login

Click Login with Google

Authorize app with Google

Redirects to Google Welcome Page with username + email

📸 Screenshots / Testing Evidence
🔑 GitHub Login Flow

Local login error → screenshots/local-login-error.png

GitHub login success → screenshots/github-success.png

GitHub login denied → screenshots/github-deny.png

Logout (before) → screenshots/logout-before.png

Logout (after) → screenshots/logout-after.png

Session persistence → screenshots/session-persistence.png

🌐 Google Login Flow

Google login success → screenshots/google-success.png

Google login denied → screenshots/google-deny.png

Google logout (before) → screenshots/google-logout-before.png

Google logout (after) → screenshots/google-logout-after.png

Google session persistence → screenshots/google-session-persistence.png

📦 Submission Details

Project Repo URL: https://github.com/YOUR-USERNAME/media-login-services

Included: Source code, .env.example, screenshots, README

Implements: Local + GitHub + Google OAuth login, session persistence, error handling