import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-5ydNPlVk_8LAhfVrWuxVftDTTjta5hM",
    authDomain: "clone-f3e4a.firebaseapp.com",
    projectId: "clone-f3e4a",
    storageBucket: "clone-f3e4a.appspot.com",
    messagingSenderId: "1076554343398",
    appId: "1:1076554343398:web:81e6ec4503768a6df8ac27"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };