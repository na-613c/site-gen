import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBOHf79y5XphsX61i_Q1dyO5RrZ5_srNp4",
    authDomain: "site-generator-18b95.firebaseapp.com",
    databaseURL: "https://site-generator-18b95-default-rtdb.firebaseio.com",
    projectId: "site-generator-18b95",
    storageBucket: "site-generator-18b95.appspot.com",
    messagingSenderId: "719314808138",
    appId: "1:719314808138:web:c3b402e9b8afd7911fa5b3",
    measurementId: "G-GSXEHQD9N3"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


const auth = firebase.auth()
const firestore = firebase.firestore()

export const myFirebase = {
    firebase,
    auth,
    firestore
}

