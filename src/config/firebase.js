import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBroPx2TlUv8njnEdHzbGczaYcIAAiHPgU",
  authDomain: "fir-1-7b8d8.firebaseapp.com",
  projectId: "fir-1-7b8d8",
  storageBucket: "fir-1-7b8d8.appspot.com",
  messagingSenderId: "157662473315",
  appId: "1:157662473315:web:c7fa8f6061843a9e255c56",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
