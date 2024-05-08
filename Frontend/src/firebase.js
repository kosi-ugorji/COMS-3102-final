import { initializeApp } from "firebase/app";
require('dotenv').config()


const firebaseConfig = {
  apiKey: "AIzaSyDoTXDeO4e5r9Sd8o3-XDBfmtaPJypavWw",
  authDomain: "notekeeper-3bd6e.firebaseapp.com",
  projectId: "notekeeper-3bd6e",
  storageBucket: "notekeeper-3bd6e.appspot.com",
  messagingSenderId: "574607849057",
  appId: "1:574607849057:web:840d6faab90cbad33b9c20",
  measurementId: "G-ZGZ7VGD96H"
};


export const app = initializeApp(firebaseConfig);
