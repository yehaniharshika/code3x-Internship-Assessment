import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeFt8dQwB3Ow2DrsfiClzZvAxEMI96VCI",
  authDomain: "code3x-login-yehani.firebaseapp.com",
  projectId: "code3x-login-yehani",
  storageBucket: "code3x-login-yehani.firebasestorage.app",
  messagingSenderId: "128371180022",
  appId: "1:128371180022:web:50d113b30a1c3b261347d7",
  measurementId: "G-M67SPMJZHC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
