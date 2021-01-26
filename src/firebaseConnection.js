import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyB9w42aIB9iTCBY9Ze0N18L3rZR1IqdIRQ",
    authDomain: "fir-tech-new.firebaseapp.com",
    databaseURL: "https://fir-tech-new-default-rtdb.firebaseio.com",
    projectId: "fir-tech-new",
    storageBucket: "fir-tech-new.appspot.com",
    messagingSenderId: "666871411123",
    appId: "1:666871411123:web:8c13f37aed7d0772fe5bc6",
    measurementId: "G-YFQ08VF09J"
};
firebase.initializeApp(firebaseConfig);

export const noteData = firebase.database().ref('dataforNote')