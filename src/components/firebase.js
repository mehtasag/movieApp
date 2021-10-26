// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYR76BF7TDqCPzDwMOrpoABjib3a-uMjw",
  authDomain: "movieapp2021-8ad8c.firebaseapp.com",
  projectId: "movieapp2021-8ad8c",
  storageBucket: "movieapp2021-8ad8c.appspot.com",
  messagingSenderId: "645432049451",
  appId: "1:645432049451:web:a74ca0c18717d512becf6e",
  measurementId: "G-L8Q5JZ7L8H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
