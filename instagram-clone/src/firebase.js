import firebase from "firebase";

/*

HOW TO SETUP FIREBASE DATABASE AFTER EVERY 30 DAYS

posts =>                        
        caption(string)            => comments => 
        imageUrl(string)                        text(string)
        timestamp(timestamp)                     username(string)
        username(string)


*/ 






const firebaseApp = firebase.initializeApp({
    

    
    apiKey: "AIzaSyCb-LcjA_WF1nwu2yjdpsCuwyL9d67LsYg",
    authDomain: "instagram-clone-react1-7e964.firebaseapp.com",
    projectId: "instagram-clone-react1-7e964",
    storageBucket: "instagram-clone-react1-7e964.appspot.com",
    messagingSenderId: "184641276251",
    appId: "1:184641276251:web:3e32b3ed6eb1793017727e",
    measurementId: "G-NSD2GL5HZ4"
     
  
});

const db = firebaseApp.firestore(); // Access to database
const auth = firebase.auth(); // Access to authorization
const storage = firebase.storage(); // Access to storage

export { db, auth, storage };

