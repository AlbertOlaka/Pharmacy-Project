// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh5ajSO8EU2DFjhCFutVlUnz2FBK1RyKM",
  authDomain: "pharmacy-ecommerce-1239d.firebaseapp.com",
  projectId: "pharmacy-ecommerce-1239d",
  storageBucket: "pharmacy-ecommerce-1239d.appspot.com", // 🛠 Fixed typo here
  messagingSenderId: "1005133872263",
  appId: "1:1005133872263:web:a229f3d621997c921e4c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
