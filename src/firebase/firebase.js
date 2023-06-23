// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDClFtakzeHEwvxBOkRYRoy-HNL21cJVIA",
  authDomain: "clone-17b4c.firebaseapp.com",
  projectId: "clone-17b4c",
  storageBucket: "clone-17b4c.appspot.com",
  messagingSenderId: "302279440918",
  appId: "1:302279440918:web:72a1973011a5421f6bd337",
  measurementId: "G-Q9BPM7S5L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export {app, auth, provider};