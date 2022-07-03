/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAloXbcsQqtd6VP-LNhdieabiluEfmpZ38",
  authDomain: "cometnew-14845.firebaseapp.com",
  databaseURL: "https://cometnew-14845-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cometnew-14845",
  storageBucket: "cometnew-14845.appspot.com",
  messagingSenderId: "1056824772471",
  appId: "1:1056824772471:web:7e66b4808e5cf52d7b8372"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();