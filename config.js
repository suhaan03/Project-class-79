import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAHLr1uvY7OG8rZvWCPjE94WI9wtQBsBJg",
    authDomain: "bartersystem-38ffa.firebaseapp.com",
    projectId: "bartersystem-38ffa",
    storageBucket: "bartersystem-38ffa.appspot.com",
    messagingSenderId: "1028993010424",
    appId: "1:1028993010424:web:203b19800ee24191c4090d"
  };
  
 

  if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
  export default firebase.firestore()