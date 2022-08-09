import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA4nuFIaAGbhlzsvqr4FDCk71JbZmIRQfQ",
  authDomain: "next-auth-crud-ffdb9.firebaseapp.com",
  projectId: "next-auth-crud-ffdb9",
  storageBucket: "next-auth-crud-ffdb9.appspot.com",
  messagingSenderId: "713250612660",
  appId: "1:713250612660:web:909eca1bd6d4110fc13ee1"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)