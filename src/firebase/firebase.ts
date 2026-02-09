import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCHARa7hf6trrMmDk5fT6Nc9m9jo8hkCVc",
  authDomain: "authenticate-28507.firebaseapp.com",
  projectId: "authenticate-28507",
  storageBucket: "authenticate-28507.firebasestorage.app",
  messagingSenderId: "447939440659",
  appId: "1:447939440659:web:27fb78b808c42dfae68fe6",
  measurementId: "G-NP91K3F74M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);