// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAnulSqXJ3SJNvHkc5shy4OJF-4n7KW-6k",

  authDomain: "e-commerce-app-6cabe.firebaseapp.com",

  projectId: "e-commerce-app-6cabe",

  storageBucket: "e-commerce-app-6cabe.appspot.com",

  messagingSenderId: "767472367066",

  appId: "1:767472367066:web:9a9946024db21073a47ce3",

  measurementId: "G-1PYM89G56D"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);