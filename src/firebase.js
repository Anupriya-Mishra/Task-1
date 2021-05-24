  import firebase from "firebase";
  var firebaseConfig = {
    apiKey: "AIzaSyDYeBfWya3VaAKlFRTWgGLqnsf70BKO0kk",
    authDomain: "task-53d3d.firebaseapp.com",
    databaseURL: "https://task-53d3d-default-rtdb.firebaseio.com",
    projectId: "task-53d3d",
    storageBucket: "task-53d3d.appspot.com",
    messagingSenderId: "22382921087",
    appId: "1:22382921087:web:346b50fe398e820504864a"
  };
  
  // Initialize Firebase
  var fireDb= firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
  export default fireDb.database().ref();
  export const db = fireDb.firestore();