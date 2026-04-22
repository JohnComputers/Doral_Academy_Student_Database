# Doral Academy Student Database

A web app for managing student competition records, built for GitHub Pages + Firebase Firestore.

---

## 🚀 Quick Setup (5 minutes)

### Step 1 — Create a Firebase Project
1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project**, give it a name (e.g. `doral-students`), skip Analytics
3. Click **Continue** → your project is created

### Step 2 — Set Up Firestore Database
1. In your Firebase project, go to **Build → Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (you can add security rules later)
4. Select a region (us-east1 recommended) → **Enable**

### Step 3 — Enable Email/Password Authentication
1. Go to **Build → Authentication → Sign-in method**
2. Click **Email/Password → Enable → Save**
3. Go to **Users → Add user**
4. Enter your admin email + password — **save these, this is your login**

### Step 4 — Get Your Firebase Config
1. Go to **Project Settings** (gear icon) → **General**
2. Scroll to **Your apps** → click the **</>** (Web) icon
3. Register the app (any nickname) — you don't need Firebase Hosting
4. Copy the `firebaseConfig` object shown

### Step 5 — Fill in `firebase-config.js`
Open `firebase-config.js` and replace the placeholder values with your copied config:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Step 6 — Deploy to GitHub Pages
1. Create a new GitHub repository (public)
2. Upload all three files: `index.html`, `style.css`, `firebase-config.js`
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root) → Save**
4. Your site will be live at `https://yourusername.github.io/your-repo/`

---

## 📋 Features

| Feature | Description |
|---|---|
| **Dashboard** | Live stats: total students, attending count, competition count |
| **All Students** | Searchable, sortable, filterable table of all records |
| **Add Student** | Form to add individual students |
| **Import CSV** | Drag-and-drop CSV upload with preview before import |
| **Edit / Delete** | Click Edit on any row to update or remove a student |
| **Export CSV** | Download all student data as a CSV file |
| **Password Login** | Firebase Email/Password auth protects all write access |

---

## 📄 CSV Import Format

Your CSV file must include these headers (order doesn't matter):

```
firstName, lastName, famatId, attending, competitionName, studentId
```

- `attending` should be `yes` or `no`
- All other fields are plain text

---

## 🔒 Security (Optional but Recommended)

Once set up, go to **Firestore → Rules** and replace the default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /students/{doc} {
      allow read, write: if request.auth != null;
    }
  }
}
```

This ensures only authenticated users can read/write data.

---

## 💰 Cost

Firebase Spark (free) plan includes:
- **1 GB** Firestore storage
- **50,000 reads/day** and **20,000 writes/day**

For a school student database this is more than sufficient at no cost.
