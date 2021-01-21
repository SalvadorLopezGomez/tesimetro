import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAdIR0VLRt43KAbWCI5QL_EmK2GPfoqayw",
    authDomain: "tesimetro.firebaseapp.com",
    projectId: "tesimetro",
    storageBucket: "tesimetro.appspot.com",
    messagingSenderId: "57466947171",
    appId: "1:57466947171:web:b153f1fae8f2a24c669a56",
    measurementId: "G-5RYPMR2VSJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();