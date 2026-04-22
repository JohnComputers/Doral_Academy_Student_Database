// ============================================================
//  DORAL ACADEMY STUDENT DATABASE — FIREBASE CONFIGURATION
// ============================================================
//  1. Go to https://console.firebase.google.com
//  2. Create a project (or open an existing one)
//  3. Go to Project Settings > General > Your Apps > Web App
//  4. Register your app and copy the config values below
//  5. In Firebase Console: Build > Firestore Database > Create database (start in test mode)
//  6. In Firebase Console: Authentication > Sign-in method > Email/Password > Enable
//  7. Create one admin user via Authentication > Users > Add user
// ============================================================

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Export for use in the app
window.FIREBASE_CONFIG = firebaseConfig;
