import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkNUNO0Tv7qP2wtgfZocAU-8myqdA9G68",
  authDomain: "firecommerce-e1160.firebaseapp.com",
  projectId: "firecommerce-e1160",
  storageBucket: "firecommerce-e1160.appspot.com",
  messagingSenderId: "985801678223",
  appId: "1:985801678223:web:760110da24c0878c3ffffa",
  measurementId: "G-651GMQ4YMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// my db
const fireDB = getFirestore(app);

export default fireDB;
