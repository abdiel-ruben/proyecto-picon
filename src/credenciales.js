// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjtZMH9fRI-Ia01tILxBefywusj4UxozE",
  authDomain: "login-registro-f71f7.firebaseapp.com",
  projectId: "login-registro-f71f7",
  storageBucket: "login-registro-f71f7.appspot.com",
  messagingSenderId: "669465425159",
  appId: "1:669465425159:web:0cf1e12fdc0a85c5f701a2"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;