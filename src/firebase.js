import app from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
//Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCnFfFzKdjdnzL6EKZCrgqE2uhHmIgfrKs",
    authDomain: "appu3y4.firebaseapp.com",
    projectId: "appu3y4",
    storageBucket: "appu3y4.appspot.com",
    messagingSenderId: "175773988997",
    appId: "1:175773988997:web:04324674684351a05a11ec",
    
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  //Creamos dos constante que exportamos como un objeto
  const db = app.firestore()
  const auth = app.auth()

  export {db, auth}