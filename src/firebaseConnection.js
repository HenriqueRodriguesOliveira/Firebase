import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyAX3DlWENEyM6LrOZc8t-pu2A0eHG0gscQ",
  authDomain: "estudos-c4964.firebaseapp.com",
  projectId: "estudos-c4964",
  storageBucket: "estudos-c4964.appspot.com",
  messagingSenderId: "1012349799352",
  appId: "1:1012349799352:web:dc50d1d0b0482da2299d4d",
  measurementId: "G-4JBZX0554W"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;