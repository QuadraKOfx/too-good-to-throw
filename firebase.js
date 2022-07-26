// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDywRpwCwDkNtxz-xYh9Xgta4Bv5RMwzs",
    authDomain: "too-good-to-throw.firebaseapp.com",
    projectId: "too-good-to-throw",
    storageBucket: "too-good-to-throw.appspot.com",
    messagingSenderId: "176778386710",
    appId: "1:176778386710:web:6f449c79929af2d8f7c437",
    measurementId: "G-92CJHGSEYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
