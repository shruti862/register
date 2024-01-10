// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6w8gMe_dQrEK7nIwlCEp83zz5bH267es",
  authDomain: "osmozee-d9615.firebaseapp.com",
  projectId: "osmozee-d9615",
  storageBucket: "osmozee-d9615.appspot.com",
  messagingSenderId: "995689381347",
  appId: "1:995689381347:web:a05a7e9ad8457ad44ef4d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
