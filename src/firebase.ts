// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuDBYUyc8XxRRJo_tk6fuFaJ-hg8TV3Vg",
    authDomain: "project-intermediate.firebaseapp.com",
    projectId: "project-intermediate",
    storageBucket: "project-intermediate.appspot.com",
    messagingSenderId: "126465999992",
    appId: "1:126465999992:web:4b0df32ba167769920198d",
    measurementId: "G-RVKTWB2KCR"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const dbRef = firebase.database().ref('Service');
export const dateNow = firebase.database.ServerValue.TIMESTAMP;
export const database = firebase.database();
export const auth = getAuth();
export default firebase;
