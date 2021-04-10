// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyDnoSlfoux6wxf9MJqVytY4V4zc67WiRNY",
    authDomain: "daira-971ec.firebaseapp.com",
    projectId: "daira-971ec",
    storageBucket: "daira-971ec.appspot.com",
    messagingSenderId: "722005902253",
    appId: "1:722005902253:web:33cdea71aa1d7e7666d724"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}