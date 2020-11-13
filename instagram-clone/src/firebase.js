import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyD_-7DStjt45-uWmcECAe_qQHS_B-O6oR4",
    authDomain: "instagram-clone-react-27219.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-27219.firebaseio.com",
    projectId: "instagram-clone-react-27219",
    storageBucket: "instagram-clone-react-27219.appspot.com",
    messagingSenderId: "928113209949",
    appId: "1:928113209949:web:286f6f03f880a94615d3b4",
    measurementId: "G-P83X6YDCK5"
  
});

const db = firebaseApp.firestore(); // Access to database
const auth = firebase.auth(); // Access to authorization
const storage = firebase.storage(); // Access to storage

export { db, auth, storage };