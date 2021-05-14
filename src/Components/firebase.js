import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDq2MRCdyl290SW1wZUxzUul9i4xtQsSDQ",
    authDomain: "tinder-clone-53d15.firebaseapp.com",
    projectId: "tinder-clone-53d15",
    storageBucket: "tinder-clone-53d15.appspot.com",
    messagingSenderId: "393061530710",
    appId: "1:393061530710:web:b9595e76b6d485f4100ff7"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const database  = firebaseapp.firestore();

  export default database;