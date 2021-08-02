import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyAxvrD76ypETsfy64vEjDjYvIFJvX_se8w",
    authDomain: "confessions-ef73b.firebaseapp.com",
    projectId: "confessions-ef73b",
    storageBucket: "confessions-ef73b.appspot.com",
    messagingSenderId: "180663555283",
    appId: "1:180663555283:web:51a8ddab09d8372e803026",
    measurementId: "G-S5KVS39SWM"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timeStampsInSnapshots: true })

export default firebase