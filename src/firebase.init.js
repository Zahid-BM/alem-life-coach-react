// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBh_hBEWrKL6_SuQGCVlFLcnxR2Jhc0Hvc",
    authDomain: "alem-life-coach.firebaseapp.com",
    projectId: "alem-life-coach",
    storageBucket: "alem-life-coach.appspot.com",
    messagingSenderId: "750091872159",
    appId: "1:750091872159:web:5db66a7d7529f72288bfaa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;