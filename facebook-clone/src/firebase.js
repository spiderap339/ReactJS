import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBSa9WbGhl3rrdhAMYA8jWeAX_HcoIdqKs",
    authDomain: "facebook-clone-2eb30.firebaseapp.com",
    databaseURL: "https://facebook-clone-2eb30.firebaseio.com",
    projectId: "facebook-clone-2eb30",
    storageBucket: "facebook-clone-2eb30.appspot.com",
    messagingSenderId: "65588969757",
    appId: "1:65588969757:web:6d7a854b9dc47b7d8821f4",
    measurementId: "G-B6R28ZS47N"
  };

// Connecting this local Application with firebase online project 
const firebaseApp = firebase.initializeApp(firebaseConfig);

//getting firebase authentication service
const auth = firebase.auth();

// Enable google authentication online on firebase


// This tells firebase that we want google authentication service in our app
const provider = new firebase.auth.GoogleAuthProvider();


const db = firebaseApp.firestore(); // connecting to firestore db 

// Exporting them so that we can use them outside this file
export { auth, provider };
export default db;