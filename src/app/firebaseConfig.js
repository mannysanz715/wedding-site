// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhhINtsiTB4LFkAaZab0eBkEPgIlJHtVA",
  authDomain: "manny-mariam2025.firebaseapp.com",
  projectId: "manny-mariam2025",
  storageBucket: "manny-mariam2025.appspot.com",
  messagingSenderId: "964431616474",
  appId: "1:964431616474:web:644282c4187c6bed26c8e3",
  measurementId: "G-94YSY6NLPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

