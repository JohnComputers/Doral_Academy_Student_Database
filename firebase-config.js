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
  apiKey: "AIzaSyAY6Vu0AEduvpUFrRNq8TuJkr_kiAVhSRc",
  authDomain: "doralacademystudentdatabase.firebaseapp.com",
  projectId: "doralacademystudentdatabase",
  storageBucket: "doralacademystudentdatabase.firebasestorage.app",
  messagingSenderId: "122567063966",
  appId: "1:122567063966:web:f76fa1329c3987090bbe8f"
};

// Export for use in the app
window.FIREBASE_CONFIG = firebaseConfig;
