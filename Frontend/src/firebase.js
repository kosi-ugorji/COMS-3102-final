// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoTXDeO4e5r9Sd8o3-XDBfmtaPJypavWw",
  authDomain: "notekeeper-3bd6e.firebaseapp.com",
  projectId: "notekeeper-3bd6e",
  storageBucket: "notekeeper-3bd6e.appspot.com",
  messagingSenderId: "574607849057",
  appId: "1:574607849057:web:840d6faab90cbad33b9c20",
  measurementId: "G-ZGZ7VGD96H"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
