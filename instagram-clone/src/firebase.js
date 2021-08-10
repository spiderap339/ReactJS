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
    

    
    apiKey: "AIzaSyC",
    authDomain: "i,
    projectId: "inact1-7e964",
    storageBucket: "instagpot.com",
    messagingSenderId: "186251",
    appId: "1:1827e",
    measurementId: "G-N"
     
  
});

const db = firebaseApp.firestore(); // Access to database
const auth = firebase.auth(); // Access to authorization
const storage = firebase.storage(); // Access to storage

export { db, auth, storage };

