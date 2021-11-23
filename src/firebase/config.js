// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { storage } from "firebase/storage";
import { firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbi-IcjO_p-EuiIfU6PffREmQNsuqsuAs",
    authDomain: "shopmenu-5d4bb.firebaseapp.com",
    projectId: "shopmenu-5d4bb",
    storageBucket: "shopmenu-5d4bb.appspot.com",
    messagingSenderId: "81048584506",
    appId: "1:81048584506:web:3088bbc2c3639bf1141003",
    measurementId: "G-KZQRXS8XNV"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAnalytics = getAnalytics(firebaseApp);
  const firebaseStorage = storage();
  const firebaseFirestore = firestore();

  export { firebaseApp, firebaseAnalytics, firebaseStorage, firebaseFirestore };