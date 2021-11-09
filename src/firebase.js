import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyDVDtSPZC5d1GJo-9tHhB1KwdCt8yLl9Wo',
    authDomain: 'catch-app-6762f.firebaseapp.com',
    projectId: 'catch-app-6762f',
    storageBucket: 'catch-app-6762f.appspot.com',
    messagingSenderId: '944897386352',
    appId: '1:944897386352:web:ead5aa1b596abf783cd1b5',
  })
  .auth();
