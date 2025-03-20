// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from "firebase/auth"; // 2-step
import { getFirestore } from "firebase/firestore"; // 2 step 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4bf-9DhOysIIv1osXh1HuCEwE3rKXHP4",
  authDomain: "pratice-e9184.firebaseapp.com",
  projectId: "pratice-e9184",
  storageBucket: "pratice-e9184.firebasestorage.app",
  messagingSenderId: "977507884974",
  appId: "1:977507884974:web:86c9660ef910a67d9cb23f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) // for auth step-1
const db = getFirestore(app)  // 1 step 
const provider = new GoogleAuthProvider()
export {auth , db,provider}
