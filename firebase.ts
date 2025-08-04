// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase config object (same as before)
const firebaseConfig = {
  apiKey: "AIzaSyAqUnJ8D2T2XC1g1Wwj59dVxwRWutoBvRA",
  authDomain: "lumoios-app.firebaseapp.com",
  projectId: "lumoios-app",
  storageBucket: "lumoios-app.firebasestorage.app",
  messagingSenderId: "1078941941205",
  appId: "1:1078941941205:web:2343bfefd6c28f4f73915c",
  measurementId: "G-2S6EWJRV4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
