
import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "reviver-shop.firebaseapp.com",
  projectId: "reviver-shop",
  storageBucket: "reviver-shop.appspot.com",
  messagingSenderId: "487274289715",
  appId: "1:487274289715:web:f52f05af7c5e1a96f3e146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;