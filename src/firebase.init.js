// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtkRJFd12VHewQ6diVDN248ctoa5iUHzM",
  authDomain: "reap-project.firebaseapp.com",
  projectId: "reap-project",
  storageBucket: "reap-project.appspot.com",
  messagingSenderId: "182548403151",
  appId: "1:182548403151:web:6655142ff8d79c0cbbf8ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;