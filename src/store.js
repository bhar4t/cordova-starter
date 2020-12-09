// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkufuI9SiN3waYPVVUTCMIE9PXbLHnOk4",
    authDomain: "cordova-smilebots.firebaseapp.com",
    projectId: "cordova-smilebots",
    storageBucket: "cordova-smilebots.appspot.com",
    messagingSenderId: "1051850824830",
    appId: "1:1051850824830:web:95a031a9c9d7506103cc2f",
    measurementId: "G-MZ0X5Z65BF"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { app, db };