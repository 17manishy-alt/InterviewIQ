import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-a3607.firebaseapp.com",
  projectId: "interviewiq-a3607",
  storageBucket: "interviewiq-a3607.firebasestorage.app",
  messagingSenderId: "924110918443",
  appId: "1:924110918443:web:2075329c277bf73c46eb6e"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };