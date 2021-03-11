import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyATV9hgGNUjf8ZJMDf-8j5GjCSjFDA_Ljo",
    authDomain: "trunglereact-1.firebaseapp.com",
    projectId: "trunglereact-1",
    storageBucket: "trunglereact-1.appspot.com",
    messagingSenderId: "392355524709",
    appId: "1:392355524709:web:8718abf0390a33b438568c",
    measurementId: "G-CS5LEBK0D2"
};
firebase.initializeApp(firebaseConfig);

export const noteData = firebase.database().ref('dataforNote')