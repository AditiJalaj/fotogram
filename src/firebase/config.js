import  firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7BkKx5-DBI4XQql-1he3RTMwVoWve-7Q",
    authDomain: "firegram-48bc0.firebaseapp.com",
    projectId: "firegram-48bc0",
    storageBucket: "firegram-48bc0.appspot.com",
    messagingSenderId: "587142061272",
    appId: "1:587142061272:web:2e1b2bcf0c433e97f78bad"
  };
  // Initialize Firebase
 const fire= firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();

  const timestamp=firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore,projectStorage,timestamp,fire}