import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDpaJyWG7hImkAr5dGSNQzkwyP7-z5HGhY',
  authDomain: 'thedojo-a7efd.firebaseapp.com',
  projectId: 'thedojo-a7efd',
  storageBucket: 'thedojo-a7efd.appspot.com',
  messagingSenderId: '952363393134',
  appId: '1:952363393134:web:f128b1a930dbe128ee867f',
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize services
const db = firebase.firestore();
const auth = firebase.auth();

//firebase timestamp
const timestamp = firebase.firestore.Timestamp;

export { db, auth, timestamp };
