import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//  Your Firebase config — keep this secure in production
const firebaseConfig = {
  apiKey: "AIzaSyA7y1b0zo88Exehj8evnMxXVtdutIqIaIs",
  authDomain: "meics-c4408.firebaseapp.com",
  projectId: "meics-c4408",
  storageBucket: "meics-c4408.appspot.com", // corrected `.app` → `.appspot.com`
  messagingSenderId: "781216899853",
  appId: "1:781216899853:web:ee311ba6e0104606a1c644",
  measurementId: "G-WCNS7CQSM1"
};

//  Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Setup services you need
export const auth = getAuth(app);
export const db = getFirestore(app); 
export const googleProvider = new GoogleAuthProvider();

