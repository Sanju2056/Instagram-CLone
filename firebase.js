// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQSMANNo4e5YI1_ANRKKd71Nnj_uF9zz0",
  authDomain: "instagram-cl-4d876.firebaseapp.com",
  projectId: "instagram-cl-4d876",
  storageBucket: "instagram-cl-4d876.appspot.com",
  messagingSenderId: "200434154118",
  appId: "1:200434154118:web:df4cf0acfecea569ffaf07",
  measurementId: "G-WXJE51VXCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);